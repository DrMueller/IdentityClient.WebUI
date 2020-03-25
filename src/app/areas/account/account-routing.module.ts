import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPointComponent } from './entry-point/entry-point';
import { AccountInfoComponent } from './account-info/components/account-info';

const routes: Routes = [
  {
    path: '',
    component: EntryPointComponent,
    children: [
      {
        path: '', redirectTo: 'info', pathMatch: 'full'
      },
      {
        path: 'info',
        component: AccountInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
