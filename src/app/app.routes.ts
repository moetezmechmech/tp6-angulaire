import { Routes } from '@angular/router';
import { AddCoursComponent } from './add-cours/add-cours';
import { CoursComponent } from './cours/cours';
import { UpdateCoursComponent} from './update-cours/update-cours';
import { RechercheParSectionComponent } from './recherche-par-section/recherche-par-section.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { Register } from './register/register';


export const routes: Routes = [
  { path: 'cours', component: CoursComponent },
  { path: 'add-cours', component: AddCoursComponent },
  { path: 'update-cours/:id', component: UpdateCoursComponent },
  { path: "rechercheParSection", component: RechercheParSectionComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  {path:'register',component:Register},
  { path: '', redirectTo: 'cours', pathMatch: 'full' }
];

