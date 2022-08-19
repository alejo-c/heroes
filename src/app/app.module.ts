import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AboutPageComponent } from './core/pages/about-page/about-page.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		AboutPageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		AuthModule.forRoot({
			domain: 'dev-s8x1aebe.us.auth0.com',
			clientId: 'S4cuoZXuKFzvhu08B1d8kjLPOQBQ1NiM'
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
