const policies = []; // In-memory storage for policies

class Policy {
  constructor(id, policyholderId, type, amount) {
    this.id = id;
    this.policyholderId = policyholderId;
    this.type = type;
    this.amount = amount;
  }

  static createPolicy(policyholderId, type, amount) {
    const id = policies.length + 1;
    const newPolicy = new Policy(id, policyholderId, type, amount);
    policies.push(newPolicy);
    return newPolicy;
  }

  static getAllPolicies() {
    return policies;
  }

  static getPolicyById(id) {
    return policies.find(p => p.id === id);
  }

  static deletePolicy(id) {
    const index = policies.findIndex(p => p.id === id);
    if (index !== -1) {
      return policies.splice(index, 1);
    }
    return null;
  }
}

module.exports = Policy;
