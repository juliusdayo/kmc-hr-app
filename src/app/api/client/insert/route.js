import { collection, doc, setDoc } from "firebase/firestore/lite"
import { initializeDb } from "../../util/db";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req, res) {

    const db = initializeDb();
    const data = await req.json();


    for (let i of data) {
        console.log(i);
        setDoc(doc(db, "test", uuidv4()), i)

    }

    return Response.json({ data: 'data' })
}