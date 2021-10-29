import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  CategoriesList = [
    {
      Id: 1,
      Name: "Basics",
      Description: "Basic question for people new to computer"
    },
    {
      Id: 2,
      Name: "C",
      Description: "Conceptual question regarding C"
    },
    {
      Id: 3,
      Name: "Angular",
      Description: "Conceptual question regarding Angular"
    },
    {
      Id: 4,
      Name: "C#",
      Description: "Conceptual question regarding C#"
    },
    {
      Id: 5,
      Name: "HTML",
      Description: "Conceptual question regarding HTML"
    },
    {
      Id: 6,
      Name: "Js",
      Description: "Conceptual question regarding Js"
    },
    {
      Id: 7,
      Name: "Css",
      Description: "Conceptual question regarding CSS"
    }
    
  ];
  
  CategoryQuestionCount = [
    {
      Id: 1,
      Count: 852
    },
    {
      Id: 2,
      Count: 75
    },
    {
      Id: 3,
      Count: 775
    },
    {
      Id: 4,
      Count: 705
    },
    {
      Id: 5,
      Count: 758
    },
    {
      Id: 6,
      Count: 575
    },{
      Id: 7,
      Count: 175
    }
  ]

  ShowList = [{
    Id: 1,
    Name: "All"
  },
  {
    Id: 2,
    Name: "My Questions"
  },
  {
    Id: 3,
    Name: "My Participation"
  },
  {
    Id: 4,
    Name: "Hot"
  },
  {
    Id: 5,
    Name: "Solved"
  },
  {
    Id: 6,
    Name: "Unsolved"
  }
]

  CategoryShowList = [{
    Id: 1,
    Name: "All"
  },
  {
    Id: 2,
    Name: "Popular"
  },
  {
    Id: 3,
    Name: "Hot"
  }
]
  constructor() {}

  ngOnInit(): void {
  }

}
