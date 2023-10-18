import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode : boolean = false;

  @Input() currentTutorial : Tutorial = 
  {
    title: "",
    description: "",
    published: false
  }

  message: string = "";

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router 
    ) {
    
  }

  ngOnInit(): void {
    if(!this.viewMode)
    {
      this.message = "";
      const id = +this.route.snapshot.params["id"];

      this.getTutorial(id);
    }
  }

  getTutorial(id: number)
  {
    this.tutorialService.getTutorial(id).subscribe({
      next: (data) =>
      {
        console.log(data);
        this.currentTutorial = data;
      },
      error: (err) => console.log(err)
    });
  }

  updateStatus(status: boolean)
  {
    const data = {
      tutorialId: this.currentTutorial.tutorialId,
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    }

    this.message = "";

    this.tutorialService.updateTutorial(+this.currentTutorial.tutorialId!, data).subscribe({
      next: (res) => {
        console.log(res);
        this.message = this.message ? this.message : "Tutorial status updated successfully!";
      },
      error: (err) => console.log(err)
    });
  }

  updateTutorial()
  {
    let data = this.currentTutorial;
    data.tutorialId = this.currentTutorial.tutorialId;

    this.message = "";

    this.tutorialService.updateTutorial(+this.currentTutorial.tutorialId!, data).subscribe({
      next: (res) => {
        console.log(res);
        this.message = this.message ? this.message : "Tutorial updated successfully!";
      },
      error: (err) => console.log(err)
    });
  
  }

  deleteTutorial()
  {
    this.tutorialService.deleteTutorial(+this.currentTutorial.tutorialId!).subscribe({
      next: (res) =>
      {
        console.log(res);
        this.router.navigate(["/tutorials"]);
      },
      error: (err) => console.log(err)
    })
    
  }

 


}
