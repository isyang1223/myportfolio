
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor() { }
  @Output() BackEventEmitter = new EventEmitter()
  ngOnInit() {
  }
  clickBack() {
    this.BackEventEmitter.emit()
  }

}
