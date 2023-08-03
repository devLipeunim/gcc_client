//server.mjs

// import * as SibApiV3Sdk from "@sendinblue/client";

// const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// apiInstance.setApiKey(
//   SibApiV3Sdk.AccountApiApiKeys.apiKey,
//   "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"
// );

// apiInstance
//   .sendTransacEmail({
//     sender: { email: "gourmetchefcuisine@gmail.com", name: "Aniah" },
//     subject: "This is my default subject line",
//     htmlContent:
//       "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>",
//     params: {
//       greeting: "This is the default greeting",
//       headline: "This is the default headline",
//     },
//     messageVersions: [
//       //Definition for Message Version 1
//       {
//         to: [
//           {
//             email: "lipeunimcodes@gmail.com",
//             name: "Lipeunim",
//           },
//           {
//             email: "mosesaniah86@gmail.com",
//             name: "Moses",
//           },
//         ],
//         // htmlContent:
//         //   "<!DOCTYPE html><html><body><h1>Modified header!</h1><p>This is still a paragraph Hi</p></body></html>",
//         subject: "I am happy to be working with you",
//       },

//       // Definition for Message Version 2
//       {
//         to: [
//           {
//             email: "jim@example.com",
//             name: "Jim Stevens",
//           },
//           {
//             email: "mark@example.com",
//             name: "Mark Payton",
//           },
//           {
//             email: "andrea@example.com",
//             name: "Andrea Wallace",
//           },
//         ],
//       },
//     ],
//   })
//   .then(
//     function (data) {
//       console.log(data);
//     },
//     function (error) {
//       console.error(error);
//     }
//   );

// import SibApiV3Sdk from 'sib-api-v3-sdk';
// const { ApiClient, TransactionalEmailsApi } = SibApiV3Sdk;

// ApiClient.instance.authentications['api-key'].apiKey = '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';

// export const sendEmail = async (recipientEmail, recipientName) => {
//   try {
//     const result = await new TransactionalEmailsApi().sendTransacEmail({
//       "sender": { "email": "gourmetchefcuisine@gmail.com", "name": "Aniah" },
//       "subject": "This is my default subject line",
//       "htmlContent": "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>",
//       "params": {
//         "greeting": "This is the default greeting",
//         "headline": "This is the default headline"
//       },
//       "messageVersions": [
//         //Definition for Message Version 1
//         {
//           "to": [
//             {
//               "email": "lipeunimcodes@gmail.com",
//               "name": "Lipeunim"
//             },
//             {
//               "email": "mosesaniah86@gmail.com",
//               "name": "Ipe"
//             },
//             {
//               "email": recipientEmail,
//               "name": recipientName
//             }
//           ],
//           "htmlContent": "<!DOCTYPE html><html><body><h1>Modified header!</h1><p>This is still a paragraph</p></body></html>",
//           "subject": "We are happy to be working with you"
//         },

//         // Definition for Message Version 2
//         {
//           "to": [
//             {
//               "email": "jim@example.com",
//               "name": "Jim Stevens"
//             },
//             {
//               "email": "mark@example.com",
//               "name": "Mark Payton"
//             },
//             {
//               "email": "andrea@example.com",
//               "name": "Andrea Wallace"
//             }
//           ]
//         }
//       ]
//     });

//     console.log('Email sent successfully:', result);
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

// Call the function to send the email
// sendEmail();

// import pkg from 'sib-api-v3-sdk';
// const { ApiClient, TransactionalEmailsApi } = pkg;

// // const apiKey = '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';
// ApiClient.instance.authentications['api-key'].apiKey = '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';

// export const sendTransactionalEmails = (recipientEmail, recipientName) => {
//   const emailData = {
//     sender: { email: 'gourmetchefcuisine@gmail.com', name: 'Ipe' },
//     subject: 'This is my default subject line',
//     htmlContent: '<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>',
//     params: {
//       greeting: 'This is the default greeting',
//       headline: 'This is the default headline'
//     },
//     messageVersions: [
//       {
//         to: [{ email: recipientEmail, name: recipientName }],
//         htmlContent: '<!DOCTYPE html><html><body><h1>Modified header!</h1><p>This is still a paragraph</p></body></html>',
//         subject: 'We are happy to be working with you'
//       },
//       {
//         to: [{ email: 'lipeunimcodes@gmail.com', name: 'Moses' }],
//         htmlContent: '<!DOCTYPE html><html><body><h1>Modified header!</h1><p>This is still a paragraph</p></body></html>',
//         subject: 'We are happy to be working with you'
//       }
//     ]
//   };

