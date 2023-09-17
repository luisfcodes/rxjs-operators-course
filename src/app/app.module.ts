import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { SubjectComponent } from './components/subject/subject.component';
import { FromComponent } from './components/creation-operators/from/from.component';
import { OfComponent } from './components/creation-operators/of/of.component';
import { FromEventComponent } from './components/creation-operators/from-event/from-event.component';
import { IntervalComponent } from './components/creation-operators/interval/interval.component';
import { TimerComponent } from './components/creation-operators/timer/timer.component';
import { ThrowErrorComponent } from './components/creation-operators/throw-error/throw-error.component';
import { AjaxComponent } from './components/creation-operators/ajax/ajax.component';
import { ForkjoinComponent } from './components/creation-and-join-operators/forkjoin/forkjoin.component';
import { HttpClientModule } from '@angular/common/http';
import { ZipComponent } from './components/creation-and-join-operators/zip/zip.component';
import { MergeConcatComponent } from './components/creation-and-join-operators/merge-concat/merge-concat.component';
import { MapComponent } from './components/transformation-operators/map/map.component';
import { MapToComponent } from './components/transformation-operators/map-to/map-to.component';
import { SwitchMapComponent } from './components/transformation-operators/switch-map/switch-map.component';
import { PluckComponent } from './components/transformation-operators/pluck/pluck.component';
import { ToArrayComponent } from './components/transformation-operators/to-array/to-array.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    SubjectComponent,
    FromComponent,
    OfComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    ThrowErrorComponent,
    AjaxComponent,
    ForkjoinComponent,
    ZipComponent,
    MergeConcatComponent,
    MapComponent,
    MapToComponent,
    SwitchMapComponent,
    PluckComponent,
    ToArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
