import { Component, OnInit } from '@angular/core';
import { Coach } from 'app/Shared/Models/Coach';
import { CoachService } from 'app/Shared/Services/coach.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  AllCoachs:Coach[]=[];
  constructor(private coachService: CoachService) { }
     
  ngOnInit(): void {
    this.getAllCoachs();
  }
  getAllCoachs(){
    this.coachService.getCoachs().subscribe(
    data=>this.AllCoachs=data
    )
    console.log(this.AllCoachs)
  }
  
  delete(d:Coach){
    console.log(d);
    this.coachService.deleteCoach(d).subscribe(()=>this.coachService.getCoachs().subscribe(
      res=>this.AllCoachs=res))
      window.location.reload();
  }
}
