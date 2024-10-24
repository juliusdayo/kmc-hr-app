
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore/lite';
import { initializeDb } from '../util/db';


export async function GET() {
    const db = initializeDb()
    const applicantCollection = collection(db, 'test')
    const applicantSnapshot = await getDocs(applicantCollection)
    const applicantList = applicantSnapshot.docs.map(doc => doc.data())

    return Response.json({ data: applicantList })
}