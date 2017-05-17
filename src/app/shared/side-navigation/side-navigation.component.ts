import { Component, Input } from '@angular/core';

@Component({
  selector: 'side-navigation',
  templateUrl: './side-navigation.component.html'
})
export class SideNavigationComponent {
    @Input() isMainCollapsed:boolean = true;
    @Input() isPipingCollapsed:boolean = true;
    @Input() isControlCollapsed:boolean = true;
}
