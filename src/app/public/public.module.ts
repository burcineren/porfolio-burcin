import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectsComponent } from './components/projects/projects.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    TechStackComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [AboutComponent]
})
export class PublicModule { }
