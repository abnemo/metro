import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploaderOptions } from '../../../../../shared/interfaces/file/file-uploader-options.interface';
import { ILocation } from '../../../../../shared/interfaces/location.interface';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: 'location-media.component.html'
})

export class LocationMediaComponent implements OnInit {

  public location: ILocation;
  public objectType = 'location';

  public uploaderOptions: FileUploaderOptions = {
    removeAfterUpload: false,
    uploadFolder: this.objectType,
    autoUpload: false,
    multipleUpload: true,
    showQueue: true,
    showDropZone: false
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { location: ILocation }) => {
      this.location = data.location;
      this.uploaderOptions.uploadFolder = this.uploaderOptions.uploadFolder + '/' + data.location.id;
    });
  }

}

