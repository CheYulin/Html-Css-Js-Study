##Notes
###Link

- [webpack demo video](https://www.youtube.com/watch?v=TaWKUpahFZM)
- [upgrade node js](http://tecadmin.net/upgrade-nodejs-via-npm/#)

###First Demo

- use atom as the editor for auto-complete functionality

- init `package.json`

```zsh
npm init
```

- install webpack

```zsh
sudo npm i webpack --save-dev
```

- create `index.js`, and use `npm start` generate `bundle.js` a single file include in `index.html`


- check with our brower, execute `bundle.js`, rendering the html

```zsh
google-chrome-stable ./index.html
```

###Second Demo

- create `bear.js`

- modify `index.js` to require the module `bear.js`

- check with our brower, execute `bundle.js`, rendering the html

```zsh
google-chrome-stable ./index.html
```

###Third Demo(Server Mode)

- install webpack other dependencies

```zsh
sudo npm i webpack-dev-server --save-dev
```

- browse `http://localhost:8080/webpack-dev-server/`

- install jquery

```zsh
sudo npm i jquery --save
```

- async loading `index.js`

```javascript
require(['./bear.js'], function(bear) {
  document.body.appendChild(bear[0]);
})
```

- install css loader

```zsh
sudo npm i css-loader --save-dev
```

- install style loader

```zsh
sudo npm i style-loader --save-dev
```

- modify `bear.js`, ask the css loader to parse css first

```javascript
require('css!./bear.css')
```
