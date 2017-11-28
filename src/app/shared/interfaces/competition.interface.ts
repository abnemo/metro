import { ITeam } from './team.interface';

export interface ICompetition {
  id?: string;

  assignedTeam: ITeam;
  isMainCompetition?: boolean;

  title: string;      // Titel des Wettbewerbs
  link: string;       // Link auf fussball.de
  fixtures?: string;  // Spiele
  standings?: [{
    title: string;
    rows: [{
      place: number;
      team: string;
      matches: number;
      won: number;
      draw: number;
      lost: number;
      goalRatio: string;
      goalDiff: string;
      points: string;
    }]
  }];    // Tabelle
}
