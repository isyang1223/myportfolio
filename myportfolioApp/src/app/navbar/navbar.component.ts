import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";

import * as $ from "jquery";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   

    $(document).ready(function() {
      $("#projectsLink").click(function() {
        document.getElementById("projectsLink").classList.add("active");
        document.getElementById("aboutmeLink").classList.remove("active");
        document.getElementById("contactLink").classList.remove("active");
        document.getElementById("skillsLink").classList.remove("active");
      });

      $("#aboutmeLink").click(function() {
        document.getElementById("projectsLink").classList.remove("active");
        document.getElementById("aboutmeLink").classList.add("active");
        document.getElementById("contactLink").classList.remove("active");
        document.getElementById("skillsLink").classList.remove("active");
      });
      $("#contactLink").click(function() {
        document.getElementById("projectsLink").classList.remove("active");
        document.getElementById("aboutmeLink").classList.remove("active");
        document.getElementById("contactLink").classList.add("active");
        document.getElementById("skillsLink").classList.remove("active");
      });
      $("#skillsLink").click(function() {
        document.getElementById("projectsLink").classList.remove("active");
        document.getElementById("aboutmeLink").classList.remove("active");
        document.getElementById("skillsLink").classList.add("active");
        document.getElementById("contactLink").classList.remove("active");
      });
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
        $(".navbar").fadeIn(500);
      } else {
        $(".navbar").fadeOut(500);
      }
    });



  }

}
