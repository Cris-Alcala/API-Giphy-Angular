import { Component, Input } from '@angular/core';
import { GIF } from '../../interfaces/GIF';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css'
})
export class CardlistComponent {
  @Input() gifs:GIF[]=[];
}
