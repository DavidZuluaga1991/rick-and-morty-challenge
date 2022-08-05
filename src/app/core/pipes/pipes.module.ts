import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidentPipe } from './resident/resident.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResidentPipe],
  exports: [ResidentPipe]
})
export class PipesModule { }
