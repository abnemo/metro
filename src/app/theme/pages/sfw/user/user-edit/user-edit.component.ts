import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileItem } from '../../../../../shared/interfaces/file/file-item.interface';
import { UserService } from '../../../../../shared/services/user/user.service';
import { FileUploaderOptions } from '../../../../../shared/interfaces/file/file-uploader-options.interface';
import { IUser } from '../../../../../shared/interfaces/user.interface';
import { FormBuilder } from '@angular/forms';
import { ArticleService } from '../../../../../shared/services/article/article.service';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: 'user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  public user: IUser;

  public objectType: string = 'user';
  public showUploader: boolean = false;

  public uploaderOptions: FileUploaderOptions = {
    removeAfterUpload: true,
    uploadFolder: this.objectType,
    autoUpload: true,
    multipleUpload: false,
    showQueue: false,
    showDropZone: false,
    allowedFileType: ['image']
  };

  constructor(private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    public articleService: ArticleService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { user: IUser }) => {
      this.user = data.user;
      this.uploaderOptions.uploadFolder = this.uploaderOptions.uploadFolder + '/' + this.user.id;
    });
  }

  saveUser() {
    let action;
    if (this.user.id) {
      action = this.userService.updateUser(this.user.id, this.user);
    } else {
      action = this.userService.createUser(this.user);
    }

    action.then(() => this.router.navigate(['list']).then());
  }

  cancel() {
    this.router.navigate(['list']).then();
  }

  uploadCompleted(fileItem: FileItem) {
    console.log('toDo');
    console.log(fileItem);
    // this.user.photoURL = fileItem.url;
    // this.userService.updateUser(this.user.id, this.user).then();
  }

  /* uploadCompleted(fileItem: FileItem) {
    this.user.photoURL = fileItem.url;
    // Update profile Image if user === currentUser
    if (this.user.id === this.authService.id) {
      this.afAuth.auth.currentUser.updateProfile({
        displayName: this.afAuth.auth.currentUser.displayName,
        photoURL: fileItem.url
      });
    }
    this.userService.updateUser(this.user.id, this.user);
  } */

}
