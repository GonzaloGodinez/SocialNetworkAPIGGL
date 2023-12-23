const router = require('express').Router();
const {
  getusers,
  getSingleuser,
  createuser,
  updateuser,
  deleteuser,
  createfriend,
  removefriend,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getusers).post(createuser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleuser)
  .put(updateuser)
  .delete(deleteuser)
  .post(createfriend);
// api/users/AddFriend
  router.route('/').get(getSingleuser).put(updateuser).post(createfriend);

module.exports = router;
