import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      

      new TextboxQuestion({
        key: 'firstName',
        label: 'First Name',
        value: 'Bombasto',
        required: true,
        group: 'Personal',
        order: 1
      }),
      new TextboxQuestion({
        key: 'middleName',
        label: 'Middle Name',
        value: 'Bombasto',
        required: true,
        group: 'Personal',
        order: 2
      }),
      new TextboxQuestion({
        key: 'Last Name',
        label: 'Last Name',
        value: 'Bombasto',
        group: 'Personal',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        group: 'Personal',
        order: 4
      }),

      new TextboxQuestion({ key: 'Staffing Agency',label: 'Staffing Agency', required: false,group: 'Personal', order: 5}),
      new TextboxQuestion({key: 'StreetAddress',label: 'Street Address',group: 'Personal',required: false,order: 6}),
      new TextboxQuestion({key: 'Apartment/Suite Number:',label: 'Suite Numbe',group: 'Personal',required: false,order: 7}),
      new TextboxQuestion({key: 'City:',label: 'City',required: false,group: 'Personal',order: 8}),
      new TextboxQuestion({key: 'Country',label: 'Country',required: false,group: 'Personal',order: 10}),
      new TextboxQuestion({key: 'State/Location',label: 'Location',required: false,group: 'Personal',order: 11}),
      new TextboxQuestion({key: 'Zip:',label: 'Zip',required: false,group: 'Personal',order: 11}),
      new TextboxQuestion({key: 'Phone',label: 'Phone',required: false,group: 'Personal',order: 12}),
      new TextboxQuestion({key: 'CellPhone',label: 'Cell Phone',required: false,group: 'Personal',order: 13}),
      
      new TextboxQuestion({key: 'CellPhone',label: 'How did you learn about employment opportunities at ABC, Inc ',required: false,group: 'AdditionalInformation',order: 14}),
      new TextboxQuestion({key: 'CellPhone',label: 'Please specify if you selected Others from above: ',required: false,group: 'AdditionalInformation',order: 15}),

      new TextboxQuestion({key: 'CellPhone',label: 'Additional ',required: false,group: 'BackgroundInformation',order: 14}),
      new TextboxQuestion({key: 'CellPhone',label: 'Additional ',required: false,group: 'BackgroundInformation',order: 15}),
      new TextboxQuestion({key: 'CellPhone',label: 'Additional ',required: false,group: 'BackgroundInformation',order: 16}),
      new TextboxQuestion({key: 'CellPhone',label: 'Additional ',required: false,group: 'BackgroundInformation',order: 17}),
      new TextboxQuestion({key: 'CellPhone',label: 'Additional ',required: false,group: 'BackgroundInformation',order: 18}),
      new TextboxQuestion({key: 'CellPhone',label: 'Additional ',required: false,group: 'BackgroundInformation',order: 19}),
      new TextboxQuestion({key: 'CellPhone',label: 'Additional ',required: false,group: 'BackgroundInformation',order: 20}),
      new TextboxQuestion({key: 'CellPhone',label: 'Additional ',required: false,group: 'BackgroundInformation',order: 21 }),


      new TextboxQuestion({key: 'CellPhone',label: 'Cell Phone',required: false,group: 'History',order: 15}),
      
      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3
      // }),
    ];

    //return questions.sort((a, b) => a.group - b.group);
    return questions.sort((a, b) => a.order - b.order);
  }
}
