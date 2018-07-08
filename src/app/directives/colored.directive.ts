import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColored]' //the [] means that it is the directive usage
})
export class ColoredDirective implements OnInit{
   

    @Input()
    public color: string;

    //angula service which referemces host element
    constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

    ngOnInit(): void {

        if(!this.color)
        {
            this.color=this.getRandomColor()
        }

    //this.elementRef.nativeElement.style.color = this.color;
    this.renderer2.setStyle(this.elementRef.nativeElement, "color", this.color);
    
 }

 private getRandomColor():string{

    let red=Math.floor(256*Math.random());
    let green=Math.floor(256*Math.random());
    let blue=Math.floor(256*Math.random());

    //let color ="rgb("+red+ "," +green+","+ blue+ ")"
    let color =`rgb(${red},${green},${blue})`;
    return color;
 }

}
