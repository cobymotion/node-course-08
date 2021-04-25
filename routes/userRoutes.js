const { Router } = require('express'); 
const { userGet, userAdd, userPut } = require('../controllers/userController');

const router = Router(); 

router.get('/', userGet);
router.put('/api', userPut);
router.post('/:id', userPut);
router.delete('/api',userGet); 

module.exports = router; 