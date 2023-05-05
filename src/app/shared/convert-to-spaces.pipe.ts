import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces',
})

// How to create custom pipes

/*create a class and export implementing Pipe Transform from angular core;

Also add the @Pipe decorator; defining the name of this pipe

add your js function in the class and add the custom pipe in your appmodule under your declarrations
 The use it in your code

 Note: Build a custom pipe whenever you want to perform unique application data transformation

*/
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
