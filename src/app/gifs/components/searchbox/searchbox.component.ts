import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {
  @ViewChild('searchBox') searchText!:ElementRef<HTMLInputElement>
  constructor(private service:GifService) {}
  searchGif() {
    this.service.getData(this.searchText.nativeElement.value);
    this.searchText.nativeElement.value='';
  }
}
