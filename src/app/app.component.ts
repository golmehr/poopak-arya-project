import { Component,OnInit } from '@angular/core';
import {createTaskComponent} from './components/createTask.component';
import {showList} from './components/showList.component';
import {filterComponent} from './components/filter.component';
// import {capitalize} from './pipes/capitalize.pipe';
import {completePipe} from './pipes/complete.pipe';
import {searchPipe} from './pipes/search.pipe';
import {postService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

constructor(private posetservice:postService){}
 
ngOnInit(){

}
}
