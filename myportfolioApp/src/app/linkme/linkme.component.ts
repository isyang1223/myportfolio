import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-linkme",
  templateUrl: "./linkme.component.html",
  styleUrls: ["./linkme.component.css"]
})
export class LinkmeComponent implements OnInit {
  constructor() {}
  @Output() BackEventEmitter = new EventEmitter();

  ngOnInit() {}
  clickBack() {
    this.BackEventEmitter.emit()
  }

}
