import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {

    public myDiscount: number
    public myCurrentDate:Date
    public myImageWidth:number = 200;
    public bananaStyling;
    public peachStyling;
    public redStyling;
    public isWinter:boolean;
    public grapesColor:string;
    public vegetables:string[];

   
    ngOnChanges(changes: SimpleChanges): void {
       //
    }
  
    public constructor(private title:Title) { }

  public ngOnInit() {


    this.title.setTitle("my Arye North Harta");
    
      this.myDiscount=12;
      this.myCurrentDate = (new Date());
      // it gets css classes as input; [ngClass] --- used in html
      this.bananaStyling = {"yellowish":true,"boldish":true  }
      this.redStyling={"reddish":true,"boldish":true  }
      //this gets specific properties - [ngStyle] used in html
      this.peachStyling={"color":"orange", "text-decoration":"underline", "font-weight":"bold", "font-size":"30px"};

      this.isWinter = this.myCurrentDate.getMonth()<3|| this.myCurrentDate.getMonth()>9;
        this.grapesColor= "red";
    this.vegetables=["coco", "moco", "toco"]

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
