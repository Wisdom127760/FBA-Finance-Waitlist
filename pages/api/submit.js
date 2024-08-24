import { google } from "googleapis";
import key from "/key";

export default async function handler(req, res) {
  const { body } = req;
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: key.client_email,
        private_key: key.private_key,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Attempt to write to the Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: "1wls0dStdQK-73XHLtu2uW1urgd4UKKQULh-ZjoS72JE",
      range: "Sheet1!A1:G1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.businessName,
            body.country,
            body.interest,
            body.incop,
            body.launch,
            body.referal,
            body.comments,
          ],
        ],
      },
    });

    // Return a successful response
    res.status(200).json({ message: "Data submitted successfully!" });
  } catch (error) {
    console.error("Error while interacting with Google Sheets API:", error);

    // Ensure you return an appropriate status code and error message
    res.status(500).json({ error: "Failed to submit data to Google Sheets" });
  }
}
