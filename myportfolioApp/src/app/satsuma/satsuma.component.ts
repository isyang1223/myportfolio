import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-satsuma',
  templateUrl: './satsuma.component.html',
  styleUrls: ['./satsuma.component.css']
})
export class SatsumaComponent implements OnInit {

  constructor() { }
  @Output() BackEventEmitter = new EventEmitter()

  ngOnInit() {
  }
  clickBack() {
    this.BackEventEmitter.emit()
  }

}
