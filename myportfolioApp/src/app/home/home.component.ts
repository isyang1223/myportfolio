import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";

import * as $ from "jquery";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  email: any;
  message: any;
  clicked: boolean;

  showcom = true;
  satsuma = false;
  userdashboard = false;
  petshelter = false;
  linkme = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this.clicked = false;
    this.email = { name: "", email: "", message: "" };
    this.message = "";
  }
  clickDetailLinkme() {
    this.showcom = false;
    this.linkme = true;
  }
  clickDetailSatsuma() {
    this.showcom = false;
    this.satsuma = true;
  }
  clickDetailUserdashboard() {
    this.showcom = false;
    this.userdashboard = true;
  }
  clickDetailPetshelter() {
    this.showcom = false;
    this.petshelter = true;
  }

  switchBack() {
    this.showcom = true;
    this.linkme = false;
    this.satsuma = false;
    this.petshelter = false;
    this.userdashboard = false;
  }

  onSubmit() {
    if (
      this.email.name.length > 3 &&
      this.email.name.length < 50 &&
      (this.email.message.length > 19 && this.email.message.length <= 1000)
    ) {
      this.clicked = true;
      let obs = this._httpService.sendEmail(this.email);
      obs.subscribe(data => {
        if ((data as any).message == "Error") {
          console.log(data);
        } else {
          alert("Email Sent!");

          this._router.navigate([""]);
        }
      });
    } else {
      alert("Fill out form properly!");
    }
  }
}
