import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appColored]' //the [] means that it is the directive usage
})
export class ColoredDirective implements OnInit{
   

    @Input()
    public color: string;

    //angula service which referemces host element
    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {

        if(!this.color)
        {
            this.color=this.getRandomColor()
        }
        
    this.elementRef.nativeElement.style.color = this.color;
 }

 private getRandomColor():string{

    let red=Math.floor(256*Math.random());
    let green=Math.floor(256*Math.random());
    let blue=Math.floor(256*Math.random());

    let color ="rgb("+red+ "," +green+","+ blue+ ")"
    return color;
 }

}
