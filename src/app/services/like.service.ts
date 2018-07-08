import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

    private likesreporterSubject: Subject<number> = new Subject<number>();
  constructor() { }


  public addLike (): void{

    this.likesreporterSubject.next(1)
  }

  public removeLike (): void{

    this.likesreporterSubject.next(-1);
  }

  public resetLikes(){
      this.likesreporterSubject.next();
  }

  public get likesReporter(): Subject<number>{
      return this.likesreporterSubject;
  }
}
