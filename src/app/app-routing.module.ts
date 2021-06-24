import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticesComponent } from './notices/notices.component';
import { NoticeDetailsComponent } from './notice-details/notice-details.component';


const routes: Routes = [
  {
    path: '',
    component: NoticesComponent
  },
  {
    path: 'notices',
    component: NoticeDetailsComponent
  },
  { 
    path: 'notices/:id',
    component: NoticeDetailsComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }