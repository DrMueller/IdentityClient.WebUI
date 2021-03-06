import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { EntryPointComponent } from './entry-point/entry-point';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { RxFormsModule } from 'src/app/shared/rx-forms';
import { BusyIndicationModule } from 'src/app/shared/busy-indication/busy-indication.module';
import { AccountInfoComponent } from './account-info/components/account-info/account-info.component';

@NgModule({
  declarations: [
    EntryPointComponent,
    AccountInfoComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatDependenciesModule,
    RxFormsModule,
    BusyIndicationModule
  ]
})
export class AccountModule { }
