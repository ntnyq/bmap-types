# bmap-types

[![CI](https://github.com/ntnyq/bmap-types/workflows/CI/badge.svg)](https://github.com/ntnyq/bmap-types/actions)
[![NPM VERSION](https://img.shields.io/npm/v/bmap-types.svg)](https://www.npmjs.com/package/bmap-types)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/bmap-types.svg)](https://www.npmjs.com/package/bmap-types)
[![LICENSE](https://img.shields.io/github/license/ntnyq/bmap-types.svg)](https://github.com/ntnyq/bmap-types/blob/main/LICENSE)

TypeScript declarations for the Baidu Map JavaScript API v3.0.

## Install

```shell
npm install bmap-types
```

```shell
yarn add bmap-types
```

```shell
pnpm add bmap-types
```

## Usage

Load the declarations once in your application:

```ts
import 'bmap-types'

const map = new BMap.Map('map')
const point = new BMap.Point(116.404, 39.915)

map.centerAndZoom(point, 15)
map.addControl(
  new BMap.NavigationControl({
    anchor: BMAP_ANCHOR_TOP_LEFT,
  }),
)
```

Alternatively, add `bmap-types` to `compilerOptions.types` in your
`tsconfig.json`. Preserve any other entries your project needs.

```json
{
  "compilerOptions": {
    "types": ["bmap-types"]
  }
}
```

This package only provides types. Load the Baidu Map JavaScript SDK separately
before calling `BMap` at runtime. The declarations use the SDK's global `BMap`
namespace and constants; there are no named module exports.

## Validation

```shell
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test --run
pnpm build
```

JSDoc notes identify differences between the v3 reference and observed runtime
behavior. For example, `Boundary.get` returns an object with a `boundaries` array,
`Bounds.intersects` can return `null`, and autocomplete addresses use `city`.
Historical compatibility declarations for `TrafficControl`, `PushpinTool`,
`DistanceTool`, `DragAndZoomTool`, `BMAP_ZOOM_IN`/`BMAP_ZOOM_OUT`, the four `APE_*`
shape constants, and `BMAP_DRIVING_POLICY_LEAST_TIME`/`BMAP_DRIVING_POLICY_LEAST_DISTANCE`
are retained.
The v3 reference does not document them, and the checked core runtime does not
export them. Their JSDoc identifies the unverified signatures; applications must
confirm that their loaded tool scripts provide these APIs. The runtime report
lists their availability separately, outside the verified core API coverage.

## Links

- [百度地图 v3 官网文档](https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html)

## License

[MIT](./LICENSE) License © 2026-PRESENT [ntnyq](https://github.com/ntnyq)
