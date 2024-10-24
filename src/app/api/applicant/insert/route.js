import { doc, setDoc } from 'firebase/firestore/lite';
import { initializeDb } from '../../util/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req, res) {
    const dbname = "applicant"
    const db = initializeDb()

    const cv_data = await req.json()

    for (let data of cv_data) {
        await setDoc(doc(db, dbname, uuidv4()), data);
    }

    return Response.json({data: 'ok'})
}