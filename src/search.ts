import type { EventEmitter } from './events'

declare global {
  namespace BMap {
    /**
     * 按关键字、范围或周边位置检索兴趣点的服务。
     *
     * @see {@link BMap.Map}
     * @see {@link BMap.Point}
     * @see {@link BMap.LocalSearchOptions}
     * @see {@link BMap.Bounds}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.LocalResult}
     * @see {@link BMap.ServiceStatusCode}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
     */
    export class LocalSearch {
      /**
       * 创建按关键字、范围或周边位置检索兴趣点的服务实例。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @param opts LocalSearch 的配置选项。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link BMap.LocalSearchOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      constructor(location: Map | Point | string, opts?: LocalSearchOptions)

      /**
       * 根据关键字或起终点发起检索。
       *
       * @param keyword 检索关键字；支持数组的方法最多接受 10 个关键字。
       * @param option 本次检索的附加配置。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      search(
        keyword: string | string[],
        option?: LocalSearchSearchOptions,
      ): void

      /**
       * 在指定地理矩形范围内检索兴趣点。
       *
       * @param keyword 检索关键字；支持数组的方法最多接受 10 个关键字。
       * @param bounds 目标地理矩形范围。
       * @param option 本次检索的附加配置。
       * @see {@link BMap.Bounds}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      searchInBounds(
        keyword: string | string[],
        bounds: Bounds,
        option?: LocalSearchSearchOptions,
      ): void

      /**
       * 围绕指定中心位置检索兴趣点。
       *
       * 中心位置为字符串时，SDK 忽略半径参数。
       *
       * @param keyword 检索关键字；支持数组的方法最多接受 10 个关键字。
       * @param center 目标中心点、检索位置或城市名称。
       * @param radius 半径，单位为米。
       * @param option 本次检索的附加配置。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      searchNearby(
        keyword: string | string[],
        center: LocalResultPoi | string | Point,
        radius: number,
        option?: LocalSearchSearchOptions,
      ): void

      /**
       * 获取最近一次检索的结果。
       *
       * 官网未说明首次检索之前的状态；runtime 在结果尚未生成时返回 undefined。
       *
       * @returns 最近一次检索的结果。
       * @see {@link BMap.LocalResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getResults(): LocalResult | LocalResult[] | undefined

      /**
       * 清除最近一次检索的结果及其展示内容。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      clearResults(): void

      /**
       * 发起指定页码的检索请求。
       *
       * @param page 需要检索的页码，从 0 开始。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      gotoPage(page: number): void

      /**
       * 启用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      enableAutoViewport(): void

      /**
       * 禁用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      disableAutoViewport(): void

      /**
       * 启用自动选中首条检索结果。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      enableFirstResultSelection(): void

      /**
       * 禁用自动选中首条检索结果。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      disableFirstResultSelection(): void

      /**
       * 设置服务检索的地理范围。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      setLocation(location: Map | Point | string): void

      /**
       * 设置每页返回的结果或方案数量。
       *
       * @param capacity 每页返回的结果或方案数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      setPageCapacity(capacity: number): void

      /**
       * 获取每页返回的结果或方案数量。
       *
       * @returns 每页返回的结果或方案数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      getPageCapacity(): number

      /**
       * 设置检索完成时执行的回调。
       *
       * @param callback 检索完成时执行的回调。
       * @param callback.results 本次服务返回的检索结果。
       * @see {@link BMap.LocalResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      setSearchCompleteCallback(
        callback: (results: LocalResult | LocalResult[]) => void,
      ): void

      /**
       * 设置结果标注添加后执行的回调。
       *
       * @param callback 结果标注添加后执行的回调。
       * @param callback.pois 结果兴趣点集合，路线检索中通常为起点和终点。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void

      /**
       * 设置标注信息窗口内容创建后执行的回调。
       *
       * @param callback 标注信息窗口内容创建后执行的回调。
       * @param callback.poi 当前信息窗口关联的兴趣点。
       * @param callback.html 信息窗口内容对应的 DOM 元素。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      setInfoHtmlSetCallback(
        callback: (poi: LocalResultPoi, html: HTMLElement) => void,
      ): void

      /**
       * 设置结果列表创建后执行的回调。
       *
       * @param callback 结果列表创建后执行的回调。
       * @param callback.container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
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
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
       */
      getStatus(): ServiceStatusCode | undefined
    }

    /**
     * 公交、地铁、轮渡及跨城交通线路的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_LINE_TYPE_BUS}
     * @see {@link BMAP_LINE_TYPE_SUBWAY}
     * @see {@link BMAP_LINE_TYPE_FERRY}
     * @see {@link BMAP_LINE_TYPE_TRAIN}
     * @see {@link BMAP_LINE_TYPE_AIRPLANE}
     * @see {@link BMAP_LINE_TYPE_COACH}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b15 | 百度地图 v3.0：LineType}
     */
    export type LineType = 0 | 1 | 2 | 3 | 4 | 5

    /**
     * 检索公交线路列表及线路详情的服务。
     *
     * @see {@link BMap.Map}
     * @see {@link BMap.Point}
     * @see {@link BMap.BusLineSearchOptions}
     * @see {@link BMap.BusListItem}
     * @see {@link BMap.ServiceStatusCode}
     * @see {@link BMap.BusListResult}
     * @see {@link BMap.BusLine}
     * @see {@link BMap.Polyline}
     * @see {@link BMap.Marker}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
     */
    export class BusLineSearch {
      /**
       * 创建检索公交线路列表及线路详情的服务实例。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @param opts BusLineSearch 的配置选项。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link BMap.BusLineSearchOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      constructor(location: Map | Point | string, opts?: BusLineSearchOptions)

      /**
       * 按线路名称关键字查询候选公交线路列表。
       *
       * @param keyword 检索关键字；支持数组的方法最多接受 10 个关键字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      getBusList(keyword: string): void

      /**
       * 查询指定候选公交线路的站点和路径详情。
       *
       * @param busLstItem 公交线路列表中的候选条目。
       * @see {@link BMap.BusListItem}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      getBusLine(busLstItem: BusListItem): void

      /**
       * 清除最近一次检索的结果及其展示内容。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      clearResults(): void

      /**
       * 启用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      enableAutoViewport(): void

      /**
       * 禁用根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      disableAutoViewport(): void

      /**
       * 设置服务检索的地理范围。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      setLocation(location: Map | Point | string): void

      /**
       * 获取最近一次服务调用的状态码。
       *
       * 官网未说明服务尚未执行时的状态；runtime 此时返回 undefined。
       *
       * @returns 最近一次服务调用的状态码。
       * @see {@link BMap.ServiceStatusCode}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      getStatus(): ServiceStatusCode | undefined

      /**
       * 返回当前服务或工具的类型说明。
       *
       * @returns 当前对象的类型说明文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      toString(): string

      /**
       * 设置公交线路列表查询完成后的回调。
       *
       * @param callback 公交线路列表查询完成后的回调。
       * @param callback.rs 公交线路列表或线路详情查询结果。
       * @see {@link BMap.BusListResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      setGetBusListCompleteCallback(callback: (rs: BusListResult) => void): void

      /**
       * 设置公交线路详情查询完成后的回调。
       *
       * @param callback 公交线路详情查询完成后的回调。
       * @param callback.rs 公交线路列表或线路详情查询结果。
       * @see {@link BMap.BusLine}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      setGetBusLineCompleteCallback(callback: (rs: BusLine) => void): void

      /**
       * 设置公交线路列表渲染完成后的回调。
       *
       * @param callback 公交线路列表渲染完成后的回调。
       * @param callback.container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      setBusListHtmlSetCallback(
        callback: (container: HTMLElement) => void,
      ): void

      /**
       * 设置公交线路详情渲染完成后的回调。
       *
       * @param callback 公交线路详情渲染完成后的回调。
       * @param callback.container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      setBusLineHtmlSetCallback(
        callback: (container: HTMLElement) => void,
      ): void

      /**
       * 设置路线折线添加后执行的回调。
       *
       * @param callback 路线折线添加后执行的回调。
       * @param callback.ply 公交线路对应的折线覆盖物。
       * @see {@link BMap.Polyline}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      setPolylinesSetCallback(callback: (ply: Polyline) => void): void

      /**
       * 设置结果标注添加后执行的回调。
       *
       * @param callback 结果标注添加后执行的回调。
       * @param callback.markers 已添加的站点标注集合。
       * @see {@link BMap.Marker}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
       */
      setMarkersSetCallback(callback: (markers: Marker[]) => void): void
    }

    /**
     * 按关键字、范围或周边位置检索兴趣点的服务的配置选项。
     *
     * @see {@link BMap.RenderOptions}
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.LocalResult}
     * @see {@link BMap.LocalSearch}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b1 | 百度地图 v3.0：LocalSearchOptions}
     */
    export interface LocalSearchOptions {
      /**
       * 检索结果在地图及列表中的展示配置。
       *
       * @see {@link BMap.RenderOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b1 | 百度地图 v3.0：LocalSearchOptions}
       */
      renderOptions?: RenderOptions

      /**
       * 结果标注添加后执行的回调。
       *
       * @param pois 结果兴趣点集合，路线检索中通常为起点和终点。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b1 | 百度地图 v3.0：LocalSearchOptions}
       */
      onMarkersSet?: (pois: LocalResultPoi[]) => void

      /**
       * 标注信息窗口内容创建后执行的回调。
       *
       * @param poi 当前信息窗口关联的兴趣点。
       * @param html 信息窗口内容对应的 DOM 元素。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b1 | 百度地图 v3.0：LocalSearchOptions}
       */
      onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void

      /**
       * 结果列表创建后执行的回调。
       *
       * @param container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b1 | 百度地图 v3.0：LocalSearchOptions}
       */
      onResultsHtmlSet?: (container: HTMLElement) => void

      /**
       * 每页返回的结果或方案数量。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b1 | 百度地图 v3.0：LocalSearchOptions}
       */
      pageCapacity?: number

      /**
       * 检索完成后执行的回调。
       *
       * @param results 本次服务返回的检索结果。
       * @see {@link BMap.LocalResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b1 | 百度地图 v3.0：LocalSearchOptions}
       */
      onSearchComplete?: (results: LocalResult | LocalResult[]) => void
    }

    /**
     * 检索公交线路列表及线路详情的服务的配置选项。
     *
     * @see {@link BMap.RenderOptions}
     * @see {@link BMap.BusListResult}
     * @see {@link BMap.BusLine}
     * @see {@link BMap.Polyline}
     * @see {@link BMap.Marker}
     * @see {@link BMap.BusLineSearch}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b44 | 百度地图 v3.0：BusLineSearchOptions}
     */
    export interface BusLineSearchOptions {
      /**
       * 检索结果在地图及列表中的展示配置。
       *
       * @see {@link BMap.RenderOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b44 | 百度地图 v3.0：BusLineSearchOptions}
       */
      renderOptions?: RenderOptions

      /**
       * 公交线路列表查询完成后的回调。
       *
       * @param rs 公交线路列表或线路详情查询结果。
       * @see {@link BMap.BusListResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b44 | 百度地图 v3.0：BusLineSearchOptions}
       */
      onGetBusListComplete?: (rs: BusListResult) => void

      /**
       * 公交线路详情查询完成后的回调。
       *
       * @param rs 公交线路列表或线路详情查询结果。
       * @see {@link BMap.BusLine}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b44 | 百度地图 v3.0：BusLineSearchOptions}
       */
      onGetBusLineComplete?: (rs: BusLine) => void

      /**
       * 公交线路列表渲染完成后的回调。
       *
       * @param container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b44 | 百度地图 v3.0：BusLineSearchOptions}
       */
      onBusListHtmlSet?: (container: HTMLElement) => void

      /**
       * 公交线路详情渲染完成后的回调。
       *
       * @param container 地图或全景的容器元素，或该元素的标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b44 | 百度地图 v3.0：BusLineSearchOptions}
       */
      onBusLineHtmlSet?: (container: HTMLElement) => void

      /**
       * 路线折线添加后执行的回调。
       *
       * @param ply 公交线路对应的折线覆盖物。
       * @see {@link BMap.Polyline}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b44 | 百度地图 v3.0：BusLineSearchOptions}
       */
      onPolylinesSet?: (ply: Polyline) => void

      /**
       * 结果标注添加后执行的回调。
       *
       * @param sts 公交站点对应的标注集合。
       * @see {@link BMap.Marker}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b44 | 百度地图 v3.0：BusLineSearchOptions}
       */
      onMarkersSet?: (sts: Marker[]) => void
    }

    /**
     * 云数据检索的数据表、标签及筛选条件。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b2 | 百度地图 v3.0：CustomData}
     */
    export interface CustomData {
      /**
       * 云存储数据表的标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b2 | 百度地图 v3.0：CustomData}
       */
      geotableId: number

      /**
       * 兴趣点标签或云数据检索标签。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b2 | 百度地图 v3.0：CustomData}
       */
      tags?: string

      /**
       * 云数据检索的字段筛选表达式。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b2 | 百度地图 v3.0：CustomData}
       */
      filter?: string
    }

    /**
     * 公交线路名称检索的候选线路列表。
     *
     * @see {@link BMap.BusListItem}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b45 | 百度地图 v3.0：BusListResult}
     */
    export interface BusListResult {
      /**
       * 本次检索使用的关键字。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b45 | 百度地图 v3.0：BusListResult}
       */
      keyword: string

      /**
       * 所在城市名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b45 | 百度地图 v3.0：BusListResult}
       */
      city: string

      /**
       * 在百度地图中查看完整检索结果的地址。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b45 | 百度地图 v3.0：BusListResult}
       */
      moreResultsUrl: string

      /**
       * 获取候选公交线路的数量。
       *
       * @returns 候选公交线路的数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b45 | 百度地图 v3.0：BusListResult}
       */
      getNumBusList(): number

      /**
       * 获取指定索引的候选公交线路。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的候选公交线路。
       * @see {@link BMap.BusListItem}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b45 | 百度地图 v3.0：BusListResult}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getBusListItem(i: number): BusListItem | undefined
    }

    /**
     * 检索结果的地图、面板及自动展示配置。
     *
     * @see {@link BMap.Map}
     * @see {@link BMap.HighlightModes}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b3 | 百度地图 v3.0：RenderOptions}
     */
    export interface RenderOptions {
      /**
       * 用于展示检索结果的地图实例。
       *
       * @see {@link BMap.Map}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b3 | 百度地图 v3.0：RenderOptions}
       */
      map?: Map

      /**
       * 结果列表使用的 DOM 元素或其标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b3 | 百度地图 v3.0：RenderOptions}
       */
      panel?: string | HTMLElement

      /**
       * 是否自动选中第一个检索结果。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b3 | 百度地图 v3.0：RenderOptions}
       */
      selectFirstResult?: boolean

      /**
       * 是否根据检索结果自动调整地图视野。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b3 | 百度地图 v3.0：RenderOptions}
       */
      autoViewport?: boolean

      /**
       * 结果列表选中时高亮关键点或整段路线的方式。
       *
       * @see {@link BMap.HighlightModes}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b3 | 百度地图 v3.0：RenderOptions}
       */
      highlightMode?: HighlightModes
    }

    /**
     * 公交线路的运营信息、站点和路径。
     *
     * @see {@link BMap.BusStation}
     * @see {@link BMap.Point}
     * @see {@link BMap.Polyline}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b46 | 百度地图 v3.0：BusLine}
     */
    export interface BusLine {
      /**
       * 对象的名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b46 | 百度地图 v3.0：BusLine}
       */
      name: string

      /**
       * 公交线路的首班车时间。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b46 | 百度地图 v3.0：BusLine}
       */
      startTime: string

      /**
       * 公交线路的末班车时间。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b46 | 百度地图 v3.0：BusLine}
       */
      endTime: string

      /**
       * 运营该公交线路的公司名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b46 | 百度地图 v3.0：BusLine}
       */
      company: string

      /**
       * 获取公交线路的站点数量。
       *
       * @returns 公交线路的站点数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b46 | 百度地图 v3.0：BusLine}
       */
      getNumBusStations(): number

      /**
       * 获取指定索引的公交站点。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的公交站点。
       * @see {@link BMap.BusStation}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b46 | 百度地图 v3.0：BusLine}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getBusStation(i: number): BusStation | undefined

      /**
       * 获取构成覆盖物的路径。
       *
       * @returns 构成覆盖物的路径。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b46 | 百度地图 v3.0：BusLine}
       */
      getPath(): Point[]

      /**
       * 获取路线对应的折线覆盖物。
       *
       * 只有检索结果自动添加到地图时，对应覆盖物才可用。
       *
       * @returns 路线对应的折线覆盖物。
       * @see {@link BMap.Polyline}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b46 | 百度地图 v3.0：BusLine}
       */
      getPolyline(): Polyline
    }

    /**
     * 一次兴趣点检索的结果及分页信息。
     *
     * @see {@link BMap.LocalResultPoi}
     * @see {@link BMap.Bounds}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
     */
    export interface LocalResult {
      /**
       * 本次检索使用的关键字。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      keyword: string

      /**
       * 地图视野、查询范围或城市的中心位置。
       *
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      center?: LocalResultPoi

      /**
       * 圆形或周边检索的半径，单位为米。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      radius?: number

      /**
       * 对应的地理矩形范围。
       *
       * @see {@link BMap.Bounds}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      bounds?: Bounds

      /**
       * 所在城市名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      city: string

      /**
       * 在百度地图中查看完整检索结果的地址。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      moreResultsUrl: string

      /**
       * 所在省份名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      province: string

      /**
       * 检索服务返回的建议关键字。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      suggestions: string[]

      /**
       * 获取指定索引的兴趣点或输入提示条目。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的兴趣点或输入提示条目。
       * @see {@link BMap.LocalResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getPoi(i: number): LocalResultPoi | undefined

      /**
       * 获取当前页的兴趣点数量。
       *
       * @returns 当前页的兴趣点数量。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      getCurrentNumPois(): number

      /**
       * 获取检索命中的兴趣点总数。
       *
       * @returns 检索命中的兴趣点总数。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      getNumPois(): number

      /**
       * 获取检索结果的总页数。
       *
       * @returns 检索结果的总页数。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      getNumPages(): number

      /**
       * 获取当前结果的页码。
       *
       * @returns 当前结果的页码。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       */
      getPageIndex(): number

      /**
       * 获取建议进一步检索的城市列表。
       *
       * 官网列出城市对象数组，但未说明无城市列表的情况；runtime 此时返回 undefined。
       *
       * @returns 建议进一步检索的城市列表。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getCityList(): LocalResultCity[] | undefined
    }

    /**
     * 公交线路列表中的候选条目。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b48 | 百度地图 v3.0：BusListItem}
     */
    export interface BusListItem {
      /**
       * 对象的名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b48 | 百度地图 v3.0：BusListItem}
       */
      name: string
    }

    /**
     * 兴趣点检索结果中的位置、地址及详情。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.PoiType}
     * @see {@link BMap.Marker}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
     */
    export interface LocalResultPoi {
      /**
       * 用于展示名称或鼠标悬停提示的标题。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      title: string

      /**
       * 对应位置的地理坐标。
       *
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      point: Point

      /**
       * 在百度地图中展示该兴趣点的详情地址。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      url?: string

      /**
       * 地址信息；公交站点结果中可包含经过的线路。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      address?: string

      /**
       * 所在城市名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      city?: string

      /**
       * 联系电话，是否提供取决于结果数据。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      phoneNumber?: string | null

      /**
       * 邮政编码，是否提供取决于结果数据。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      postcode?: string | null

      /**
       * 对象所属的类别。
       *
       * @see {@link BMap.PoiType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      type?: PoiType

      /**
       * 兴趣点是否精确匹配检索关键字，仅适用于普通地点检索。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      isAccurate?: boolean

      /**
       * 所在省份名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      province?: string

      /**
       * 兴趣点标签或云数据检索标签。
       *
       * 该字段仅在部分地点检索和逆地址解析结果中提供。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      tags?: string[]

      /**
       * 兴趣点的百度地图详情页地址，仅部分检索结果提供。
       *
       * 该字段仅在部分地点检索结果中提供。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      detailUrl?: string

      /**
       * 兴趣点在百度地图中的唯一标识。
       *
       * 官网字段表未列出 uid；runtime 在提供兴趣点标识的结果中使用字符串。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      uid?: string

      /**
       * 交互工具创建的点标注。
       *
       * @see {@link BMap.Marker}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5 | 百度地图 v3.0：LocalResultPoi}
       */
      marker?: Marker
    }

    /**
     * 公交站点的名称与位置。
     *
     * @see {@link BMap.Point}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b49 | 百度地图 v3.0：BusStation}
     */
    export interface BusStation {
      /**
       * 对象的名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b49 | 百度地图 v3.0：BusStation}
       */
      name: string

      /**
       * 对象所在位置的地理坐标。
       *
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b49 | 百度地图 v3.0：BusStation}
       */
      position: Point
    }

    /**
     * 普通兴趣点、公交站或地铁站的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_POI_TYPE_NORMAL}
     * @see {@link BMAP_POI_TYPE_BUSSTOP}
     * @see {@link BMAP_POI_TYPE_SUBSTOP}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b6 | 百度地图 v3.0：PoiType}
     */
    export type PoiType = 0 | 1 | 3

    /**
     * 绑定输入框并提供地点输入提示的服务。
     *
     * @see {@link BMap.AutocompleteOptions}
     * @see {@link BMap.Map}
     * @see {@link BMap.Point}
     * @see {@link BMap.AutocompleteResult}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
     */
    export class Autocomplete {
      /**
       * 创建绑定输入框并提供地点输入提示的服务实例。
       *
       * @param opts Autocomplete 的配置选项。
       * @see {@link BMap.AutocompleteOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
       */
      constructor(opts?: AutocompleteOptions)

      /**
       * 显示当前对象。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
       */
      show(): void

      /**
       * 隐藏当前对象。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
       */
      hide(): void

      /**
       * 设置输入提示的数据类型过滤条件。
       *
       * 官网参数表只列出字符串数组；runtime 也接受单个类型字符串。
       *
       * @param types 输入提示的数据类型过滤条件。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
       */
      setTypes(types: string | string[]): void

      /**
       * 设置服务检索的地理范围。
       *
       * @param location 城市名称、地理坐标或地图实例，用于确定检索范围。
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
       */
      setLocation(location: string | Map | Point): void

      /**
       * 根据关键字或起终点发起检索。
       *
       * @param keywords 用于输入提示检索的关键字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
       */
      search(keywords: string): void

      /**
       * 获取最近一次检索的结果。
       *
       * 官网未说明初始化阶段；runtime 在异步模块初始化前可能返回 undefined，模块就绪后返回空的提示结果列表。
       *
       * @returns 最近一次检索的结果。
       * @see {@link BMap.AutocompleteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getResults(): AutocompleteResult | undefined

      /**
       * 设置绑定输入框的文字内容。
       *
       * @param keyword 检索关键字；支持数组的方法最多接受 10 个关键字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
       */
      setInputValue(keyword: string): void

      /**
       * 销毁输入提示实例并解除相关资源绑定。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
       */
      dispose(): void

      /**
       * 确认选中输入提示条目时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
       */
      onconfirm?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
         */
        type: string
        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
         */
        target: Autocomplete
        /**
         * 当前确认的输入提示条目，包含索引和地址信息。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
         */
        item: AutocompleteResultItem
      }) => void

      /**
       * 输入提示条目的高亮状态变化时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
       */
      onhighlight?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
         */
        type: string

        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
         */
        target: Autocomplete

        /**
         * 高亮切换前的提示条目，包含索引和地址信息。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
         */
        fromitem: AutocompleteHighlightItem

        /**
         * 高亮切换后的提示条目，包含索引和地址信息。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
         */
        toitem: AutocompleteHighlightItem
      }) => void
    }

    /**
     * 绑定输入框并提供地点输入提示的服务的配置选项。
     *
     * @see {@link BMap.Map}
     * @see {@link BMap.Point}
     * @see {@link BMap.AutocompleteResult}
     * @see {@link BMap.Autocomplete}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b51 | 百度地图 v3.0：AutocompleteOptions}
     */
    export interface AutocompleteOptions {
      /**
       * 检索区域，可由城市名称、地图实例或地理坐标确定。
       *
       * @see {@link BMap.Map}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b51 | 百度地图 v3.0：AutocompleteOptions}
       */
      location?: string | Map | Point

      /**
       * 输入提示的数据类型过滤条件；空数组表示全部类型。
       *
       * 官网字段表只列出字符串数组；runtime 也接受单个类型字符串。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b51 | 百度地图 v3.0：AutocompleteOptions}
       */
      types?: string | string[]

      /**
       * 检索完成后执行的回调。
       *
       * @param result 本次服务返回的检索结果。
       * @see {@link BMap.AutocompleteResult}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b51 | 百度地图 v3.0：AutocompleteOptions}
       */
      onSearchComplete?: (result: AutocompleteResult) => void

      /**
       * 与输入提示服务绑定的输入框元素或其标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b51 | 百度地图 v3.0：AutocompleteOptions}
       */
      input?: string | HTMLElement
    }

    /**
     * 地点输入提示条目的结构化地址信息。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b52 | 百度地图 v3.0：AutocompleteResultPoi}
     */
    export interface AutocompleteResultPoi {
      /**
       * 所在省份名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b52 | 百度地图 v3.0：AutocompleteResultPoi}
       */
      province: string

      /**
       * 城市名称；runtime 使用小写 city，官网字段表中的 City 为拼写差异。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b52 | 百度地图 v3.0：AutocompleteResultPoi}
       */
      city: string

      /**
       * 所在区县名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b52 | 百度地图 v3.0：AutocompleteResultPoi}
       */
      district: string

      /**
       * 街道名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b52 | 百度地图 v3.0：AutocompleteResultPoi}
       */
      street: string

      /**
       * 门牌号码。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b52 | 百度地图 v3.0：AutocompleteResultPoi}
       */
      streetNumber: string

      /**
       * 所在商圈名称或提示条目的商户名称。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b52 | 百度地图 v3.0：AutocompleteResultPoi}
       */
      business: string
    }

    /**
     * 地点输入提示的结果列表。
     *
     * @see {@link BMap.AutocompleteResultPoi}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b53 | 百度地图 v3.0：AutocompleteResult}
     */
    export interface AutocompleteResult {
      /**
       * 本次检索使用的关键字。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b53 | 百度地图 v3.0：AutocompleteResult}
       */
      keyword: string

      /**
       * 获取指定索引的兴趣点或输入提示条目。
       *
       * 官网未说明越界索引；runtime 在索引无效或对应结果不存在时返回 undefined。
       *
       * @param i 目标成员的索引，从 0 开始。
       * @returns 指定索引的兴趣点或输入提示条目。
       * @see {@link BMap.AutocompleteResultPoi}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b53 | 百度地图 v3.0：AutocompleteResult}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getPoi(i: number): AutocompleteResultPoi | undefined

      /**
       * 获取检索命中的兴趣点总数。
       *
       * @returns 检索命中的兴趣点总数。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b53 | 百度地图 v3.0：AutocompleteResult}
       */
      getNumPois(): number
    }

    /**
     * 驾车结果列表选中后高亮步骤或路段的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_HIGHLIGHT_STEP}
     * @see {@link BMAP_HIGHLIGHT_ROUTE}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b32 | 百度地图 v3.0：HighlightModes}
     */
    export type HighlightModes = 1 | 2

    /**
     * 检索与定位服务使用的状态码类型。
     *
     * 取值覆盖 v3 官网列出的服务状态码，并由 runtime 常量核对。
     *
     * @see {@link BMAP_STATUS_SUCCESS}
     * @see {@link BMAP_STATUS_CITY_LIST}
     * @see {@link BMAP_STATUS_UNKNOWN_LOCATION}
     * @see {@link BMAP_STATUS_UNKNOWN_ROUTE}
     * @see {@link BMAP_STATUS_INVALID_KEY}
     * @see {@link BMAP_STATUS_INVALID_REQUEST}
     * @see {@link BMAP_STATUS_PERMISSION_DENIED}
     * @see {@link BMAP_STATUS_SERVICE_UNAVAILABLE}
     * @see {@link BMAP_STATUS_TIMEOUT}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b57 | 百度地图 v3.0：StatusCode}
     */
    export type ServiceStatusCode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    /**
     * Autocomplete 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.Autocomplete}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
     */
    export interface Autocomplete extends EventEmitter {}

    /**
     * LocalSearch 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.LocalSearch}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
     */
    export interface LocalSearch extends EventEmitter {}

    /**
     * BusLineSearch 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.BusLineSearch}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43 | 百度地图 v3.0：BusLineSearch}
     */
    export interface BusLineSearch extends EventEmitter {}

    /**
     * 一次地点检索请求的范围约束及云数据选项。
     *
     * @see {@link BMap.LocalSearch}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0 | 百度地图 v3.0：LocalSearch}
     */
    export interface LocalSearchSearchOptions {
      /**
       * 是否将检索范围限制在当前城市。
       */
      forceLocal?: boolean
      /**
       * 需要检索的云数据表及筛选条件。
       *
       * @see {@link BMap.CustomData}
       */
      customData?: CustomData
    }

    /**
     * 地点检索返回的候选城市及该城市的结果数量。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b4 | 百度地图 v3.0：LocalResult}
     */
    export interface LocalResultCity {
      /**
       * 候选城市名称。
       */
      city: string
      /**
       * 该城市匹配到的结果数量。
       */
      numResults: number
    }

    /**
     * 用户确认选中的输入提示条目。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
     */
    export interface AutocompleteResultItem {
      /**
       * 条目在输入提示结果中的索引，从 0 开始。
       */
      index: number
      /**
       * 选中条目的结构化地址。
       *
       * @see {@link BMap.AutocompleteResultPoi}
       */
      value: AutocompleteResultPoi
    }

    /**
     * 输入提示高亮切换前后的条目；未选中时地址数据为空。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50 | 百度地图 v3.0：Autocomplete}
     */
    export interface AutocompleteHighlightItem {
      /**
       * 条目索引；没有高亮条目时为 -1。
       */
      index: number
      /**
       * 高亮条目的地址信息；没有条目时为空对象。
       *
       * @see {@link BMap.AutocompleteResultPoi}
       */
      value: Partial<AutocompleteResultPoi>
    }
  }
}
