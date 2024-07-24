const aws = require('aws-sdk');
const emailjs = require('@emailjs/browser');

//sgMail.setApiKey(process.env.SENDGRID_KEY);

exports.handler = (event, context, callback) => {
  emailjs.init('');

  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const candidateName = streamedItem.dynamodb.NewImage.firstName.S
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S

      const templateParams = { name: candidateName, email: candidateEmail, to: candidateEmail, notes: 'Thank You!'};
      emailjs.send('service_oklq2dk', 'template_aobn5vr', templateParams, 'E3cXIrDd4XOdlo26a')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED: ', err);
      })
    }
  }
  
  }
}
