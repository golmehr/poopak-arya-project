import{Injectable}from '@angular/core';
import {Task} from '../models/task';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';


@Injectable()

export class postService{
	tasks : Task[] = [
 {id : 1,  taskname : 'design website',  description : 'fdgdggfdgdf',  complete:false },
 {id : 2, taskname : 'code',  description : 'fdgdggfdgdf',  complete:true },
 {id : 3, taskname : 'task 3',  description : 'fdgdggfdgdf',  complete:false },
 {id : 4, taskname : 'task 4',  description : 'fdgdggfdgdf',  complete:false }
   // new Task(1 , 'design website' , 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci autem consequuntur ea exercitationem fuga' , false)
];

  public name = new Subject();
  public desc = new Subject();

  constructor() { }


// setMessage(value: string) {
//     this.message.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
//   }
// editUser(newUser){
// 	this.user.next(newUser);
// }


//delete
remove(a:Task){ 
this.tasks.splice(this.tasks.indexOf(a),1);

	}
//done	
completed(a:Task){
	a.complete=true;
	}

//submit form and add task
lastTaskId : number = this.tasks[this.tasks.length - 1].id;

addTask(a : Task){
console.log(this.tasks);
this.tasks.push(a);
console.log(this.tasks);
this.lastTaskId = this.tasks.indexOf(a)+1;

}


}
