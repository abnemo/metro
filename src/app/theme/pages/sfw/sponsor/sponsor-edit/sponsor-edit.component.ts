import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { CategoryTypeService } from '../../../../../shared/services/category-type/category-type.service';
import { CategoryService } from '../../../../../shared/services/category/category.service';
import { ISponsor } from '../../../../../shared/interfaces/sponsor.interface';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { IMediaItem } from '../../../../../shared/interfaces/media-item.interface';
import { IMediaResponse } from '../../../../../shared/interfaces/media-response.interface';
import { MediaItemService } from '../../../../../shared/services/media/media-item.service';
import { SponsorService } from '../../../../../shared/services/sponsor/sponsor.service';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './sponsor-edit.component.html'
})
export class SponsorEditComponent implements OnInit {

  public sponsor: ISponsor;
  public form: FormGroup;

  private updateMediaItemAfterSave: boolean = false; // set to true if an mediaItem was uploaded to a sponsor with no id

  public isCanceled: boolean = false; // Check if cancel button was clicked
  public isSubmitting: boolean = false; // set to true when the save-Button is pressed

  private mediaItem: IMediaItem;

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private mediaItemService: MediaItemService,
    private sponsorService: SponsorService,
    public categoryTypeService: CategoryTypeService,
    public categoryService: CategoryService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { sponsor: ISponsor }) => this.sponsor = data.sponsor);

    this.form = this.fb.group({
      title: [this.sponsor.title, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      externalLink: this.sponsor.externalLink,
      description: this.sponsor.description,
      assignedCategories: [this.sponsor.assignedCategories, [Validators.required]],
      startDate: this.sponsor.startDate,
      endDate: this.sponsor.endDate,
      internalInfo: this.sponsor.internalInfo
    });

    this.form.valueChanges.subscribe((changes: ISponsor) => {
      this.sponsor.title = changes.title;
      this.sponsor.description = changes.description;
      this.sponsor.externalLink = changes.externalLink;
      this.sponsor.internalInfo = changes.internalInfo;
      this.sponsor.startDate = changes.startDate;
      this.sponsor.endDate = changes.endDate;
      this.sponsor.assignedCategories = changes.assignedCategories;
      this.sponsor.imageUrl = this.mediaItem ? this.mediaItem.url : '';
    });
  }

  saveSponsor() {
    let action;
    this.isSubmitting = true;
    if (this.sponsor.id) {
      action = this.sponsorService.updateSponsor(this.sponsor.id, this.sponsor).then(() => {
        return this.sponsor.id;
      });
    } else {
      action = this.sponsorService.createSponsor(this.sponsor).then((sponsorId: string) => {
        return sponsorId;
      });
    }
    action.then((sponsorId) => {

      if (this.mediaItem) {
        this.mediaItem.assignedItem = sponsorId;
        return this.mediaItemService.updateMediaItem(this.mediaItem.id, this.mediaItem);
      }

      this.form.reset();
      this.isSubmitting = false;
      this.redirectToList();
    });
  }

  cancel() {
    // hochgeladenes Bild löschen, falls eins hochgeladen wurde
    if (this.mediaItem) {
      this.isCanceled = true;
      // delete the saved MediaItem before
      this.mediaItemService.removeMediaItem(this.mediaItem).then(
        () => {
          this.isCanceled = false;
          this.redirectToList();
        });
    } else {
      this.redirectToList();
    }
  }

  setLogo(mediaResponse: IMediaResponse) {
    // evtl. vorhandenes, altes Bild löschen
    if (this.sponsor.imageUrl) {
      this.sponsorService.removeSponsor(this.sponsor, false).then();
    }

    this.mediaItem = mediaResponse.mediaItem;
    if (!this.sponsor.id) {
      this.updateMediaItemAfterSave = true;
    }
    this.sponsor.assignedMediaItem = mediaResponse.mediaItem.id;
    this.sponsor.imageUrl = mediaResponse.mediaItem.url;
  }

  redirectToList() {
    this.router.navigate(['/sponsors/list']).then();
  }

}
