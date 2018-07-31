import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DeckSelectorComponent } from './deck-selector/deck-selector.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HighScoresComponent } from './high-scores/high-scores.component';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    DeckSelectorComponent,
    GameContainerComponent,
    ToolbarComponent,
    HighScoresComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
