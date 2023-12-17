import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { GrandJuryCaseComponent } from './component/grand-jury-case/grand-jury-case.component';
import { GrandJuryCaseCalanderComponent } from './component/grand-jury-case-calander/grand-jury-case-calander.component';
import { NonFinancialRecordComponent } from './component/non-financial-record/non-financial-record.component';
import { ReferenceDataManagerComponent } from './component/reference-data-manager/reference-data-manager.component';
import { UserManagerComponent } from './component/user-manager/user-manager.component'

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path: 'grand-jury-case', component: GrandJuryCaseComponent},
  {path: 'grand-jury-case-calander', component: GrandJuryCaseCalanderComponent},
  {path: 'non-financial-record', component: NonFinancialRecordComponent},
  {path: 'reference-data-manager', component: ReferenceDataManagerComponent},
  {path: 'user-manager', component: UserManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
