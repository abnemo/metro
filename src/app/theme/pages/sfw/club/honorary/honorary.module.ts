import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { HonorariesComponent } from './honoraries/honoraries.component';
import { HonorariesListComponent } from './honorary-list/honorary-list.component';
import { HonoraryFormComponent } from './honorary-form/honorary-form.component';
import { honoraryRoutingModule } from './honorary-routing.module';

@NgModule({
  imports: [
    honoraryRoutingModule,
    SharedModule
  ],
  declarations: [
    HonorariesComponent,
    HonorariesListComponent,
    HonoraryFormComponent
  ],
  providers: [
  ]
})

export class HonoraryModule {
}
