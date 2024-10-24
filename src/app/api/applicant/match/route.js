
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore/lite';
import { initializeDb } from '../../util/db';
import { gemini } from '../../util/gemini';


export async function POST(req) {
    try {

        const data = await req.json()
        const db = initializeDb()
        const applicantCollection = collection(db, 'applicant')
        const applicantSnapshot = await getDocs(applicantCollection)
        const applicantList = applicantSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));


        const prompt = `Rank the skills of the applicants base on the job title ${data.jobTitle} with this description ${data.description},
        They should be rank on how close they are to the job description,
        only return an array of object in this format
        [
            {
                "id": "applicant_id",
                "name": "applicant_name",
                "rank": applicant_rank,
                "reason": "reason for rank",
                "jobTitle": "job_title" get this from the last work experience of the applicant
            }
        ]
            Only return the JSON array without any additional formatting or backticks.
        ${JSON.stringify(applicantList)}`

        const result = await gemini(prompt)


        return Response.json({ data: JSON.parse(result.response.text()) })
    } catch (e) {
        return Response.json({ data: 'error' })
    }
}