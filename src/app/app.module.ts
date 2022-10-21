import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
