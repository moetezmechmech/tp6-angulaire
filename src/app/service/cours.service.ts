import { Injectable } from '@angular/core';
import { Cours } from '../model/cours.model';
import { Section } from '../model/section.model';
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  courss: Cours[];
  sections: Section[];
  cours!: Cours;
  coursRecherche!: Cours[];

  constructor() {
    // ✅ Liste Sections
    this.sections = [
      { idCat: 1, nomCat: "Développement Web" },
      { idCat: 2, nomCat: "Design" },
      { idCat: 3, nomCat: "Marketing Digital" },
      { idCat: 4, nomCat: "Finance" },
      { idCat: 5, nomCat: "Technologie de l'informatique" }
    ];

    // ✅ Liste Cours
    this.courss = [
      {
        idCours: 1,
        nomCours: "Angular",
        prixCours: 300,
        dateCreation: new Date("2024-04-12"),
        section: this.sections[0],
        emailEnseignant: "tawfik@gmail.com"
      },
      {
        idCours: 2,
        nomCours: "UI/UX Figma",
        prixCours: 250,
        dateCreation: new Date("2024-05-30"),
        section: this.sections[1],
        emailEnseignant: "mohamed@gmail.com"
      },
      {
        idCours: 3,
        nomCours: "Marketing Ads",
        prixCours: 200,
        dateCreation: new Date("2024-06-10"),
        section: this.sections[2],
        emailEnseignant: "ramzi@gmail.com"
      }
    ];
  }

  // ✅ Retourner tous les cours
  listCours(): Cours[] {
    return this.courss;
  }
  

  // ✅ Ajouter cours
  addCours(cours: Cours): void {
    this.courss.push(cours);
  }

  // ✅ Supprimer cours
  supprimerCours(cours: Cours): void {
    const index = this.courss.indexOf(cours);
    if (index > -1) {
      const conf = confirm("Vous êtes sûr ?");
      if (conf) this.courss.splice(index, 1);
    }
  }

  // ✅ Retourner un cours par ID
  findCours(id: number): Cours {
    this.cours = this.courss.find(c => c.idCours == id)!;
    return this.cours;
  }

  // ✅ Modifier cours
  updateCours(nwCours: Cours): void {
    const index = this.courss.findIndex(c => c.idCours == nwCours.idCours);
    if (index > -1) this.courss.splice(index, 1, nwCours);
  }

  // ✅ Lister sections
  listSection(): Section[] {
    return this.sections;
  }

  // ✅ Retourner section par ID
  consulterSection(id: number): Section {
    return this.sections.find(sec => sec.idCat == id)!;
  }
 consulterCours(id: number): Cours {
  return this.courss.find(c => c.idCours == id)!;
}

  // ✅ Recherche par section
  rechercherParSection(idCat: number): Cours[] {
    this.coursRecherche = [];
    this.courss.forEach(c => {
      if (c.section?.idCat == idCat) this.coursRecherche.push(c);
    });
    return this.coursRecherche;
  }

  // ✅ Recherche par nom
  rechercherParNom(nom: string): Cours[] {
    return this.courss.filter(c =>
      c.nomCours.toLowerCase().includes(nom.toLowerCase())
    );
  }

}
