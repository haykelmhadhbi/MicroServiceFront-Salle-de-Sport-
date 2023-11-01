import { Component, OnInit } from '@angular/core';
import { Member } from 'app/Shared/Models/Membre';
import { MembreService } from 'app/Shared/Services/membre.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {
  Allmembers:Member[]=[];
  constructor(private memberService:MembreService) { }

  ngOnInit(): void {
    this.getAllMembers();
  }
  getAllMembers(){
    this.memberService.getMembers().subscribe(
    data=>this.Allmembers=data
    )
    console.log(this.Allmembers)
  }
  delete(d:Member){
    console.log(d);
    this.memberService.deleteMember(d).subscribe(()=>this.memberService.getMembers().subscribe(
      res=>this.Allmembers=res))
      window.location.reload();
  }
}
