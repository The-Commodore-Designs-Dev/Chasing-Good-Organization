/* Amplify Params - DO NOT EDIT
	API_AMPLIFYCGAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYCGAPP_GRAPHQLAPIIDOUTPUT
	API_AMPLIFYCGAPP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_AMPLIFYCGAPP_GRAPHQLAPIIDOUTPUT
	API_AMPLIFYCGAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYCGAPP_GRAPHQLAPIKEYOUTPUT
	SENDGRID_API_KEY
Amplify Params - DO NOT EDIT */
const fs = require('fs');
const sgMail = require('@sendgrid/mail');
const template = require('es6-template-strings');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const email = fs.readFileSync('email-template/dist/thankyou.html', 'utf-8');

exports.handler = async event => {
  const webhookData = JSON.parse(event.body);

  const msg = {
    to: webhookData.submission.email,
    from: 'chasinggoodnj@gmail.com',
    subject: 'Thank you, your submission has been processed!',
    html: template(email, webhookData.submission)
  };

  await sgMail.send(msg);

  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  
  return {
    statusCode: 200,
    body: 'OK'
  }
};
