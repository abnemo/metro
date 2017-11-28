import { NgModule } from '@angular/core';
import { MediaUploaderComponent } from './media-uploader/media-uploader.component';
import { MediaGalleryItemComponent } from './media-gallery-item/media-gallery-item.component';
import { MediaGalleryComponent } from './media-gallery/media-gallery.component';
import { MediaCenterComponent } from './media-center/media-center.component';
import { MediaThumbnailComponent } from './media-thumbnail/media-thumbnail.component';
import { MediaGalleryListComponent } from './media-gallery-list/media-gallery-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FileDropDirective } from '../../../../shared/_directives/file-drop/file-drop.directive';
import { FileSelectDirective } from '../../../../shared/_directives/file-select/file-select.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineEditComponent } from '../input/inline-edit/inline-edit.component';
import { FilterByGalleryPipe } from '../../../../shared/pipes/filter-by-gallery.pipe';
import { NgPipesModule } from 'ngx-pipes';
import { MediaGalleryFormComponent } from './media-gallery-form/media-gallery-form.component';
import { SidebarModule } from 'ng-sidebar';
import { MediaUploaderUnsplashComponent }
  from './media-uploader/media-uploader-unsplash/media-uploader-unsplash.component';
import { MediaLinkUploaderComponent } from './media-uploader/media-link-uploader/media-link-uploader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgPipesModule,
    ReactiveFormsModule,
    SidebarModule,
    TranslateModule
  ],
  declarations: [
    FileDropDirective,
    FileSelectDirective,
    FilterByGalleryPipe,
    // ImagePreviewDirective,
    InlineEditComponent,
    MediaCenterComponent,
    MediaGalleryComponent,
    MediaGalleryFormComponent,
    MediaGalleryListComponent,
    MediaGalleryItemComponent,
    MediaLinkUploaderComponent,
    MediaThumbnailComponent,
    MediaUploaderComponent,
    MediaUploaderUnsplashComponent
  ],
  exports: [
    FileDropDirective,
    FileSelectDirective,
    InlineEditComponent,
    FilterByGalleryPipe,
    // ImagePreviewDirective,
    MediaUploaderComponent,
    MediaGalleryComponent,
    MediaGalleryItemComponent,
    MediaGalleryListComponent,
    MediaCenterComponent,
    MediaThumbnailComponent
  ]
})

export class MediaModule {
}
