import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {addDOLAR, addEURO, addPLN} from "./store/cash.actions";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cantor';
  PLN$?: Observable<number>;
  EUR$?: Observable<number>;
  DOL$?: Observable<number>;

  constructor(private store: Store<{ cashFlowEUR: number, cashFlowPLN: number, cashFlowDOL: number }>) { //czyli w zasadzie tutaj robie kontruktor i wybieram te reducery ktore sa zadeklarowane w module
    this.EUR$ = store.select('cashFlowEUR');
    this.PLN$ = store.select('cashFlowPLN');
    this.DOL$ = store.select('cashFlowDOL'); // tutaj tylko to co w konstruktorze sie wybiera
  }

  plusPLN() {
    this.store.dispatch(addPLN());
  }
  plusEUR() {
    this.store.dispatch(addEURO());
  }
  plusDOL() {
    this.store.dispatch(addDOLAR());
  }
}
