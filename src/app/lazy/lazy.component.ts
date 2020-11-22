import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lazy",
  template: `<span>{{ testString }}</span>`,
  styles: [],
})
export class LazyComponent implements OnInit {
  public testString = $localize`Test`;
  constructor() {}

  ngOnInit(): void {}
}
