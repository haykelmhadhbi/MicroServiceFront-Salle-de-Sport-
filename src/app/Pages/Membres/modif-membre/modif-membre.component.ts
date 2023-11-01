import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'app/Shared/Models/Membre';
import { MembreService } from 'app/Shared/Services/membre.service';

@Component({
  selector: 'app-modif-membre',
  templateUrl: './modif-membre.component.html',
  styleUrls: ['./modif-membre.component.css']
})
export class ModifMembreComponent implements OnInit {
  membreId: any; 
  newMember:Member=new Member();
  constructor( private membreService: MembreService,
    private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.membreId = params.get('id');
      console.log(this.membreId); 
      this.loadMember();
    });
  }
  loadMember(): void {
    this.membreService.getOneMember(this.membreId)
      .subscribe((data: Member) => {
        this. newMember = data;
      });
  }

  updateMember(): void {
    this.membreService.updateMember(this. newMember)
      .subscribe((updatedEvenement: Member) => {
        console.log('Member mis à jour :', updatedEvenement);
      });
      this.router.navigate(['/Membres']);
      this.membreService.getMembers().subscribe();
  }
}
