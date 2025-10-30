import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cours } from '../model/cours.model';
import { CoursService } from '../service/cours.service';
import { Section } from '../model/section.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cours',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-cours.html',
  styles: ``
})
export class AddCoursComponent implements OnInit {
  newCours = new Cours();
  section!: Section[];
  newIdCat!: number;
  newSection!: Section;
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private coursService: CoursService, private router: Router) {}

  ngOnInit(): void {
    this.section = this.coursService.listSection();
    this.myForm = this.fb.group({
      idCours: ["", [Validators.required]],
      nomCours: ["", [Validators.required, Validators.minLength(3)]],
      prixCours: ["", [Validators.required]],
      dateCreation: ["", [Validators.required]],
      idCat: ["", [Validators.required]],
      emailEnseignant: ["", [Validators.required, Validators.email]]
      });
    }
    idExist(id: number): boolean {
    return this.coursService.listCours().some((c) => c.idCours == id);
  }

  addCours() {
    this.newSection = this.coursService.consulterSection(this.newIdCat);
    this.newCours.section = this.newSection;
    this.coursService.addCours(this.newCours);
    this.router.navigate(['cours']);
  }
}
