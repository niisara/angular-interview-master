import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAuthService } from './auth/app-auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilModule } from '@shared/util/util.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilModule
  ]
})
export class AppCommonModule {
  static forRoot(): ModuleWithProviders<AppCommonModule> {
    return {
      ngModule: AppCommonModule,
      providers: [AppAuthService],
    };
  }
}
