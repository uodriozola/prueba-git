import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
