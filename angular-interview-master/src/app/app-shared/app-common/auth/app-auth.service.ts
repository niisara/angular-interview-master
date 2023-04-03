import { Injectable } from '@angular/core';
import { AppConsts } from 'src/app/shared/app-const';
import { XmlHttpRequestHelper } from 'src/app/shared/helpers/xml-http-request-helper';
import { LocalStorageService } from 'src/app/shared/utils/local-storage.service';

@Injectable()
export class AppAuthService {
  logout(reload?: boolean, returnUrl?: string): void {
    let customHeaders = {
      Authorization: 'Bearer ' + "Test Bearer",
    };

    XmlHttpRequestHelper.ajax(
      'GET',
      AppConsts.remoteServiceBaseUrl + '/api/TokenAuth/LogOut',
      customHeaders,
      null,
      () => {
        new LocalStorageService().removeItem(AppConsts.authorization.encrptedAuthTokenName, () => {
          if (reload !== false) {
            if (returnUrl) {
              location.href = returnUrl;
            } else {
              location.href = '';
            }
          }
        });
      }
    );
  }
}
