const express=require('express');
const router=new express.Router();
const chatController=require('../controllers/chat_controller');
console.log('Router loaded');
router.get('/',chatController.home);

module.exports=router;
 