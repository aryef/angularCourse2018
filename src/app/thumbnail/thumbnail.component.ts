import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

    @Input()
    public source:string;

    @Input()
    public picWidth:number;
    @Input()
    public picHeight:number;
    
  constructor() { }

  ngOnInit() {
  }

}