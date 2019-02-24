import { Component, OnInit } from "@angular/core";
import { BlogsService } from "../service/blogs.service";
import { map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  lists: Observable<{}[]>;


  constructor(private blog: BlogsService) { }

  ngOnInit() {
    this.lists = this.blog.blogList.pipe(
      switchMap(x => this.blog.getList(x))
    );
  }

}
