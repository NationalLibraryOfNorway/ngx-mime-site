import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatTooltipModule,
  MatListModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatListModule
  ],
})
export class MimeSiteMaterialModule { }
