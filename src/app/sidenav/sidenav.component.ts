import { Component, OnInit, NgZone } from "@angular/core";
import { BlogsService } from "../service/blogs.service";

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(zone: NgZone, public data: BlogsService) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  changeContent(category: string) {
    console.log(category);
    this.data.changeCategory(category);
  }
}
