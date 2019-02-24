import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule } from "@angular/material";
import { MaterialModule } from "./shared/material/material.module";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Route, Routes } from "@angular/router";
import { FlexComponent } from "./flex/flex.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { MainComponent } from "./main/main.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { BlogsService } from "./service/blogs.service";
import { BlogsModule } from "./blogs/blogs.module";
import { AuthService } from "./auth/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { AngularUniversalComponent } from "./blogs/angular-universal/angular-universal.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LayoutModule } from "@angular/cdk/layout";
const routes: Routes = [
  // { path: "home", component: HomeComponent },
  { path: "list/:id", component: MainComponent },
  { path: "dashbord", component: DashboardComponent },
  { path: "blogs", loadChildren: "./blogs/blogs.module#BlogsModule" },
  { path: "**", redirectTo: "list/angular" }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlexComponent,
    SidenavComponent,
    MainComponent,
    ToolbarComponent,
    AngularUniversalComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    ServiceWorkerModule.register("ngsw-worker.js", { enabled: environment.production }),
    NgbModule.forRoot(),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [BlogsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
