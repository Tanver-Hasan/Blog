import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from "../shared/material/material.module";
import { NgxGistModule } from "ngx-gist/dist/ngx-gist.module";
import { AngularUniversalComponent } from "./angular-universal/angular-universal.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "eC6HeSHyZetEKkAwtIEz", component: ReactiveFormComponent },
      { path: "universaldemo", component: AngularUniversalComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxGistModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReactiveFormComponent, AngularUniversalComponent]
})
export class BlogsModule { }
