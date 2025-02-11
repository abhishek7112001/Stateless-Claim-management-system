const express = require('express');
const { createPolicy, getAllPolicies, deletePolicy, getPolicyById } = require('../controllers/policyController');

const router = express.Router();

router.post('/', createPolicy);
router.get('/', getAllPolicies);
router.get('/:id', getPolicyById);
router.delete('/:id', deletePolicy);

module.exports = router;
