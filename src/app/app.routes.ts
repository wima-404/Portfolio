import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
export const routes: Routes = [
    {path:'home', component:HomeComponent, data:{ animation:'HomePage'}},
    {path:'about' , component:AboutComponent, data:{ animation:'AboutPage'}},
    {path:'projects', component:ProjectsComponent, data:{animation:'ProjectPage'}},
    {path:'contact', component:ContactComponent, data:{animation:'ContactPage'}},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'**',redirectTo:'/home'}
];
