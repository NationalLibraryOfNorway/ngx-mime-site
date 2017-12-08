import { Component, Optional, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private snackBar: MatSnackBar,
    @Optional() private swUpdate: SwUpdate) { }

  ngOnInit() {
    if (this.swUpdate) {
      this.swUpdate.available.subscribe(event => {
        const snackBarRef = this.snackBar.open('New update is available', 'Update now');
        snackBarRef.onAction().subscribe(() => {
          this.swUpdate.activateUpdate().then(() => document.location.reload());
        });
      });
    }

  }
}
