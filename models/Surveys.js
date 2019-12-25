const surveys;

module.exports = class Survey() {
    
    constructor(id, fName, lName, phone, email, qOne, qOneA, qTwo, qTwoA, qThree, qThreeA, qThreeB, qThreeC, qThreeD, caller, callerNotes) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.phone = phone;
        this.email = email;
        this.qOne = qOne;
        this.qOneA = qOneA;
        this.qTwo = qTwo;
        this.qTwoA = qTwoA;
        this.qThree = qThree;
        this.qThreeA = qThreeA;
        this.qThreeB = qThreeB;
        this.qThreeC = qThreeC;
        this.qThreeD = qThreeD;
        this.caller = caller;
        this.callerNotes = callerNotes;
    }

    save() {
        return surveys.push(this);
    }
}