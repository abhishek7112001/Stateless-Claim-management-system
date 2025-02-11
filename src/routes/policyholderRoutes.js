const express = require('express');
const { createPolicyholder, getPolicyholderById, getAllPolicyholders, deletePolicyholder, updatePolicyholder } = require('../controllers/policyholderController');

const router = express.Router();

router.post('/', createPolicyholder);
router.get('/', getAllPolicyholders);

router.get('/:id', getPolicyholderById);
router.put('/:id', updatePolicyholder);
router.delete('/:id', deletePolicyholder);

module.exports = router;
