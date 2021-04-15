import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BannerComponent } from './wrapper/banner/banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from './wrapper/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    WrapperComponent,
    BannerComponent,
    ProjectsComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
