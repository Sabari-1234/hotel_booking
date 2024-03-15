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
import { SortMapButtonComponent } from './sort-map-button/sort-map-button.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HouseBlockComponent } from './house-block/house-block.component';

import { StarIconComponent } from './star-icon/star-icon.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { HouseThirdDivComponent } from './house-third-div/house-third-div.component';
import { HouseRightButtonComponent } from './house-right-button/house-right-button.component';
import { FooterComponent } from './footer/footer.component';
import { FooterIconsComponent } from './footer-icons/footer-icons.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationSortComponent } from './location-sort/location-sort.component';
import { FilterButtonsComponent } from './filter-buttons/filter-buttons.component';
import { FormsModule } from '@angular/forms';
import { MobileSortFilterBtnComponent } from './mobile-sort-filter-btn/mobile-sort-filter-btn.component';
import { BlockModelComponent } from './block-model/block-model.component';
import { AddBlockComponent } from './add-block/add-block.component';
import { MenuComponent } from './menu/menu.component';
import { LodingComponent } from './loding/loding.component';

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
    SortMapButtonComponent,
    HomeBodyComponent,
    HouseBlockComponent,

    StarIconComponent,
    DropDownComponent,
    HouseThirdDivComponent,
    HouseRightButtonComponent,
    FooterComponent,
    FooterIconsComponent,
    LocationSortComponent,
    FilterButtonsComponent,
    MobileSortFilterBtnComponent,
    BlockModelComponent,
    AddBlockComponent,
    MenuComponent,
    LodingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
