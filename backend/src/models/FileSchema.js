const aws = require('aws-sdk');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const { promisify } = require('util');

const s3 = new aws.S3();

const FileSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  key: {
    type: String,
    unique: true,
  },
  url: {
    type: String,
  },
  size: {
    type: Number,
  },
  product_id: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

FileSchema.pre('save', function() {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
});

FileSchema.pre('remove', function() {
  if (process.env.STORAGE_TYPE === 's3') {
    return s3
      .deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: this.key,
      })
      .promise();
  }
  return promisify(fs.unlink)(
    path.resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key)
  );
});

module.exports = mongoose.model('File', FileSchema);
