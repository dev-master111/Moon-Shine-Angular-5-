import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'train', loadChildren: './train/train.module#TrainModule' },
  { path: '', redirectTo: 'train', pathMatch: 'full' },
  { path: '**', redirectTo: 'train' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
