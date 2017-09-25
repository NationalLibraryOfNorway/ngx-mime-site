import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy {
  public manifestUri: string;
  private subscriptions: Array<Subscription> = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('init');
    this.subscriptions.push(this.route.paramMap.subscribe(q => {
      this.manifestUri = q.get('manifestUri');
    }));
  }

  ngOnDestroy() {
    console.log('destroy');
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
