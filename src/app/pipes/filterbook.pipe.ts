import { Pipe, PipeTransform } from '@angular/core';
import { auth } from '../model/book';
@Pipe({
  name: 'filterbook'
})
export class FilterbookPipe implements PipeTransform {

  transform(books:auth[], type: string): any {
    if(type==="High Price")
       return books.filter(x=>x.price>500);
    else if(type=="Low Price")
        return books.filter(x=>x.price<300);
    else if(type=="Moderate Price")
         return books.filter(x=>x.price>=300&&x.price<=500);
    else 
        return books;  
      }
}
