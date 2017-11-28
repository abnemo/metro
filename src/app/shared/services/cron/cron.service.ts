import { Injectable } from '@angular/core';
import * as moment from 'moment';
import 'moment/min/locales';

moment.locale('de-de');

@Injectable()
export class CronService {

  private parent;

  constructor() {
    this.parent = this;
  }

  /* installCronjobs() {

    const parent = this;

    this.everyPipe.transform(cronConfig, (value: any) => {

      const cronTime = Object.keys(value)[0];
      const cronFunc = value[cronTime];

      switch (cronFunc) {
        case 'getTeamOfTheMonth':
          cron.schedule(cronTime, () => {
            console.log('getTeamOfTheMonth', cronTime);
            parent.getTeamOfTheMonth();
          });
          break;
        case 'sendBirthdayReminder':
          cron.schedule(cronTime, () => {
            parent.sendBirthdayReminder();
          });
          break;
      }

      return true;
    });
  }

  private sendBirthdayReminder() {
    const currentBirthday = moment().format('-MM-DD');
    const subject = 'Geburtstage für den ' + moment().format('DD.MM');
     this.memberService.items.subscribe((members: IMemberId[]) => {
      let userList = '';
      const birthdayList = this.filterByPipe.transform(members, ['birthday'], currentBirthday);
      birthdayList.forEach((member: IMember) => {
        userList = userList + member.lastName + ' ' + member.firstName + ' ' + member.birthday + '\n\r';
      });
      // this.mailService.sendMail(mailgunConfig.adminMail, subject, userList);
    });
  }

  private getTeamOfTheMonth() {
    /*
        [currentSeason]="seasons |
        filterBy: ['title']: (seasonService.getSeasonRange(currentDate).startDate.getFullYear() + '/'
          + seasonService.getSeasonRange(currentDate).endDate.getFullYear())"
      *

      this.projects = af.list('/items').map((items) => {
        return items.map(item => {
          item.metadata = af.object('/items_meta/' + item.id);
          return item;
        });
    ---- */


  /*this.teamService.items.subscribe((teams: ITeamId[]) => {

    const filteredTeams = teams.filter((team: ITeamId) => {
      if (team.photoURL) {
        return team;
      }
    });

    const randomTeams = <ITeam[]>this.samplePipe.transform(filteredTeams);
    console.log(randomTeams[0].title + randomTeams[0].photoURL);

  }
  );*/


  /* .concatMap(() => this.teamService.teams$)
   .subscribe((result) => console.log(result));

 /*return this.seasonService.seasons$.switchMap(seasons => {

   return Observable.combineLatest(
     seasons.filter((season: ISeason) => {
       console.log(seasons);
       season.title = range.startDate.getFullYear() + '/' + range.endDate.getFullYear()
     }),
     (...users) => {
       console.log(seasons);
       /*seasons.forEach((season, index) => {
         users.forEach(user => {
           if(season.author_id === user.id) {
             seasons[index]['author'] = user;
           }
         });
       });
       return seasons;
     }
   );
 });
}
 /* const obs1 = this.seasonService.seasons$;
 const obs2 = this.teamService.teams$;
 obs1.combineLatest(obs2,
   (seasons, teams) => {
     console.log(range);
     console.log(seasons);
     console.log(teams);
   });
}

/* private getCurrentSeason(range) {
 return this.seasonService.seasons$.map(
   (seasons: ISeason[]) => seasons.filter((season: ISeason) => {
     season.title = range.startDate.getFullYear() + '/' + range.endDate.getFullYear();
   })
 );
}
} */
}
