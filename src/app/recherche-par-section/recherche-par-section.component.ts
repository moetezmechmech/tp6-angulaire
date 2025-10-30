import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoursService } from '../service/cours.service';
import { Cours } from '../model/cours.model';
import { Section } from '../model/section.model';

@Component({
  selector: 'app-recherche-par-section',
  standalone: true, // ⚠️ seulement si ton app utilise standalone components
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './recherche-par-section.html',
  styles: []
})
export class RechercheParSectionComponent implements OnInit {
  courss!: Cours[];
  IdSection: number = 0;
  section!: Section[];

  constructor(private coursService: CoursService) {}

  ngOnInit(): void {
    this.section = this.coursService.listSection();
    this.courss = this.coursService.listCours();
  }

  onChange(): void {
    if (this.IdSection === 0) {
      this.courss = this.coursService.listCours();
    } else {
      this.courss = this.coursService.rechercherParSection(this.IdSection);
    }
  }

  supprimerCours(c: Cours): void {
    const conf = confirm("Êtes-vous sûr ?");
    if (conf) {
      this.coursService.supprimerCours(c);
      this.onChange();
    }
  }
}
