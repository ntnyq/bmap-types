import type { EventEmitter, MapEvent } from './events'

declare global {
  namespace BMap {
    /**
     * 地图控件基类，可通过实现初始化方法创建自定义控件。
     *
     * @see {@link BMap.ControlAnchor}
     * @see {@link BMap.Size}
     * @see {@link BMap.Map}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
     */
    export class Control {
      /**
       * 创建地图控件基类实例。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
       */
      constructor()

      /**
       * 控件默认的停靠位置。
       *
       * @see {@link BMap.ControlAnchor}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
       */
      defaultAnchor: ControlAnchor

      /**
       * 控件默认的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
       */
      defaultOffset: Size

      /**
       * 初始化控件或自定义覆盖物，并返回需要挂载的 DOM 元素。
       *
       * @param map 关联的地图实例。
       * @returns 初始化控件或自定义覆盖物，并返回需要挂载的 DOM 元素。
       * @see {@link BMap.Map}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
       */
      initialize(map: Map): HTMLElement

      /**
       * 设置定位锚点。
       *
       * @param anchor 定位锚点或停靠位置。
       * @see {@link BMap.ControlAnchor}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
       */
      setAnchor(anchor: ControlAnchor): void

      /**
       * 获取定位锚点。
       *
       * @returns 定位锚点。
       * @see {@link BMap.ControlAnchor}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
       */
      getAnchor(): ControlAnchor

      /**
       * 设置像素偏移量。
       *
       * @param offset 相对于参考位置的偏移量。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
       */
      setOffset(offset: Size): void

      /**
       * 获取像素偏移量。
       *
       * @returns 像素偏移量。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
       */
      getOffset(): Size

      /**
       * 显示当前对象。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
       */
      show(): void

      /**
       * 隐藏当前对象。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
       */
      hide(): void

      /**
       * 判断当前对象是否可见。
       *
       * @returns 对象是否可见。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
       */
      isVisible(): boolean
    }

    /**
     * 提供地图平移与缩放操作的导航控件的配置选项。
     *
     * @see {@link BMap.ControlAnchor}
     * @see {@link BMap.Size}
     * @see {@link BMap.NavigationControlType}
     * @see {@link BMap.NavigationControl}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b3 | 百度地图 v3.0：NavigationControlOptions}
     */
    export interface NavigationControlOptions {
      /**
       * 相对于参考位置的定位锚点。
       *
       * @see {@link BMap.ControlAnchor}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b3 | 百度地图 v3.0：NavigationControlOptions}
       */
      anchor?: ControlAnchor

      /**
       * 相对于参考位置的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b3 | 百度地图 v3.0：NavigationControlOptions}
       */
      offset?: Size

      /**
       * 对象所属的类别。
       *
       * @see {@link BMap.NavigationControlType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b3 | 百度地图 v3.0：NavigationControlOptions}
       */
      type?: NavigationControlType

      /**
       * 是否显示缩放级别提示。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b3 | 百度地图 v3.0：NavigationControlOptions}
       */
      showZoomInfo?: boolean

      /**
       * 是否集成定位功能。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b3 | 百度地图 v3.0：NavigationControlOptions}
       */
      enableGeolocation?: boolean
    }

    /**
     * 显示地图距离比例的比例尺控件的配置选项。
     *
     * @see {@link BMap.ControlAnchor}
     * @see {@link BMap.Size}
     * @see {@link BMap.ScaleControl}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b10 | 百度地图 v3.0：ScaleControlOptions}
     */
    export interface ScaleControlOptions {
      /**
       * 相对于参考位置的定位锚点。
       *
       * @see {@link BMap.ControlAnchor}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b10 | 百度地图 v3.0：ScaleControlOptions}
       */
      anchor?: ControlAnchor

      /**
       * 相对于参考位置的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b10 | 百度地图 v3.0：ScaleControlOptions}
       */
      offset?: Size
    }

    /**
     * 显示地图版权信息的控件的配置选项。
     *
     * @see {@link BMap.ControlAnchor}
     * @see {@link BMap.Size}
     * @see {@link BMap.CopyrightControl}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b13 | 百度地图 v3.0：CopyrightControlOptions}
     */
    export interface CopyrightControlOptions {
      /**
       * 相对于参考位置的定位锚点。
       *
       * @see {@link BMap.ControlAnchor}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b13 | 百度地图 v3.0：CopyrightControlOptions}
       */
      anchor?: ControlAnchor

      /**
       * 相对于参考位置的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b13 | 百度地图 v3.0：CopyrightControlOptions}
       */
      offset?: Size
    }

    /**
     * 控件相对于地图容器的停靠位置常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_ANCHOR_TOP_LEFT}
     * @see {@link BMAP_ANCHOR_TOP_RIGHT}
     * @see {@link BMAP_ANCHOR_BOTTOM_LEFT}
     * @see {@link BMAP_ANCHOR_BOTTOM_RIGHT}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b1 | 百度地图 v3.0：ControlAnchor}
     */
    export type ControlAnchor = 0 | 1 | 2 | 3

    /**
     * 展示当前地图概览的缩略地图控件。
     *
     * @see {@link BMap.OverviewMapControlOptions}
     * @see {@link BMap.Size}
     * @see {@link MapEvent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7 | 百度地图 v3.0：OverviewMapControl}
     */
    export class OverviewMapControl extends Control {
      /**
       * 创建展示当前地图概览的缩略地图控件实例。
       *
       * @param opts OverviewMapControl 的配置选项。
       * @see {@link BMap.OverviewMapControlOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7 | 百度地图 v3.0：OverviewMapControl}
       */
      constructor(opts?: OverviewMapControlOptions)

      /**
       * 切换缩略地图的展开与收起状态。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7 | 百度地图 v3.0：OverviewMapControl}
       */
      changeView(): void

      /**
       * 设置显示尺寸。
       *
       * @param size 显示区域的像素尺寸。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7 | 百度地图 v3.0：OverviewMapControl}
       */
      setSize(size: Size): void

      /**
       * 获取显示尺寸。
       *
       * @returns 显示尺寸。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7 | 百度地图 v3.0：OverviewMapControl}
       */
      getSize(): Size

      /**
       * 缩略地图展开或收起完成时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7 | 百度地图 v3.0：OverviewMapControl}
       */
      onviewchanged?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7 | 百度地图 v3.0：OverviewMapControl}
         */
        type: string

        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7 | 百度地图 v3.0：OverviewMapControl}
         */
        target: OverviewMapControl

        /**
         * 缩略地图是否处于展开状态。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7 | 百度地图 v3.0：OverviewMapControl}
         */
        isOpen: boolean
      }) => void

      /**
       * 缩略地图展开或收起过程中时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7 | 百度地图 v3.0：OverviewMapControl}
       */
      onviewchanging?: (event: MapEvent<OverviewMapControl>) => void
    }

    /**
     * 比例尺使用的公制或英制长度单位类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_UNIT_METRIC}
     * @see {@link BMAP_UNIT_IMPERIAL}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b11 | 百度地图 v3.0：LengthUnit}
     */
    export type LengthUnit = 'metric' | 'us'

    /**
     * 切换普通地图、卫星图等地图类型的控件。
     *
     * @see {@link BMap.MapTypeControlOptions}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b15 | 百度地图 v3.0：MapTypeControl}
     */
    export class MapTypeControl extends Control {
      /**
       * 创建切换普通地图、卫星图等地图类型的控件实例。
       *
       * @param opts MapTypeControl 的配置选项。
       * @see {@link BMap.MapTypeControlOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b15 | 百度地图 v3.0：MapTypeControl}
       */
      constructor(opts?: MapTypeControlOptions)
    }

    /**
     * 提供地图平移与缩放操作的导航控件。
     *
     * @see {@link BMap.NavigationControlOptions}
     * @see {@link BMap.NavigationControlType}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b2 | 百度地图 v3.0：NavigationControl}
     */
    export class NavigationControl extends Control {
      /**
       * 创建提供地图平移与缩放操作的导航控件实例。
       *
       * @param opts NavigationControl 的配置选项。
       * @see {@link BMap.NavigationControlOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b2 | 百度地图 v3.0：NavigationControl}
       */
      constructor(opts?: NavigationControlOptions)

      /**
       * 获取显示类型。
       *
       * @returns 导航控件的显示类型。
       * @see {@link BMap.NavigationControlType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b2 | 百度地图 v3.0：NavigationControl}
       */
      getType(): NavigationControlType

      /**
       * 设置显示类型。
       *
       * @param type 控件类型或自定义事件名称。
       * @see {@link BMap.NavigationControlType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b2 | 百度地图 v3.0：NavigationControl}
       */
      setType(type: NavigationControlType): void
    }

    /**
     * 展示当前地图概览的缩略地图控件的配置选项。
     *
     * @see {@link BMap.ControlAnchor}
     * @see {@link BMap.Size}
     * @see {@link BMap.OverviewMapControl}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b8 | 百度地图 v3.0：OverviewMapControlOptions}
     */
    export interface OverviewMapControlOptions {
      /**
       * 相对于参考位置的定位锚点。
       *
       * @see {@link BMap.ControlAnchor}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b8 | 百度地图 v3.0：OverviewMapControlOptions}
       */
      anchor?: ControlAnchor

      /**
       * 相对于参考位置的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b8 | 百度地图 v3.0：OverviewMapControlOptions}
       */
      offset?: Size

      /**
       * 显示尺寸。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b8 | 百度地图 v3.0：OverviewMapControlOptions}
       */
      size?: Size

      /**
       * 缩略地图是否处于展开状态。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b8 | 百度地图 v3.0：OverviewMapControlOptions}
       */
      isOpen?: boolean
    }

    /**
     * 显示地图版权信息的控件。
     *
     * @see {@link BMap.CopyrightControlOptions}
     * @see {@link BMap.Copyright}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b12 | 百度地图 v3.0：CopyrightControl}
     */
    export class CopyrightControl extends Control {
      /**
       * 创建显示地图版权信息的控件实例。
       *
       * @param opts CopyrightControl 的配置选项。
       * @see {@link BMap.CopyrightControlOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b12 | 百度地图 v3.0：CopyrightControl}
       */
      constructor(opts?: CopyrightControlOptions)

      /**
       * 添加指定的版权条目。
       *
       * @param copyright 需要添加的版权条目。
       * @see {@link BMap.Copyright}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b12 | 百度地图 v3.0：CopyrightControl}
       */
      addCopyright(copyright: Copyright): void

      /**
       * 移除指定的版权条目。
       *
       * @param id 需要查询或设置的对象标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b12 | 百度地图 v3.0：CopyrightControl}
       */
      removeCopyright(id: number): void

      /**
       * 获取指定的版权条目。
       *
       * 官网未说明标识不存在的情况；runtime 在找不到版权条目时返回 undefined。
       *
       * @param id 需要查询或设置的对象标识。
       * @returns 指定的版权条目。
       * @see {@link BMap.Copyright}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b12 | 百度地图 v3.0：CopyrightControl}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getCopyright(id: number): Copyright | undefined

      /**
       * 获取全部版权条目。
       *
       * @returns 全部版权条目。
       * @see {@link BMap.Copyright}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b12 | 百度地图 v3.0：CopyrightControl}
       */
      getCopyrightCollection(): Copyright[]
    }

    /**
     * 切换普通地图、卫星图等地图类型的控件的配置选项。
     *
     * @see {@link BMap.MapTypeControlType}
     * @see {@link BMap.MapType}
     * @see {@link BMap.MapTypeControl}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b16 | 百度地图 v3.0：MapTypeControlOptions}
     */
    export interface MapTypeControlOptions {
      /**
       * 对象所属的类别。
       *
       * @see {@link BMap.MapTypeControlType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b16 | 百度地图 v3.0：MapTypeControlOptions}
       */
      type?: MapTypeControlType

      /**
       * 地图类型控件中可供切换的地图类型集合。
       *
       * @see {@link BMap.MapType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b16 | 百度地图 v3.0：MapTypeControlOptions}
       */
      mapTypes?: MapType[]
    }

    /**
     * 导航控件的显示样式常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_NAVIGATION_CONTROL_LARGE}
     * @see {@link BMAP_NAVIGATION_CONTROL_SMALL}
     * @see {@link BMAP_NAVIGATION_CONTROL_PAN}
     * @see {@link BMAP_NAVIGATION_CONTROL_ZOOM}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b4 | 百度地图 v3.0：NavigationControlType}
     */
    export type NavigationControlType = 0 | 1 | 2 | 3

    /**
     * 显示地图距离比例的比例尺控件。
     *
     * @see {@link BMap.ScaleControlOptions}
     * @see {@link BMap.LengthUnit}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b9 | 百度地图 v3.0：ScaleControl}
     */
    export class ScaleControl extends Control {
      /**
       * 创建显示地图距离比例的比例尺控件实例。
       *
       * @param opts ScaleControl 的配置选项。
       * @see {@link BMap.ScaleControlOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b9 | 百度地图 v3.0：ScaleControl}
       */
      constructor(opts?: ScaleControlOptions)

      /**
       * 获取比例尺长度单位。
       *
       * @returns 比例尺长度单位。
       * @see {@link BMap.LengthUnit}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b9 | 百度地图 v3.0：ScaleControl}
       */
      getUnit(): LengthUnit

      /**
       * 设置比例尺长度单位。
       *
       * @param unit 公制或英制长度单位。
       * @see {@link BMap.LengthUnit}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b9 | 百度地图 v3.0：ScaleControl}
       */
      setUnit(unit: LengthUnit): void
    }

    /**
     * 版权条目的标识、展示内容及适用范围。
     *
     * @see {@link BMap.Bounds}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b14 | 百度地图 v3.0：Copyright}
     */
    export interface Copyright {
      /**
       * 对象的唯一标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b14 | 百度地图 v3.0：Copyright}
       */
      id: number

      /**
       * 显示的文本、HTML 内容或事件附带的数据。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b14 | 百度地图 v3.0：Copyright}
       */
      content?: string

      /**
       * 对应的地理矩形范围。
       *
       * @see {@link BMap.Bounds}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b14 | 百度地图 v3.0：Copyright}
       */
      bounds?: Bounds
    }

    /**
     * 地图类型控件的排列样式常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_MAPTYPE_CONTROL_HORIZONTAL}
     * @see {@link BMAP_MAPTYPE_CONTROL_DROPDOWN}
     * @see {@link BMAP_MAPTYPE_CONTROL_MAP}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b17 | 百度地图 v3.0：MapTypeControlType}
     */
    export type MapTypeControlType = 0 | 1 | 2

    /**
     * 获取并展示用户当前位置的定位控件。
     *
     * @see {@link BMap.GeolocationControlOptions}
     * @see {@link BMap.AddressComponent}
     * @see {@link BMap.Point}
     * @see {@link BMap.StatusCode}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b5 | 百度地图 v3.0：GeolocationControl}
     */
    export class GeolocationControl extends Control {
      /**
       * 创建获取并展示用户当前位置的定位控件实例。
       *
       * @param opts GeolocationControl 的配置选项。
       * @see {@link BMap.GeolocationControlOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b5 | 百度地图 v3.0：GeolocationControl}
       */
      constructor(opts?: GeolocationControlOptions)

      /**
       * 发起定位控件的位置查询。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b5 | 百度地图 v3.0：GeolocationControl}
       */
      location(): void

      /**
       * 获取当前定位结果的结构化地址。
       *
       * @returns 当前定位结果的结构化地址。
       * @see {@link BMap.AddressComponent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b5 | 百度地图 v3.0：GeolocationControl}
       */
      getAddressComponent(): AddressComponent | null

      /**
       * 定位成功时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.Point}
       * @see {@link BMap.AddressComponent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b5 | 百度地图 v3.0：GeolocationControl}
       */
      onlocationSuccess?: (event: {
        /**
         * 对应位置的地理坐标。
         *
         * @see {@link BMap.Point}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b5 | 百度地图 v3.0：GeolocationControl}
         */
        point: Point

        /**
         * 定位成功后解析出的结构化地址。
         *
         * @see {@link BMap.AddressComponent}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b5 | 百度地图 v3.0：GeolocationControl}
         */
        AddressComponent: AddressComponent
      }) => void

      /**
       * 定位失败时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.StatusCode}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b5 | 百度地图 v3.0：GeolocationControl}
       */
      onlocationError?: (event: {
        /**
         * 定位失败时返回的状态码。
         *
         * @see {@link BMap.StatusCode}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b5 | 百度地图 v3.0：GeolocationControl}
         */
        StatusCode: StatusCode
      }) => void
    }

    /**
     * 获取并展示用户当前位置的定位控件的配置选项。
     *
     * @see {@link BMap.ControlAnchor}
     * @see {@link BMap.Size}
     * @see {@link BMap.Icon}
     * @see {@link BMap.GeolocationControl}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b6 | 百度地图 v3.0：GeolocationControlOptions}
     */
    export interface GeolocationControlOptions {
      /**
       * 相对于参考位置的定位锚点。
       *
       * @see {@link BMap.ControlAnchor}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b6 | 百度地图 v3.0：GeolocationControlOptions}
       */
      anchor?: ControlAnchor

      /**
       * 相对于参考位置的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b6 | 百度地图 v3.0：GeolocationControlOptions}
       */
      offset?: Size

      /**
       * 定位控件是否显示地址信息栏。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b6 | 百度地图 v3.0：GeolocationControlOptions}
       */
      showAddressBar?: boolean

      /**
       * 添加定位控件后是否立即发起定位。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b6 | 百度地图 v3.0：GeolocationControlOptions}
       */
      enableAutoLocation?: boolean

      /**
       * 用于显示定位结果的标注图标。
       *
       * @see {@link BMap.Icon}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b6 | 百度地图 v3.0：GeolocationControlOptions}
       */
      locationIcon?: Icon
    }

    /**
     * 服务执行状态码类型，涵盖成功、权限、超时等状态。
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
    export type StatusCode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

    /**
     * 用于进入全景浏览的地图控件。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b18 | 百度地图 v3.0：PanoramaControl}
     */
    export class PanoramaControl extends Control {
      /**
       * 创建用于进入全景浏览的地图控件实例。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b18 | 百度地图 v3.0：PanoramaControl}
       */
      constructor()
    }
    /**
     * Control 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.Control}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b0 | 百度地图 v3.0：Control}
     */
    export interface Control extends EventEmitter {}
  }
}
