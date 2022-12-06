import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/pages/page-not-found/page-not-found.component';
import { AboutPageComponent } from '@core/pages/about-page/about-page.component';
import { UserProfilePageComponent } from '@features/auth/user-profile-page/user-profile-page.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
	{ path: 'about', component: AboutPageComponent },
	{ path: 'profile', component: UserProfilePageComponent, canActivate: [AuthGuard] },
	{ path: '404', component: PageNotFoundComponent },
	{ path: 'heroes', loadChildren: () => import('@features/heroes/heroes.module').then((m) => m.HeroesModule) },
	{ path: '', pathMatch: 'full', redirectTo: 'heroes' },
	{ path: '**', pathMatch: 'full', redirectTo: '404' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
