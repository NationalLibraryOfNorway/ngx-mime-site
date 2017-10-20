import { Component, AfterViewInit, ViewChild, Inject, ComponentFactoryResolver } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MimeViewerComponent, MimeViewerConfig } from '@nationallibraryofnorway/ngx-mime';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements AfterViewInit {
  public manifestUri: string;
  public mimeConfig = new MimeViewerConfig({
    attributionDialogHideTimeout: 3
  });
  @ViewChild(MimeViewerComponent)
  private mime: MimeViewerComponent;


  constructor(public dialogRef: MatDialogRef<ViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private r: ComponentFactoryResolver) {
    this.manifestUri = data.manifestUri;
  }

  ngAfterViewInit() {
    const factory = this.r.resolveComponentFactory(CloseButtonComponent);
    this.mime.mimeHeaderBeforeRef.createComponent(factory);
  }

}

@Component({
  template: `
    <button mat-icon-button class="close-button" [attr.aria-label]="close" [matTooltip]="close" [matDialogClose]="true">
      <mat-icon>close</mat-icon>
    </button>
  `,
  styles: ['close-button { padding-left: 16px; }']
})
export class CloseButtonComponent { }
