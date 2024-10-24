
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore/lite';
import { initializeDb } from '../util/db';


export async function GET() {
    try {
        const db = initializeDb()
        const jobCollection = collection(db, 'postings')
        const jobSnapshot = await getDocs(jobCollection)
        const jobList = jobSnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }
        )

        return Response.json({ data: jobList })
    } catch (e) {
        return Response.json({ data: 'error' })
    }
}