//   return new TransactionalEmailsApi().sendTransacEmail(emailData);
// };

// // // import * as SibApiV3Sdk from "@sendinblue/client";

// // // const sendTransactionalEmails = (email, name) => {
// // //   const apiKey =
// // //     "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";
// // //   const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// // //   // Configure API key authorization
// // //   SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey = apiKey;

// // //   const emailData = {
// // //     sender: { email: "gourmetchefcuisine@gmail.com", name: "aniah" },
// // //     subject: "This is my default subject line",
// // //     htmlContent:
// // //       "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>",
// // //     params: {
// // //       greeting: "This is the default greeting",
// // //       headline: "This is the default headline",
// // //     },
// // //     messageVersions: [
// // //       {
// // //         to: [{ email: email, name: name }],
// // //         htmlContent:
// // //           "<!DOCTYPE html><html><body><h1>Modified header!</h1><p>This is still a paragraph</p></body></html>",
// // //         subject: "We are happy to be working with you",
// // //       },
// // //       {
// // //         to: [{ email: "mosesaniah86@gmail.com", name: "Lipeunim" }],
// // //         htmlContent:
// // //           "<!DOCTYPE html><html><body><h1>Modified header!</h1><p>This is still a paragraph</p></body></html>",
// // //         subject: "We are happy to be working with you",
// // //       },
// // //     ],
// // //   };

// // //   // Send the transactional emails
// // //   return apiInstance.sendTransacEmail(emailData);
// // // };

// // // sendTransactionalEmails("mosesaniah86@gmail.com", "Moses")
// // //   .then((response) => {
// // //     console.log("Emails sent successfully:", response);
// // //     // Handle success message or other actions here
// // //   })
// // //   .catch((error) => {
// // //     console.error("Error sending emails:", error);
// // //     // Handle error or display error message here
// // //   });

// // // export default sendTransactionalEmails;

// // //batchSend.js
// // import pkg from 'sib-api-v3-sdk';
// // const { ApiClient, TransactionalEmailsApi } = pkg;
// // ApiClient.instance.authentications['api-key'].apiKey = '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';

// // new TransactionalEmailsApi().sendTransacEmail({

// //      "sender":{ "email":"gourmetchefcuisine@gmail.com", "name":"Aniah"},
// //      "subject":"This is my default subject line",
// //      "htmlContent":"<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>",
// //      "params":{
// //         "greeting":"This is the default greeting",
// //         "headline":"This is the default headline"
// //      },
// //    "messageVersions":[
// //      //Definition for Message Version 1
// //      {
// //          "to":[
// //             {
// //                "email":"lipeunimcodes@gmail.com",
// //                "name":"Lipeunim"
// //             },
// //             {
// //                "email":"mosesaniah86@gmail.com",
// //                "name":"Ipe"
// //             }
// //          ],
// //          "htmlContent":"<!DOCTYPE html><html><body><h1>Modified header!</h1><p>This is still a paragraph</p></body></html>",
// //          "subject":"We are happy to be working with you"
// //       },

// //      // Definition for Message Version 2
// //       {
// //          "to":[
// //             {
// //                "email":"jim@example.com",
// //                "name":"Jim Stevens"
// //             },
// //             {
// //                "email":"mark@example.com",
// //                "name":"Mark Payton"
// //             },
// //             {
// //                "email":"andrea@example.com",
// //                "name":"Andrea Wallace"
// //             }
// //          ]
// //       }
// //    ]

// // }).then(function(data) {
// //   console.log(data);
// // }, function(error) {
// //   console.error(error);
// // });

// // // import * as SibApiV3Sdk from '@sendinblue/client'

// // // const apiInstance = new SibApiV3Sdk.AccountApi()

// // // // Configure API key authorization: apiKey

// // // apiInstance.setApiKey(SibApiV3Sdk.AccountApiApiKeys.apiKey, 'YOUR API KEY')

// // // apiInstance.getAccount().then(
// // //   function (data) {
// // //     console.log('API called successfully. Returned data: ', data.body)
// // //   },
// // //   function (error) {
// // //     console.error(error)
// // //   }
// // // )
