# Create React App Server-Side Rendering Boilerplate

Simple demo of server-side rendered application which is using create-react-app and supports SEO-friendly URLs.

## Features

- [react-router v4](https://github.com/ReactTraining/react-router) + code-splitting (thanks to [ctrlplusb](https://github.com/ctrlplusb) for his [react-async-component](https://github.com/ctrlplusb/react-async-component))
- SEO-friendly URLs
- [redux](https://github.com/reactjs/redux)
- [redux-saga](https://github.com/redux-saga/redux-saga)
- [redux-devtools](https://github.com/gaearon/redux-devtools) (dock and log monitors)
- [react-intl](https://github.com/yahoo/react-intl)
- [react-helmet](https://github.com/nfl/react-helmet)

## Run demo

```
git clone https://github.com/sergei-zelinsky/cra-ssr-boilerplate.git
cd cra-ssr-boilerplate
npm i
```

Then start create-react-app dev-server
```
npm start
```

And start SSR server
```
npm run watch-ssr
```

Open [`http://localhost:4000`](http://localhost:4000) in your browser.

## Scripts
- **start, build, test, eject** - create-react-app's default scripts
- **watch-ssr** - start SSR server in `development` mode
- **build-ssr** - build SSR server

## Live demo
Live demo is accessible [here](https://cra-ssr-boilerplate.herokuapp.com/).

