const router = require('express').Router();
const {
  getthoughts,
  getSinglethought,
  createthought,
  updatethought,
  deletethought,
  addreaction,
  removereaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getthoughts).post(createthought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSinglethought).delete(deletethought).put(updatethought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addreaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removereaction);

module.exports = router;
