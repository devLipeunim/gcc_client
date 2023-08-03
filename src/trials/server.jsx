// // pages/sendEmail.js
// import React, { useEffect } from 'react';
// import { TransactionalEmailsApi, ApiClient } from 'sib-api-v3-sdk';

// const SendEmail = () => {
//   useEffect(() => {
//     sendTransactionalEmail();
//   }, []);

//   const sendTransactionalEmail = async (email, name) => {
//     try {
//       // Set the Sendinblue API key
//       ApiClient.instance.authentications['api-key'].apiKey =
//         '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';

//       // Prepare the email data
//       const emailData = {
//         sender: { email: 'gourmetchefcuisine@gmail.com', name: 'Sendinblue' },
//         subject: 'This is my default subject line',
//         htmlContent: '<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>',
//         params: {
//           greeting: 'This is the default greeting',
//           headline: 'This is the default headline',
//         },
//         messageVersions: [
//           {
//             to: [
//               {
//                 email: 'lipeunimcodes@gmail.com',
//                 name: 'Lipeunim',
//               },
//               {
//                 email: 'mosesaniah86@gmail.com',
//                 name: 'Moses',
//               },
//             ],
//             htmlContent:
//               '<!DOCTYPE html><html><body><h1>Modified header!</h1><p>This is still a paragraph</p></body></html>',
//             subject: 'I am happy to be working with you',
//           },
//           {
//             to: [
//               {
//                 email: `${email}`,
//                 name: `${name}`,
//               },
//               {
//                 email: 'mark@example.com',
//                 name: 'Mark Payton',
//               },
//               {
//                 email: 'andrea@example.com',
//                 name: 'Andrea Wallace',
//               },
//             ],
//           },
//         ],
//       };

//       // Send the transactional email
//       const response = await new TransactionalEmailsApi().sendTransacEmail(emailData);
//       console.log('Emails sent successfully:', response);
//     } catch (error) {
//       console.error('Error sending emails:', error);
//     }
//   };

//   return <div>Email Sent</div>;
// };

// export default SendEmail;
