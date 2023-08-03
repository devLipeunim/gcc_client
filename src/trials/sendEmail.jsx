// import * as SibApiV3Sdk from "@sendinblue/client";

// export default async function handler(req, res) {
//   try {
//     if (req.method !== "POST") {
//       return res.status(405).end(); // Method Not Allowed
//     }

//     const { name, email } = req.body;

//     // Check if req.body has the required fields
//     if (!name || !email) {
//       return res
//         .status(400)
//         .json({ message: "Name and email are required fields" });
//     }

//     // Initialize the SendinBlue API client
//     const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
//     apiInstance.setApiKey(
//       SibApiV3Sdk.AccountApiApiKeys.apiKey,
//       "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"
//     );

//     // Send the transactional email
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
//             {
//               email: email,
//               name: name,
//             },
//           ],
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

//     console.log("Email sent successfully:", response);

//     return res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);

//     // Make sure res is defined before sending the response
//     if (res) {
//       return res.status(500).json({ message: "Error sending email" });
//     } else {
//       // If res is not defined, return a generic response
//       return ("Error sending email")
//     }
//   }
// }
