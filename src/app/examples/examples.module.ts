
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { ExamplesRoutingModule } from '@app/examples/examples-routing.module';
import { ExamplesComponent } from '@app/examples/examples/examples.component';
import { TodosComponent } from '@app/examples/todos/todos.component';
import { todosReducer } from '@app/examples/todos/todos.reducer';
import { TodosEffects } from '@app/examples/todos/todos.effects';
import { StockMarketComponent } from '@app/examples/stock-market/stock-market.component';
import { stockMarketReducer } from '@app/examples/stock-market/stock-market.reducer';
import { StockMarketEffects } from '@app/examples/stock-market/stock-market.effects';
import { StockMarketService } from '@app/examples/stock-market/stock-market.service';
import { ParentComponent } from '@app/examples/theming/parent/parent.component';
import { ChildComponent } from '@app/examples/theming/child/child.component';
import { AuthenticatedComponent } from '@app/examples/authenticated/authenticated.component';

@NgModule({
  imports: [
    SharedModule,
    ExamplesRoutingModule,
    StoreModule.forFeature('examples', {
      todos: todosReducer,
      stocks: stockMarketReducer
    }),
    EffectsModule.forFeature([TodosEffects, StockMarketEffects])
  ],
  declarations: [
    ExamplesComponent,
    TodosComponent,
    StockMarketComponent,
    ParentComponent,
    ChildComponent,
    AuthenticatedComponent
  ],
  providers: [StockMarketService]
})
export class ExamplesModule {
  constructor() {}
}
