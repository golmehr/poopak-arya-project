import { Pipe , PipeTransform } from '@angular/core';
import { Task } from './../models/task';


@Pipe({
  name : 'complete'  ,
  //pipe good works
  pure:false
})


export class completePipe implements PipeTransform {
  transform(tasks: Task[], ...args: any[]): any {  
    if(!tasks) {
      return tasks;
    }

    let complete = args[0];
    return tasks.filter( (task : Task) => task.complete == complete );

  }

}
