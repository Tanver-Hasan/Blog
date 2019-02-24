import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { AuthService } from "../auth/auth.service";


@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(public auth: AuthService) { }

  ngOnInit() {


  }

  login() {
    this.auth.login();
  }

}
