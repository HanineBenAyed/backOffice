import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilisateurComponent } from './utilisateur.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UtilisateurComponent }
    ])],
    exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
