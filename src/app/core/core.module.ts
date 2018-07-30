import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@env/environment';

import { debug } from '@app/core/meta-reducers/debug.reducer';
import { initStateFromLocalStorage } from '@app/core/meta-reducers/init-state-from-local-storage.reducer';
import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import { authReducer } from '@app/core/auth/auth.reducer';
import { AuthEffects } from '@app/core/auth/auth.effects';
import { AuthGuardService } from '@app/core/auth/auth-guard.service';
import { AnimationsService } from '@app/core/animations/animations.service';

export const metaReducers: MetaReducer<any>[] = [initStateFromLocalStorage];

if (!environment.production) {
  metaReducers.unshift(storeFreeze);
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(
      {
        auth: authReducer
      },
      { metaReducers }
    ),
    EffectsModule.forRoot([AuthEffects])
  ],
  declarations: [],
  providers: [LocalStorageService, AuthGuardService, AnimationsService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
