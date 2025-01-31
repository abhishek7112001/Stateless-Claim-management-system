const Claim = require('../models/claimModel');
const Policy = require('../models/policyModel');

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

exports.getAllClaims = (req, res) => {
  res.json(Claim.getAllClaims());
};

exports.deleteClaim = (req, res) => {
  const { id } = req.params;
  const deleted = Claim.deleteClaim(Number(id));
  if (deleted) res.json({ message: 'Claim deleted' });
  else res.status(404).json({ message: 'Claim not found' });
};


