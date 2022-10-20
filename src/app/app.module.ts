import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatGridListModule } from '@angular/material/grid-list';
import { DatetoagePipe } from './pipes/datetoage.pipe';
import { EducationComponent } from './components/education/education.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DashboardComponent,
		HeaderComponent,
		SidenavComponent,
  DatetoagePipe,
  EducationComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule,
		BrowserAnimationsModule,
		MatGridListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
