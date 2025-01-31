const express = require('express');
const { createClaim, getAllClaims, deleteClaim } = require('../controllers/claimController');

const router = express.Router();

router.post('/', createClaim);
router.get('/', getAllClaims);
router.delete('/:id', deleteClaim);

module.exports = router;
