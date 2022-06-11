const express=require('express');
const bookCtrl=require('../controllers/bookCtrl')
const router = express.Router();

router.get('/',bookCtrl.get);
router.get('/:id',bookCtrl.getById);
router.post('/',bookCtrl.create);


module.exports=router;