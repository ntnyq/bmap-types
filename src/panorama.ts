import type { EventEmitter, MapEvent } from './events'

declare global {
  namespace BMap {
    /**
     * 全景浏览实例，负责场景、视角及覆盖物管理。
     *
     * 官网将全景变化事件参数列为 none；runtime 仍通过事件基类传入包含事件类型和触发对象的事件。
     *
     * @see {@link BMap.PanoramaOptions}
     * @see {@link BMap.PanoramaLink}
     * @see {@link BMap.Point}
     * @see {@link BMap.PanoramaPov}
     * @see {@link BMap.PanoramaLabel}
     * @see {@link BMap.PanoramaSceneType}
     * @see {@link BMap.PanoramaPOIType}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
     */
    export class Panorama {
      /**
       * 创建全景浏览实例实例。
       *
       * @param container 地图或全景的容器元素，或该元素的标识。
       * @param opts Panorama 的配置选项。
       * @see {@link BMap.PanoramaOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      constructor(container: string | HTMLElement, opts?: PanoramaOptions)

      /**
       * 获取通往相邻全景的道路指示集合。
       *
       * @returns 通往相邻全景的道路指示集合。
       * @see {@link BMap.PanoramaLink}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      getLinks(): PanoramaLink[]

      /**
       * 获取全景场景的唯一标识。
       *
       * 官网仅列出 String；runtime 在尚未加载全景场景时返回 null。
       *
       * @returns 全景场景的唯一标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      getId(): string | null

      /**
       * 获取对象的地理坐标。
       *
       * 官网仅列出 Point；runtime 在尚未定位到全景场景时返回 null。
       *
       * @returns 对象的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      getPosition(): Point | null

      /**
       * 获取全景的水平朝向和俯仰角。
       *
       * @returns 全景的水平朝向和俯仰角。
       * @see {@link BMap.PanoramaPov}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      getPov(): PanoramaPov

      /**
       * 获取缩放级别。
       *
       * @returns 缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      getZoom(): number

      /**
       * 设置全景场景的唯一标识。
       *
       * @param id 需要查询或设置的对象标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      setId(id: string): void

      /**
       * 设置对象的地理坐标。
       *
       * @param position 目标位置的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      setPosition(position: Point): void

      /**
       * 设置全景的水平朝向和俯仰角。
       *
       * @param pov 全景水平朝向和俯仰角。
       * @see {@link BMap.PanoramaPov}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      setPov(pov: PanoramaPov): void

      /**
       * 设置缩放级别。
       *
       * @param zoom 地图或全景的缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      setZoom(zoom: number): void

      /**
       * 启用鼠标滚轮缩放。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      enableScrollWheelZoom(): void

      /**
       * 禁用鼠标滚轮缩放。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      disableScrollWheelZoom(): void

      /**
       * 显示当前对象。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      show(): void

      /**
       * 隐藏当前对象。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      hide(): void

      /**
       * 添加指定的覆盖物。
       *
       * @param overlay 需要操作的覆盖物。
       * @see {@link BMap.PanoramaLabel}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      addOverlay(overlay: PanoramaLabel): void

      /**
       * 移除指定的覆盖物。
       *
       * @param overlay 需要操作的覆盖物。
       * @see {@link BMap.PanoramaLabel}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      removeOverlay(overlay: PanoramaLabel): void

      /**
       * 获取室内或室外全景场景类型。
       *
       * 官网仅列出场景常量；runtime 在场景尚未加载时返回空字符串。
       *
       * @returns 室内或室外全景场景类型。
       * @see {@link BMap.PanoramaSceneType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      getSceneType(): PanoramaSceneType | ''

      /**
       * 设置全景显示配置。
       *
       * @param opts Panorama 的配置选项。
       * @see {@link BMap.PanoramaOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      setOptions(opts?: PanoramaOptions): void

      /**
       * 设置全景中可见的兴趣点类别。
       *
       * 官网方法表未列出参数且将返回值写为 PanoramaPOIType；runtime 接受兴趣点类别参数并返回 void。
       *
       * @param type 需要显示的兴趣点类别，省略时隐藏全部兴趣点。
       * @see {@link BMap.PanoramaPOIType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      setPanoramaPOIType(type?: PanoramaPOIType): void

      /**
       * 全景位置变化时执行的事件回调。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      onposition_changed?: (event: MapEvent<Panorama>) => void

      /**
       * 全景相邻道路数据更新时执行的事件回调。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      onlinks_changed?: (event: MapEvent<Panorama>) => void

      /**
       * 全景视角变化时执行的事件回调。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      onpov_changed?: (event: MapEvent<Panorama>) => void

      /**
       * 全景缩放级别变化时执行的事件回调。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      onzoom_changed?: (event: MapEvent<Panorama>) => void

      /**
       * 全景的室内或室外场景类型变化时执行的事件回调。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
       */
      onscene_type_changed?: (event: MapEvent<Panorama>) => void
    }

    /**
     * 全景浏览实例的配置选项。
     *
     * @see {@link BMap.AlbumsControlOptions}
     * @see {@link BMap.Panorama}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b1 | 百度地图 v3.0：PanoramaOptions}
     */
    export interface PanoramaOptions {
      /**
       * 是否显示全景导航控件，默认显示。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b1 | 百度地图 v3.0：PanoramaOptions}
       */
      navigationControl?: boolean

      /**
       * 是否显示相邻道路指示，默认显示。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b1 | 百度地图 v3.0：PanoramaOptions}
       */
      linksControl?: boolean

      /**
       * 是否显示室内场景切换控件，默认隐藏。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b1 | 百度地图 v3.0：PanoramaOptions}
       */
      indoorSceneSwitchControl?: boolean

      /**
       * 是否显示全景相册控件，默认隐藏。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b1 | 百度地图 v3.0：PanoramaOptions}
       */
      albumsControl?: boolean

      /**
       * 全景相册控件的位置及尺寸配置。
       *
       * @see {@link BMap.AlbumsControlOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b1 | 百度地图 v3.0：PanoramaOptions}
       */
      albumsControlOptions?: AlbumsControlOptions
    }

    /**
     * 从当前全景通往相邻全景的道路指示信息。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b2 | 百度地图 v3.0：PanoramaLink}
     */
    export interface PanoramaLink {
      /**
       * 全景场景或相邻道路的描述文字。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b2 | 百度地图 v3.0：PanoramaLink}
       */
      description: string

      /**
       * 水平朝向角，正北为 0 度、正东为 90 度。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b2 | 百度地图 v3.0：PanoramaLink}
       */
      heading: number

      /**
       * 对象的唯一标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b2 | 百度地图 v3.0：PanoramaLink}
       */
      id: string
    }

    /**
     * 以水平朝向和俯仰角表示的全景视角。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b3 | 百度地图 v3.0：PanoramaPov}
     */
    export interface PanoramaPov {
      /**
       * 水平朝向角，正北为 0 度、正东为 90 度。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b3 | 百度地图 v3.0：PanoramaPov}
       */
      heading: number

      /**
       * 俯仰角，通常取值为 -90 至 90 度。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b3 | 百度地图 v3.0：PanoramaPov}
       */
      pitch: number
    }

    /**
     * 按全景标识或地理位置查询全景数据的服务。
     *
     * @see {@link BMap.PanoramaData}
     * @see {@link BMap.Point}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b4 | 百度地图 v3.0：PanoramaService}
     */
    export class PanoramaService {
      /**
       * 创建按全景标识或地理位置查询全景数据的服务实例。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b4 | 百度地图 v3.0：PanoramaService}
       */
      constructor()

      /**
       * 按全景标识异步查询全景数据。
       *
       * 没有可用全景时，回调参数为 null。
       *
       * @param id 需要查询或设置的对象标识。
       * @param callback 异步查询完成或交互发生后执行的回调。
       * @param callback.data 查询到的全景数据；没有可用全景时为 null。
       * @see {@link BMap.PanoramaData}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b4 | 百度地图 v3.0：PanoramaService}
       */
      getPanoramaById(
        id: string,
        callback: (data: PanoramaData | null) => void,
      ): void

      /**
       * 按地理坐标及检索半径异步查询全景数据。
       *
       * 省略半径时应使用两个参数的重载；没有可用全景时，回调参数为 null。
       *
       * @param point 需要处理的地理坐标。
       * @param radius 检索半径，单位为米。
       * @param callback 异步查询完成或交互发生后执行的回调。
       * @param callback.data 查询到的全景数据；没有可用全景时为 null。
       * @see {@link BMap.Point}
       * @see {@link BMap.PanoramaData}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b4 | 百度地图 v3.0：PanoramaService}
       */
      getPanoramaByLocation(
        point: Point,
        radius: number,
        callback: (data: PanoramaData | null) => void,
      ): void

      /**
       * 使用默认的 50 米半径查询指定位置附近的全景数据。
       *
       * @param point 检索中心的地理坐标。
       * @param callback 全景查询完成后的回调。
       * @param callback.data 查询到的全景数据；没有可用全景时为 null。
       * @see {@link BMap.Point}
       * @see {@link BMap.PanoramaData}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b4 | 百度地图 v3.0：PanoramaService}
       */
      getPanoramaByLocation(
        point: Point,
        callback: (data: PanoramaData | null) => void,
      ): void
    }

    /**
     * 全景查询返回的标识、位置、相邻道路及图块信息。
     *
     * @see {@link BMap.PanoramaLink}
     * @see {@link BMap.Point}
     * @see {@link BMap.PanoramaTileData}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b5 | 百度地图 v3.0：PanoramaData}
     */
    export interface PanoramaData {
      /**
       * 对象的唯一标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b5 | 百度地图 v3.0：PanoramaData}
       */
      id: string

      /**
       * 全景场景或相邻道路的描述文字。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b5 | 百度地图 v3.0：PanoramaData}
       */
      description: string

      /**
       * 通往相邻全景的道路指示集合。
       *
       * @see {@link BMap.PanoramaLink}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b5 | 百度地图 v3.0：PanoramaData}
       */
      links: PanoramaLink[]

      /**
       * 对象所在位置的地理坐标。
       *
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b5 | 百度地图 v3.0：PanoramaData}
       */
      position: Point

      /**
       * 全景图块的尺寸及朝向配置。
       *
       * @see {@link BMap.PanoramaTileData}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b5 | 百度地图 v3.0：PanoramaData}
       */
      tiles: PanoramaTileData
    }

    /**
     * 全景图块的朝向、图块尺寸及整体尺寸。
     *
     * @see {@link BMap.Size}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b6 | 百度地图 v3.0：PanoramaTileData}
     */
    export interface PanoramaTileData {
      /**
       * 全景图像中心对应的水平朝向角。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b6 | 百度地图 v3.0：PanoramaTileData}
       */
      centerHeading: number

      /**
       * 单张全景图块的像素尺寸。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b6 | 百度地图 v3.0：PanoramaTileData}
       */
      tileSize: Size

      /**
       * 完整全景图像的像素尺寸。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b6 | 百度地图 v3.0：PanoramaTileData}
       */
      worldSize: Size
    }

    /**
     * 在全景场景内展示文字的覆盖物。
     *
     * @see {@link BMap.PanoramaLabelOptions}
     * @see {@link BMap.Point}
     * @see {@link BMap.PanoramaPov}
     * @see {@link MapEvent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
     */
    export class PanoramaLabel {
      /**
       * 创建在全景场景内展示文字的覆盖物实例。
       *
       * @param content 需要展示的文字、HTML 字符串或 DOM 元素。
       * @param opts PanoramaLabel 的配置选项。
       * @see {@link BMap.PanoramaLabelOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      constructor(content: string, opts?: PanoramaLabelOptions)

      /**
       * 设置对象的地理坐标。
       *
       * @param position 目标位置的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      setPosition(position: Point): void

      /**
       * 获取对象的地理坐标。
       *
       * 官网返回值只列出 Point；runtime 在尚未设置位置时返回 null。
       *
       * @returns 对象的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getPosition(): Point | null

      /**
       * 获取全景的水平朝向和俯仰角。
       *
       * 官网仅列出 PanoramaPov；runtime 在标注或全景缺少位置时返回 null。
       *
       * @returns 全景的水平朝向和俯仰角。
       * @see {@link BMap.PanoramaPov}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      getPov(): PanoramaPov | null

      /**
       * 设置显示的文本或 HTML 内容。
       *
       * @param content 需要展示的文字、HTML 字符串或 DOM 元素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      setContent(content: string): void

      /**
       * 获取显示的文本或 HTML 内容。
       *
       * @returns 显示的文本或 HTML 内容。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      getContent(): string

      /**
       * 显示当前对象。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      show(): void

      /**
       * 隐藏当前对象。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      hide(): void

      /**
       * 设置全景文字标注距地面的高度，单位为米。
       *
       * @param altitude 距地面的高度，单位为米。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      setAltitude(altitude: number): void

      /**
       * 获取全景文字标注距地面的高度，单位为米。
       *
       * @returns 全景文字标注距地面的高度，单位为米。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      getAltitude(): number

      /**
       * 鼠标单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      onclick?: (event: MapEvent<PanoramaLabel>) => void

      /**
       * 鼠标移入时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      onmouseover?: (event: MapEvent<PanoramaLabel>) => void

      /**
       * 鼠标移出时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      onmouseout?: (event: MapEvent<PanoramaLabel>) => void

      /**
       * 覆盖物被移除时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
       */
      onremove?: (event: MapEvent<PanoramaLabel>) => void
    }

    /**
     * 在全景场景内展示文字的覆盖物的配置选项。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.PanoramaLabel}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b8 | 百度地图 v3.0：PanoramaLabelOptions}
     */
    export interface PanoramaLabelOptions {
      /**
       * 对象所在位置的地理坐标。
       *
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b8 | 百度地图 v3.0：PanoramaLabelOptions}
       */
      position?: Point

      /**
       * 全景文字标注相对于地面的高度，单位为米。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b8 | 百度地图 v3.0：PanoramaLabelOptions}
       */
      altitude?: number
    }

    /**
     * 全景相册控件的位置和尺寸配置。
     *
     * @see {@link BMap.ControlAnchor}
     * @see {@link BMap.Size}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b9 | 百度地图 v3.0：AlbumsControlOptions}
     */
    export interface AlbumsControlOptions {
      /**
       * 相对于参考位置的定位锚点。
       *
       * @see {@link BMap.ControlAnchor}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b9 | 百度地图 v3.0：AlbumsControlOptions}
       */
      anchor?: ControlAnchor

      /**
       * 相对于参考位置的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b9 | 百度地图 v3.0：AlbumsControlOptions}
       */
      offset?: Size

      /**
       * 允许显示的最大宽度，数值以像素计。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b9 | 百度地图 v3.0：AlbumsControlOptions}
       */
      maxWidth?: number | string

      /**
       * 相册中预览图片的高度，单位为像素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b9 | 百度地图 v3.0：AlbumsControlOptions}
       */
      imageHeight?: number
    }

    /**
     * 室内或室外全景场景的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_PANORAMA_INDOOR_SCENE}
     * @see {@link BMAP_PANORAMA_STREET_SCENE}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b10 | 百度地图 v3.0：PanoramaSceneType}
     */
    export type PanoramaSceneType = 'inter' | 'street'

    /**
     * 全景内可见兴趣点类别的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_PANORAMA_POI_HOTEL}
     * @see {@link BMAP_PANORAMA_POI_CATERING}
     * @see {@link BMAP_PANORAMA_POI_MOVIE}
     * @see {@link BMAP_PANORAMA_POI_TRANSIT}
     * @see {@link BMAP_PANORAMA_POI_INDOOR_SCENE}
     * @see {@link BMAP_PANORAMA_POI_NONE}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b11 | 百度地图 v3.0：PanoramaPOIType}
     */
    export type PanoramaPOIType =
      | 'catering'
      | 'hotel'
      | 'indoor_scene'
      | 'movie'
      | 'none'
      | 'transit'
    /**
     * Panorama 的事件监听能力。
     *
     * 官网将全景变化事件参数列为 none；runtime 仍通过事件基类传入包含事件类型和触发对象的事件。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.Panorama}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0 | 百度地图 v3.0：Panorama}
     */
    export interface Panorama extends EventEmitter {}

    /**
     * PanoramaLabel 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.PanoramaLabel}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b7 | 百度地图 v3.0：PanoramaLabel}
     */
    export interface PanoramaLabel extends EventEmitter {}
  }
}
