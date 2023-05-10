import Add from '../model/Add'
import db from '../utils/db'

handler.post(async (req, res) =>{
    try{
        db.connect()
        const {address} = req.body
        const add = await Add.findById(res.add)
        await add.updateOne({
            $push:{
                address: address
            }
        })
        db.disconnect()
        return res.json({address:add.address})
    }catch(er){
        return res.statut(500).json({message: er.messages})
    }
})

export default handler;