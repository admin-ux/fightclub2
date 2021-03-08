//Not sure if this file will remain useful may remove
//Purpose for this file is authentication -> users.js already does this,
//may modularize the authentication to this file

//** Not Utilized Currently
//Different Stradegy dont believe Ill be using this one


import { Router } from 'express';
 
const router = Router();
 
router.get('/', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});
 
export default router;

//**