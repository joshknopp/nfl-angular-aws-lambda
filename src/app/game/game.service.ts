import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from './game';

@Injectable()
export class GameService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Game[]> {
    //return this.getRemote();
    return of([
      {
        week: 1,
        homeTeam: 'LAR',
        season: 2022,
        kickoffTime: new Date('2022-09-08T20:00-04:00'),
        id: '2022-REG-01-BUF-LAR',
        seasonType: 'REG',
        awayTeam: 'BUF',
      } as Game,
    ]);
  }

  // TODO Doesn't seem to handle type conversion at all?
  public getRemote(): Observable<Game[]> {
    return this.http.get<Game[]>(
      'https://5erg6vaepzuonuz4q5ep6obmwi0haenf.lambda-url.us-east-1.on.aws/'
    );
    /*
      {
        "Items": [
          {
            "week": 1,
            "homeTeam": "LAR",
            "season": 2022,
            "kickoffTime": "2022-09-08T20:00-04:00",
            "id": "2022-REG-01-BUF-LAR",
            "seasonType": "REG",
            "awayTeam": "BUF"
          }
        ],
        "Count": 1,
        "ScannedCount": 1
      }
    */
  }
}
