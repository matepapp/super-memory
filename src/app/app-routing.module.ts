import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '@app/welcome/welcome.component';
import { GameContainerComponent } from '@app/game-container/game-container.component';
import { HighScoresComponent } from '@app/high-scores/high-scores.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      title: 'Welcome'
    }
  },
  {
    path: 'game',
    component: GameContainerComponent,
    data: {
      title: 'Game'
    }
  },
  {
    path: 'high-scores',
    component: HighScoresComponent,
    data: {
      title: 'High Scores'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
