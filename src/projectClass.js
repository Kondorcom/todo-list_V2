export class newProjectClass {
    constructor(projectName, dateWhenSet) {
        this.projectName = projectName;
        this.dateWhenSet = dateWhenSet;
    }
    get projectName() {
        return this._projectName;
    }
    get dateWhenSet() {
        return this._dateWhenSet;
    }

    set projectName(value) {
        if (value.length < 4) {
            //alert("Name is too shortaaaa.");
            return;
        }
        this._projectName = value;
    }
    set dateWhenSet(value) {
        this._dateWhenSet = value;
    }

    sayHi() {
        alert(this.projectName);
    }
    sayDate() {
        alert(this.dateWhenSet);
    }
}
