var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

// router.options('/messages', controller.messages.options);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

// router.options('/users', controller.users.options);

router.post('/users', controller.users.post);


module.exports = router;

