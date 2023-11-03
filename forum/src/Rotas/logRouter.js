const { Router } = require('express');
const router = Router();
const { login } = require('../controllers/logController');

router.post('/auth/login', login);

module.exports = router;