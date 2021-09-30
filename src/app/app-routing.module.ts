import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFoldersComponent } from './users/list-folders/list-folders.component';
const routes: Routes = [
  {path:'',component: ListFoldersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
