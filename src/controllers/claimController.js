const Claim = require('../models/claimModel');
const Policy = require('../models/policyModel');

// Create a new claim
exports.createClaim = (req, res) => {
  const { policyholderId, policyId, claimAmount } = req.body;
  const policy = Policy.getPolicyById(policyId);

  if (!policy) {
    return res.status(400).json({ message: 'Invalid policy ID' });
  }

  if (claimAmount > policy.amount) {
    return res.status(400).json({ message: 'Claim exceeds policy amount' });
  }

  const newClaim = Claim.createClaim(policyholderId, policyId, claimAmount);
  res.status(201).json(newClaim);
};

// Get all claims
exports.getAllClaims = (req, res) => {
  res.json(Claim.getAllClaims());
};

// Get a claim by ID
exports.getClaimById = (req, res) => {
  const { id } = req.params;
  const claim = Claim.getClaimById(Number(id));

  if (!claim) {
    return res.status(404).json({ message: 'Claim not found' });
  }

  res.json(claim);
};

// Update claim status (e.g., to 'approved' or 'rejected')
exports.updateClaimStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }
  
  const updatedClaim = Claim.updateClaimStatus(Number(id), status);
  
  if (updatedClaim) {
    res.json(updatedClaim);
  } else {
    res.status(404).json({ message: 'Claim not found' });
  }
};

// Delete a claim
exports.deleteClaim = (req, res) => {
  const { id } = req.params;
  const deleted = Claim.deleteClaim(Number(id));
  
  if (deleted) {
    res.json({ message: 'Claim deleted' });
  } else {
    res.status(404).json({ message: 'Claim not found' });
  }
};
