import { GoogleGenerativeAI } from "@google/generative-ai"
const key = 'AIzaSyDwijivWjll9Yrh6ZyydiRrASJ6OW7oBr8'

export const gemini = async (prompt, metadata) => {
    const genAI = new GoogleGenerativeAI(key)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
    let result
    if (!metadata) {
        result = await model.generateContent([
            prompt
        ])
    } else {
        result = await model.generateContent([
            prompt, metadata])
    }

    return result
}

