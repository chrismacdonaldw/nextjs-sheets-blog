import { google } from "googleapis";

export async function fetchBlogPosts() {
    try {
        const response = await fetchSheet('blog')

        return { rows: rowToBlogPost(response.data.values), listed: true }
    } catch (err) {
        return [{ title: 'Failed response', description: `API failed to obtain blog posts, error: ${err}` }]
    }
}

export async function fetchBlogPost(row: string) {
    try {
        const response = await fetchRow(row, 'blog')

        return { rows: rowToBlogPost(response.data.values), listed: false }
    } catch (err) {
        return [{}]
    }
}

async function fetchSheet(sheetname: string) {
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

async function fetchRow(row: string, sheetname: string) {
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
            range: `${sheetname}!A${row}:Z${row}`
        })

        return response
    } catch (err) {
        console.log(err)
        throw err
    }
}

function rowToBlogPost(rows: any): any {
    if (rows.length) {
        return rows.map((row: any, count: number) => ({
            title: row[0],
            description: row[1],
            body: row[2],
            date: row[3],
            category: row[4],
            id: count + 1,
        }))
    }
    return [{}]
}