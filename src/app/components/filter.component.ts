import {Component } from '@angular/core';


@Component({
	selector:'filter',
	template:`
             <select id="complete" name="complete" class="form-control">
                <option value="2">all</option>
                  <option value="1">complete</option>
                  <option value="0">uncomplete</option>
               <option></option>
            </select>
`
})

export class filterComponent{

}
