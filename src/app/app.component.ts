import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './css.component.html',
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];
  resArr: any[];
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    //var arr = this.questions;
    var arr =[];
    this.questions.filter(function(item){
      var i = arr.findIndex(x => x.name == item.group);
      if(i <= -1){
        arr.push({
              Value: [item],
               name: item.group
              });
      }else{
        arr[i].Value.push(item);
      }
      return null;
    });
    this.resArr =arr;
    console.log(this.resArr)
  }
}
