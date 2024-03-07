const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');

router.post('/', resourceController.createResource);
router.get('/', resourceController.getAllResources);
router.put('/:id', resourceController.updateResource);
router.delete('/:id', resourceController.deleteResource);

module.exports = router;
