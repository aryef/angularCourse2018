import { Directive, Input, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColored]' //the [] means that it is the directive usage
})
export class ColoredDirective implements OnInit{
   

    @Input("appColored")  //usage <h1 appColored>Northwind</h1>  or <h1 appColored="red">Northwind</h1>
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

 @HostListener("mouseenter")
 public onMouseEnter()
 {
     this.renderer2.setStyle(this.elementRef.nativeElement, "color", "yellow");

 }
 
 @HostListener("mouseleave")
 public onMouseLeave()
 {
    this.renderer2.setStyle(this.elementRef.nativeElement, "color",this.color);
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
