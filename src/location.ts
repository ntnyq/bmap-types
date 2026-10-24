export {}

declare global {
  namespace BMap {
    /**
     * 地址解析与逆地址解析服务。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.GeocoderResult}
     * @see {@link BMap.LocationOptions}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b33 | 百度地图 v3.0：Geocoder}
     */
    export class Geocoder {
      /**
       * 创建地址解析与逆地址解析服务实例。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b33 | 百度地图 v3.0：Geocoder}
       */
      constructor()

      /**
       * 将指定城市中的地址解析为地理坐标。
       *
       * 地址无法解析时，回调参数为 null。
       *
       * @param address 需要解析的地址文本。
       * @param callback 异步查询完成或交互发生后执行的回调。
       * @param callback.point 解析得到的地理坐标；解析失败时为 null。
       * @param city 检索所属的城市名称。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b33 | 百度地图 v3.0：Geocoder}
       */
      getPoint(
        address: string,
        callback: (point: Point | null) => void,
        city: string,
      ): void

      /**
       * 将地理坐标逆解析为地址及周边兴趣点。
       *
       * @param point 需要处理的地理坐标。
       * @param callback 异步查询完成或交互发生后执行的回调。
       * @param callback.result 逆地址解析结果；解析失败时为 null。
       * @param opts Geocoder 的配置选项。
       * @see {@link BMap.Point}
       * @see {@link BMap.GeocoderResult}
       * @see {@link BMap.LocationOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b33 | 百度地图 v3.0：Geocoder}
       */
      getLocation(
        point: Point,
        callback: (result: GeocoderResult | null) => void,
        opts?: LocationOptions,
      ): void
    }

    /**
     * 逆地址解析得到的位置、结构化地址及周边兴趣点。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.AddressComponent}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b34 | 百度地图 v3.0：GeocoderResult}
     */
    export interface GeocoderResult {
      /**
       * 对应位置的地理坐标。
       *
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b34 | 百度地图 v3.0：GeocoderResult}
       */
      point: Point

      /**
       * 地址信息；公交站点结果中可包含经过的线路。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b34 | 百度地图 v3.0：GeocoderResult}
       */
      address: string

      /**
       * 解析结果的省、市、区县、街道和门牌号。
       *
       * @see {@link BMap.AddressComponent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b34 | 百度地图 v3.0：GeocoderResult}
       */
      addressComponents: AddressComponent

      /**
       * 逆地址解析位置附近的兴趣点集合。
       *
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b34 | 百度地图 v3.0：GeocoderResult}
       */
      surroundingPois: LocalResultPoi[]

      /**
       * 所在商圈名称或提示条目的商户名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b34 | 百度地图 v3.0：GeocoderResult}
       */
      business: string
    }

    /**
     * 按省、市、区县、街道和门牌号拆分的地址。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b35 | 百度地图 v3.0：AddressComponent}
     */
    export interface AddressComponent {
      /**
       * 门牌号码。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b35 | 百度地图 v3.0：AddressComponent}
       */
      streetNumber: string

      /**
       * 街道名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b35 | 百度地图 v3.0：AddressComponent}
       */
      street: string

      /**
       * 所在区县名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b35 | 百度地图 v3.0：AddressComponent}
       */
      district: string

      /**
       * 所在城市名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b35 | 百度地图 v3.0：AddressComponent}
       */
      city: string

      /**
       * 所在省份名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b35 | 百度地图 v3.0：AddressComponent}
       */
      province: string
    }

    /**
     * 逆地址解析的周边兴趣点检索选项。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b36 | 百度地图 v3.0：LocationOptions}
     */
    export interface LocationOptions {
      /**
       * 逆地址解析时检索周边兴趣点的半径，单位为米。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b36 | 百度地图 v3.0：LocationOptions}
       */
      poiRadius?: number

      /**
       * 逆地址解析时返回的周边兴趣点数量。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b36 | 百度地图 v3.0：LocationOptions}
       */
      numPois?: number
    }

    /**
     * 根据用户 IP 查询所在城市的服务。
     *
     * @see {@link BMap.LocalCityOptions}
     * @see {@link BMap.LocalCityResult}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b37 | 百度地图 v3.0：LocalCity}
     */
    export class LocalCity {
      /**
       * 创建根据用户 IP 查询所在城市的服务实例。
       *
       * @param opts LocalCity 的配置选项。
       * @see {@link BMap.LocalCityOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b37 | 百度地图 v3.0：LocalCity}
       */
      constructor(opts?: LocalCityOptions)

      /**
       * 异步查询用户所在城市。
       *
       * @param callback 异步查询完成或交互发生后执行的回调。
       * @param callback.result 本次服务返回的检索结果。
       * @see {@link BMap.LocalCityResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b37 | 百度地图 v3.0：LocalCity}
       */
      get(callback: (result: LocalCityResult) => void): void
    }

    /**
     * 根据用户 IP 查询所在城市的服务的配置选项。
     *
     * @see {@link BMap.RenderOptions}
     * @see {@link BMap.LocalCity}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b38 | 百度地图 v3.0：LocalCityOptions}
     */
    export interface LocalCityOptions {
      /**
       * 检索结果在地图及列表中的展示配置。
       *
       * @see {@link BMap.RenderOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b38 | 百度地图 v3.0：LocalCityOptions}
       */
      renderOptions?: RenderOptions
    }

    /**
     * IP 定位得到的城市名称、中心及展示级别。
     *
     * 官网未说明查询失败的返回形态；runtime 此时回调空对象，因此结果字段可缺省。
     *
     * @see {@link BMap.Point}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b39 | 百度地图 v3.0：LocalCityResult}
     */
    export interface LocalCityResult {
      /**
       * 地图视野、查询范围或城市的中心位置。
       *
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b39 | 百度地图 v3.0：LocalCityResult}
       */
      center?: Point

      /**
       * 展示定位城市所建议使用的缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b39 | 百度地图 v3.0：LocalCityResult}
       */
      level?: number

      /**
       * 对象的名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b39 | 百度地图 v3.0：LocalCityResult}
       */
      name?: string
    }

    /**
     * 获取用户当前地理位置的定位服务。
     *
     * @see {@link BMap.GeolocationResult}
     * @see {@link BMap.PositionOptions}
     * @see {@link BMap.ServiceStatusCode}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b40 | 百度地图 v3.0：Geolocation}
     */
    export class Geolocation {
      /**
       * 创建获取用户当前地理位置的定位服务实例。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b40 | 百度地图 v3.0：Geolocation}
       */
      constructor()

      /**
       * 启用移动端混合应用的 SDK 辅助定位。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b40 | 百度地图 v3.0：Geolocation}
       */
      enableSDKLocation(): void

      /**
       * 禁用移动端混合应用的 SDK 辅助定位。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b40 | 百度地图 v3.0：Geolocation}
       */
      disableSDKLocation(): void

      /**
       * 异步获取用户当前地理位置。
       *
       * 无法获取位置时，回调参数为 null；可通过 getStatus 查询定位状态。
       *
       * @param callback 异步查询完成或交互发生后执行的回调。
       * @param callback.result 定位结果；无法获取位置时为 null。
       * @param opts Geolocation 的配置选项。
       * @see {@link BMap.GeolocationResult}
       * @see {@link BMap.PositionOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b40 | 百度地图 v3.0：Geolocation}
       */
      getCurrentPosition(
        callback: (result: GeolocationResult | null) => void,
        opts?: PositionOptions,
      ): void

      /**
       * 获取最近一次服务调用的状态码。
       *
       * 官网未说明服务尚未执行时的状态；runtime 此时返回 undefined。
       *
       * @returns 最近一次服务调用的状态码。
       * @see {@link BMap.ServiceStatusCode}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b40 | 百度地图 v3.0：Geolocation}
       */
      getStatus(): ServiceStatusCode | undefined
    }

    /**
     * 定位得到的坐标、精度和地址信息。
     *
     * @see {@link BMap.AddressComponent}
     * @see {@link BMap.Point}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b41 | 百度地图 v3.0：GeolocationResult}
     */
    export interface GeolocationResult {
      /**
       * 地址信息；公交站点结果中可包含经过的线路。
       *
       * 官网将地址类型列为 AddressComponent；runtime 的定位地址字段可能使用 street_number，声明使用 GeolocationAddress 表示实际结构。
       *
       * @see {@link BMap.AddressComponent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b41 | 百度地图 v3.0：GeolocationResult}
       */
      address?: GeolocationAddress | null

      /**
       * 对应位置的地理坐标。
       *
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b41 | 百度地图 v3.0：GeolocationResult}
       */
      point: Point

      /**
       * 定位精度，单位为米。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b41 | 百度地图 v3.0：GeolocationResult}
       */
      accuracy: number
    }

    /**
     * 查询省、市、区县行政边界的服务。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b54 | 百度地图 v3.0：Boundary}
     */
    export class Boundary {
      /**
       * 创建查询省、市、区县行政边界的服务实例。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b54 | 百度地图 v3.0：Boundary}
       */
      constructor()

      /**
       * 按行政区划名称异步查询边界坐标串。
       *
       * 官网文字将回调数据描述为坐标串数组；runtime 实际返回包含 boundaries 数组的对象，无结果时该数组为空。
       *
       * @param name 省、直辖市、地级市或区县的名称。
       * @param callback 异步查询完成或交互发生后执行的回调。
       * @param callback.result 包含 boundaries 数组的边界结果；没有匹配区域时数组为空。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b54 | 百度地图 v3.0：Boundary}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      get(name: string, callback: (result: BoundaryResult) => void): void
    }

    /**
     * 浏览器定位与 SDK 辅助定位的配置选项。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b42 | 百度地图 v3.0：PositionOptions}
     */
    export interface PositionOptions {
      /**
       * 是否使用移动端混合应用的 SDK 辅助定位。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b42 | 百度地图 v3.0：PositionOptions}
       */
      SDKLocation?: boolean

      /**
       * 是否请求高精度定位。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b42 | 百度地图 v3.0：PositionOptions}
       */
      enableHighAccuracy?: boolean

      /**
       * 定位请求允许的最长等待时间，单位为毫秒。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b42 | 百度地图 v3.0：PositionOptions}
       */
      timeout?: number

      /**
       * 允许复用的定位缓存最长时间，单位为毫秒。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b42 | 百度地图 v3.0：PositionOptions}
       */
      maximumAge?: number
    }

    /**
     * 将其他坐标系的坐标批量转换到目标坐标系的服务。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.TranslateResults}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b55 | 百度地图 v3.0：Convertor}
     */
    export class Convertor {
      /**
       * 创建将其他坐标系的坐标批量转换到目标坐标系的服务实例。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b55 | 百度地图 v3.0：Convertor}
       */
      constructor()

      /**
       * 批量转换坐标系，一次请求最多支持 10 个坐标点。
       *
       * 转换后的点顺序与输入顺序一致；应先检查转换结果的 status。
       *
       * @param points 需要展示或转换的地理坐标点集合。
       * @param from 源坐标系编号，含义参见百度地图坐标转换服务。
       * @param to 目标坐标系编号，含义参见百度地图坐标转换服务。
       * @param callback 转换完成后执行的回调，接收状态码及转换后的点集合。
       * @param callback.result 本次服务返回的检索结果。
       * @see {@link BMap.Point}
       * @see {@link BMap.TranslateResults}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b55 | 百度地图 v3.0：Convertor}
       */
      translate(
        points: Point[],
        from: number,
        to: number,
        callback: (result: TranslateResults) => void,
      ): void
    }

    /**
     * 坐标转换的状态与转换后的点集合。
     *
     * @see {@link BMap.Point}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b56 | 百度地图 v3.0：TranslateResults}
     */
    export interface TranslateResults {
      /**
       * 坐标转换服务返回的状态码，0 表示成功。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b56 | 百度地图 v3.0：TranslateResults}
       */
      status: number

      /**
       * 按顺序排列的地理坐标点集合。
       *
       * 官网未说明转换失败时的字段；runtime 的错误结果可能不包含 points。
       *
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b56 | 百度地图 v3.0：TranslateResults}
       */
      points?: Point[]
    }
    /**
     * 行政区域边界查询的结果，结构依据 v3 runtime 的 othersearch 模块。
     *
     * @see {@link BMap.Boundary}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b54 | 百度地图 v3.0：Boundary}
     */
    export interface BoundaryResult {
      /**
       * 组成行政区域的闭合边界坐标串集合。
       */
      boundaries: string[]
    }

    /**
     * 定位结果中的地址。官网复用 AddressComponent，runtime 的部分定位来源使用 street_number，并可能提供 country 和 city_code。
     *
     * @see {@link BMap.AddressComponent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b41 | 百度地图 v3.0：GeolocationResult}
     */
    export interface GeolocationAddress extends Partial<AddressComponent> {
      /**
       * 国家名称。
       *
       */
      country?: string
      /**
       * 城市编码，runtime 初始化为空地址时为 0。
       *
       */
      city_code?: number
      /**
       * 部分定位来源使用的门牌号码，与逆地址解析的 streetNumber 字段不同。
       *
       */
      street_number?: string
    }
  }
}
