export {}

declare global {
  namespace BMap {
    /**
     * 以经度、纬度表示的地理坐标。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b0 | 百度地图 v3.0：Point}
     */
    export class Point {
      /**
       * 创建以经度、纬度表示的地理坐标实例。
       *
       * @param lng 经度，单位为度。
       * @param lat 纬度，单位为度。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b0 | 百度地图 v3.0：Point}
       */
      constructor(lng: number, lat: number)

      /**
       * 经度，单位为度。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b0 | 百度地图 v3.0：Point}
       */
      lng: number

      /**
       * 纬度，单位为度。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b0 | 百度地图 v3.0：Point}
       */
      lat: number

      /**
       * 比较当前对象与另一个同类对象是否相等。
       *
       * @param other 用于比较的同类对象。
       * @returns 两个对象是否相等。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b0 | 百度地图 v3.0：Point}
       */
      equals(other: Point): boolean
    }

    /**
     * 以像素表示的二维平面坐标。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b1 | 百度地图 v3.0：Pixel}
     */
    export class Pixel {
      /**
       * 创建以像素表示的二维平面坐标实例。
       *
       * @param x 水平方向的坐标或移动像素数。
       * @param y 垂直方向的坐标或移动像素数。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b1 | 百度地图 v3.0：Pixel}
       */
      constructor(x: number, y: number)

      /**
       * 水平方向的像素坐标。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b1 | 百度地图 v3.0：Pixel}
       */
      x: number

      /**
       * 垂直方向的像素坐标。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b1 | 百度地图 v3.0：Pixel}
       */
      y: number

      /**
       * 比较当前对象与另一个同类对象是否相等。
       *
       * @param other 用于比较的同类对象。
       * @returns 两个对象是否相等。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b1 | 百度地图 v3.0：Pixel}
       */
      equals(other: Pixel): boolean
    }

    /**
     * 以像素表示的宽度和高度。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b3 | 百度地图 v3.0：Size}
     */
    export class Size {
      /**
       * 创建以像素表示的宽度和高度实例。
       *
       * @param width 宽度，单位为像素。
       * @param height 高度，单位为像素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b3 | 百度地图 v3.0：Size}
       */
      constructor(width: number, height: number)

      /**
       * 宽度，单位为像素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b3 | 百度地图 v3.0：Size}
       */
      width: number

      /**
       * 高度，单位为像素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b3 | 百度地图 v3.0：Size}
       */
      height: number

      /**
       * 比较当前对象与另一个同类对象是否相等。
       *
       * @param other 用于比较的同类对象。
       * @returns 两个对象是否相等。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b3 | 百度地图 v3.0：Size}
       */
      equals(other: Size): boolean
    }

    /**
     * 由西南角和东北角确定的地理矩形区域。
     *
     * @see {@link BMap.Point}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
     */
    export class Bounds {
      /**
       * 创建空的地理矩形。官网只列出两个角点参数，runtime 同时支持无参数构造。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      constructor()

      /**
       * 创建包含指定角点的地理矩形。官网将东北角列为必填，runtime 允许省略并沿用西南角。
       *
       * @param sw 矩形的西南角。
       * @param ne 矩形的东北角，省略时与西南角相同。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      constructor(sw: Point, ne?: Point)

      /**
       * 比较当前对象与另一个同类对象是否相等。
       *
       * @param other 用于比较的同类对象。
       * @returns 两个对象是否相等。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       */
      equals(other: Bounds): boolean

      /**
       * 判断指定地理坐标是否位于当前矩形内。
       *
       * @param point 需要处理的地理坐标。
       * @returns 指定坐标是否位于当前矩形内。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       */
      containsPoint(point: Point): boolean

      /**
       * 判断指定矩形是否完全位于当前矩形内。
       *
       * @param bounds 目标地理矩形范围。
       * @returns 指定矩形是否完全位于当前矩形内。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       */
      containsBounds(bounds: Bounds): boolean

      /**
       * 计算当前矩形与指定矩形的交集区域。
       *
       * 官网返回值只列出 Bounds；runtime 在矩形不相交时返回 null。
       *
       * @param other 用于比较的同类对象。
       * @returns 两个矩形的交集区域；不相交时返回 null。
       * @see {@link BMap.Bounds}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      intersects(other: Bounds): Bounds | null

      /**
       * 扩展当前矩形，使其包含指定坐标。
       *
       * @param point 需要处理的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       */
      extend(point: Point): void

      /**
       * 获取中心地理坐标。
       *
       * 官网只列出 Point；runtime 在空矩形上返回 null。
       *
       * @returns 中心地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       */
      getCenter(): Point | null

      /**
       * 判断当前地理矩形是否为空。
       *
       * @returns 矩形是否为空。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       */
      isEmpty(): boolean

      /**
       * 获取矩形的西南角坐标。
       *
       * 官网只列出 Point；runtime 在空矩形上返回 null。
       *
       * @returns 矩形的西南角坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       */
      getSouthWest(): Point | null

      /**
       * 获取矩形的东北角坐标。
       *
       * 官网只列出 Point；runtime 在空矩形上返回 null。
       *
       * @returns 矩形的东北角坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       */
      getNorthEast(): Point | null

      /**
       * 获取矩形在经度与纬度方向上的跨度。
       *
       * @returns 矩形在经度与纬度方向上的跨度。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2 | 百度地图 v3.0：Bounds}
       */
      toSpan(): Point
    }
  }
}
