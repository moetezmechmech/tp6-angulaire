import { Section } from "./section.model";
export class Cours {
  idCours!: number;
  nomCours!: string;
  prixCours!: number;
  dateCreation!: Date;
  section?: Section;
  emailEnseignant!: string;
}
