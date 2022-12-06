import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '@features/heroes/services/hero.service';

@Component({
	selector: 'search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

	constructor(private router: Router,
		private heroService: HeroService) { }

	ngOnInit(): void {
	}

	public searchHero(search: NgForm): void {
		this.heroService.setSelectedHeroes(search.value.heroName)

		this.router.routeReuseStrategy.shouldReuseRoute = () => false
		this.router.onSameUrlNavigation = 'reload'

		if (this.heroService.getSelectedHeroesIndexes().length == 0) {
			this.router.navigate(['404'])
			return
		}

			
	}
}
