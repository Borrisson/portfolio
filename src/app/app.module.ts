import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BannerComponent } from './wrapper/banner/banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from './wrapper/projects/projects.component';
import { CtaComponent } from './wrapper/cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { HoverClassDirective } from './wrapper/cta/hover-class.directive';
import { AboutComponent } from './wrapper/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    WrapperComponent,
    BannerComponent,
    ProjectsComponent,
    CtaComponent,
    FooterComponent,
    HoverClassDirective,
    AboutComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
