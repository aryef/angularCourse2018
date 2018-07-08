import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

    @Input()
    public source:string;



    @Input("picWidth")   //can cnange name of binding if needed
    public picWidth:number;
    
    @Input()
    public picHeight:number;

    @Output()
    public enter: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public leave: EventEmitter<string> = new EventEmitter<string>();
    
  constructor() { }

  public mouseEnter():void{

    this.enter.emit(this.source); //raising the event
  }

  public mouseLeave():void{

    this.leave.emit(this.source); //raising the event
  }


  ngOnInit() {
  }

}
