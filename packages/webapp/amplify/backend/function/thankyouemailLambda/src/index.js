const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const candidateName = streamedItem.dynamodb.NewImage.firstName.S
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [candidateEmail],
              BccAddresses: [process.env.SES_EMAIL]
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: 'Thank you, your submission has been processed!' },
              Body: {
                Text: { Data: `Hi ${candidateName}, Chasing Good is reviewing your submission and will be in contact with you for any additional information or results.` },
              },
            },
          })
          .promise()
    }
  }
  return { status: 'done' }
}
