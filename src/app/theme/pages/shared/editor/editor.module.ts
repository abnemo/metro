import { NgModule } from '@angular/core';
// import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    CKEditorModule
  ],
  declarations: [
    // Ng2Summernote
  ],
  exports: [
    CKEditorModule,
    // Ng2Summernote
  ],
  providers: []
})
export class EditorModule {
}
