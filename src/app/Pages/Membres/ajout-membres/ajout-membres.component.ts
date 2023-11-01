import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'app/Shared/Models/Membre';
import { MembreService } from 'app/Shared/Services/membre.service';

@Component({
  selector: 'app-ajout-membres',
  templateUrl: './ajout-membres.component.html',
  styleUrls: ['./ajout-membres.component.css']
})
export class AjoutMembresComponent implements OnInit {
  newMember:Member=new Member();
  constructor(private memberService:MembreService,private router:Router) { }

  ngOnInit(): void {
  }
  createMember(): void {
    this.memberService.createMember(this.newMember)
      .subscribe((createdMember: Member) => {
        console.log('Membre créée:', createdMember);
        this.newMember = new Member();
      });
      this.router.navigate(['/Membres']);
 this.memberService.getMembers().subscribe();
  }
}
