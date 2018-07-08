import { Component, OnInit } from '@angular/core';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

    public image: string = "likable.jpg"

  constructor(private likeService:LikeService) { }

  public toggleLike():void{
      if (this.image === "likable.jpg")
      {
          this.image="like.jpg";
        this.likeService.addLike();

      }
      else{
          this.image= "likable.jpg";
            this.likeService.removeLike();
      }
  }
  ngOnInit() {
  }

}
