import { google } from "googleapis";

export async function fetchBlogPosts() {
    try {
        const response = await fetchSheetResponse('blog')

        const rows = response.data.values

        if (rows.length) {
            return rows.map((row) => ({
                title: row[0],
                description: row[1],
                body: row[2],
                date: row[3],
                category: row[4]
            }))
        }
        return []
    } catch (err) {
        return [{ title: 'Failed response', description: `API failed to obtain blog posts, error: ${err}` }]
    }
}


async function fetchSheetResponse(sheetname: string) {
    try {
        const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            null,
            process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
            scopes
        )

        const sheets = google.sheets({ version: "v4", auth: jwt })

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: sheetname
        })

        return response
    } catch (err) {
        console.log(err)
        throw err
    }
}