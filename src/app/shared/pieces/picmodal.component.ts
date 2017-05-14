import { Component, Input } from '@angular/core';

@Component({
  selector: 'picture-modal',
  templateUrl: './picmodal.component.html'
})
export class PicModalComponent {
    @Input() path;
    @Input() description;
}
