import {Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
import {Task} from '../models/task';
import {completePipe} from '../pipes/complete.pipe';
import {searchPipe} from '../pipes/search.pipe';
import {searchComponent} from './search.component';
import {postService} from '../services/post.service';
import {createTaskComponent} from './createTask.component';

@Component({
	selector:'showList',
	templateUrl:'./showList.html',
	providers:[postService]
})

export class showList implements OnInit {

//service injection
constructor(private posetservice:postService){}

tasks:Task[]=[];

//tocomunicate between 2 component via service
editTask:any;



ngOnInit(){
this.tasks=this.posetservice.tasks;
this.posetservice.task.subscribe(
      value =>
      { this.tasks=value; });
}
//

complete:boolean=false;
search= '';


  getmessage($event){
  	this.search = $event;
  	// console.log($event);
  };

  receiveMessage($event) {
    this.complete = $event;
 //console.log($event);

  }
//delete task send it to service and call service 
delete(a:Task){ 
this.posetservice.remove(a);

	}

//donetask
done(a:Task){
this.posetservice.completed(a);
}

//editask
edit(a:Task){


}



 // setMessage(event) {
 //    console.log(event.value);
 //    this.posetservice.setMessage(event.value);
 //  }
}
