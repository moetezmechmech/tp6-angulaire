import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursService } from '../service/cours.service';
import { Cours } from '../model/cours.model';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-nom.component.html',
  styleUrls:[]
})
export class RechercheParNomComponent implements OnInit {

  cours: Cours[] = [];
  allCours: Cours[] = [];
  nomCours: string = '';

  constructor(private coursService: CoursService) {}

  ngOnInit(): void {
    // On récupère la liste complète des cours (locale)
    this.allCours = this.coursService.listCours();
    this.cours = this.allCours;
  }

  // 🧠 Méthode déclenchée à chaque frappe
  onKeyUp(filterText: string) {
    const text = filterText.toLowerCase();
    this.cours = this.allCours.filter(c =>
      c.nomCours.toLowerCase().includes(text)
    );
  }
}
