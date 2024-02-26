import express from "express"
const router = express.Router()
import User from "../schemas/user.schema.js"

router.get("/", async(req,res)=> {
    try{
        let userlist = await User.find()
        return res.send(userlist)
    }
catch(error){
    res.status(500).json({message: error.message})
}
})


router.get('/:id', async(req,res)=> {
    let {id} = req.params
    let user = await User.findOne({ userId: id });
    if(!user){
        return res.status(404).json({message:" 유저를 찾을 수 없습니다"})
    }
    return res.status(200).json(user)
})

export default router