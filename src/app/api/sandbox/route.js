
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore/lite';
import { initializeDb } from '../util/db';
import { gemini } from '../util/gemini';


export async function GET() {
    try {
        const db = initializeDb()
        const jobCollection = collection(db, 'postings')
        const jobSnapshot = await getDocs(jobCollection)
        const jobList = jobSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));


        const applicantCollection = collection(db, 'applicant')
        const applicantSnapshot = await getDocs(applicantCollection)
        const applicantList = applicantSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));


        const prompt = `Rank the skills of the applicants base on the job title Web Developer, only return an array of object in this format
   [
  {
    "id": "applicant_id",
    "name": "applicant_name"
  }
]
Only return the JSON array without any additional formatting or backticks.
${JSON.stringify(applicantList)}
        `

        const result = await gemini(prompt)


        return Response.json({ data: result.response.text() })
    } catch (e) {
        return Response.json({ data: 'error' })
    }
}