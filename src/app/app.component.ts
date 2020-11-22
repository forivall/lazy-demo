import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
    <div>
      <a [routerLink]="['lazy']">Load Lazy</a>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "lazy-demo";
}
