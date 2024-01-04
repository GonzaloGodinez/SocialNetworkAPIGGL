const router = require('express').Router();
const {
  getusers,
  getSingleuser,
  createuser,
  updateuser,
  deleteuser,
  removefriend,
  addFriend,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getusers).post(createuser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleuser)
  .put(updateuser)
  .delete(deleteuser);
  // .post(createfriend);
// api/users/AddFriend
router.route('/:userId/friend/:friendId').post(addFriend).delete(removefriend);

module.exports = router;
