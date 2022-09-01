import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
	selector: 'auth-area',
	templateUrl: './auth-area.component.html',
	styleUrls: ['./auth-area.component.scss']
})
export class AuthAreaComponent implements OnInit {

	currentUser: User | null | undefined

	constructor(
		@Inject(DOCUMENT) public document: Document,
		public auth: AuthService
	) {
		this.auth.user$.subscribe(user => this.currentUser = user)
	}

	ngOnInit(): void {
	}
}
