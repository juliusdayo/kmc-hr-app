import { gemini } from "../../util/gemini"


export async function POST(req) {

    const data = await req.json()

    const prompt = `Categorize or give job titles/qualfications base on the following description 
${data.message},
    Make the result be in array of objects in this format
    {
        jobTitle: "job_title",
    },
     Only return the JSON array without any additional formatting or backticks
    `


    const result = await gemini(prompt)

    return Response.json({ data: result.response.text() })
}