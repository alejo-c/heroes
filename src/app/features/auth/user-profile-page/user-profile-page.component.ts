import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
	selector: 'user-profile-page',
	templateUrl: './user-profile-page.component.html',
	styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

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
