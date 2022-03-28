import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(text: string, by: string, index: number = 1): any {
    if (text) {
      let arr = text.split(by);
      return arr[index]; 
    }  
  }

}
