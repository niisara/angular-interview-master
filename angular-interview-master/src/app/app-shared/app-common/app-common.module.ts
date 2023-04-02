import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



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
        providers: [AppAuthService, AppRouteGuard],
    };
}
}
