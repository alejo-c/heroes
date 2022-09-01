import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'app-hero-detail-page',
	templateUrl: './hero-detail-page.component.html',
	styleUrls: ['./hero-detail-page.component.scss']
})
export class HeroDetailPageComponent implements OnInit {

	hero: Hero;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private heroService: HeroService) { }

	ngOnInit() {
		try {
			let heroId = Number(this.route.snapshot.paramMap.get('id'))
			let heroLength = this.heroService.getHeroesLength()

			if (heroId < 1 || heroId > heroLength || isNaN(heroId))
				throw new Error('Hero index out of range')

			this.hero = this.heroService.getHero(Number(heroId))
		} catch (e) {
			this.router.navigate(['404'])
		}
	}
}
