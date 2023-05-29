import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { LayoutComponent } from '../layout/layout.component';



@NgModule({
  declarations: [
    LoaderComponent,
    ProfileComponent,
    SocialMediaComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
