import { Component, Input } from '@angular/core';
import { GIF } from '../../interfaces/GIF';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() gif!:GIF;
}
