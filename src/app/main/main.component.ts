import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges, OnDestroy {

    public myDiscount: number
    public myCurrentDate:Date
    public myImageWidth:number = 200;
    public bananaStyling;

    public ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
    ngOnChanges(changes: SimpleChanges): void {
        throw new Error("Method not implemented.");
    }
  
    constructor() { }

  public ngOnInit() {
      this.myDiscount=12;
      this.myCurrentDate = (new Date());
      this.bananaStyling = {"yellowish":true,"boldish":true  }

      /* setInterval(()=>{
          this.myImageWidth +=10;
        }, 1000) */
  }

  public decrease()
{
    this.myImageWidth -=10;
}

public increase()
{
    this.myImageWidth +=10
}

public defaultSize()
{
    this.myImageWidth =200;
}

}
