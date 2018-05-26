import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
	name:'capitalize'
})

export class capitalize implements PipeTransform{
	transform(value:any,...arg:any[]):any{
		console.log(value);
		console.log(arg);
		if (!value){
			return value;
		}
		return value.replace(/\w\S*/g,(word:string)=>word.charAt(0).toLocaleUpperCase()+word.substr(1).toLocaleLowerCase())
	}


}