import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // transform(value: string,): unknown { // initials
  // transform(value: string,limit:number,trail:string): unknown { //texttruncate
  transform(items: any[], searchText: string): any[] { //searchText

    if (!items || !searchText) { return items; }


    // let str = value; 
    // if (!str) {
    //   return null;

    // } 

    // else {
    //   //----------logic use for intials----------//
    //   let str2 = str.split(' ');
    //   let str3 = str2.map((word) => {
    //     return word[0]
    //   }).join('');
    //   console.log(str3);
    //   return str3; // return intials like PT;
    // }

    // else {
    //   //----------logic use for truncate----------//
    //   if(str && str.length>limit){
    //     return str.substring(0,limit)+trail;
    //   }else{
    //     return str;
    //   }

    // }
    else {
      //----------logic use for searchText----------//
      searchText = searchText.toLocaleLowerCase();
      let data = items.filter((item) => {
       return Object.values(item).some((value:any) => {
          // if (value) {
           return value?.toString().toLowerCase().includes(searchText);
          // }
        })
      })
      console.log(data);
      return data;
      //  return items.filter(user =>
      //   user.name.toLowerCase().includes(searchText.toLowerCase())
      // );
    }

  }

}
