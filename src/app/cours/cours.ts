import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Cours } from '../model/cours.model';
import { CoursService } from '../service/cours.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cours',
  imports: [CommonModule,RouterLink],
  standalone: true,
  templateUrl: './cours.html',
})
export class CoursComponent implements OnInit {
  courss : Cours[];
  constructor(private coursService : CoursService){
    this.courss=coursService.listCours()
  }
 ngOnInit(): void {
   
 }
 supprimerCours(cours : Cours) : void{
  this.coursService.supprimerCours(cours);
 }
 
}
