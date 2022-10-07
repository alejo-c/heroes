import { Injectable } from '@angular/core';
import heroesJson from '@assets/static/heroes.json';
import { Hero } from '../interfaces/hero';

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	private heroes: Hero[] = heroesJson
	private selectedHeroesIndexes: number[]

	constructor() {
		this.selectedHeroesIndexes = [...Array(this.heroes.length).keys()].map(i => i + 1)
	}

	getHeroesLength(): number {
		return this.heroes.length
	}

	getHero(id: number): Hero {
		return this.heroes[id - 1]
	}

	setSelectedHeroes(subString: string) {
		this.selectedHeroesIndexes = this.heroes
			.filter(
				hero => hero.name.toLocaleLowerCase()
					.includes(subString.toLocaleLowerCase())
			).map(hero => hero.id)
	}

	getSelectedHeroesIndexes(): number[] {
		return this.selectedHeroesIndexes
	}

	getHeroesIndexes(): number[] {
		return this.selectedHeroesIndexes
	}
}
