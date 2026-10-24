import type { EventEmitter } from './events'

declare global {
  namespace BMap {
    /**
     * 按图块坐标和缩放级别加载地图图像的图层。
     *
     * @see {@link BMap.TileLayerOptions}
     * @see {@link BMap.Pixel}
     * @see {@link BMap.Copyright}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b0 | 百度地图 v3.0：TileLayer}
     */
    export class TileLayer {
      /**
       * 创建按图块坐标和缩放级别加载地图图像的图层实例。
       *
       * @param opts TileLayer 的配置选项。
       * @see {@link BMap.TileLayerOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b0 | 百度地图 v3.0：TileLayer}
       */
      constructor(opts?: TileLayerOptions)

      /**
       * 根据图块坐标与缩放级别生成图块图片地址。
       *
       * @param tileCoord 图块的平面坐标。
       * @param zoom 地图或全景的缩放级别。
       * @returns 根据图块坐标与缩放级别生成图块图片地址。
       * @see {@link BMap.Pixel}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b0 | 百度地图 v3.0：TileLayer}
       */
      getTilesUrl(tileCoord: Pixel, zoom: number): string

      /**
       * 获取指定的版权条目。
       *
       * @returns 指定的版权条目。
       * @see {@link BMap.Copyright}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b0 | 百度地图 v3.0：TileLayer}
       */
      getCopyright(): Copyright | null

      /**
       * 判断当前图层是否使用带透明信息的 PNG 图块。
       *
       * 官网返回值列为 Number；runtime 实际返回布尔值。
       *
       * @returns 是否使用带透明信息的 PNG 图块。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b0 | 百度地图 v3.0：TileLayer}
       */
      isTransparentPng(): boolean
    }

    /**
     * 按图块坐标和缩放级别加载地图图像的图层的配置选项。
     *
     * @see {@link BMap.Copyright}
     * @see {@link BMap.TileLayer}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b1 | 百度地图 v3.0：TileLayerOptions}
     */
    export interface TileLayerOptions {
      /**
       * 图块是否包含 PNG 透明信息。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b1 | 百度地图 v3.0：TileLayerOptions}
       */
      transparentPng?: boolean

      /**
       * 图块地址模板，可使用 {X}、{Y} 和 {Z} 占位符。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b1 | 百度地图 v3.0：TileLayerOptions}
       */
      tileUrlTemplate?: string

      /**
       * 图层的版权信息。
       *
       * @see {@link BMap.Copyright}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b1 | 百度地图 v3.0：TileLayerOptions}
       */
      copyright?: Copyright

      /**
       * 显示的层叠顺序，较大值位于较小值上方。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b1 | 百度地图 v3.0：TileLayerOptions}
       */
      zIndex?: number
    }

    /**
     * 展示实时路况或预测路况的图层。
     *
     * @see {@link BMap.TrafficLayerOptions}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b2 | 百度地图 v3.0：TrafficLayer}
     */
    export class TrafficLayer extends TileLayer {
      /**
       * 创建展示实时路况或预测路况的图层实例。
       *
       * @param opts TrafficLayer 的配置选项。
       * @see {@link BMap.TrafficLayerOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b2 | 百度地图 v3.0：TrafficLayer}
       */
      constructor(opts?: TrafficLayerOptions)
    }

    /**
     * 展示实时路况或预测路况的图层的配置选项。
     *
     * @see {@link BMap.PredictDate}
     * @see {@link BMap.TrafficLayer}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b3 | 百度地图 v3.0：TrafficLayerOptions}
     */
    export interface TrafficLayerOptions {
      /**
       * 预测路况的目标时间；省略时展示实时路况。
       *
       * @see {@link BMap.PredictDate}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b3 | 百度地图 v3.0：TrafficLayerOptions}
       */
      predictDate?: PredictDate
    }

    /**
     * 预测路况对应的星期与小时。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b4 | 百度地图 v3.0：PredictDate}
     */
    export interface PredictDate {
      /**
       * 预测日期的星期编号，取值为 1 至 7。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b4 | 百度地图 v3.0：PredictDate}
       */
      weekday: number

      /**
       * 预测时间的小时数，取值为 0 至 23。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b4 | 百度地图 v3.0：PredictDate}
       */
      hour: number
    }

    /**
     * 展示百度地图云存储数据的自定义图层。
     *
     * @see {@link BMap.CustomLayerOptions}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b5 | 百度地图 v3.0：CustomLayer}
     */
    export class CustomLayer extends TileLayer {
      /**
       * 创建展示百度地图云存储数据的自定义图层实例。
       *
       * @param opts CustomLayer 的配置选项。
       * @see {@link BMap.CustomLayerOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b5 | 百度地图 v3.0：CustomLayer}
       */
      constructor(opts: CustomLayerOptions)

      /**
       * 鼠标点击热区时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b5 | 百度地图 v3.0：CustomLayer}
       */
      onhotspotclick?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b5 | 百度地图 v3.0：CustomLayer}
         */
        type: string

        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b5 | 百度地图 v3.0：CustomLayer}
         */
        target: CustomLayer

        /**
         * 显示的文本、HTML 内容或事件附带的数据。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b5 | 百度地图 v3.0：CustomLayer}
         */
        content: Custompoi
      }) => void
    }

    /**
     * 自定义云图层中的兴趣点及其扩展数据。
     *
     * @see {@link BMap.Point}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
     */
    export interface Custompoi {
      /**
       * 云数据兴趣点的标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      poiId: string

      /**
       * 旧版云存储数据集的标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      databoxId: string

      /**
       * 用于展示名称或鼠标悬停提示的标题。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      title: string

      /**
       * 地址信息；公交站点结果中可包含经过的线路。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      address: string

      /**
       * 联系电话，是否提供取决于结果数据。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      phoneNumber: string

      /**
       * 邮政编码，是否提供取决于结果数据。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      postcode: string

      /**
       * 所在省份的行政区划编码。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      provinceCode: number

      /**
       * 所在省份名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      province: string

      /**
       * 所在城市的行政区划编码。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      cityCode: number

      /**
       * 所在城市名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      city: string

      /**
       * 所在区县的行政区划编码。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      districtCode: number

      /**
       * 所在区县名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      district: string

      /**
       * 对应位置的地理坐标。
       *
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      point: Point

      /**
       * 兴趣点标签或云数据检索标签。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      tags: string[]

      /**
       * 云数据兴趣点的类别编号。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       */
      typeId: number

      /**
       * 云数据表定义的自定义扩展字段。
       *
       * 官网将扩展数据标为 Json；声明保留对象键名，将无法预知的自定义字段值设为 unknown。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b7 | 百度地图 v3.0：Custompoi}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      extendedData: Record<string, unknown>
    }

    /**
     * 标示可浏览全景区域的覆盖图层。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b8 | 百度地图 v3.0：PanoramaCoverageLayer}
     */
    export class PanoramaCoverageLayer extends TileLayer {
      /**
       * 创建标示可浏览全景区域的覆盖图层实例。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b8 | 百度地图 v3.0：PanoramaCoverageLayer}
       */
      constructor()
    }

    /**
     * 展示百度地图云存储数据的自定义图层的配置选项。
     *
     * @see {@link BMap.PointDensityType}
     * @see {@link BMap.CustomLayer}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b6 | 百度地图 v3.0：CustomLayerOptions}
     */
    export interface CustomLayerOptions {
      /**
       * 旧版云存储数据集的标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b6 | 百度地图 v3.0：CustomLayerOptions}
       */
      databoxId?: string

      /**
       * 云存储数据表的标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b6 | 百度地图 v3.0：CustomLayerOptions}
       */
      geotableId?: string

      /**
       * 云数据检索的关键字。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b6 | 百度地图 v3.0：CustomLayerOptions}
       */
      q?: string

      /**
       * 兴趣点标签或云数据检索标签。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b6 | 百度地图 v3.0：CustomLayerOptions}
       */
      tags?: string

      /**
       * 云数据检索的字段筛选表达式。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b6 | 百度地图 v3.0：CustomLayerOptions}
       */
      filter?: string

      /**
       * 云图层中兴趣点的显示密度。
       *
       * @see {@link BMap.PointDensityType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b6 | 百度地图 v3.0：CustomLayerOptions}
       */
      pointDensityType?: PointDensityType
    }

    /**
     * 云图层中点分布的显示密度常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_POINT_DENSITY_HIGH}
     * @see {@link BMAP_POINT_DENSITY_MEDIUM}
     * @see {@link BMAP_POINT_DENSITY_LOW}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b9 | 百度地图 v3.0：PointDensityType}
     */
    export type PointDensityType = 50 | 100 | 200

    /**
     * 由图层及显示配置组成的地图类型。
     *
     * @see {@link BMap.TileLayer}
     * @see {@link BMap.MapTypeOptions}
     * @see {@link BMap.Projection}
     * @see {@link BMAP_NORMAL_MAP}
     * @see {@link BMAP_SATELLITE_MAP}
     * @see {@link BMAP_HYBRID_MAP}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
     */
    export class MapType {
      /**
       * 创建由图层及显示配置组成的地图类型实例。
       *
       * @param name 对象名称。
       * @param layers 组成地图类型的单个图层或图层集合。
       * @param opts MapType 的配置选项。
       * @see {@link BMap.TileLayer}
       * @see {@link BMap.MapTypeOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
       */
      constructor(
        name: string,
        layers: TileLayer | TileLayer[],
        opts?: MapTypeOptions,
      )

      /**
       * 获取地图类型名称。
       *
       * @returns 地图类型名称。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
       */
      getName(): string

      /**
       * 获取地图图层。
       *
       * @returns 地图图层。
       * @see {@link BMap.TileLayer}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
       */
      getTileLayer(): TileLayer

      /**
       * 获取最小缩放级别。
       *
       * @returns 最小缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
       */
      getMinZoom(): number

      /**
       * 获取最大缩放级别。
       *
       * @returns 最大缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
       */
      getMaxZoom(): number

      /**
       * 获取地图坐标投影。
       *
       * @returns 地图坐标投影。
       * @see {@link BMap.Projection}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
       */
      getProjection(): Projection

      /**
       * 获取地图文字颜色。
       *
       * 官网将返回值列为 String，但构造选项列为 Number；runtime 原样返回设置的字符串或数值，默认返回 black。
       *
       * @returns 地图文字颜色。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
       */
      getTextColor(): string | number

      /**
       * 获取地图类型提示文字。
       *
       * @returns 地图类型提示文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
       */
      getTips(): string
    }

    /**
     * 由图层及显示配置组成的地图类型的配置选项。
     *
     * @see {@link BMap.MapType}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b1 | 百度地图 v3.0：MapTypeOptions}
     */
    export interface MapTypeOptions {
      /**
       * 允许显示的最小缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b1 | 百度地图 v3.0：MapTypeOptions}
       */
      minZoom?: number

      /**
       * 允许显示的最大缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b1 | 百度地图 v3.0：MapTypeOptions}
       */
      maxZoom?: number

      /**
       * 图块加载失败时使用的替代图片地址。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b1 | 百度地图 v3.0：MapTypeOptions}
       */
      errorImageUrl?: string

      /**
       * 地图类型对应的前景色，可使用 CSS 颜色字符串或颜色数值。
       *
       * 官网选项表列为 Number，而 getTextColor 返回值列为 String；runtime 接受并保留这两种形式。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b1 | 百度地图 v3.0：MapTypeOptions}
       */
      textColor?: string | number

      /**
       * 地图类型控件显示的提示文字。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b1 | 百度地图 v3.0：MapTypeOptions}
       */
      tips?: string
    }

    /**
     * 地理坐标与平面像素坐标之间的投影转换契约。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.Pixel}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b2 | 百度地图 v3.0：Projection}
     */
    export interface Projection {
      /**
       * 将经纬度地理坐标投影为平面像素坐标。
       *
       * @param lngLat 需要投影转换的经纬度坐标。
       * @returns 经纬度地理坐标投影为平面像素坐标。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b2 | 百度地图 v3.0：Projection}
       */
      lngLatToPoint(lngLat: Point): Pixel

      /**
       * 将投影平面上的像素坐标还原为经纬度地理坐标。
       *
       * @param point 需要处理的地理坐标。
       * @returns 投影平面上的像素坐标还原为经纬度地理坐标。
       * @see {@link BMap.Pixel}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b2 | 百度地图 v3.0：Projection}
       */
      pointToLngLat(point: Pixel): Point
    }

    /**
     * 墨卡托投影的坐标转换契约。
     *
     * 官网未列出构造函数；runtime 将此投影以可构造的类导出。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b3 | 百度地图 v3.0：MercatorProjection}
     */
    export class MercatorProjection implements Projection {
      /**
       * 创建地图坐标投影实例。
       *
       * @see {@link BMap.Projection}
       */
      constructor()
      /**
       * 将经纬度坐标转换为平面像素坐标。
       *
       * @param lngLat 待转换的地理坐标。
       * @returns 投影平面坐标。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       */
      lngLatToPoint(lngLat: Point): Pixel
      /**
       * 将平面像素坐标转换为经纬度坐标。
       *
       * @param point 待转换的平面坐标。
       * @returns 经纬度坐标。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       */
      pointToLngLat(point: Pixel): Point
    }

    /**
     * 透视投影的坐标转换契约。
     *
     * 官网未列出构造函数；runtime 将此投影以可构造的类导出。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b4 | 百度地图 v3.0：PerspectiveProjection}
     */
    export class PerspectiveProjection implements Projection {
      /**
       * 创建地图坐标投影实例。
       *
       * @see {@link BMap.Projection}
       */
      constructor()
      /**
       * 将经纬度坐标转换为平面像素坐标。
       *
       * @param lngLat 待转换的地理坐标。
       * @returns 投影平面坐标。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       */
      lngLatToPoint(lngLat: Point): Pixel
      /**
       * 将平面像素坐标转换为经纬度坐标。
       *
       * @param point 待转换的平面坐标。
       * @returns 经纬度坐标。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       */
      pointToLngLat(point: Pixel): Point
    }
    /**
     * TileLayer 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.TileLayer}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b0 | 百度地图 v3.0：TileLayer}
     */
    export interface TileLayer extends EventEmitter {}
  }
}
