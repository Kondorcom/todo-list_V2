export class newProjectClass {
    constructor(projectName) {
        this.projectName = projectName;
    }
    get projectName() {
        return this._projectName;
    }
    // get endDate() {
    //     return this._dateWhenSet;
    // }

    set projectName(value) {
        if (value.length < 4) {
            //alert("Name is too shortaaaa.");
            return;
        }
        this._projectName = value;
    }
    // set endDate(value) {
    //     this._endDate = value;
    // }

    sayHi() {
        alert(this.projectName);
    }
    // sayDate() {
    //     alert(this.endDate);
    // }
}
