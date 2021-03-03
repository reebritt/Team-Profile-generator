const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = this.github
    }
    getRole() {
        return "Engineer"
    }
    getGit() {
        return this.github
    }
}

module.exports=Engineer