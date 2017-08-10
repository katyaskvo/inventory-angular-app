import { Component } from '@angular/core';


@Component({
    selector: 'hm-app',
    template: `
        <div>
          <h1>{{pageTitle}}</h1>
          <hm-products></hm-products>
        </div>
    `
})
export class AppComponent {
  pageTitle : string = 'High End  Monitors'
 }
