//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsRoutingModule } from './admins-routing.module';



//COMPONETENES
import { AdminsComponent } from './admins.component';
import { SharedModule } from '../shared/shared.module';
import { CompaniesComponent } from './companies/companies.component';
import { PricingComponent } from './pricing/pricing.component';
import { UsersComponent } from './users/users.component';
import { TemplatesComponent } from './templates/templates.component';


@NgModule({
  declarations: [AdminsComponent, CompaniesComponent, PricingComponent, UsersComponent, TemplatesComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminsRoutingModule
  ]
})
export class AdminsModule { }
