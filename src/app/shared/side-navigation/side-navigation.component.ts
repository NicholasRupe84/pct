import { Component } from '@angular/core';

@Component({
  selector: 'side-navigation',
  templateUrl: './side-navigation.component.html'
})
export class SideNavigationComponent {
    public isMainCollapsed:boolean = true;
    public isPipingCollapsed:boolean = true;
    public isControlCollapsed:boolean = true;
}
