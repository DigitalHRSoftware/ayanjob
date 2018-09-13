import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';


@Component({
  selector: 'job-list',
  templateUrl: './jobs.component.html',
  styleUrls: [ './jobs.component.css' ],
  providers:  [QuestionService]
})
export class JobComponent  {
  questions: any[];
 
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}