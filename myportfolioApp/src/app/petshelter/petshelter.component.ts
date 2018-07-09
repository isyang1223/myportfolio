import { Component, OnInit, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-petshelter",
  templateUrl: "./petshelter.component.html",
  styleUrls: ["./petshelter.component.css"]
})
export class PetshelterComponent implements OnInit {
  constructor() {}
  @Output() BackEventEmitter = new EventEmitter();

  ngOnInit() {}
  clickBack() {
    this.BackEventEmitter.emit()
  }

}
