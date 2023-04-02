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

