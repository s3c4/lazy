# Angular lazy loading and Translate service
An angular repository for lazy loading and translate en|ro languages.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Lazy Loading
- using the routes and module of the components for each page to create the lazy loading module;
- the root routes are defined on app level and are lazy loading the module;
- each page(component) have child route to load the specific component when the lazy module is loaded on the root routes level;
- the lazy loading modules can be tracked under inspect borwser/networks. Whenever the page is changed the module is lazy load;

## Translate
Translate service:
- translate is using the Tranlate server to pick up the language selected and the send it with an BehaviorSubject (RxJs);

Translate pipe:
- translate pipe subscribe to the BehaivourSubject from Translate Service and pick up the language when is changed in real time;
- the translate pipe receive the path of the translate file based on the args send from template;
- the pipe is choosing the file based to use for translation based on the language + path of the file;
- the translate pipe receive the value from the template. This value is used to deep into the json object to get the translated;

Route translate:
- the routes translate is done normaly having 2 arrays of the routes. Two differents path are pointing to the same lazy loading module.
- the routes have translation in the app level. When the languaged is changed the router links are changed to match the languagge routing.


# License

[MIT](https://github.com/s3c4/angular-ts-math/blob/master/LICENSE) © [Andrei Secareanu](https://github.com/s3c4)

With :blue_heart: from London