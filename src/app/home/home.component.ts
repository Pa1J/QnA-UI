import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Questions = [
    {
      Id: 1,
      QuestionedBy : 1,
      Statement : "How to open command prompt",
      Description: "Unable to located command prompt in my system, help me navigate to open it",
      CategoryId : 1,
      QuestionedOn : new Date(2020,5,24),
      Views: 1895,
      Votes: 10,
      AnswersCount: 2,
      IsResolved: false
    },
    {
      Id: 2,
      QuestionedBy : 2,
      Statement : "How to close command prompt",
      Description: "I was somehow able to find ways to open my command prompt but unable to close it",
      CategoryId : 1,
      QuestionedOn : new Date(2021,7,20),
      Views: 11,
      Votes: 8,
      AnswersCount: 3,
      IsResolved: false
    },
    {
      Id: 3,
      QuestionedBy : 1,
      Statement : "How to open command prompt",
      Description: "Unable to located command prompt in my system, help me navigate to open it",
      CategoryId : 1,
      QuestionedOn : new Date(2002,1,8),
      Views: 10,
      Votes: 8,
      AnswersCount: 1,
      IsResolved: true
    },
    {
      Id: 4,
      QuestionedBy : 2,
      Statement : "How to close command prompt",
      Description: "I was somehow able to find ways to open my command prompt but unable to close it",
      CategoryId : 1,
      QuestionedOn : new Date(2012,7,9),
      Views: 1170,
      Votes: 107,
      AnswersCount: 2,
      IsResolved: false
    },
    {
      Id: 5,
      QuestionedBy : 1,
      Statement : "How to open command prompt",
      Description: "Unable to located command prompt in my system, help me navigate to open it",
      CategoryId : 1,
      QuestionedOn : new Date(2021,5,5),
      Views: 168,
      Votes: 10,
      AnswersCount: 2,
      IsResolved: false
    },
    {
      Id: 6,
      QuestionedBy : 2,
      Statement : "How to close command prompt",
      Description: "I was somehow able to find ways to open my command prompt but unable to close it",
      CategoryId : 1,
      QuestionedOn : new Date(2020,1,1),
      Views: 179,
      Votes: 110,
      AnswersCount: 2,
      IsResolved: false
    },
    {
      Id: 7,
      QuestionedBy : 1,
      Statement : "How to open command prompt",
      Description: "Unable to located command prompt in my system, help me navigate to open it",
      CategoryId : 1,
      QuestionedOn : new Date(2020,8,18),
      Views: 18,
      Votes: 1,
      AnswersCount: 2,
      IsResolved: false
    },
    {
      Id: 8,
      QuestionedBy : 2,
      Statement : "How to close command prompt",
      Description: "I was somehow able to find ways to open my command prompt but unable to close it",
      CategoryId : 1,
      QuestionedOn : new Date(2021,8,15),
      Views: 17,
      Votes: 1,
      IsResolved: false
    },
    {
      Id: 9,
      QuestionedBy : 1,
      Statement : "How to open command prompt",
      Description: "Unable to located command prompt in my system, help me navigate to open it",
      CategoryId : 1,
      QuestionedOn : new Date(2021,7,15),
      Views: 172,
      Votes: 70,
      AnswersCount: 2,
      IsResolved: false
    },
    {
      Id: 10,
      QuestionedBy : 2,
      Statement : "How to close command prompt",
      Description: "I was somehow able to find ways to open my command prompt but unable to close it",
      CategoryId : 1,
      QuestionedOn : new Date(2020,8,1),
      Views: 171,
      Votes: 110,
      AnswersCount: 2,
      IsResolved: true
    }
  ];

  SelectedQuestion = 
    {
      Id: 1,
      QuestionedBy : 1,
      Statement : "How to open command prompt",
      Description: "Unable to located command prompt in my system, help me navigate to open it",
      CategoryId : 1,
      QuestionedOn : new Date(),
      Views: 170
    };

  id :any;

  constructor( private activatedRoute : ActivatedRoute) {
    this.activatedRoute.paramMap
      .subscribe(
         (params: ParamMap) =>
           {
            let id = params.get('questionId');
            this.id = id;
            this.Questions.forEach(Question => {
                if(Question.Id == this.id){
                  this.SelectedQuestion = Question;
                }
              })
              console.log(this.id);
            });
   }

   timeDiff(questionedOn : Date) : string{
     let unit : string[] = [" years ago", " months ago", " days ago", " hrs ago", " mins ago"," year ago", " month ago", " day ago", " hr ago", " min ago"];
     let now = new Date()
     let dif = now.getFullYear() - questionedOn.getFullYear();
     let i = 0;
     if(dif == 0){
       dif = now.getMonth() - questionedOn.getMonth();
       i+=1;
       if(dif == 0){
         i+=1;
         dif = now.getDay() - questionedOn.getDay();
         if(dif == 0){
           i+=1;
           dif = now.getHours() - questionedOn.getHours();
           if(dif == 0){
             i+=1;
             dif = now.getMinutes() - questionedOn.getMinutes();
             }
           }
         }
       }
       if(dif.toString()=="0"){
         return "just now"
       }
       else if(dif.toString() == "1"){
         return dif.toString()+unit[i+6]
       }
       else{
         return dif.toString()+unit[i]
       }
   }

  

  
  ngOnInit(): void {
  }

}
