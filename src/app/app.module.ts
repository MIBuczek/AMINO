import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './views/home/home.component';
import { OffertComponent } from './views/offert/offert.component';
import { ReferenceComponent } from './views/reference/reference.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { LangSwitcherComponent } from './components/lang-switcher/lang-switcher.component';
import { CompanyComponent } from './views/company/company.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { PartnersComponent } from './components/partners/partners.component';
import { TextComponent } from './components/text/text.component';
import { CardComponent } from './components/card/card.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { PostComponent } from './components/post/post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffertComponent,
    ReferenceComponent,
    BlogComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    LangSwitcherComponent,
    CompanyComponent,
    NotFoundComponent,
    CarouselComponent,
    PartnersComponent,
    TextComponent,
    CardComponent,
    BreadcrumbsComponent,
    PostComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, CarouselComponent],
})
export class AppModule {}
