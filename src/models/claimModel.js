const claims = []; // In-memory storage for claims

class Claim {
  constructor(id, policyholderId, policyId, claimAmount, status = 'pending') {
    this.id = id;
    this.policyholderId = policyholderId;
    this.policyId = policyId;
    this.claimAmount = claimAmount;
    this.status = status; // Status can be 'pending', 'approved', 'rejected'
  }

  // Create a new claim (default status: 'pending')
  static createClaim(policyholderId, policyId, claimAmount) {
    const id = claims.length + 1;
    const newClaim = new Claim(id, policyholderId, policyId, claimAmount, 'pending');
    claims.push(newClaim);
    return newClaim;
  }

  // Get all claims
  static getAllClaims() {
    return claims;
  }

  // Get a claim by ID
  static getClaimById(id) {
    return claims.find(c => c.id === id);
  }

  // Update claim status (e.g., to 'approved' or 'rejected')
  static updateClaimStatus(id, newStatus) {
    const claim = claims.find(c => c.id === id);
    if (claim) {
      claim.status = newStatus;
      return claim;
    }
    return null; // If claim not found
  }

  // Delete a claim
  static deleteClaim(id) {
    const index = claims.findIndex(c => c.id === id);
    if (index !== -1) {
      return claims.splice(index, 1);
    }
    return null;
  }
}

module.exports = Claim;
