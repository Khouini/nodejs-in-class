const router = require('express').Router();
const {addUserWithGet, addUSer, updateUser, deleteUser, getUserByName, getUsers} = require('../controllers/user');

router.get('/addUserWithGet', addUserWithGet);
router.get('/', getUsers);
router.post('/', addUSer);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/name/:name', getUserByName);

module.exports = router;
