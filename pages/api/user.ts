import { NextApiRequest, NextApiResponse } from "next"
import { connectToUsersDB } from "../../db/dbConnections"
import User from '../../db/models/user'
import { ResponseFuncs } from "../../db/Request"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs
    const catcher = (error: Error) => res.status(400).json({ error })

    const handleCase: ResponseFuncs = {
        // GET all users info
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            const data = await User.find({}).catch(catcher)
            res.json(data)
        },
    }

    await connectToUsersDB()
    const response = handleCase[method]
    if (response) response(req, res)
    else res.status(400).json({ error: "No Response for This Request" })
}

export default handler