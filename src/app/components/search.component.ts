import {Component,Output,EventEmitter } from '@angular/core';

@Component({
	selector:'search',
	template:`
   <div class=row>
       <div class="col-md-4">
         <input name="complete" id="search" type="text" class="form-control"  [(ngModel)]="searched"  placeholder="Search"/>
         </div>
         <div class="col-md-1">
        <button class="btn btn-warning btn-xs" (click)="putMessage()">Show Result</button>
        </div>
        <div class="col-md-2">
        </div>
      <div class="col-md-3">
        <select name="complete" id="complete" class="form-control" [(ngModel)]="completed"  >
                <option [ngValue]="true">complete</option>
                <option [ngValue]="false">uncomplete</option>
         </select>
          </div>
         <div class="col-md-1">
         <button class="btn btn-info btn-xs" (click)="sendMessage()">Show Result</button>
         </div>
          <div class="col-md-1">
        </div>
     
   </div> 

`
})

export class searchComponent{

completed:boolean;
searched:string;

@Output() complete=new EventEmitter;
@Output() search=new EventEmitter;

sendMessage() {
this.complete.emit(this.completed);
console.log(this.completed);
}


putMessage(){
this.search.emit(this.searched);
console.log(this.searched);
}


}


 