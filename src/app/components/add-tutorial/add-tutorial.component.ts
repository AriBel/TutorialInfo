import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorial: Tutorial = {
    title: "",
    description: "",
    published: false
  };

  submitted: boolean = false;

  
  constructor(private tutorialService : TutorialService) {
    
  }

  saveTutorial()
  {
    const data : Tutorial = {
      title : this.tutorial.title,
      description: this.tutorial.description
    }

    this.tutorialService.addTutorial(data).subscribe({
      next: (res) => 
      {
        console.log(res);
        this.submitted = true;
      },
      error: (err) => console.log(err)
    });

  }

  newTutorial()
  {
    this.tutorial = {
      title: "",
      description: "",
      published: false
    };

    this.submitted = false;
  }



}
