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

	hero: Hero
	prevHeroId: number
	nextHeroId: number
	prevHeroButtonVisible: boolean
	nextHeroButtonVisible: boolean

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private heroService: HeroService) {
		this.prevHeroButtonVisible = true
		this.nextHeroButtonVisible = true
	}

	ngOnInit() {
		this.router.routeReuseStrategy.shouldReuseRoute = () => false
		this.router.onSameUrlNavigation = 'reload'

		let heroId: number = Number(this.route.snapshot.paramMap.get('id'))
		let heroLength = this.heroService.getHeroesLength()

		try {
			if (heroId < 1 || heroId > heroLength || isNaN(heroId))
				throw new Error('Hero index out of range')

			this.hero = this.heroService.getHeroById(heroId)

			this.prevHeroId = this.hero.id - 1
			this.nextHeroId = this.hero.id + 1
			if (this.prevHeroId < 1) this.prevHeroButtonVisible = false
			if (this.nextHeroId > heroLength) this.nextHeroButtonVisible = false

		} catch (e) {
			this.router.navigate(['404'])
		}
	}
}
