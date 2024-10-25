import { doc, setDoc, query, where } from 'firebase/firestore/lite';
import { initializeDb } from '../../util/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req, res) {
    const dbname = "schedules"
    const refdbname = "client" 
    const db = initializeDb()

    const { title, description, startTime, endTime, clientId } = await req.json()

    const clientIdRef = doc(db, refdbname, clientId)

    const postingDoc = {
        title,
        description,
        startTime,
        endTime,
        clientId: clientIdRef
    }

    await setDoc(doc(db, dbname, uuidv4()), postingDoc);

    return Response.json({data: 'ok'})
}