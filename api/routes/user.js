const router = require('express').Router();
const UserController = require('../controllers/UserController');
const verifyAccessToken = require('../../app/middleware').verifyAccessToken;

router.use(verifyAccessToken);
router.get('/', UserController.getUser);

module.exports = router;
