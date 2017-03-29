# react-malibu

React components for using the [Malibu SVG spritesheet](https://github.com/heroku/malibu).

## Setup

`yarn add git+ssh://git@github.com/heroku/react-malibu`

You'll need to update your webpack configuration's `loaders`:

```js
rules: [
  // all your other loaders…
  {
    test: /\.svg$/,
    loader: 'raw-loader'
  }
]
```

## Usage

This package offers two components: `<MalibuSprites>` and `<MalibuIcon>`.

### `<MalibuSprites>`:

Put this component on your page only once, it includes the entire spritesheet.

### `<MalibuIcon>`:

Use this component to instantiate an icon. TBD
