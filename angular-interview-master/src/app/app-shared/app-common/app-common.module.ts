import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAuthService } from './auth/app-auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
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
