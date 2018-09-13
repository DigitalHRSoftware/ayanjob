import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: [ './application.component.css' ],
  providers:  [QuestionService]
})
export class ApplicationComponent  {
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