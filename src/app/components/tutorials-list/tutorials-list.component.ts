import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent {

  tutorials: Tutorial[] = [];

  currentTutorial : Tutorial = {};

  currentIndex = -1;

  title: string = '';



  constructor(private tutorialService: TutorialService) {
    
  }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials()
  {
    this.tutorialService.getAll().subscribe({
      next: (data) =>
      {
        console.log(data);
        this.tutorials = data
      },
      error: (err) => console.log(err)
    })
  }

  refreshList()
  {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setCurrentTutorial(tutorial: Tutorial, index: number)
  {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  deleteAllTutorials()
  {
    this.tutorialService.deleteAllTutorials().subscribe({
      next: (res) => 
      {
        console.log(res);
        this.refreshList();
      },
      error: (err) => console.log(err)
      
    })
  }

  findByTitle()
  {
    this.tutorialService.searchByTitle(this.title).subscribe({
      next: (data) => 
      {
        console.log(data);
        this.currentTutorial = {};
        this.tutorials = data;

      },
      error: (err) => console.log(err)
    })

  }

}
