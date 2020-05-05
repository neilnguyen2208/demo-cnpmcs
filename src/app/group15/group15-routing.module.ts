import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { DVT_DetailComponent } from './pages/DVTDetail/DVT_Detail.component'
import { DVT_Add_DetailComponent } from './pages/DVTAddDetail/DVT_Add_Detail.component'
import { DVT_Edit_DetailComponent } from './pages/DVTEditDetail/DVT_Edit_Detail.component'
const routes: Routes = [
  { path: 'dvt-detail', component: DVT_DetailComponent },
  { path: 'dvt-add-detail', component: DVT_Add_DetailComponent },
  { path: 'dvt-edit-detail', component: DVT_Edit_DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [DVT_DetailComponent, DVT_Add_DetailComponent, DVT_Edit_DetailComponent]