import { GoogleGenerativeAI } from "@google/generative-ai"


export const gemini = async () => {
    const genAI = new GoogleGenerativeAI(API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })


    const result = await model.generateContent([
        'Convert the information in this CV to this json format and only return the json object and nothing else: {"name": "", "home_address": "", "phone_no": "", "email_address": "", "skills": [], "total_years_of_experience": "", "work_experience": [{"company_name":"", "start_year": "", "end_year": "", "position": ""}]}',
        {
            inlineData: {
                data: buffer.toString('base64'),
                mimeType: "application/json",
            },
        },
    ])
}