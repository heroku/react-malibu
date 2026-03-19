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

## Dependency Override Registry

Active version-forcing entries (`resolutions` in yarn). These are band-aids for transitive dependency resolution issues. Each override should eventually be removed when parent packages catch up or we upgrade direct dependencies.

| Override Key | Version | Why Override? | When to Remove | Reference |
|---|---|---|---|---|
| `ansi-regex` | `^3.0.1` | Pre-existing override for transitive vulnerability. Legacy resolution, likely addressing CVE in older versions of ansi-regex used across build tools. | Audit during next major upgrade of eslint, babel, or testing toolchain. Run `yarn why ansi-regex` to see current dependents. | Historical - no specific reference tracked |
| `eslint/**/minimatch` | `^3.1.4` | Parent-scoped override fixing ReDoS vulnerabilities in minimatch v3.x transitive chain via eslint. Eslint and its plugins depend on glob/minimatch but lockfile resolved to vulnerable 3.1.2. Parent scope targets only eslint's subtree to avoid forcing v3 on packages needing v9. | When eslint or its dependency tree naturally adopts `>=3.1.4`. Check `yarn why minimatch` after eslint upgrades. | GHSA-23c5-xmqv-rm74, GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj |
| `glob/**/minimatch` | `^3.1.4` | Parent-scoped override forcing safe minimatch v3 for any package using glob. Glob declares `minimatch@^3.0.0` but lockfile froze at 3.1.2 (vulnerable). Scoped to glob's subtree to isolate from v9 consumers. | When glob dependency updates or when removed from tree. Check if glob has updated its own minimatch floor. | GHSA-23c5-xmqv-rm74, GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj |
| `@babel/cli/**/minimatch` | `^3.1.4` | Parent-scoped override for babel build toolchain. @babel/cli uses glob (which uses minimatch v3), but lockfile pinned at vulnerable 3.1.2. Babel hasn't re-released with updated transitives. | When @babel/cli or its glob dependency updates. Monitor babel releases for transitive dependency refreshes. | GHSA-23c5-xmqv-rm74, GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj |
| `eslint-plugin-node/**/minimatch` | `^3.1.4` | Parent-scoped override for eslint-plugin-node transitive chain. Plugin depends on packages using minimatch v3 but lockfile resolved to 3.1.2. Note: eslint-plugin-node is deprecated; consider migrating to eslint-plugin-n. | When migrating away from eslint-plugin-node (deprecated) or when plugin updates dependencies. | GHSA-23c5-xmqv-rm74, GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj |
| `eslint-plugin-import/**/minimatch` | `^3.1.4` | Parent-scoped override for eslint-plugin-import transitive chain. Plugin's dependencies use minimatch v3 via glob, lockfile held at 3.1.2. | When eslint-plugin-import updates its dependency tree or is removed. | GHSA-23c5-xmqv-rm74, GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj |
| `eslint-plugin-n/**/minimatch` | `^3.1.4` | Parent-scoped override for eslint-plugin-n transitive chain. Plugin uses packages that depend on minimatch v3, but lockfile pinned at 3.1.2. | When eslint-plugin-n releases with updated transitive dependencies. | GHSA-23c5-xmqv-rm74, GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj |
| `eslint-plugin-react/**/minimatch` | `^3.1.4` | Parent-scoped override for eslint-plugin-react transitive chain. Plugin's dependencies froze minimatch at 3.1.2 via glob. | When eslint-plugin-react updates or when eslint ecosystem migrates to newer glob versions. | GHSA-23c5-xmqv-rm74, GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj |
| `mocha/**/minimatch` | `^9.0.7` | Parent-scoped override forcing safe minimatch v9 for mocha test framework. Mocha uses packages requiring minimatch v9 (via ignore-walk, glob v10+), but lockfile resolved to vulnerable 9.0.5. Separate v9 override necessary because mocha's ecosystem moved to newer glob (v10) which requires minimatch v9+. | When mocha or its glob/ignore-walk dependencies release with updated minimatch floor. Check mocha release notes for dependency updates. | GHSA-23c5-xmqv-rm74, GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj |
| `np/**/minimatch` | `^9.0.7` | Parent-scoped override for np (release tool) transitive chain. np uses packages requiring minimatch v9 via ignore-walk, but lockfile held at 9.0.5 (vulnerable). Isolated to np's subtree to avoid forcing v9 on packages expecting v3. | When np updates its dependencies or when ignore-walk releases with updated minimatch. | GHSA-23c5-xmqv-rm74, GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj |
