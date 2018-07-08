import { Component, OnInit, OnDestroy } from '@angular/core';
import { LikeService } from '../services/like.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
   

    public likes: number=0;
  constructor(private likeService:LikeService) { }

  private subscription: Subscription;


  ngOnInit() {
      this.subscription = this.likeService.likesReporter.subscribe(count=>{
          if(count===undefined)
          {
              this.likes = 0;
          }
          else{
          this.likes+=count;

          }
      });
  }

  ngOnDestroy(): void {
        
    this.subscription.unsubscribe();
  }

}
