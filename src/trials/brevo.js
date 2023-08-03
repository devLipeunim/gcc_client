// // util/sendEmail.js
// // "use server"
// import * as SibApiV3Sdk from "@sendinblue/client";

// const sendEmail = async () => {
//   try {
//     const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
//     apiInstance.setApiKey(
//       SibApiV3Sdk.AccountApiApiKeys.apiKey,
//       "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"
//     );

//     const response = await apiInstance.sendTransacEmail({
//       sender: { email: "gourmetchefcuisine@gmail.com", name: "Aniah" },
//       subject: "This is my default subject line",
//       htmlContent:
//         "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>",
//       params: {
//         greeting: "This is the default greeting",
//         headline: "This is the default headline",
//       },
//       messageVersions: [
//         //Definition for Message Version 1
//         {
//           to: [
//             {
//               email: "lipeunimcodes@gmail.com",
//               name: "Lipeunim",
//             },
//             {
//               email: "mosesaniah86@gmail.com",
//               name: "Moses",
//             },
//           ],
//           // htmlContent:
//           //   "<!DOCTYPE html><html><body><h1>Modified header!</h1><p>This is still a paragraph Hi</p></body></html>",
//           subject: "I am happy to be working with you",
//         },

//         // Definition for Message Version 2
//         {
//           to: [
//             {
//               email: "jim@example.com",
//               name: "Jim Stevens",
//             },
//             {
//               email: "mark@example.com",
//               name: "Mark Payton",
//             },
//             {
//               email: "andrea@example.com",
//               name: "Andrea Wallace",
//             },
//           ],
//         },
//       ],
//     });

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export default sendEmail;
