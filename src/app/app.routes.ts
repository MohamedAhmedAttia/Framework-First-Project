import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title:'Assignment1:Home' },
    {path: 'contact', component: ContactComponent, title:'Assignment1:Contact'},
    {path:'portfolio', component: PortfolioComponent ,title:'Assignment1:Portfolio'},
    {path:'about', component:AboutComponent, title:'Assignment1:About'},
    {path: '**', component: NotFoundComponent , title:'Assignment1:404'}
];
