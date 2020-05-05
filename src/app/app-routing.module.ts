import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DVT_DetailComponent } from '../app/pages/DVTDetail/DVT_Detail.component'
import { DVT_Add_DetailComponent } from '../app/pages/DTVAddDetail/DVT_Add_Detail.component'
const routes: Routes = [
  { path: 'dvt-detail', component: DVT_DetailComponent },
  { path: 'dvt-add-detail', component: DVT_Add_DetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [DVT_DetailComponent, DVT_Add_DetailComponent]