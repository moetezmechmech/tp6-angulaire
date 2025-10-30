import { Component, OnInit } from '@angular/core';
import { CoursService } from '../service/cours.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from '../model/cours.model';
import { Section } from '../model/section.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-cours',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-cours.html',
  styles: ``
})
export class UpdateCoursComponent implements OnInit {
  currentCours!: Cours;
  Section!: Section[];
  updateCatId!: number;

  constructor(
    private coursService: CoursService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Section = this.coursService.listSection();
    this.currentCours = this.coursService.consulterCours(
      this.activatedRoute.snapshot.params['id']
    );
    this.updateCatId = this.currentCours?.section?.idCat ?? 0;
  }

  updateCours() {
    this.currentCours.section= this.coursService.consulterSection(
      this.updateCatId
    );
    this.coursService.updateCours(this.currentCours);
    this.router.navigate(['cours']);
  }
}