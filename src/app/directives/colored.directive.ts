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
    this.elementRef.nativeElement.style.color = this.color;
 }

}
