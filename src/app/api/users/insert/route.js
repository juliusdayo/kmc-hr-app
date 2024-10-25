import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore/lite';
import { initializeDb } from '../../util/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req, res) {
    const dbname = "users"
    const db = initializeDb()

    const {username, password, usertype, userId} = await req.json()

    const collref = null

    switch (usertype) {
        case 'client':
            collref = 'client'
            break;
        case 'applicant':
            collref = 'applicants'
            break;
        case 'hr':
            collref = 'hr'
            break;
        default:
            collref = null
    }

    const userRef = doc(db, collref, userId)

    const userData = {
        username,
        password,
        usertype,
        userRef
    }

    await setDoc(doc(db, dbname, uuidv4()), userData)

    return Response.json({data: 'ok'})
}