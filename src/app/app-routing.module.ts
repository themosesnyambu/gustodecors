import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DnaIndexComponent } from './components/dna/dna-index/dna-index.component';
import { LightIndexComponent } from './components/lighting/light-index/light-index.component';
import { RebuildIndexComponent } from './components/rebuilds/rebuild-index/rebuild-index.component';
import { JoinIndexComponent } from './components/join/join-index/join-index.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'ourworld', component: DnaIndexComponent },
  { path: 'lighting', component: LightIndexComponent },
  { path: 'rebuild', component: RebuildIndexComponent },
  { path: 'joinus', component: JoinIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

