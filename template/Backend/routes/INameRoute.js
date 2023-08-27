const express = require('express');
const inameModel = require('../models/InamesDBModel');
const { addIname, getIname,getGname } = require('../controllers/InameController');
const iNameRouter = express.Router();
const multer = require('multer')

iNameRouter.post('/createIname', addIname)
iNameRouter.get('/getIname', getIname)
iNameRouter.get('/getGname', getGname)


//===========|| by me for image ||=============//

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        return cb(null,'./public/images')
    },
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}_${file.originalname}`)
    }
})
const uploadImage =multer({storage})

iNameRouter.post('/uploadImage',uploadImage.single('file'),(req,res)=>{
    // console.log(req.body);
    // console.log(req.file);
})

iNameRouter.get('/getViaFinalIname/:FinalIname', async (req, res) => {

    const FinalIname =req.params.FinalIname

    try {
        const data = await inameModel.findOne({ FinalIname: FinalIname })
        res.json({ data });
    }
    catch (error) {
        console.error('Error finding product by FinalIname:', error);
    }
})


module.exports = iNameRouter;