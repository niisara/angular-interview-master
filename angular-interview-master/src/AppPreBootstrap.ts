import { CompilerOptions, NgModuleRef, Type, Injector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { XmlHttpRequestHelper } from './app/shared/helpers/xml-http-request-helper';
import { AppConsts } from './app/shared/app-const';


export class AppPreBootstrap {
    static run(appRootUrl: string, injector: Injector, callback: () => void, resolve: any, reject: any): void {
        AppPreBootstrap.getApplicationConfig(appRootUrl, injector, () => {
            callback();
        });
    }

    static bootstrap<TM>(
        moduleType: Type<TM>,
        compilerOptions?: CompilerOptions | CompilerOptions[]
    ): Promise<NgModuleRef<TM>> {
        return platformBrowserDynamic().bootstrapModule(moduleType, compilerOptions);
    }

    private static getApplicationConfig(appRootUrl: string, injector: Injector, callback: () => void) {
        let type = 'GET';
        let url = appRootUrl + 'assets/' + environment.appConfig;
        let customHeaders: never[] = [];

        XmlHttpRequestHelper.ajax(type, url, customHeaders, null, (result: any) => {
            AppConsts.remoteServiceBaseUrl = result.remoteServiceBaseUrl;
            console.log('------------------------->', AppConsts.remoteServiceBaseUrl)

            callback();
        });
    }
}
