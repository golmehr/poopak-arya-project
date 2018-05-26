import { Component,OnInit } from '@angular/core';
import {createTaskComponent} from './createTask.component';
import {showList} from './showList.component';
import {filterComponent} from './filter.component';
import {completePipe} from '../pipes/complete.pipe';
import {searchPipe} from '../pipes/search.pipe';
import {postService} from '../services/post.service';

@Component({
  selector: 'TaskHome',
  templateUrl: './TaskHome.component.html'
})
export class TaskHomeComponent implements OnInit{
 

constructor(private posetservice:postService){}
 
ngOnInit(){

}
}