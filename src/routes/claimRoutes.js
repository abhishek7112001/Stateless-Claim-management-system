const express = require('express');
const { createClaim, getAllClaims, deleteClaim, updateClaimStatus, getClaimById } = require('../controllers/claimController');

const router = express.Router();

// Create a claim
router.post('/', createClaim);

// Get all claims
router.get('/', getAllClaims);

// Get a claim by ID
router.get('/:id', getClaimById);

// Update claim status
router.put('/:id', updateClaimStatus);

// Delete a claim
router.delete('/:id', deleteClaim);

module.exports = router;
