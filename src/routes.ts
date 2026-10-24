import type { EventEmitter } from './events'

declare global {
  namespace BMap {
    /**
     * 步行路线检索返回的起终点及可选方案。
     *
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.RoutePlan}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b18 | 百度地图 v3.0：WalkingRouteResult}
     */
    export interface WalkingRouteResult {
      /**
       * 所在城市名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b18 | 百度地图 v3.0：WalkingRouteResult}
       */
      city: string

      /**
       * 获取路线起点的兴趣点信息。
       *
       * @returns 路线起点的兴趣点信息。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b18 | 百度地图 v3.0：WalkingRouteResult}
       */
      getStart(): LocalResultPoi

      /**
       * 获取路线终点的兴趣点信息。
       *
       * @returns 路线终点的兴趣点信息。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b18 | 百度地图 v3.0：WalkingRouteResult}
       */
      getEnd(): LocalResultPoi

      /**
       * 获取可选路线方案的数量。
       *
       * @returns 可选路线方案的数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b18 | 百度地图 v3.0：WalkingRouteResult}
       */
      getNumPlans(): number

      /**
       * 获取指定索引的路线方案。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的路线方案。
       * @see {@link BMap.RoutePlan}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b18 | 百度地图 v3.0：WalkingRouteResult}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getPlan(i: number): RoutePlan | undefined
    }

    /**
     * 获取驾车路线及方案的路线规划服务。
     *
     * @see {@link BMap.Map}
     * @see {@link BMap.Point}
     * @see {@link BMap.DrivingRouteOptions}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.DrivingRouteResult}
     * @see {@link BMap.DrivingPolicy}
     * @see {@link BMap.Route}
     * @see {@link BMap.ServiceStatusCode}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
     */
    export class DrivingRoute {
      /**
       * 创建获取驾车路线及方案的路线规划服务实例。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @param opts DrivingRoute 的配置选项。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link BMap.DrivingRouteOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      constructor(location: Map | Point | string, opts?: DrivingRouteOptions)

      /**
       * 根据地理坐标或兴趣点确定的起终点发起路线检索。
       *
       * @param start 起点的地理坐标或兴趣点信息。
       * @param end 终点的地理坐标或兴趣点信息。
       * @see {@link BMap.Point}
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      search(start: Point | LocalResultPoi, end: Point | LocalResultPoi): void

      /**
       * 获取最近一次检索的结果。
       *
       * 官网未说明首次检索之前的状态；runtime 在结果尚未生成时返回 undefined。
       *
       * @returns 最近一次检索的结果。
       * @see {@link BMap.DrivingRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getResults(): DrivingRouteResult | undefined

      /**
       * 清除最近一次检索的结果及其展示内容。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      clearResults(): void

      /**
       * 启用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      enableAutoViewport(): void

      /**
       * 禁用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      disableAutoViewport(): void

      /**
       * 设置服务检索的地理范围。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      setLocation(location: Map | Point | string): void

      /**
       * 设置路线规划策略。
       *
       * @param policy 对应路线服务支持的规划策略。
       * @see {@link BMap.DrivingPolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      setPolicy(policy: DrivingPolicy): void

      /**
       * 设置检索完成时执行的回调。
       *
       * @param callback 检索完成时执行的回调。
       * @param callback.results 本次服务返回的检索结果。
       * @see {@link BMap.DrivingRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      setSearchCompleteCallback(
        callback: (results: DrivingRouteResult) => void,
      ): void

      /**
       * 设置结果标注添加后执行的回调。
       *
       * @param callback 结果标注添加后执行的回调。
       * @param callback.pois 结果兴趣点集合，路线检索中通常为起点和终点。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void

      /**
       * 设置标注信息窗口内容创建后执行的回调。
       *
       * @param callback 标注信息窗口内容创建后执行的回调。
       * @param callback.poi 当前信息窗口关联的兴趣点。
       * @param callback.html 信息窗口内容对应的 DOM 元素。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      setInfoHtmlSetCallback(
        callback: (poi: LocalResultPoi, html: HTMLElement) => void,
      ): void

      /**
       * 设置路线折线添加后执行的回调。
       *
       * @param callback 路线折线添加后执行的回调。
       * @param callback.routes 路线段集合。
       * @see {@link BMap.Route}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      setPolylinesSetCallback(callback: (routes: Route[]) => void): void

      /**
       * 设置结果列表创建后执行的回调。
       *
       * @param callback 结果列表创建后执行的回调。
       * @param callback.container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      setResultsHtmlSetCallback(
        callback: (container: HTMLElement) => void,
      ): void

      /**
       * 获取最近一次服务调用的状态码。
       *
       * 官网未说明服务尚未执行时的状态；runtime 此时返回 undefined。
       *
       * @returns 最近一次服务调用的状态码。
       * @see {@link BMap.ServiceStatusCode}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      getStatus(): ServiceStatusCode | undefined

      /**
       * 返回当前服务或工具的类型说明。
       *
       * @returns 当前对象的类型说明文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
       */
      toString(): string
    }

    /**
     * 获取驾车路线及方案的路线规划服务的配置选项。
     *
     * @see {@link BMap.RenderOptions}
     * @see {@link BMap.DrivingPolicy}
     * @see {@link BMap.DrivingRouteResult}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.Route}
     * @see {@link BMap.DrivingRoute}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b23 | 百度地图 v3.0：DrivingRouteOptions}
     */
    export interface DrivingRouteOptions {
      /**
       * 检索结果在地图及列表中的展示配置。
       *
       * @see {@link BMap.RenderOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b23 | 百度地图 v3.0：DrivingRouteOptions}
       */
      renderOptions?: RenderOptions

      /**
       * 路线检索采用的规划策略。
       *
       * @see {@link BMap.DrivingPolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b23 | 百度地图 v3.0：DrivingRouteOptions}
       */
      policy?: DrivingPolicy

      /**
       * 检索完成后执行的回调。
       *
       * @param results 本次服务返回的检索结果。
       * @see {@link BMap.DrivingRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b23 | 百度地图 v3.0：DrivingRouteOptions}
       */
      onSearchComplete?: (results: DrivingRouteResult) => void

      /**
       * 结果标注添加后执行的回调。
       *
       * @param pois 结果兴趣点集合，路线检索中通常为起点和终点。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b23 | 百度地图 v3.0：DrivingRouteOptions}
       */
      onMarkersSet?: (pois: LocalResultPoi[]) => void

      /**
       * 标注信息窗口内容创建后执行的回调。
       *
       * @param poi 当前信息窗口关联的兴趣点。
       * @param html 信息窗口内容对应的 DOM 元素。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b23 | 百度地图 v3.0：DrivingRouteOptions}
       */
      onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void

      /**
       * 路线折线添加后执行的回调。
       *
       * @param routes 路线段集合。
       * @see {@link BMap.Route}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b23 | 百度地图 v3.0：DrivingRouteOptions}
       */
      onPolylinesSet?: (routes: Route[]) => void

      /**
       * 结果列表创建后执行的回调。
       *
       * @param container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b23 | 百度地图 v3.0：DrivingRouteOptions}
       */
      onResultsHtmlSet?: (container: HTMLElement) => void
    }

    /**
     * 驾车路线规划策略的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_DRIVING_POLICY_DEFAULT}
     * @see {@link BMAP_DRIVING_POLICY_FIRST_HIGHWAYS}
     * @see {@link BMAP_DRIVING_POLICY_AVOID_HIGHWAYS}
     * @see {@link BMAP_DRIVING_POLICY_AVOID_CONGESTION}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b25 | 百度地图 v3.0：DrivingPolicy}
     */
    export type DrivingPolicy = 0 | 3 | 4 | 5

    /**
     * 驾车路线检索返回的起终点及可选方案。
     *
     * @see {@link BMap.DrivingPolicy}
     * @see {@link BMap.TaxiFare}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.RoutePlan}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b24 | 百度地图 v3.0：DrivingRouteResult}
     */
    export interface DrivingRouteResult {
      /**
       * 路线检索采用的规划策略。
       *
       * @see {@link BMap.DrivingPolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b24 | 百度地图 v3.0：DrivingRouteResult}
       */
      policy: DrivingPolicy

      /**
       * 所在城市名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b24 | 百度地图 v3.0：DrivingRouteResult}
       */
      city: string

      /**
       * 在百度地图中查看完整检索结果的地址。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b24 | 百度地图 v3.0：DrivingRouteResult}
       */
      moreResultsUrl: string

      /**
       * 驾车方案关联的出租车费用信息。
       *
       * @see {@link BMap.TaxiFare}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b24 | 百度地图 v3.0：DrivingRouteResult}
       */
      taxiFare: TaxiFare

      /**
       * 获取路线起点的兴趣点信息。
       *
       * @returns 路线起点的兴趣点信息。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b24 | 百度地图 v3.0：DrivingRouteResult}
       */
      getStart(): LocalResultPoi

      /**
       * 获取路线终点的兴趣点信息。
       *
       * @returns 路线终点的兴趣点信息。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b24 | 百度地图 v3.0：DrivingRouteResult}
       */
      getEnd(): LocalResultPoi

      /**
       * 获取可选路线方案的数量。
       *
       * @returns 可选路线方案的数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b24 | 百度地图 v3.0：DrivingRouteResult}
       */
      getNumPlans(): number

      /**
       * 获取指定索引的路线方案。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的路线方案。
       * @see {@link BMap.RoutePlan}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b24 | 百度地图 v3.0：DrivingRouteResult}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getPlan(i: number): RoutePlan | undefined
    }

    /**
     * 出租车里程、日间费用及夜间费用信息。
     *
     * @see {@link BMap.TaxiFareDetail}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b26 | 百度地图 v3.0：TaxiFare}
     */
    export interface TaxiFare {
      /**
       * 日间出租车费用；没有夜间计价时用于全天。
       *
       * @see {@link BMap.TaxiFareDetail}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b26 | 百度地图 v3.0：TaxiFare}
       */
      day: TaxiFareDetail

      /**
       * 夜间出租车费用；部分城市没有单独的夜间计价。
       *
       * 部分城市没有单独的夜间价格，此时为 null，日间价格适用于全天。
       *
       * @see {@link BMap.TaxiFareDetail}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b26 | 百度地图 v3.0：TaxiFare}
       */
      night: TaxiFareDetail | null

      /**
       * 距离或里程，单位为米。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b26 | 百度地图 v3.0：TaxiFare}
       */
      distance: number

      /**
       * 出租车计价说明或其他备注。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b26 | 百度地图 v3.0：TaxiFare}
       */
      remark: string
    }

    /**
     * 出租车起步价、每公里单价及总价。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b27 | 百度地图 v3.0：TaxiFareDetail}
     */
    export interface TaxiFareDetail {
      /**
       * 出租车起步价，单位为元。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b27 | 百度地图 v3.0：TaxiFareDetail}
       */
      initialFare: number

      /**
       * 出租车每公里单价，单位为元。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b27 | 百度地图 v3.0：TaxiFareDetail}
       */
      unitFare: number

      /**
       * 预计出租车总价，单位为元。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b27 | 百度地图 v3.0：TaxiFareDetail}
       */
      totalFare: number
    }

    /**
     * 获取市内公交或跨城换乘方案的路线规划服务。
     *
     * @see {@link BMap.Map}
     * @see {@link BMap.Point}
     * @see {@link BMap.TransitRouteOptions}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.TransitRouteResult}
     * @see {@link BMap.TransitPolicy}
     * @see {@link BMap.IntercityPolicy}
     * @see {@link BMap.TransitTypePolicy}
     * @see {@link BMap.Line}
     * @see {@link BMap.Route}
     * @see {@link BMap.ServiceStatusCode}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
     */
    export class TransitRoute {
      /**
       * 创建获取市内公交或跨城换乘方案的路线规划服务实例。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @param opts TransitRoute 的配置选项。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link BMap.TransitRouteOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      constructor(location: Map | Point | string, opts?: TransitRouteOptions)

      /**
       * 根据地理坐标或兴趣点确定的起终点发起路线检索。
       *
       * @param start 起点的地理坐标或兴趣点信息。
       * @param end 终点的地理坐标或兴趣点信息。
       * @see {@link BMap.Point}
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      search(start: Point | LocalResultPoi, end: Point | LocalResultPoi): void

      /**
       * 获取最近一次检索的结果。
       *
       * 官网未说明首次检索之前的状态；runtime 在结果尚未生成时返回 undefined。
       *
       * @returns 最近一次检索的结果。
       * @see {@link BMap.TransitRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getResults(): TransitRouteResult | undefined

      /**
       * 清除最近一次检索的结果及其展示内容。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      clearResults(): void

      /**
       * 启用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      enableAutoViewport(): void

      /**
       * 禁用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      disableAutoViewport(): void

      /**
       * 设置每页返回的结果或方案数量。
       *
       * @param capacity 每页返回的结果或方案数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      setPageCapacity(capacity: number): void

      /**
       * 设置服务检索的地理范围。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      setLocation(location: Map | Point | string): void

      /**
       * 设置路线规划策略。
       *
       * @param policy 对应路线服务支持的规划策略。
       * @see {@link BMap.TransitPolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      setPolicy(policy: TransitPolicy): void

      /**
       * 设置跨城公交换乘策略。
       *
       * @param intercityPolicy 跨城公交换乘策略。
       * @see {@link BMap.IntercityPolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      setIntercityPolicy(intercityPolicy: IntercityPolicy): void

      /**
       * 设置跨城公交优先交通方式。
       *
       * @param transitTypePolicy 跨城公交优先交通方式。
       * @see {@link BMap.TransitTypePolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      setTransitTypePolicy(transitTypePolicy: TransitTypePolicy): void

      /**
       * 设置检索完成时执行的回调。
       *
       * @param callback 检索完成时执行的回调。
       * @param callback.results 本次服务返回的检索结果。
       * @see {@link BMap.TransitRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      setSearchCompleteCallback(
        callback: (results: TransitRouteResult) => void,
      ): void

      /**
       * 设置结果标注添加后执行的回调。
       *
       * @param callback 结果标注添加后执行的回调。
       * @param callback.pois 结果兴趣点集合，路线检索中通常为起点和终点。
       * @param callback.transfers 公交换乘站点的兴趣点集合。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      setMarkersSetCallback(
        callback: (pois: LocalResultPoi[], transfers: LocalResultPoi[]) => void,
      ): void

      /**
       * 设置标注信息窗口内容创建后执行的回调。
       *
       * @param callback 标注信息窗口内容创建后执行的回调。
       * @param callback.poi 当前信息窗口关联的兴趣点。
       * @param callback.html 信息窗口内容对应的 DOM 元素。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      setInfoHtmlSetCallback(
        callback: (poi: LocalResultPoi, html: HTMLElement) => void,
      ): void

      /**
       * 设置路线折线添加后执行的回调。
       *
       * @param callback 路线折线添加后执行的回调。
       * @param callback.lines 公共交通线路段集合。
       * @param callback.routes 路线段集合。
       * @see {@link BMap.Line}
       * @see {@link BMap.Route}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      setPolylinesSetCallback(
        callback: (lines: Line[], routes: Route[]) => void,
      ): void

      /**
       * 设置结果列表创建后执行的回调。
       *
       * @param callback 结果列表创建后执行的回调。
       * @param callback.container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      setResultsHtmlSetCallback(
        callback: (container: HTMLElement) => void,
      ): void

      /**
       * 获取最近一次服务调用的状态码。
       *
       * 官网未说明服务尚未执行时的状态；runtime 此时返回 undefined。
       *
       * @returns 最近一次服务调用的状态码。
       * @see {@link BMap.ServiceStatusCode}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      getStatus(): ServiceStatusCode | undefined

      /**
       * 返回当前服务或工具的类型说明。
       *
       * @returns 当前对象的类型说明文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
       */
      toString(): string
    }

    /**
     * 驾车、步行或骑行方案及其路线段。
     *
     * @see {@link BMap.Route}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b28 | 百度地图 v3.0：RoutePlan}
     */
    export interface RoutePlan {
      /**
       * 获取方案包含的路线段数量。
       *
       * @returns 方案包含的路线段数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b28 | 百度地图 v3.0：RoutePlan}
       */
      getNumRoutes(): number

      /**
       * 获取指定索引的路线段。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的路线段。
       * @see {@link BMap.Route}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b28 | 百度地图 v3.0：RoutePlan}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getRoute(i: number): Route | undefined

      /**
       * 获取两点、路段或方案的距离。
       *
       * @param format true 返回带单位的距离文字；false 返回以米为单位的数值，默认 true。
       * @returns 路段或方案距离；format 为 false 时返回米数，否则返回带单位的文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b28 | 百度地图 v3.0：RoutePlan}
       */
      getDistance(format?: true): string

      /**
       * 获取以米为单位的距离数值。
       *
       * @param format 传入 false，返回数值。
       * @returns 距离，单位为米。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b28 | 百度地图 v3.0：RoutePlan}
       */
      getDistance(format: false): number

      /**
       * 按动态格式选项获取格式化文字或数值。
       *
       * @param format 是否返回带单位的格式化文字。
       * @returns 格式化文字或数值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b28 | 百度地图 v3.0：RoutePlan}
       */
      getDistance(format: boolean | undefined): string | number

      /**
       * 获取行程耗时。
       *
       * @param format true 返回带单位的耗时文字；false 返回以秒为单位的数值，默认 true。
       * @returns 行程耗时；format 为 false 时返回秒数，否则返回带单位的文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b28 | 百度地图 v3.0：RoutePlan}
       */
      getDuration(format?: true): string

      /**
       * 获取以秒为单位的耗时数值。
       *
       * @param format 传入 false，返回数值。
       * @returns 耗时，单位为秒。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b28 | 百度地图 v3.0：RoutePlan}
       */
      getDuration(format: false): number

      /**
       * 按动态格式选项获取格式化文字或数值。
       *
       * @param format 是否返回带单位的格式化文字。
       * @returns 格式化文字或数值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b28 | 百度地图 v3.0：RoutePlan}
       */
      getDuration(format: boolean | undefined): string | number

      /**
       * 获取拖拽路线产生的途经兴趣点集合。
       *
       * @returns 拖拽路线产生的途经兴趣点集合。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b28 | 百度地图 v3.0：RoutePlan}
       */
      getDragPois(): LocalResultPoi[]
    }

    /**
     * 获取市内公交或跨城换乘方案的路线规划服务的配置选项。
     *
     * @see {@link BMap.RenderOptions}
     * @see {@link BMap.TransitPolicy}
     * @see {@link BMap.IntercityPolicy}
     * @see {@link BMap.TransitTypePolicy}
     * @see {@link BMap.TransitRouteResult}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.Line}
     * @see {@link BMap.Route}
     * @see {@link BMap.TransitRoute}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b8 | 百度地图 v3.0：TransitRouteOptions}
     */
    export interface TransitRouteOptions {
      /**
       * 检索结果在地图及列表中的展示配置。
       *
       * @see {@link BMap.RenderOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b8 | 百度地图 v3.0：TransitRouteOptions}
       */
      renderOptions?: RenderOptions

      /**
       * 路线检索采用的规划策略。
       *
       * @see {@link BMap.TransitPolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b8 | 百度地图 v3.0：TransitRouteOptions}
       */
      policy?: TransitPolicy

      /**
       * 跨城公交换乘方案采用的策略。
       *
       * @see {@link BMap.IntercityPolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b8 | 百度地图 v3.0：TransitRouteOptions}
       */
      intercityPolicy?: IntercityPolicy

      /**
       * 跨城公交方案优先使用的交通方式。
       *
       * @see {@link BMap.TransitTypePolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b8 | 百度地图 v3.0：TransitRouteOptions}
       */
      transitTypePolicy?: TransitTypePolicy

      /**
       * 每页返回的结果或方案数量。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b8 | 百度地图 v3.0：TransitRouteOptions}
       */
      pageCapacity?: number

      /**
       * 检索完成后执行的回调。
       *
       * @param result 本次服务返回的检索结果。
       * @see {@link BMap.TransitRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b8 | 百度地图 v3.0：TransitRouteOptions}
       */
      onSearchComplete?: (result: TransitRouteResult) => void

      /**
       * 结果标注添加后执行的回调。
       *
       * @param pois 结果兴趣点集合，路线检索中通常为起点和终点。
       * @param transfers 公交换乘站点的兴趣点集合。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b8 | 百度地图 v3.0：TransitRouteOptions}
       */
      onMarkersSet?: (
        pois: LocalResultPoi[],
        transfers: LocalResultPoi[],
      ) => void

      /**
       * 标注信息窗口内容创建后执行的回调。
       *
       * @param poi 当前信息窗口关联的兴趣点。
       * @param html 信息窗口内容对应的 DOM 元素。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b8 | 百度地图 v3.0：TransitRouteOptions}
       */
      onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void

      /**
       * 路线折线添加后执行的回调。
       *
       * @param lines 公共交通线路段集合。
       * @param routes 路线段集合。
       * @see {@link BMap.Line}
       * @see {@link BMap.Route}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b8 | 百度地图 v3.0：TransitRouteOptions}
       */
      onPolylinesSet?: (lines: Line[], routes: Route[]) => void

      /**
       * 结果列表创建后执行的回调。
       *
       * @param container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b8 | 百度地图 v3.0：TransitRouteOptions}
       */
      onResultsHtmlSet?: (container: HTMLElement) => void
    }

    /**
     * 路线方案中的驾车、步行或骑行路段。
     *
     * @see {@link BMap.Step}
     * @see {@link BMap.Polyline}
     * @see {@link BMap.Point}
     * @see {@link BMap.RouteType}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b29 | 百度地图 v3.0：Route}
     */
    export interface Route {
      /**
       * 获取路线关键点的数量。
       *
       * @returns 路线关键点的数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b29 | 百度地图 v3.0：Route}
       */
      getNumSteps(): number

      /**
       * 获取指定索引的路线关键点。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的路线关键点。
       * @see {@link BMap.Step}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b29 | 百度地图 v3.0：Route}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getStep(i: number): Step | undefined

      /**
       * 获取两点、路段或方案的距离。
       *
       * @param format true 返回带单位的距离文字；false 返回以米为单位的数值，默认 true。
       * @returns 路段或方案距离；format 为 false 时返回米数，否则返回带单位的文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b29 | 百度地图 v3.0：Route}
       */
      getDistance(format?: true): string

      /**
       * 获取以米为单位的距离数值。
       *
       * @param format 传入 false，返回数值。
       * @returns 距离，单位为米。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b29 | 百度地图 v3.0：Route}
       */
      getDistance(format: false): number

      /**
       * 按动态格式选项获取格式化文字或数值。
       *
       * @param format 是否返回带单位的格式化文字。
       * @returns 格式化文字或数值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b29 | 百度地图 v3.0：Route}
       */
      getDistance(format: boolean | undefined): string | number

      /**
       * 获取当前对象在所属集合中的索引。
       *
       * @returns 当前对象在所属集合中的索引。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b29 | 百度地图 v3.0：Route}
       */
      getIndex(): number

      /**
       * 获取路线对应的折线覆盖物。
       *
       * 只有检索结果自动添加到地图时，对应覆盖物才可用。
       *
       * @returns 路线对应的折线覆盖物。
       * @see {@link BMap.Polyline}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b29 | 百度地图 v3.0：Route}
       */
      getPolyline(): Polyline

      /**
       * 获取构成覆盖物的路径。
       *
       * @returns 构成覆盖物的路径。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b29 | 百度地图 v3.0：Route}
       */
      getPath(): Point[]

      /**
       * 获取当前路段的出行类型。
       *
       * @returns 当前路段的出行类型。
       * @see {@link BMap.RouteType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b29 | 百度地图 v3.0：Route}
       */
      getRouteType(): RouteType
    }

    /**
     * 市内公交换乘策略的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_TRANSIT_POLICY_RECOMMEND}
     * @see {@link BMAP_TRANSIT_POLICY_LEAST_TIME}
     * @see {@link BMAP_TRANSIT_POLICY_LEAST_TRANSFER}
     * @see {@link BMAP_TRANSIT_POLICY_LEAST_WALKING}
     * @see {@link BMAP_TRANSIT_POLICY_AVOID_SUBWAYS}
     * @see {@link BMAP_TRANSIT_POLICY_FIRST_SUBWAYS}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b9 | 百度地图 v3.0：TransitPolicy}
     */
    export type TransitPolicy = 0 | 1 | 2 | 3 | 4 | 5

    /**
     * 驾车、步行或骑行路段的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_ROUTE_TYPE_DRIVING}
     * @see {@link BMAP_ROUTE_TYPE_WALKING}
     * @see {@link BMAP_ROUTE_TYPE_RIDING}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b30 | 百度地图 v3.0：RouteType}
     */
    export type RouteType = 2 | 3 | 6

    /**
     * 公交路线检索返回的换乘策略及可选方案。
     *
     * @see {@link BMap.TransitPolicy}
     * @see {@link BMap.IntercityPolicy}
     * @see {@link BMap.TransitTypePolicy}
     * @see {@link BMap.TransitType}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.TransitRoutePlan}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b12 | 百度地图 v3.0：TransitRouteResult}
     */
    export interface TransitRouteResult {
      /**
       * 路线检索采用的规划策略。
       *
       * @see {@link BMap.TransitPolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b12 | 百度地图 v3.0：TransitRouteResult}
       */
      policy: TransitPolicy

      /**
       * 跨城公交换乘方案采用的策略。
       *
       * @see {@link BMap.IntercityPolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b12 | 百度地图 v3.0：TransitRouteResult}
       */
      intercityPolicy?: IntercityPolicy

      /**
       * 跨城公交方案优先使用的交通方式。
       *
       * @see {@link BMap.TransitTypePolicy}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b12 | 百度地图 v3.0：TransitRouteResult}
       */
      transitTypePolicy?: TransitTypePolicy

      /**
       * 获取公交方案的市内或跨城类型。
       *
       * @returns 公交方案的市内或跨城类型。
       * @see {@link BMap.TransitType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b12 | 百度地图 v3.0：TransitRouteResult}
       */
      getTransitType(): TransitType

      /**
       * 所在城市名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b12 | 百度地图 v3.0：TransitRouteResult}
       */
      city: string

      /**
       * 在百度地图中查看完整检索结果的地址。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b12 | 百度地图 v3.0：TransitRouteResult}
       */
      moreResultsUrl: string

      /**
       * 获取路线起点的兴趣点信息。
       *
       * @returns 路线起点的兴趣点信息。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b12 | 百度地图 v3.0：TransitRouteResult}
       */
      getStart(): LocalResultPoi

      /**
       * 获取路线终点的兴趣点信息。
       *
       * @returns 路线终点的兴趣点信息。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b12 | 百度地图 v3.0：TransitRouteResult}
       */
      getEnd(): LocalResultPoi

      /**
       * 获取可选路线方案的数量。
       *
       * @returns 可选路线方案的数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b12 | 百度地图 v3.0：TransitRouteResult}
       */
      getNumPlans(): number

      /**
       * 获取指定索引的路线方案。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的路线方案。
       * @see {@link BMap.TransitRoutePlan}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b12 | 百度地图 v3.0：TransitRouteResult}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getPlan(i: number): TransitRoutePlan | undefined
    }

    /**
     * 路线中的关键点及到下一关键点的行进提示。
     *
     * @see {@link BMap.Point}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b31 | 百度地图 v3.0：Step}
     */
    export interface Step {
      /**
       * 获取对象的地理坐标。
       *
       * @returns 对象的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b31 | 百度地图 v3.0：Step}
       */
      getPosition(): Point

      /**
       * 获取当前对象在所属集合中的索引。
       *
       * @returns 当前对象在所属集合中的索引。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b31 | 百度地图 v3.0：Step}
       */
      getIndex(): number

      /**
       * 获取路线或方案的行进描述，可控制是否保留 HTML 标签。
       *
       * @param includeHtml 是否在描述中保留 HTML 标签，默认保留。
       * @returns 路线或方案的行进描述，可控制是否保留 HTML 标签。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b31 | 百度地图 v3.0：Step}
       */
      getDescription(includeHtml?: boolean): string

      /**
       * 获取两点、路段或方案的距离。
       *
       * @param format true 返回带单位的距离文字；false 返回以米为单位的数值，默认 true。
       * @returns 路段或方案距离；format 为 false 时返回米数，否则返回带单位的文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b31 | 百度地图 v3.0：Step}
       */
      getDistance(format?: true): string

      /**
       * 获取以米为单位的距离数值。
       *
       * @param format 传入 false，返回数值。
       * @returns 距离，单位为米。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b31 | 百度地图 v3.0：Step}
       */
      getDistance(format: false): number

      /**
       * 按动态格式选项获取格式化文字或数值。
       *
       * @param format 是否返回带单位的格式化文字。
       * @returns 格式化文字或数值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b31 | 百度地图 v3.0：Step}
       */
      getDistance(format: boolean | undefined): string | number
    }

    /**
     * 由公共交通路段和步行路段组成的换乘方案。
     *
     * @see {@link BMap.TransitPlanType}
     * @see {@link BMap.Route}
     * @see {@link BMap.Line}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
     */
    export interface TransitRoutePlan {
      /**
       * 获取指定索引路段的交通方式类型。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引路段的交通方式类型。
       * @see {@link BMap.TransitPlanType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getTotalType(i: number): TransitPlanType | undefined

      /**
       * 获取指定索引的公共交通或步行路段。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的公共交通或步行路段。
       * @see {@link BMap.Route}
       * @see {@link BMap.Line}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getTotal(i: number): Route | Line | undefined

      /**
       * 获取换乘方案中全部路段的数量。
       *
       * @returns 换乘方案中全部路段的数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       */
      getNumTotal(): number

      /**
       * 获取方案包含的公共交通线路段数量。
       *
       * @returns 方案包含的公共交通线路段数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       */
      getNumLines(): number

      /**
       * 获取指定索引的公共交通线路段。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的公共交通线路段。
       * @see {@link BMap.Line}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getLine(i: number): Line | undefined

      /**
       * 获取方案包含的路线段数量。
       *
       * @returns 方案包含的路线段数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       */
      getNumRoutes(): number

      /**
       * 获取指定索引的路线段。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的路线段。
       * @see {@link BMap.Route}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getRoute(i: number): Route | undefined

      /**
       * 获取两点、路段或方案的距离。
       *
       * @param format true 返回带单位的距离文字；false 返回以米为单位的数值，默认 true。
       * @returns 路段或方案距离；format 为 false 时返回米数，否则返回带单位的文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       */
      getDistance(format?: true): string

      /**
       * 获取以米为单位的距离数值。
       *
       * @param format 传入 false，返回数值。
       * @returns 距离，单位为米。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       */
      getDistance(format: false): number

      /**
       * 按动态格式选项获取格式化文字或数值。
       *
       * @param format 是否返回带单位的格式化文字。
       * @returns 格式化文字或数值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       */
      getDistance(format: boolean | undefined): string | number

      /**
       * 获取行程耗时。
       *
       * @param format true 返回带单位的耗时文字；false 返回以秒为单位的数值，默认 true。
       * @returns 行程耗时；format 为 false 时返回秒数，否则返回带单位的文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       */
      getDuration(format?: true): string

      /**
       * 获取以秒为单位的耗时数值。
       *
       * @param format 传入 false，返回数值。
       * @returns 耗时，单位为秒。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       */
      getDuration(format: false): number

      /**
       * 按动态格式选项获取格式化文字或数值。
       *
       * @param format 是否返回带单位的格式化文字。
       * @returns 格式化文字或数值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       */
      getDuration(format: boolean | undefined): string | number

      /**
       * 获取路线或方案的行进描述，可控制是否保留 HTML 标签。
       *
       * @param includeHtml 是否在描述中保留 HTML 标签，默认保留。
       * @returns 路线或方案的行进描述，可控制是否保留 HTML 标签。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
       */
      getDescription(includeHtml?: boolean): string
    }

    /**
     * 获取步行路线及方案的路线规划服务。
     *
     * @see {@link BMap.Map}
     * @see {@link BMap.Point}
     * @see {@link BMap.WalkingRouteOptions}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.WalkingRouteResult}
     * @see {@link BMap.Route}
     * @see {@link BMap.ServiceStatusCode}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
     */
    export class WalkingRoute {
      /**
       * 创建获取步行路线及方案的路线规划服务实例。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @param opts WalkingRoute 的配置选项。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link BMap.WalkingRouteOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      constructor(location: Map | Point | string, opts?: WalkingRouteOptions)

      /**
       * 根据关键字或起终点发起检索。
       *
       * @param start 起点的关键字、地理坐标或兴趣点信息。
       * @param end 终点的关键字、地理坐标或兴趣点信息。
       * @see {@link BMap.Point}
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      search(
        start: string | Point | LocalResultPoi,
        end: string | Point | LocalResultPoi,
      ): void

      /**
       * 获取最近一次检索的结果。
       *
       * 官网未说明首次检索之前的状态；runtime 在结果尚未生成时返回 undefined。
       *
       * @returns 最近一次检索的结果。
       * @see {@link BMap.WalkingRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getResults(): WalkingRouteResult | undefined

      /**
       * 清除最近一次检索的结果及其展示内容。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      clearResults(): void

      /**
       * 启用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      enableAutoViewport(): void

      /**
       * 禁用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      disableAutoViewport(): void

      /**
       * 设置服务检索的地理范围。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      setLocation(location: Map | Point | string): void

      /**
       * 设置检索完成时执行的回调。
       *
       * @param callback 检索完成时执行的回调。
       * @param callback.result 本次服务返回的检索结果。
       * @see {@link BMap.WalkingRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      setSearchCompleteCallback(
        callback: (result: WalkingRouteResult) => void,
      ): void

      /**
       * 设置结果标注添加后执行的回调。
       *
       * @param callback 结果标注添加后执行的回调。
       * @param callback.pois 结果兴趣点集合，路线检索中通常为起点和终点。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void

      /**
       * 设置标注信息窗口内容创建后执行的回调。
       *
       * @param callback 标注信息窗口内容创建后执行的回调。
       * @param callback.poi 当前信息窗口关联的兴趣点。
       * @param callback.html 信息窗口内容对应的 DOM 元素。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      setInfoHtmlSetCallback(
        callback: (poi: LocalResultPoi, html: HTMLElement) => void,
      ): void

      /**
       * 设置路线折线添加后执行的回调。
       *
       * @param callback 路线折线添加后执行的回调。
       * @param callback.routes 路线段集合。
       * @see {@link BMap.Route}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      setPolylinesSetCallback(callback: (routes: Route[]) => void): void

      /**
       * 设置结果列表创建后执行的回调。
       *
       * @param callback 结果列表创建后执行的回调。
       * @param callback.container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      setResultsHtmlSetCallback(
        callback: (container: HTMLElement) => void,
      ): void

      /**
       * 获取最近一次服务调用的状态码。
       *
       * 官网未说明服务尚未执行时的状态；runtime 此时返回 undefined。
       *
       * @returns 最近一次服务调用的状态码。
       * @see {@link BMap.ServiceStatusCode}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      getStatus(): ServiceStatusCode | undefined

      /**
       * 返回当前服务或工具的类型说明。
       *
       * @returns 当前对象的类型说明文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
       */
      toString(): string
    }

    /**
     * 公交换乘方案中的公共交通线路段。
     *
     * @see {@link BMap.LineType}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.Point}
     * @see {@link BMap.Polyline}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b47 | 百度地图 v3.0：Line}
     */
    export interface Line {
      /**
       * 用于展示名称或鼠标悬停提示的标题。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b47 | 百度地图 v3.0：Line}
       */
      title: string

      /**
       * 对象所属的类别。
       *
       * @see {@link BMap.LineType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b47 | 百度地图 v3.0：Line}
       */
      type: LineType

      /**
       * 获取本段公共交通线路途经的站点数量。
       *
       * @returns 本段公共交通线路途经的站点数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b47 | 百度地图 v3.0：Line}
       */
      getNumViaStops(): number

      /**
       * 获取当前公共交通路段的上车站点。
       *
       * @returns 当前公共交通路段的上车站点。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b47 | 百度地图 v3.0：Line}
       */
      getGetOnStop(): LocalResultPoi

      /**
       * 获取当前公共交通路段的下车站点。
       *
       * @returns 当前公共交通路段的下车站点。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b47 | 百度地图 v3.0：Line}
       */
      getGetOffStop(): LocalResultPoi

      /**
       * 获取构成覆盖物的路径。
       *
       * @returns 构成覆盖物的路径。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b47 | 百度地图 v3.0：Line}
       */
      getPath(): Point[]

      /**
       * 获取路线对应的折线覆盖物。
       *
       * 只有检索结果自动添加到地图时，对应覆盖物才可用。
       *
       * @returns 路线对应的折线覆盖物。
       * @see {@link BMap.Polyline}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b47 | 百度地图 v3.0：Line}
       */
      getPolyline(): Polyline

      /**
       * 获取两点、路段或方案的距离。
       *
       * @param format true 返回带单位的距离文字；false 返回以米为单位的数值，默认 true。
       * @returns 路段或方案距离；format 为 false 时返回米数，否则返回带单位的文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b47 | 百度地图 v3.0：Line}
       */
      getDistance(format?: true): string

      /**
       * 获取以米为单位的距离数值。
       *
       * @param format 传入 false，返回数值。
       * @returns 距离，单位为米。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b47 | 百度地图 v3.0：Line}
       */
      getDistance(format: false): number

      /**
       * 按动态格式选项获取格式化文字或数值。
       *
       * @param format 是否返回带单位的格式化文字。
       * @returns 格式化文字或数值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b47 | 百度地图 v3.0：Line}
       */
      getDistance(format: boolean | undefined): string | number
    }

    /**
     * 获取步行路线及方案的路线规划服务的配置选项。
     *
     * @see {@link BMap.RenderOptions}
     * @see {@link BMap.WalkingRouteResult}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.Route}
     * @see {@link BMap.WalkingRoute}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b17 | 百度地图 v3.0：WalkingRouteOptions}
     */
    export interface WalkingRouteOptions {
      /**
       * 检索结果在地图及列表中的展示配置。
       *
       * @see {@link BMap.RenderOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b17 | 百度地图 v3.0：WalkingRouteOptions}
       */
      renderOptions?: RenderOptions

      /**
       * 检索完成后执行的回调。
       *
       * @param result 本次服务返回的检索结果。
       * @see {@link BMap.WalkingRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b17 | 百度地图 v3.0：WalkingRouteOptions}
       */
      onSearchComplete?: (result: WalkingRouteResult) => void

      /**
       * 结果标注添加后执行的回调。
       *
       * @param pois 结果兴趣点集合，路线检索中通常为起点和终点。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b17 | 百度地图 v3.0：WalkingRouteOptions}
       */
      onMarkersSet?: (pois: LocalResultPoi[]) => void

      /**
       * 路线折线添加后执行的回调。
       *
       * @param routes 路线段集合。
       * @see {@link BMap.Route}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b17 | 百度地图 v3.0：WalkingRouteOptions}
       */
      onPolylinesSet?: (routes: Route[]) => void

      /**
       * 标注信息窗口内容创建后执行的回调。
       *
       * @param poi 当前信息窗口关联的兴趣点。
       * @param html 信息窗口内容对应的 DOM 元素。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b17 | 百度地图 v3.0：WalkingRouteOptions}
       */
      onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void

      /**
       * 结果列表创建后执行的回调。
       *
       * @param container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b17 | 百度地图 v3.0：WalkingRouteOptions}
       */
      onResultsHtmlSet?: (container: HTMLElement) => void
    }

    /**
     * 跨城公交换乘策略的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_INTERCITY_POLICY_LEAST_TIME}
     * @see {@link BMAP_INTERCITY_POLICY_EARLY_START}
     * @see {@link BMAP_INTERCITY_POLICY_CHEAP_PRICE}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b10 | 百度地图 v3.0：IntercityPolicy}
     */
    export type IntercityPolicy = 0 | 1 | 2

    /**
     * 跨城公交优先交通方式的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_TRANSIT_TYPE_POLICY_TRAIN}
     * @see {@link BMAP_TRANSIT_TYPE_POLICY_AIRPLANE}
     * @see {@link BMAP_TRANSIT_TYPE_POLICY_COACH}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b11 | 百度地图 v3.0：TransitTypePolicy}
     */
    export type TransitTypePolicy = 0 | 1 | 2

    /**
     * 市内或跨城公交方案的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_TRANSIT_TYPE_IN_CITY}
     * @see {@link BMAP_TRANSIT_TYPE_CROSS_CITY}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b14 | 百度地图 v3.0：TransitType}
     */
    export type TransitType = 0 | 1

    /**
     * 公交方案中路段交通方式的类型标识；官网未列出可用常量值。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
     */
    export type TransitPlanType = 0 | 1

    /**
     * 获取骑行路线及方案的路线规划服务。
     *
     * @see {@link BMap.Map}
     * @see {@link BMap.Point}
     * @see {@link BMap.RidingRouteOptions}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.RidingRouteResult}
     * @see {@link BMap.Route}
     * @see {@link BMap.ServiceStatusCode}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
     */
    export class RidingRoute {
      /**
       * 创建获取骑行路线及方案的路线规划服务实例。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @param opts RidingRoute 的配置选项。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link BMap.RidingRouteOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      constructor(location: Map | Point | string, opts?: RidingRouteOptions)

      /**
       * 根据关键字或起终点发起检索。
       *
       * @param start 起点的关键字、地理坐标或兴趣点信息。
       * @param end 终点的关键字、地理坐标或兴趣点信息。
       * @see {@link BMap.Point}
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      search(
        start: string | Point | LocalResultPoi,
        end: string | Point | LocalResultPoi,
      ): void

      /**
       * 获取最近一次检索的结果。
       *
       * 官网未说明首次检索之前的状态；runtime 在结果尚未生成时返回 undefined。
       *
       * @returns 最近一次检索的结果。
       * @see {@link BMap.RidingRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getResults(): RidingRouteResult | undefined

      /**
       * 清除最近一次检索的结果及其展示内容。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      clearResults(): void

      /**
       * 启用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      enableAutoViewport(): void

      /**
       * 禁用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      disableAutoViewport(): void

      /**
       * 设置服务检索的地理范围。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      setLocation(location: Map | Point | string): void

      /**
       * 设置检索完成时执行的回调。
       *
       * @param callback 检索完成时执行的回调。
       * @param callback.results 本次服务返回的检索结果。
       * @see {@link BMap.RidingRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      setSearchCompleteCallback(
        callback: (results: RidingRouteResult) => void,
      ): void

      /**
       * 设置结果标注添加后执行的回调。
       *
       * @param callback 结果标注添加后执行的回调。
       * @param callback.pois 结果兴趣点集合，路线检索中通常为起点和终点。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void

      /**
       * 设置标注信息窗口内容创建后执行的回调。
       *
       * @param callback 标注信息窗口内容创建后执行的回调。
       * @param callback.poi 当前信息窗口关联的兴趣点。
       * @param callback.html 信息窗口内容对应的 DOM 元素。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      setInfoHtmlSetCallback(
        callback: (poi: LocalResultPoi, html: HTMLElement) => void,
      ): void

      /**
       * 设置路线折线添加后执行的回调。
       *
       * @param callback 路线折线添加后执行的回调。
       * @param callback.routes 路线段集合。
       * @see {@link BMap.Route}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      setPolylinesSetCallback(callback: (routes: Route[]) => void): void

      /**
       * 设置结果列表创建后执行的回调。
       *
       * @param callback 结果列表创建后执行的回调。
       * @param callback.container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      setResultsHtmlSetCallback(
        callback: (container: HTMLElement) => void,
      ): void

      /**
       * 获取最近一次服务调用的状态码。
       *
       * 官网未说明服务尚未执行时的状态；runtime 此时返回 undefined。
       *
       * @returns 最近一次服务调用的状态码。
       * @see {@link BMap.ServiceStatusCode}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      getStatus(): ServiceStatusCode | undefined

      /**
       * 返回当前服务或工具的类型说明。
       *
       * @returns 当前对象的类型说明文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
       */
      toString(): string
    }

    /**
     * 获取骑行路线及方案的路线规划服务的配置选项。
     *
     * @see {@link BMap.RenderOptions}
     * @see {@link BMap.RidingRouteResult}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.Route}
     * @see {@link BMap.RidingRoute}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b20 | 百度地图 v3.0：RidingRouteOptions}
     */
    export interface RidingRouteOptions {
      /**
       * 检索结果在地图及列表中的展示配置。
       *
       * @see {@link BMap.RenderOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b20 | 百度地图 v3.0：RidingRouteOptions}
       */
      renderOptions?: RenderOptions

      /**
       * 检索完成后执行的回调。
       *
       * @param result 本次服务返回的检索结果。
       * @see {@link BMap.RidingRouteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b20 | 百度地图 v3.0：RidingRouteOptions}
       */
      onSearchComplete?: (result: RidingRouteResult) => void

      /**
       * 结果标注添加后执行的回调。
       *
       * @param pois 结果兴趣点集合，路线检索中通常为起点和终点。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b20 | 百度地图 v3.0：RidingRouteOptions}
       */
      onMarkersSet?: (pois: LocalResultPoi[]) => void

      /**
       * 路线折线添加后执行的回调。
       *
       * @param routes 路线段集合。
       * @see {@link BMap.Route}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b20 | 百度地图 v3.0：RidingRouteOptions}
       */
      onPolylinesSet?: (routes: Route[]) => void

      /**
       * 标注信息窗口内容创建后执行的回调。
       *
       * @param poi 当前信息窗口关联的兴趣点。
       * @param html 信息窗口内容对应的 DOM 元素。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b20 | 百度地图 v3.0：RidingRouteOptions}
       */
      onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void

      /**
       * 结果列表创建后执行的回调。
       *
       * @param container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b20 | 百度地图 v3.0：RidingRouteOptions}
       */
      onResultsHtmlSet?: (container: HTMLElement) => void
    }

    /**
     * 骑行路线检索返回的起终点及可选方案。
     *
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.RoutePlan}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b21 | 百度地图 v3.0：RidingRouteResult}
     */
    export interface RidingRouteResult {
      /**
       * 获取路线起点的兴趣点信息。
       *
       * @returns 路线起点的兴趣点信息。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b21 | 百度地图 v3.0：RidingRouteResult}
       */
      getStart(): LocalResultPoi

      /**
       * 获取路线终点的兴趣点信息。
       *
       * @returns 路线终点的兴趣点信息。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b21 | 百度地图 v3.0：RidingRouteResult}
       */
      getEnd(): LocalResultPoi

      /**
       * 获取可选路线方案的数量。
       *
       * @returns 可选路线方案的数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b21 | 百度地图 v3.0：RidingRouteResult}
       */
      getNumPlans(): number

      /**
       * 获取指定索引的路线方案。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的路线方案。
       * @see {@link BMap.RoutePlan}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b21 | 百度地图 v3.0：RidingRouteResult}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getPlan(i: number): RoutePlan | undefined
    }
    /**
     * DrivingRoute 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.DrivingRoute}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22 | 百度地图 v3.0：DrivingRoute}
     */
    export interface DrivingRoute extends EventEmitter {}

    /**
     * WalkingRoute 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.WalkingRoute}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16 | 百度地图 v3.0：WalkingRoute}
     */
    export interface WalkingRoute extends EventEmitter {}

    /**
     * TransitRoute 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.TransitRoute}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7 | 百度地图 v3.0：TransitRoute}
     */
    export interface TransitRoute extends EventEmitter {}

    /**
     * RidingRoute 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.RidingRoute}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19 | 百度地图 v3.0：RidingRoute}
     */
    export interface RidingRoute extends EventEmitter {}
  }
}
