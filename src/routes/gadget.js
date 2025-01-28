const express = require('express');
const {
  getGadgets,
  createGadget,
  updateGadget,
  deleteGadget,
  selfDestruct,
} = require('../controllers/gadgetController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getGadgets);                                      //To get details of all the gadgets
router.post('/', authMiddleware, createGadget);                                   //To create new gadget
router.patch('/:id', authMiddleware, updateGadget);                               //TO update particular gadget
router.delete('/:id', authMiddleware, deleteGadget);                              //To delete gadget    
router.post('/:id/self-destruct', authMiddleware, selfDestruct);                  //To self-destruct the gadget

module.exports = router;
