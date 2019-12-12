import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  pure: false,
})
export class HighlightPipe implements PipeTransform {

  transform(text: string, column: string, highlights: any): any {
    console.log(text);
    for (var i in highlights) {
      // console.log(i);
      var highlight = highlights[i];
      var color = highlight.color;
      var regex = '<span.*?<\/span>|'+highlight.regex;
      var re = new RegExp(regex, 'gi')
      text = text.replace(re, function(m, group1) {
        console.log(m);
          if (group1 == -1 ) return m;
          else return `<span class="${color}">${m}</span>`;
      });
      // console.log(text);
    }
    // var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
    // return value.replace(re, "<span style='background-color:$color'>$&</mark>");
    return text;
  }

}
