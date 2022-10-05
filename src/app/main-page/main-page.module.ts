import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { MainPageComponent } from './main-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialExampleModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, BrowserModule, MaterialExampleModule,RouterModule
    //AppModule
  ],
  declarations: [MainPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainPageModule { }