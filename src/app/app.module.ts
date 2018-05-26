import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {createTaskComponent} from './components/createTask.component';
import {searchComponent} from './components/search.component';
import {postService} from './services/post.service';
import {showList} from './components/showList.component';
import {capitalize} from './pipes/capitalize.pipe';
import {completePipe} from './pipes/complete.pipe';
import {searchPipe} from './pipes/search.pipe';
import {StaffComponent} from './components/staff.component';
import {FeeComponent} from './components/Fee.component';
import {TaskHomeComponent} from './components/TaskHome.component';



const routes:Routes=[
{path:'TaskHome',component:TaskHomeComponent},
{path:'staff',component:StaffComponent},
{path:'fee',component:FeeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    createTaskComponent,
    searchComponent,
    showList,
  //  removeTask,
    capitalize,
    completePipe,
    searchPipe,
    FeeComponent,
    StaffComponent,
    TaskHomeComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  postService,
  completePipe,
  searchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
