classDiagram
    class Policy {
        -int id
        -int policyholderId
        -string type
        -float amount
        +constructor(id, policyholderId, type, amount)
        +static createPolicy(policyholderId, type, amount)
        +static getAllPolicies()
        +static getPolicyById(id)
        +static deletePolicy(id)
    }

    class Policyholder {
        -int id
        -string name
        -int age
        -string email
        +constructor(id, name, age, email)
        +static createPolicyholder(name, age, email)
        +static getAllPolicyholders()
        +static getPolicyholderById(id)
        +static deletePolicyholder(id)
    }

    class Claim {
        -int id
        -int policyholderId
        -int policyId
        -float claimAmount
        -string status
        +constructor(id, policyholderId, policyId, claimAmount, status)
        +static createClaim(policyholderId, policyId, claimAmount)
        +static getAllClaims()
        +static getClaimById(id)
        +static updateClaimStatus(id, newStatus)
        +static deleteClaim(id)
    }

    Policyholder "1" -- "*" Policy : has
    Policyholder "1" -- "*" Claim : files
    Policy "1" -- "*" Claim : associated with