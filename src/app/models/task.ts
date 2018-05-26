export class Task {
  id : number;
  taskname : string;
  description : string;
  complete : boolean;

  constructor(id : number , taskname : string , description : string , complete : boolean) {
    this.id = id;
    this.taskname = taskname;
    this.description = description;
    this.complete = complete;
  }
}
