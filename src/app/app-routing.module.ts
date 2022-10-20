import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  //lazy Loaded modules
  {path: 'education/:id',
    loadChildren: () => import('./components/education/education.module').then(m => m.EducationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
