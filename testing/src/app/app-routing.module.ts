import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotesComponent } from './components/notes/notes.component';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';
 
const routes: Routes = [
  {path: '', component: NotesComponent} ,
  {path: 'Notes', component: NotesComponent},
  {path: 'About', component : AboutComponent},
  // {path: 'CV', component : ResumeComponent},
  {path: 'Contact', component : ContactComponent},
  {path: 'Miscellaneous', component: MiscellaneousComponent},
  // { path: 'CV', component: RedirectComponent, pathMatch: 'full'},

  {path: "**", component : NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
