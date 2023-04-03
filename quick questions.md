# What is Routing Guard
Route Guard tells the router whether or not it should allow navigation to a requested route. There are five different types of guards like `CanActivate`, `CanActivateChild`, `CanDeactivate`, `CanLoad`, `Resolve` and each of them is called in a particular sequence. Depending on the guard selected, the router's behavior will alter dramatically. 

These five guards include:

1. `CanActivate`: Check if a user has access and returns either true or false value.
2. `CanActivateChild`: Check if a user has access to any of the child routes and returns either true or false value.
3. `CanDeactivate`: Can a user can leave a page and returns either true or false value.
4. `CanLoad`: Grab data before the route is instantiated and returns either true or false value.
5. `Resolve`: Check if a user has access and returns either true or false value.

### Example:

```javascript
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
 constructor(public auth: AuthService, public router: Router) {}
 canActivate(): boolean {
  if (!this.auth.isAuthenticated()) {
   this.router.navigate(['login']);
   return false;
  }
  return true;
 }
}

const routes: Routes = [
  {
   path: 'artist/:artistId',
   component: ArtistComponent,
   canActivate: [AlwaysAuthGuard]
  }
];
```

**Warning: Starting with version 15.2, the use of guard injectable services will be discouraged and eventually eliminated in version 17.**

### The new way:

```javascript
import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService {
constructor(public auth: AuthService, public router: Router) {}

canActivate(): boolean {
  if (!this.auth.isAuthenticated()) {
   this.router.navigate(['login']);
   return false;
  }
  return true;
 }
}

export const canActivate = (authGuardService = inject(AuthGuardService )) => permissionService.canActivate();
export const APP_ROUTES: [{
 path: 'artist/:artistId', 
 component: ArtistComponent, 
 canActivate: [() => canActivate(true)]
 }]
```

#  What is a Module, and what does it contain?  

Angular modules are the essential components of an app, consisting of directives, services, and components. An application can contain multiple modules.

By utilizing the @NgModule decorator, we can create a module of our own.

```javascript
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

# How to update angular version

To ensure your global angular-cli package is up to date, simply run this command:

```
npm uninstall -g @angular/cli
npm install -g @angular/cli@latest
```

# What are common ng command

| ng command                             | Description                          |
|----------------------------------------|--------------------------------------|
| ng new <Project Name>                  | Create new project                   |
| ng generate class <Class Name>         | Add a class to your application      |
| ng generate component <Component Name> | Add a component to your application  |
| ng generate directive <Directive Name> | Add a new directive                  |
| ng generate enum <Enum Name>           | Add a new enum                       |
| ng generate module <Module Name>       | Add a new Module to your application |
| ng generate pipe <Pipe Name>           | Add a new pipe                       |
| ng generate service <Service Name>     | Add a new service                    |


To construct a component to form part of your module, you should...

1. `ng g module new-module` to generate a module.
2. `ng g component new-module/new-component` to create NewComponent.

# How to add Tailwind CSS to Angular Application

## 1. Install the needed dependencies

```
npm install postcss --save-dev
npm install tailwindcss
npm install -D @tailwindcss/forms
npm install -D postcss
npm install -D autoprefixer
```

If you're relying on npm, postcss does not require manual installation. However, if you do choose to install it yourself, this will help protect against any hoisting issues and make your setup more resistant to future changes.

## 2. Create your configuration file

```
npx tailwind init
```
By entering this command into your terminal, you will generate the `tailwind.config.js` file to store tailwind customizations! This is where you have full control over your design system and can set up any desired Tailwind plugins.

## 3. Configure the location of your HTML and TypeScript files

To ensure that Tailwind can conveniently access these utilities within your project, edit `tailwind.config.js` and substitute its content with this:

```
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,scss,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

## 4. Add Tailwind directives to your global CSS file

Open your global CSS file `(src/style.css)` and add the following content:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# What is forRoot and forChild while defining ngModule ?

When constructing a feature module to be imported into other modules, `forRoot` and `forChild` are essential methods utilized.

**forRoot** is a static method implemented within the root module of an application that provides multiple configurations and services to be used over all other modules. This makes it possible to have global settings, such as language preferences or integrated APIs, across the entire application.

To illustrate, if you have a module which offers a configuration service, then it could be described as follows:

```javascript
@NgModule({
  providers: [ConfigService]
})
export class ConfigModule {
  static forRoot(config: Config): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        { provide: Config, useValue: config }
      ]
    };
  }
}
```

Once the module is imported into your application's codebase, you can call `forRoot` to supply the necessary configuration.

```javascript
@NgModule({
  imports: [
    ConfigModule.forRoot({ apiUrl: 'https://api.example.com' })
  ]
})
export class AppModule {}
```

In contrast, **forChild** is used when you want to import a module into a feature module. This method is similar to forRoot, but it does not generate a new module. Instead, it produces an NgModule object which holds the provided configuration - this can then be imported into any feature module.

Overall, `forRoot` and `forChild` are useful methods for defining modules that can be imported into other modules and providing configuration options and services that are used throughout an application.

The `forRoot` and `forChild` methods are useful when it comes to constructing modules that provides configuration options and services that are used across the application.

# How to define multiple environment for Angular development

Angular relies on separate environment files to manage various settings for distinct circumstances such as a development, staging or production environment. These documents are helpful in specifying values for variables that apply to the certain environment like API endpoints, database qualifications and other configuration details.

Based on the build target, such as `ng build` for development or `ng build --prod for production`, Angular automatically chooses the environment file to guarantee your application runs optimally on its respective environment.

When it comes to the production environment, you should always prioritize performance and security. To do this, enable features like Ahead-of-Time compilation, tree shaking and minification to improve your application's speed as well as HTTPS and other security features to protect user data. These will also reduce the size of your application while still ensuring optimal functionality!


# What is AOT and JIT compilation

# What do you understand by treeshaking