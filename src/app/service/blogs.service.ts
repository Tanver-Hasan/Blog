import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { BehaviorSubject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Model } from "./model";

@Injectable({
  providedIn: "root"
})
export class BlogsService {

  private blogListCategory = new BehaviorSubject("Angular");
  blogList = this.blogListCategory.asObservable();

  constructor(private afs: AngularFirestore) {

  }

  changeCategory(message: string) {
    this.blogListCategory.next(message);
  }


  getList(category: string) {
    return this.afs.collection<Model>(category).valueChanges();
  }

}
