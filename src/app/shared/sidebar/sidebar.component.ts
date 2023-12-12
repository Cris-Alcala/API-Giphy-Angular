import { Component } from '@angular/core';
import { GifService } from '../../gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private service:GifService) {}
  history:string[] = this.service.history;
  getData(search:string) {
    this.service.getData(search);
  }
}
