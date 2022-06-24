import { Component, VERSION } from '@angular/core';
import { Game } from './game/game';
import { GameService } from './game/game.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  games: Game[];
  constructor(protected gameService: GameService) {
    this.getGames();
  }

  async getGames() {
    await this.gameService
      .getAll()
      .subscribe((data: Game[]) => (this.games = { ...data }));
  }
}
