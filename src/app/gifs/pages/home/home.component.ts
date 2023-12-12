import { Component } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { GIF } from '../../interfaces/GIF';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service:GifService) {}
  get getGIFS():GIF[] {
    return this.service.arrayGifs;
  }
}
