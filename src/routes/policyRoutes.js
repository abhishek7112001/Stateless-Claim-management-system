const express = require('express');
const { createPolicy, getAllPolicies, deletePolicy } = require('../controllers/policyController');

const router = express.Router();

router.post('/', createPolicy);
router.get('/', getAllPolicies);
router.delete('/:id', deletePolicy);

module.exports = router;
