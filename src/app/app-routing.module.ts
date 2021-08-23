import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BlogComponent } from './views/blog/blog.component';
import { OffertComponent } from './views/offert/offert.component';
import { CompanyComponent } from './views/company/company.component';
import { ReferenceComponent } from './views/reference/reference.component';
import { ContactComponent } from './views/contact/contact.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { PostComponent } from './components/post/post.component';
import { GaleryComponent } from './views/galery/galery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: PostComponent },
  { path: 'oferta', component: OffertComponent },
  { path: 'firma', component: CompanyComponent },
  { path: 'galeria', component: GaleryComponent },
  { path: 'referencje', component: ReferenceComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
