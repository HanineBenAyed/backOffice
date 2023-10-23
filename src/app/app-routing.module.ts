import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { BlogComponent } from './blog/blog.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { EvenementComponent } from './evenement/evenement.component';
import { RessourceComponent } from './ressource/ressource.component';
import { ProfileComponent } from './profile/profile.component';
import { EchangeComponent } from './echange/echange.component';
import { ProgrammeComponent } from './programme/programme.component';
import { PayementComponent } from './payement/payement.component';
import { DetailsPayementComponent } from './details-payement/details-payement.component';
import { ParticipantComponent } from './participant/participant.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'utilisateur', component: UtilisateurComponent },
                    { path: 'ressource', component: RessourceComponent },
                    { path: 'reclamation', component: ReclamationComponent },
                    { path: 'blog/liste', component: BlogComponent },
                    { path: 'evenement/liste', component: EvenementComponent },
                    { path: 'programme', component: EchangeComponent },
                    { path: 'profile', component: ProfileComponent },
                    { path: 'program', component: ProgrammeComponent },
                    { path: 'payement', component: PayementComponent },
                    { path: 'detailspayement/:id', component: DetailsPayementComponent },
                    { path: 'participant/:id', component: ParticipantComponent },




                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
