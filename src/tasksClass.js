export class taskClass {
    constructor(taskFromProject, taskName, taskDetails, taskEndDate) {
        this.taskFromProject = taskFromProject;
        this.taskName = taskName;
        this.taskDetails = taskDetails;
        this.taskEndDate = taskEndDate;
    }
    get taskFromProject() {
        return this.taskFromProject;
    }
    set taskFromProject(value) {
        this.taskFromProject = value;
    }
    get taskName() {
        return this.taskName;
    }
    set taskName(value) {
        this.taskName = value;
    }
    get taskDetails() {
        return this.taskDetails;
    }
    set taskDetails(value) {
        this.taskDetails = value;
    }
    get taskEndDate() {
        return this.taskEndDate;
    }
    set taskEndDate(value) {
        this.taskEndDate = value;
    }
}
