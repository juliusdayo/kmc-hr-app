import { GoogleGenerativeAI } from "@google/generative-ai"


export const gemini = async (prompt, metadata) => {
    const genAI = new GoogleGenerativeAI(API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })


    const result = await model.generateContent([
        prompt, metadata
    ])

    return result
}

