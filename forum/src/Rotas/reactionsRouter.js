const { Router } = require('express');
const router = Router();
const { storeReaction, reactionsByPostId } = require('../controllers/reactionController');
const { route } = require('./usersRouter');

router.post('/reaction/create', storeReaction);
router.get('/reactions_post/:post_id', reactionsByPostId);

module.exports = router;