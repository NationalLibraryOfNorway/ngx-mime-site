import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule
  ],
})
export class MimeSiteMaterialModule { }
