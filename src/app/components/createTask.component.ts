import {Component,ViewChild,ElementRef} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {postService}  from '../services/post.service';
import {Task} from '../models/task';


@Component({
	selector:'createTask',
	templateUrl:'./createTask.component.html'
})

export class createTaskComponent {

//validation form ,injection service
task={
		taskname:'',
		description:''
};

myform:FormGroup;

constructor(private fb:FormBuilder,private postservice:postService){
	this.myform=fb.group({
		taskname :['',[Validators.required]],
		description :['',[Validators.required]]
	})
}
//tocomunicate between 2 component via service

//

@ViewChild('taskname') taskname:ElementRef;
@ViewChild('Description') Description:ElementRef;

onSubmit(myForm){

let a:Task= ({id:6,taskname:this.taskname.nativeElement.value,description:this.Description.nativeElement.value,complete:false});
this.postservice.addTask(a);
this.postservice.getTask();
}



}
