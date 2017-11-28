import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploaderOptions } from '../../../../../shared/interfaces/file/file-uploader-options.interface';
import { FileItem } from '../../../../../shared/interfaces/file/file-item.interface';
import { MemberService } from '../../../../../shared/services/member/member.service';
import { ClubService } from '../../../../../shared/services/club/club.service';
import { IClub } from '../../../../../shared/interfaces/club.interface';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './member-edit.component.html'
})
export class MemberEditComponent implements OnInit, OnDestroy {

  public member: IMember;
  public members: IMember[];
  public clubs: IClub[];
  public form: FormGroup;

  public uploaderOptions: FileUploaderOptions = {
    uploadFolder: 'member',
    autoUpload: true,
    multipleUpload: false,
    showQueue: false,
    showDropZone: false,
    allowedFileType: ['image']
  };

  private clubSubscription: ISubscription;
  private memberSubscription: ISubscription;

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private clubService: ClubService,
    private memberService: MemberService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { member: IMember }) => this.member = data.member);

    this.clubSubscription = this.clubService.getClubs().subscribe((clubs: IClub[]) => this.clubs = clubs);
    this.memberSubscription = this.memberService.getMembers().subscribe((members: IMember[]) => this.members = members);

    this.form = this.fb.group({
      mainData: this.initMainData(),
      address: this.initAddressData(),
      contact: this.initContactData(),
      clubData: this.initClubData(),
      otherData: this.initOtherData(),
      ahData: this.initAHData(),
      dfbData: this.initDFBData(),
      // profile: this.initProfileData()
    });

    /*this.form.valueChanges.subscribe((changes: IMember) => {
      this.member.mainData = changes.mainData;
      this.member.otherData = changes.otherData;
      this.member.address = changes.address;
      this.member.contact = changes.contact;
      this.member.clubData = changes.clubData;
      this.member.ahData = changes.ahData;
      this.member.dfbData = changes.dfbData;
      this.member.profile = changes.profile;
    }); */

    if (this.member.isImported) {
      this.form.get('mainData').disable();
      this.form.get('address').disable();
      this.form.get('contact').disable();
      this.form.get('clubData').disable();
      this.form.get('otherData').disable();
      this.form.get('ahData').disable();
      this.form.get('dfbData').disable();
    }
  }

  ngOnDestroy() {
    this.clubSubscription.unsubscribe();
    this.memberSubscription.unsubscribe();
  }

  initMainData() {
    return this.fb.group({
      firstName: [this.member.mainData.firstName, [Validators.required]],
      lastName: [this.member.mainData.lastName, [Validators.required]],
      birthday: [this.member.mainData.birthday, [Validators.required]],
      gender: [this.member.mainData.gender, [Validators.required]],
      title: this.member.mainData.title
    });
  }

  initAddressData() {
    return this.fb.group({
      street: this.member.address.streetName,
      houseNumber: this.member.address.houseNumber,
      zip: this.member.address.zip,
      city: this.member.address.city,
      county: this.member.address.county
    });
  }

  initContactData() {
    return this.fb.group({
      phoneHome: this.member.contact.phoneHome,
      phoneMobile: this.member.contact.phoneMobile,
      phoneWork: this.member.contact.phoneWork,
      email: this.member.contact.email,
      fax: this.member.contact.fax
    });
  }

  initClubData() {
    return this.fb.group({
      status: this.member.clubData.status,
      joined: this.member.clubData.joined,
      left: this.member.clubData.left,
      payment: this.member.clubData.payment,
      assignedClub: this.member.clubData.assignedClub,
      positionsInClub: this.member.clubData.positionsInClub
    });
  }

  initOtherData() {
    return this.fb.group({
      info: this.member.otherData.info
    });
  }

  initAHData() {
    return this.fb.group({
      status: this.member.ahData.status,
      joined: this.member.ahData.joined,
      left: this.member.ahData.left,
      payment: this.member.ahData.payment
    });
  }

  initDFBData() {
    return this.fb.group({
      passNumber: this.member.dfbData.passNumber,
      ageGroup: this.member.dfbData.passNumber,
      eligibleForOfficialMatches: this.member.dfbData.eligibleForOfficialMatches,
      eligibleForFriendlyMatches: this.member.dfbData.eligibleForFriendlyMatches,
      signOut: this.member.dfbData.signOut,
      playerStatus: this.member.dfbData.playerStatus,
      guestPlayer: this.initGuestPlayer(),
      passPrint: this.member.dfbData.passPrint,
      allowedToPlay: this.member.dfbData.allowedToPlay
    });
  }

  initProfileData() {
    return this.fb.group({
      favorites: this.initFavorites(),
      playerInfo: this.initInfo()
    });
  }

  initGuestPlayer() {
    return this.fb.group({
      guestRight: this.member.dfbData.guestPlayer ? this.member.dfbData.guestPlayer.guestRight : '',
      season: this.member.dfbData.guestPlayer ? this.member.dfbData.guestPlayer.season : '',
      type: this.member.dfbData.guestPlayer ? this.member.dfbData.guestPlayer.type : ''
    });
  }

  initInfo() {
    return this.fb.group({
      shoeSize: this.member.profile.playerInfo.shoeSize,
      size: this.member.profile.playerInfo.size,
      position: this.member.profile.playerInfo.position,
      strongFoot: this.member.profile.playerInfo.strongFoot,
      prevClubs: this.member.profile.playerInfo.prevClubs,
      victories: this.member.profile.playerInfo.victories,
      losses: this.member.profile.playerInfo.losses
    });
  }

  initFavorites() {
    return this.fb.group({
      favDrink: this.member.profile.favorites.favDrink,
      favFood: this.member.profile.favorites.favFood,
      favClub: this.member.profile.favorites.favClub,
      favPlayer: this.member.profile.favorites.favPlayer,
      favTrainer: this.member.profile.favorites.favTrainer,
      favTeam: this.member.profile.favorites.favTeam
    });
  }

  uploadCompleted(fileItem: FileItem) {
    this.member.profileImageUrl = fileItem.url;
    this.memberService.updateMember(this.member.id, this.member).then(
      () => this.redirectToList(),
      (error: any) => console.log(error)
    );
  }

  updateMember() {
    this.memberService.updateMember(this.member.id, this.member).then(
      () => this.redirectToList(),
      (error: any) => console.log(error)
    );
  }

  redirectToList() {
    this.router.navigate(['/members']).then(
      // ToDo Update Completed Message
    );
  }

  removeMember() {
    console.log(this.member);
  }

  cancel() {
    this.redirectToList();
  }

}
