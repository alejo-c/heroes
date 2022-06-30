import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';


@NgModule({
	declarations: [
		HeroCardComponent,
		IndexPageComponent,
		HeroPageComponent
	],
	imports: [
		CommonModule,
		HeroesRoutingModule
	]
})
export class HeroesModule { }
