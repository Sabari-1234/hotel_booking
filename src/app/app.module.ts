import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderSmallCompComponent } from './header-small-comp/header-small-comp.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { SearchDivComponent } from './search-div/search-div.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FiltersComponent } from './filters/filters.component';
import { FilterComponentComponent } from './filter-component/filter-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    HeaderSmallCompComponent,
    SearchDivComponent,
    DatePickerComponent,
    FiltersComponent,
    FilterComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
