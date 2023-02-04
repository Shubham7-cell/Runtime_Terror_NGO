const express = require('express');
const passport = require('passport');
const path = require('path');
const router = express.Router();
const Volunteer = require('../model/volunteerSchema');
const multer  = require('multer');
var shortid    = require('shortid');
const student = require('../model/studentSchema');

const upload = multer({storage: multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb){
        // user shortid.generate() alone if no extension is needed
        cb( null, shortid.generate() + (file.originalname));
    }
})});

router.post('/uploadxlsx',passport.authenticate('jwt', { session: false }),upload.single('xlsx'), async (req, res) => {
   
   
    const result = converter({
        sourceFile: path.join(__dirname, '../uploads/'+req.file.filename),
        header: {
            rows: 1
        },
        columnToKey: {
            A:'uid',
            B:'name',
            C:'phone',
            D:'location',
            E:'currentClass',
           F:'boardGrade'
        }
    });
    const vol = await Volunteer.findOne({_id:req.user._id});
    for(var i=0;i<result.data.length;i++){
        const exist = await student.findOne({phone:result.data[i].phone});
        if(!exist){
        const newStudent = new student(result.data[i]);
        newStudent.assignedInstitute = null;
        vol.studentsProvided.push(newStudent._id);
        console.log(newStudent);
        newStudent.save();
        }else{
            console.log("Data already exists");
        }
    }
    console.log("Data inserted");

});

router.get('/getcertificates/:id',passport.authenticate('jwt', { session: false }), async (req, res) => {
    const id = req.params.id;
    const vol = await Volunteer.findOne({_id:id});
   const certificate = vol.certificate;
    const certificatePath = path.join(__dirname, '../certificates/');

   res.sendFile(certificate, { root: certificatePath });

})

router.get('/getLOR/:id', async (req, res) => {
    const id = req.params.id;
    const vol = await Volunteer.findOne({_id:id});
   const LOR = vol.lor;
    const LORPath = path.join(__dirname, '../LORS/');

   res.sendFile(LOR, { root: LORPath });

})

module.exports = router;