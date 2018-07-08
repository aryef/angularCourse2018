import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
//structural directive example
@Directive({
  selector: '[appSeason]'
})
export class SeasonDirective implements OnInit{

    ngOnInit(): void {
       
        if(this.season === this.getCurrentSeason())
        {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else
        {
            this.viewContainerRef.clear();
        }
    }

    @Input("appSeason")
    public season: string;
  constructor(private templateRef:TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  private getCurrentSeason():string {
      let d= new Date();

      let month = d.getMonth()+1;
      if(month >=4 && month<=5)
      {
          return "spring";
      }

      if(month>=6 && month<=9)
      {
          return "summer";
      }

      if(month>=10 && month <=11)
      {
          return "autumn";
      }
      return "winter";
  }
}
