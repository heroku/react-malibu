# react-malibu

React components for using the [Malibu SVG spritesheet](https://github.com/heroku/malibu).

[![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/@heroku/react-malibu.png?style=flat-square
[npm]: https://www.npmjs.org/package/@heroku/react-malibu

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Setup

1. `yarn add @heroku/react-malibu`
2. Make sure that the [purple3](https://github.com/heroku/purple3) stylesheet is included in your website, or the fills will not work.
3. `import { MalibuSprites, MalibuIcon } from '@heroku/react-malibu'`
4. Profit!

## Development

Clone the repo, then `yarn install`. If you want to see the demo server, run `yarn start` and visit http://localhost:3000 to browse the icons.

You cannot currently publish to NPM using yarn, because [there are bugs](https://github.com/yarnpkg/yarn/issues/754).

See more in CONTRIBUTING.md.

## Usage

This package offers two components: `<MalibuSprites>` and `<MalibuIcon>`.

#### `<MalibuSprites>`

Put this component on your page only once, it fetches and displays the entire spritesheet.

By default this will load the product sprites. To load the marketing sprites, add the `set` property.

```js
<MalibuSprites set='marketing'/>
```

#### `<MalibuIcon>`

Use this component to instantiate an icon.

```js
<MalibuIcon name='add-badge-16' size={20} fillClass='dark-gray' style={'position': 'fixed'} extraClasses='foo bar baz'/>
```

##### Properties

* **`name`** (required): the name of the icon. See the full list at https://hk-malibu.herokuapp.com/.
* **`size`** (default: undefined): the desired rendering size in pixels. Note that most icons come in `-16` and `-28` pixel variants. Choose the appropriate variant for the scale you wish to render at — for example, if you're rendering an icon at 12px, use the `-16` icon as the base and `12` as the `size`. If you do not specify a size, the icon's native size will be used.
* **`fillClass`** (default: purple): the desired icon fill. Must be one of
  - `purple`
  - `dark-gray`
  - `red`
  - `orange`
  - `green`
  - `blue`
* **`style`** (optional): an object containing style definitions to apply to the rendered `<svg>` element.
* **`extraClasses`** (optional): a string containing space-separated classnames to apply to the rendered `<svg>` element.
