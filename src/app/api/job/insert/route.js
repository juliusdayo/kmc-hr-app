import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore/lite';
import { initializeDb } from '../../util/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req, res) {
    const dbname = "postings"
    const refdbname = "client" 
    const db = initializeDb()

    const { title, description, salaryRange, shiftSchedule, workSetup, clientId } = await req.json()

    const clientIdRef = doc(db, refdbname, clientId)

    const postingDoc = {
        title,
        description,
        salaryRange,
        shiftSchedule,
        workSetup,
    }

    const refId = uuidv4()
    await setDoc(doc(db, dbname, refId), postingDoc)

    await updateDoc(clientIdRef, {
        jobposts: arrayUnion(doc(db, dbname, refId))
    })

    return Response.json({data: 'ok'})
}