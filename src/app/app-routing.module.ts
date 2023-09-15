import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { AllpostsComponent } from './pages/allposts/allposts.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full'},
  { path: 'post/:id', component: PostComponent },
  { path: 'allposts', component: AllpostsComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
