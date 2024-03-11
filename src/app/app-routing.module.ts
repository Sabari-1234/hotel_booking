import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HouseBlockComponent } from './house-block/house-block.component';
import { BlockModelComponent } from './block-model/block-model.component';
import { LodingComponent } from './loding/loding.component';
import { LodingGuard } from './loding/loding.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // { path: '', component: LodingComponent, canActivate: [LodingGuard] },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./home-page/home-page.component').then(
  //       (m) => m.HomePageComponent
  //     ),
  // },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'block/:id',
    component: BlockModelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
