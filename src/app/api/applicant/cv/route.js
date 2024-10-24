import { doc, setDoc } from 'firebase/firestore/lite';
import { initializeDb } from '../../util/db';
import { v4 as uuidv4 } from 'uuid';
import { GoogleGenerativeAI } from '@google/generative-ai';



export async function POST(req, res) {
    const dbname = "applicant"
    const db = initializeDb()

    const formData = await req.formData()
    const file = formData.get("file")
    const buffer = Buffer.from(await file.arrayBuffer())

    const prompt = 'Convert the information in this CV to this json format and only return the json object and nothing else: {"name": "", "home_address": "", "phone_no": "", "email_address": "", "skills": [], "total_years_of_experience": "", "work_experience": [{"company_name":"", "start_year": "", "end_year": "", "position": ""}]}'
    const metadata = {
        inlineData: {
            data: buffer.toString('base64'),
            mimeType: "application/pdf",
        },
    }
    const result = gemini(prompt, metadata)

    const jsonResult = await JSON.parse(result.response.text())

    await setDoc(doc(db, dbname, uuidv4()), jsonResult);

    return Response.json({ data: 'ok' })
}