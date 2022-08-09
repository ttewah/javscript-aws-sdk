const fs = require('fs');
const AWS = require('aws-sdk');

const S3 = new AWS.S3({region: 'us-east-1'})

const upload = async () => {
    const fileContent = fs.readFileSync('Exercise1.txt');
    await S3.upload({ Bucket: 'siu-avb-bucket', Key: 'upload-file-stu5.txt', Body: fileContent }).promise()
}

upload();


const s3 = new AWS.S3();
s3.getObject(
  { Bucket: "siu-avb-bucket", Key: "download-file.txt" },
  function (error, data) {
    if (error != null) {
      alert("Failed to retrieve an object: " + error);
    } else {
      alert("Loaded " + data.ContentLength + " bytes");
    }
  }
);