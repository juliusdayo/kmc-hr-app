
import { collection, getDocs, getDoc, doc, where, query } from 'firebase/firestore/lite';
import { initializeDb } from '../util/db';


export async function GET(req, res) {
    try {
        const url = new URL(req.url) 
        const clientId = url.searchParams.get('clientId')

        const db = initializeDb()
        const schedulesCollection = collection(db, 'schedules')

        const clientIdRef = doc(db, 'client', clientId)

        const qq = query(schedulesCollection, where('clientId', '==', clientIdRef))

        const schedulesSnapshot = await getDocs(qq)
        const schedulesList = schedulesSnapshot.docs.map(doc => doc.data())

        for (let sched of schedulesList) {
            const clientIdInfo = getDoc(sched.clientId)
            sched.clientId = (await clientIdInfo).data()
        }

        return Response.json({ data: schedulesList })
    } catch (e) {
        return Response.json({ data: e })
    }
}