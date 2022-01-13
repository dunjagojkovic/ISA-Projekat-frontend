import { Directive } from '@angular/core';
    
@Directive({
  selector: '[appGoogleFontsLoadingDisable]'
})
export class GoogleFontsLoadingDisableDirective {
  constructor() {
    const head = document.getElementsByTagName('head')[0] as any;
    const insertBefore = head.insertBefore;
    head.insertBefore = function (newElement: any, referenceElement: any) {
      if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') > -1) {
        return;
      }
      insertBefore.call(head, newElement, referenceElement);
    };
  }
}