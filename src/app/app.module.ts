import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ContactComponent } from './wrapper/contact/contact.component';

@NgModule({ declarations: [
        AppComponent,
        TopBarComponent,
        WrapperComponent,
        BannerComponent,
        ProjectsComponent,
        CtaComponent,
        FooterComponent,
        HoverClassDirective,
        AboutComponent,
        ContactComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
