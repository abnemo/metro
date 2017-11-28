import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'media-uploader-unsplash',
  templateUrl: './media-uploader-unsplash.component.html'
})
export class MediaUploaderUnsplashComponent implements OnInit {

  @Output() _toggleOpened = new EventEmitter(false);

  constructor() { }

  ngOnInit() {
  }

}
