import { Pipe , PipeTransform } from '@angular/core';
import { Task } from './../models/task';

@Pipe({
  name : 'search',
  pure:false
})

export class searchPipe implements PipeTransform {
  transform(tasks: Task[], ...args: any[]): any {
    if(!tasks) {
      return tasks;
    }

    let keyword = args[0];
    return tasks.filter( (task : Task) => task.taskname.indexOf(keyword) !=-1);
  }
}
