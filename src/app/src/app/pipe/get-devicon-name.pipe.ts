import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deviconName',
})
export class GetDeviconNamePipe implements PipeTransform {
  transform(iconName: string): string {
    return (
      iconName.charAt(0).toUpperCase() +
      iconName.match(/(\w+)-(plain|original)?/)[1].slice(1)
    );
  }
}
