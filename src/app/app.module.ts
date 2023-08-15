import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducerPLN, reducerDOL, reducerEUR} from './store/cash.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule.forRoot({ cashFlowEUR: reducerEUR, cashFlowPLN: reducerPLN, cashFlowDOL: reducerDOL })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
