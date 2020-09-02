import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeDnaComponent } from './components/home-dna/home-dna.component';
import { HomeWorkComponent } from './components/home-work/home-work.component';
import { RebuildIndexComponent } from './components/rebuilds/rebuild-index/rebuild-index.component';
import { RebuildDesignComponent } from './components/rebuilds/rebuild-design/rebuild-design.component';
import { RebuildDetailComponent } from './components/rebuilds/rebuild-detail/rebuild-detail.component';
import { RebuildFinishingComponent } from './components/rebuilds/rebuild-finishing/rebuild-finishing.component';
import { DnaIndexComponent } from './components/dna/dna-index/dna-index.component';
import { UsComponent } from './components/dna/us/us.component';
import { BirthComponent } from './components/dna/birth/birth.component';
import { VisionComponent } from './components/dna/vision/vision.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    HomeDnaComponent,
    HomeWorkComponent,
    RebuildIndexComponent,
    RebuildDesignComponent,
    RebuildDetailComponent,
    RebuildFinishingComponent,
    DnaIndexComponent,
    UsComponent,
    BirthComponent,
    VisionComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
