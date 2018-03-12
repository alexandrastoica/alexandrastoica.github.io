import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { BroccoliComponent } from './broccoli/broccoli.component';
import { PotatoconComponent } from './potatocon/potatocon.component';
import { DeatComponent } from './deat/deat.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'broccoli', component: BroccoliComponent },
  { path: 'deatapp', component: DeatComponent },
  { path: 'potatocon', component: PotatoconComponent },
  { path: '**', redirectTo: '', component: HomeComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ]
})
export class AppRoutingModule {}
