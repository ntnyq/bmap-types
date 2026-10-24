import type {
  EventEmitter,
  MapEvent,
  MapPointEvent,
  MapPixelEvent,
} from './events'

declare global {
  namespace BMap {
    /**
     * 地图覆盖物基类及自定义覆盖物的生命周期契约。
     *
     * 自定义覆盖物通常需要实现 initialize 和 draw，并由地图管理显示生命周期。
     *
     * @see {@link BMap.Map}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b0 | 百度地图 v3.0：Overlay}
     */
    export interface Overlay extends EventEmitter {
      /**
       * 初始化控件或自定义覆盖物，并返回需要挂载的 DOM 元素。
       *
       * @param map 关联的地图实例。
       * @returns 初始化控件或自定义覆盖物，并返回需要挂载的 DOM 元素。
       * @see {@link BMap.Map}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b0 | 百度地图 v3.0：Overlay}
       */
      initialize(map: Map): HTMLElement

      /**
       * 判断当前对象是否可见。
       *
       * @returns 对象是否可见。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b0 | 百度地图 v3.0：Overlay}
       */
      isVisible(): boolean

      /**
       * 根据当前地图视野更新自定义覆盖物的绘制位置。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b0 | 百度地图 v3.0：Overlay}
       */
      draw(): void

      /**
       * 显示当前对象。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b0 | 百度地图 v3.0：Overlay}
       */
      show(): void

      /**
       * 隐藏当前对象。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b0 | 百度地图 v3.0：Overlay}
       */
      hide(): void
    }

    /**
     * 地图覆盖物基类及自定义覆盖物的生命周期契约。
     *
     * 自定义覆盖物通常需要实现 initialize 和 draw，并由地图管理显示生命周期。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b0 | 百度地图 v3.0：Overlay}
     */
    export abstract class Overlay {}

    /**
     * 矢量符号预设图形的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMap_Symbol_SHAPE_CIRCLE}
     * @see {@link BMap_Symbol_SHAPE_RECTANGLE}
     * @see {@link BMap_Symbol_SHAPE_RHOMBUS}
     * @see {@link BMap_Symbol_SHAPE_STAR}
     * @see {@link BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW}
     * @see {@link BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW}
     * @see {@link BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW}
     * @see {@link BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW}
     * @see {@link BMap_Symbol_SHAPE_POINT}
     * @see {@link BMap_Symbol_SHAPE_PLANE}
     * @see {@link BMap_Symbol_SHAPE_CAMERA}
     * @see {@link BMap_Symbol_SHAPE_WARNING}
     * @see {@link BMap_Symbol_SHAPE_SMILE}
     * @see {@link BMap_Symbol_SHAPE_CLOCK}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
     */
    export type SymbolShapeType =
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14

    /**
     * 由有序地理坐标组成的折线覆盖物的配置选项。
     *
     * @see {@link BMap.Polyline}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b12 | 百度地图 v3.0：PolylineOptions}
     */
    export interface PolylineOptions {
      /**
       * 线条或边框颜色，支持 CSS 颜色表示法。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b12 | 百度地图 v3.0：PolylineOptions}
       */
      strokeColor?: string

      /**
       * 线条或边框宽度，单位为像素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b12 | 百度地图 v3.0：PolylineOptions}
       */
      strokeWeight?: number

      /**
       * 线条或边框的不透明度，取值为 0 至 1。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b12 | 百度地图 v3.0：PolylineOptions}
       */
      strokeOpacity?: number

      /**
       * 线条或边框样式，通常使用 solid 或 dashed。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b12 | 百度地图 v3.0：PolylineOptions}
       */
      strokeStyle?: string

      /**
       * 是否允许通过地图的 clearOverlays 方法批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b12 | 百度地图 v3.0：PolylineOptions}
       */
      enableMassClear?: boolean

      /**
       * 是否允许编辑覆盖物的几何形状。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b12 | 百度地图 v3.0：PolylineOptions}
       */
      enableEditing?: boolean

      /**
       * 是否响应点击事件。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b12 | 百度地图 v3.0：PolylineOptions}
       */
      enableClicking?: boolean

      /**
       * 沿折线排列的符号配置，省略时不显示附加符号。
       *
       * @see {@link BMap.IconSequence}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b12 | 百度地图 v3.0：PolylineOptions}
       */
      icons?: IconSequence[]
    }

    /**
     * 在指定地理矩形范围内显示图片的地面叠加层的配置选项。
     *
     * @see {@link BMap.GroundOverlay}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b19 | 百度地图 v3.0：GroundOverlayOptions}
     */
    export interface GroundOverlayOptions {
      /**
       * 图层不透明度，取值为 0 至 1。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b19 | 百度地图 v3.0：GroundOverlayOptions}
       */
      opacity?: number

      /**
       * 地面叠加层使用的图片地址。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b19 | 百度地图 v3.0：GroundOverlayOptions}
       */
      imageURL?: string

      /**
       * 图层可见的最小缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b19 | 百度地图 v3.0：GroundOverlayOptions}
       */
      displayOnMinLevel?: number

      /**
       * 图层可见的最大缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b19 | 百度地图 v3.0：GroundOverlayOptions}
       */
      displayOnMaxLevel?: number
    }

    /**
     * 在地理坐标处显示图标的点标注。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
     */
    export interface Marker extends Overlay {}

    /**
     * 在地理坐标处显示图标的点标注。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.MarkerOptions}
     * @see {@link BMap.InfoWindow}
     * @see {@link BMap.Icon}
     * @see {@link BMap.Size}
     * @see {@link BMap.Label}
     * @see {@link BMap.Map}
     * @see {@link BMap.ContextMenu}
     * @see {@link BMap.Animation}
     * @see {@link MapEvent}
     * @see {@link MapPixelEvent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
     */
    export class Marker {
      /**
       * 创建在地理坐标处显示图标的点标注实例。
       *
       * @param point 需要处理的地理坐标。
       * @param opts Marker 的配置选项。
       * @see {@link BMap.Point}
       * @see {@link BMap.MarkerOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      constructor(point: Point, opts?: MarkerOptions)

      /**
       * 在地图或当前标注位置打开信息窗口。
       *
       * @param infoWnd 需要打开的信息窗口实例。
       * @see {@link BMap.InfoWindow}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      openInfoWindow(infoWnd: InfoWindow): void

      /**
       * 关闭当前打开的信息窗口。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      closeInfoWindow(): void

      /**
       * 设置标注图像。
       *
       * @param icon 点标注使用的图像对象。
       * @see {@link BMap.Icon}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      setIcon(icon: Icon): void

      /**
       * 获取标注图像。
       *
       * @returns 标注图像。
       * @see {@link BMap.Icon}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      getIcon(): Icon

      /**
       * 设置对象的地理坐标。
       *
       * @param position 目标位置的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      setPosition(position: Point): void

      /**
       * 获取对象的地理坐标。
       *
       * @returns 对象的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      getPosition(): Point

      /**
       * 设置像素偏移量。
       *
       * @param offset 相对于参考位置的偏移量。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      setOffset(offset: Size): void

      /**
       * 获取像素偏移量。
       *
       * @returns 像素偏移量。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      getOffset(): Size

      /**
       * 设置点标注关联的文字标注。
       *
       * @param label 需要关联的文字标注。
       * @see {@link BMap.Label}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      setLabel(label: Label): void

      /**
       * 获取点标注关联的文字标注。
       *
       * 官网返回值只列出 Label；runtime 在未关联文字标注时返回 null。
       *
       * @returns 点标注关联的文字标注。
       * @see {@link BMap.Label}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getLabel(): Label | null

      /**
       * 设置用于展示或鼠标悬停提示的标题。
       *
       * @param title 显示的标题内容。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      setTitle(title: string): void

      /**
       * 获取用于展示或鼠标悬停提示的标题。
       *
       * @returns 用于展示或鼠标悬停提示的标题。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      getTitle(): string

      /**
       * 设置当前标注是否优先显示在其他标注上方。
       *
       * @param isTop 是否将当前标注优先显示在其他标注上方。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      setTop(isTop: boolean): void

      /**
       * 启用拖拽交互。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      enableDragging(): void

      /**
       * 禁用拖拽交互。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      disableDragging(): void

      /**
       * 启用通过 Map.clearOverlays 批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      enableMassClear(): void

      /**
       * 禁用通过 Map.clearOverlays 批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      disableMassClear(): void

      /**
       * 设置覆盖物的层叠顺序。
       *
       * @param zIndex 目标层叠顺序。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      setZIndex(zIndex: number): void

      /**
       * 获取覆盖物所属的地图实例。
       *
       * 官网返回值只列出 Map；runtime 在覆盖物尚未添加到地图时返回 null。
       *
       * @returns 覆盖物所属的地图实例。
       * @see {@link BMap.Map}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getMap(): Map | null

      /**
       * 添加指定的右键菜单。
       *
       * @param menu 需要操作的右键菜单。
       * @see {@link BMap.ContextMenu}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      addContextMenu(menu: ContextMenu): void

      /**
       * 移除指定的右键菜单。
       *
       * @param menu 需要操作的右键菜单。
       * @see {@link BMap.ContextMenu}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      removeContextMenu(menu: ContextMenu): void

      /**
       * 设置点标注的动画效果。
       *
       * 应在标注添加到地图后设置动画。
       *
       * @param animation 标注动画常量；传入 null 可取消动画。
       * @see {@link BMap.Animation}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      setAnimation(animation?: Animation | null): void

      /**
       * 设置旋转角度，单位为度。
       *
       * @param rotation 旋转角度，单位为度。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      setRotation(rotation: number): void

      /**
       * 获取旋转角度，单位为度。
       *
       * @returns 旋转角度，单位为度。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      getRotation(): number

      /**
       * 设置标注的阴影图像。
       *
       * @param shadow 标注阴影使用的图像对象。
       * @see {@link BMap.Icon}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      setShadow(shadow: Icon): void

      /**
       * 获取标注的阴影图像。
       *
       * @returns 标注使用的阴影图像对象。
       * @see {@link BMap.Icon}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      getShadow(): Icon

      /**
       * 鼠标单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      onclick?: (event: MapEvent<Marker>) => void

      /**
       * 鼠标双击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      ondblclick?: (event: MapPixelEvent<Marker>) => void

      /**
       * 鼠标按下时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      onmousedown?: (event: MapPixelEvent<Marker>) => void

      /**
       * 鼠标释放时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      onmouseup?: (event: MapPixelEvent<Marker>) => void

      /**
       * 鼠标移出时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      onmouseout?: (event: MapPixelEvent<Marker>) => void

      /**
       * 鼠标移入时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      onmouseover?: (event: MapPixelEvent<Marker>) => void

      /**
       * 覆盖物被移除时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      onremove?: (event: MapEvent<Marker>) => void

      /**
       * 标注上的信息窗口关闭时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      oninfowindowclose?: (event: MapEvent<Marker>) => void

      /**
       * 标注上的信息窗口打开时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      oninfowindowopen?: (event: MapEvent<Marker>) => void

      /**
       * 开始拖拽时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      ondragstart?: (event: MapEvent<Marker>) => void

      /**
       * 拖拽过程中时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      ondragging?: (event: MapPixelEvent<Marker>) => void

      /**
       * 拖拽结束时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      ondragend?: (event: MapPixelEvent<Marker>) => void

      /**
       * 鼠标右键单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2 | 百度地图 v3.0：Marker}
       */
      onrightclick?: (event: MapEvent<Marker>) => void
    }

    /**
     * 通过 SVG 路径或预设形状定义的矢量符号的配置选项。
     *
     * @see {@link BMap.Size}
     * @see {@link BMap.Symbol}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b27 | 百度地图 v3.0：SymbolOptions}
     */
    export interface SymbolOptions {
      /**
       * 相对于参考位置的定位锚点。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b27 | 百度地图 v3.0：SymbolOptions}
       */
      anchor?: Size

      /**
       * 填充颜色，支持 CSS 颜色表示法。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b27 | 百度地图 v3.0：SymbolOptions}
       */
      fillColor?: string

      /**
       * 填充不透明度，取值为 0 至 1。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b27 | 百度地图 v3.0：SymbolOptions}
       */
      fillOpacity?: number

      /**
       * 矢量符号的缩放比例。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b27 | 百度地图 v3.0：SymbolOptions}
       */
      scale?: number

      /**
       * 旋转角度，单位为度。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b27 | 百度地图 v3.0：SymbolOptions}
       */
      rotation?: number

      /**
       * 线条或边框颜色，支持 CSS 颜色表示法。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b27 | 百度地图 v3.0：SymbolOptions}
       */
      strokeColor?: string

      /**
       * 线条或边框的不透明度，取值为 0 至 1。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b27 | 百度地图 v3.0：SymbolOptions}
       */
      strokeOpacity?: number

      /**
       * 线条或边框宽度，单位为像素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b27 | 百度地图 v3.0：SymbolOptions}
       */
      strokeWeight?: number
    }

    /**
     * 沿折线排列的矢量符号序列。
     *
     * @see {@link BMap.Symbol}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b13 | 百度地图 v3.0：IconSequence}
     */
    export class IconSequence {
      /**
       * 创建沿折线排列的矢量符号序列实例。
       *
       * 官网未说明省略 repeat 的处理；runtime 直接读取该字符串，省略时会抛出异常，因此声明要求显式传入。
       *
       * @param symbol 沿路径排列的矢量符号。
       * @param offset 首个符号相对于线起点的偏移，可使用像素或百分比，默认为 100%。
       * @param repeat 符号重复间隔，可使用像素值或百分比。
       * @param fixedRotation 是否固定符号旋转方向；runtime 默认不固定。
       * @see {@link BMap.Symbol}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b13 | 百度地图 v3.0：IconSequence}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      constructor(
        symbol: Symbol,
        offset: string | undefined,
        repeat: string,
        fixedRotation?: boolean,
      )
    }

    /**
     * 用于批量绘制大量地理坐标点的海量点覆盖物。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b20 | 百度地图 v3.0：PointCollection}
     */
    export interface PointCollection extends Overlay {}

    /**
     * 用于批量绘制大量地理坐标点的海量点覆盖物。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.PointCollectionOption}
     * @see {@link MapPointEvent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b20 | 百度地图 v3.0：PointCollection}
     */
    export class PointCollection {
      /**
       * 创建用于批量绘制大量地理坐标点的海量点覆盖物实例。
       *
       * @param points 需要展示或转换的地理坐标点集合。
       * @param opts PointCollection 的配置选项。
       * @see {@link BMap.Point}
       * @see {@link BMap.PointCollectionOption}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b20 | 百度地图 v3.0：PointCollection}
       */
      constructor(points: Point[], opts?: PointCollectionOption)

      /**
       * 设置有序地理坐标点集合。
       *
       * @param points 需要展示或转换的地理坐标点集合。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b20 | 百度地图 v3.0：PointCollection}
       */
      setPoints(points: Point[]): void

      /**
       * 设置海量点的形状、颜色和尺寸。
       *
       * @param styles 形状、尺寸、颜色或 CSS 样式配置。
       * @see {@link BMap.PointCollectionOption}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b20 | 百度地图 v3.0：PointCollection}
       */
      setStyles(styles: PointCollectionOption): void

      /**
       * 清除当前海量点覆盖物中的全部坐标点。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b20 | 百度地图 v3.0：PointCollection}
       */
      clear(): void

      /**
       * 鼠标单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPointEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b20 | 百度地图 v3.0：PointCollection}
       */
      onclick?: (event: MapPointEvent<PointCollection>) => void

      /**
       * 鼠标移入时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPointEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b20 | 百度地图 v3.0：PointCollection}
       */
      onmouseover?: (event: MapPointEvent<PointCollection>) => void

      /**
       * 鼠标移出时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPointEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b20 | 百度地图 v3.0：PointCollection}
       */
      onmouseout?: (event: MapPointEvent<PointCollection>) => void
      /**
       * 获取覆盖物所属的地图。官网未在此类型列出该方法，runtime 提供此方法且在未添加时返回 null。
       *
       * @returns 所属地图；尚未添加时为 null。
       * @see {@link BMap.Map}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getMap(): Map | null
    }

    /**
     * 在地理坐标处显示图标的点标注的配置选项。
     *
     * @see {@link BMap.Size}
     * @see {@link BMap.Icon}
     * @see {@link BMap.Marker}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b3 | 百度地图 v3.0：MarkerOptions}
     */
    export interface MarkerOptions {
      /**
       * 相对于参考位置的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b3 | 百度地图 v3.0：MarkerOptions}
       */
      offset?: Size

      /**
       * 点标注使用的图像对象。
       *
       * @see {@link BMap.Icon}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b3 | 百度地图 v3.0：MarkerOptions}
       */
      icon?: Icon

      /**
       * 是否允许通过地图的 clearOverlays 方法批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b3 | 百度地图 v3.0：MarkerOptions}
       */
      enableMassClear?: boolean

      /**
       * 启用拖拽交互。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b3 | 百度地图 v3.0：MarkerOptions}
       */
      enableDragging?: boolean

      /**
       * 是否响应点击事件。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b3 | 百度地图 v3.0：MarkerOptions}
       */
      enableClicking?: boolean

      /**
       * 拖拽标注时是否显示抬起效果。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b3 | 百度地图 v3.0：MarkerOptions}
       */
      raiseOnDrag?: boolean

      /**
       * 拖拽时使用的 CSS 鼠标指针样式。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b3 | 百度地图 v3.0：MarkerOptions}
       */
      draggingCursor?: string

      /**
       * 旋转角度，单位为度。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b3 | 百度地图 v3.0：MarkerOptions}
       */
      rotation?: number

      /**
       * 标注使用的阴影图像。
       *
       * @see {@link BMap.Icon}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b3 | 百度地图 v3.0：MarkerOptions}
       */
      shadow?: Icon

      /**
       * 用于展示名称或鼠标悬停提示的标题。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b3 | 百度地图 v3.0：MarkerOptions}
       */
      title?: string
    }

    /**
     * 在指定位置展示标题和内容的信息窗口。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
     */
    export interface InfoWindow extends EventEmitter {}

    /**
     * 在指定位置展示标题和内容的信息窗口。
     *
     * @see {@link BMap.InfoWindowOptions}
     * @see {@link BMap.Point}
     * @see {@link MapPointEvent}
     * @see {@link MapEvent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
     */
    export class InfoWindow {
      /**
       * 创建在指定位置展示标题和内容的信息窗口实例。
       *
       * @param content 需要展示的文字、HTML 字符串或 DOM 元素。
       * @param opts InfoWindow 的配置选项。
       * @see {@link BMap.InfoWindowOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      constructor(content: string | HTMLElement, opts?: InfoWindowOptions)

      /**
       * 设置宽度，单位为像素。
       *
       * @param width 宽度，单位为像素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      setWidth(width: number): void

      /**
       * 设置高度，单位为像素。
       *
       * @param height 高度，单位为像素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      setHeight(height: number): void

      /**
       * 重新计算并绘制当前信息窗口。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      redraw(): void

      /**
       * 设置用于展示或鼠标悬停提示的标题。
       *
       * @param title 显示的标题内容。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      setTitle(title: string | HTMLElement): void

      /**
       * 获取用于展示或鼠标悬停提示的标题。
       *
       * @returns 用于展示或鼠标悬停提示的标题。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      getTitle(): string | HTMLElement

      /**
       * 设置显示的文本或 HTML 内容。
       *
       * @param content 需要展示的文字、HTML 字符串或 DOM 元素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      setContent(content: string | HTMLElement): void

      /**
       * 获取显示的文本或 HTML 内容。
       *
       * @returns 显示的文本或 HTML 内容。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      getContent(): string | HTMLElement

      /**
       * 获取对象的地理坐标。
       *
       * 官网返回值只列出 Point；runtime 在信息窗口尚未关联位置时返回 undefined。
       *
       * @returns 对象的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getPosition(): Point | undefined

      /**
       * 启用信息窗口最大化操作。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      enableMaximize(): void

      /**
       * 禁用信息窗口最大化操作。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      disableMaximize(): void

      /**
       * 判断信息窗口当前是否处于打开状态。
       *
       * @returns 信息窗口是否已打开。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      isOpen(): boolean

      /**
       * 设置信息窗口最大化时显示的内容。
       *
       * @param content 需要展示的文字、HTML 字符串或 DOM 元素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      setMaxContent(content: string): void

      /**
       * 将信息窗口切换为最大化显示。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      maximize(): void

      /**
       * 将最大化的信息窗口恢复为普通状态。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      restore(): void

      /**
       * 启用打开信息窗口时自动平移地图。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      enableAutoPan(): void

      /**
       * 禁用打开信息窗口时自动平移地图。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      disableAutoPan(): void

      /**
       * 启用点击地图时自动关闭信息窗口。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      enableCloseOnClick(): void

      /**
       * 禁用点击地图时自动关闭信息窗口。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      disableCloseOnClick(): void

      /**
       * 对象关闭时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPointEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      onclose?: (event: MapPointEvent<InfoWindow>) => void

      /**
       * 对象打开时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPointEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      onopen?: (event: MapPointEvent<InfoWindow>) => void

      /**
       * 信息窗口最大化时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      onmaximize?: (event: MapEvent<InfoWindow>) => void

      /**
       * 信息窗口从最大化状态恢复时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      onrestore?: (event: MapEvent<InfoWindow>) => void

      /**
       * 点击信息窗口关闭按钮时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7 | 百度地图 v3.0：InfoWindow}
       */
      onclickclose?: (event: MapEvent<InfoWindow>) => void
    }

    /**
     * 由有序地理坐标组成的多边形覆盖物。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
     */
    export interface Polygon extends Overlay {}

    /**
     * 由有序地理坐标组成的多边形覆盖物。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.PolygonOptions}
     * @see {@link BMap.Bounds}
     * @see {@link BMap.Map}
     * @see {@link MapEvent}
     * @see {@link MapPixelEvent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
     */
    export class Polygon {
      /**
       * 创建由有序地理坐标组成的多边形覆盖物实例。
       *
       * @param points 需要展示或转换的地理坐标点集合。
       * @param opts Polygon 的配置选项。
       * @see {@link BMap.Point}
       * @see {@link BMap.PolygonOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      constructor(points: Point[], opts?: PolygonOptions)

      /**
       * 设置构成覆盖物的路径。
       *
       * @param path 按顺序排列的路径坐标，或矢量符号的 SVG 路径及预设形状。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      setPath(path: Point[]): void

      /**
       * 获取构成覆盖物的路径。
       *
       * @returns 构成覆盖物的路径。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      getPath(): Point[]

      /**
       * 设置线条或边框颜色。
       *
       * @param color 符合 CSS 颜色规范的颜色值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      setStrokeColor(color: string): void

      /**
       * 获取线条或边框颜色。
       *
       * @returns 线条或边框颜色。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      getStrokeColor(): string

      /**
       * 设置填充颜色。
       *
       * @param color 符合 CSS 颜色规范的颜色值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      setFillColor(color: string): void

      /**
       * 获取填充颜色。
       *
       * @returns 填充颜色。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      getFillColor(): string

      /**
       * 设置线条或边框不透明度，范围为 0 至 1。
       *
       * @param opacity 不透明度，取值为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      setStrokeOpacity(opacity: number): void

      /**
       * 获取线条或边框不透明度，范围为 0 至 1。
       *
       * @returns 线条或边框不透明度，范围为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      getStrokeOpacity(): number

      /**
       * 设置填充不透明度，范围为 0 至 1。
       *
       * @param opacity 不透明度，取值为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      setFillOpacity(opacity: number): void

      /**
       * 获取填充不透明度，范围为 0 至 1。
       *
       * @returns 填充不透明度，范围为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      getFillOpacity(): number

      /**
       * 设置线条或边框宽度，单位为像素。
       *
       * @param weight 线条或边框宽度，单位为像素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      setStrokeWeight(weight: number): void

      /**
       * 获取线条或边框宽度，单位为像素。
       *
       * @returns 线条或边框宽度，单位为像素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      getStrokeWeight(): number

      /**
       * 设置线条或边框样式。
       *
       * @param style 线条样式或地图样式配置。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      setStrokeStyle(style: string): void

      /**
       * 获取线条或边框样式。
       *
       * @returns 线条或边框样式。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      getStrokeStyle(): string

      /**
       * 获取对象覆盖的地理矩形范围。
       *
       * @returns 对象覆盖的地理矩形范围。
       * @see {@link BMap.Bounds}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      getBounds(): Bounds

      /**
       * 启用覆盖物几何编辑。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      enableEditing(): void

      /**
       * 禁用覆盖物几何编辑。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      disableEditing(): void

      /**
       * 启用通过 Map.clearOverlays 批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      enableMassClear(): void

      /**
       * 禁用通过 Map.clearOverlays 批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      disableMassClear(): void

      /**
       * 更新路径中指定索引的地理坐标。
       *
       * @param index 目标成员的索引，从 0 开始。
       * @param point 需要处理的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      setPositionAt(index: number, point: Point): void

      /**
       * 获取覆盖物所属的地图实例。
       *
       * 官网返回值只列出 Map；runtime 在覆盖物尚未添加到地图时返回 null。
       *
       * @returns 覆盖物所属的地图实例。
       * @see {@link BMap.Map}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getMap(): Map | null

      /**
       * 鼠标单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      onclick?: (event: MapEvent<Polygon>) => void

      /**
       * 鼠标双击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      ondblclick?: (event: MapPixelEvent<Polygon>) => void

      /**
       * 鼠标按下时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      onmousedown?: (event: MapPixelEvent<Polygon>) => void

      /**
       * 鼠标释放时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      onmouseup?: (event: MapPixelEvent<Polygon>) => void

      /**
       * 鼠标移出时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      onmouseout?: (event: MapPixelEvent<Polygon>) => void

      /**
       * 鼠标移入时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      onmouseover?: (event: MapPixelEvent<Polygon>) => void

      /**
       * 覆盖物被移除时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      onremove?: (event: MapEvent<Polygon>) => void

      /**
       * 覆盖物的几何形状更新时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14 | 百度地图 v3.0：Polygon}
       */
      onlineupdate?: (event: MapEvent<Polygon>) => void
    }

    /**
     * 用于批量绘制大量地理坐标点的海量点覆盖物的配置选项。
     *
     * @see {@link BMap.ShapeType}
     * @see {@link BMap.SizeType}
     * @see {@link BMap.PointCollectionOptions}
     * @see {@link BMap.PointCollection}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b21 | 百度地图 v3.0：PointCollectionOptions}
     */
    export interface PointCollectionOption {
      /**
       * 海量点的预设形状。
       *
       * @see {@link BMap.ShapeType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b21 | 百度地图 v3.0：PointCollectionOptions}
       */
      shape?: ShapeType

      /**
       * 海量点的显示颜色。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b21 | 百度地图 v3.0：PointCollectionOptions}
       */
      color?: string

      /**
       * 显示尺寸。
       *
       * @see {@link BMap.SizeType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b21 | 百度地图 v3.0：PointCollectionOptions}
       */
      size?: SizeType
    }

    /**
     * 点标注动画效果的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_ANIMATION_DROP}
     * @see {@link BMAP_ANIMATION_BOUNCE}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b4 | 百度地图 v3.0：Animation}
     */
    export type Animation = 1 | 2

    /**
     * 在指定位置展示标题和内容的信息窗口的配置选项。
     *
     * @see {@link BMap.Size}
     * @see {@link BMap.InfoWindow}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8 | 百度地图 v3.0：InfoWindowOptions}
     */
    export interface InfoWindowOptions {
      /**
       * 宽度，单位为像素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8 | 百度地图 v3.0：InfoWindowOptions}
       */
      width?: number

      /**
       * 高度，单位为像素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8 | 百度地图 v3.0：InfoWindowOptions}
       */
      height?: number

      /**
       * 允许显示的最大宽度，数值以像素计。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8 | 百度地图 v3.0：InfoWindowOptions}
       */
      maxWidth?: number

      /**
       * 相对于参考位置的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8 | 百度地图 v3.0：InfoWindowOptions}
       */
      offset?: Size

      /**
       * 用于展示名称或鼠标悬停提示的标题。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8 | 百度地图 v3.0：InfoWindowOptions}
       */
      title?: string

      /**
       * 打开信息窗口时是否自动移动地图以完整显示窗口。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8 | 百度地图 v3.0：InfoWindowOptions}
       */
      enableAutoPan?: boolean

      /**
       * 点击地图时是否自动关闭信息窗口。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8 | 百度地图 v3.0：InfoWindowOptions}
       */
      enableCloseOnClick?: boolean

      /**
       * 是否显示信息窗口中的短信发送按钮。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8 | 百度地图 v3.0：InfoWindowOptions}
       */
      enableMessage?: boolean

      /**
       * 信息窗口短信的自定义内容。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8 | 百度地图 v3.0：InfoWindowOptions}
       */
      message?: string
    }

    /**
     * 由有序地理坐标组成的多边形覆盖物的配置选项。
     *
     * @see {@link BMap.Polygon}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15 | 百度地图 v3.0：PolygonOptions}
     */
    export interface PolygonOptions {
      /**
       * 线条或边框颜色，支持 CSS 颜色表示法。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15 | 百度地图 v3.0：PolygonOptions}
       */
      strokeColor?: string

      /**
       * 填充颜色，支持 CSS 颜色表示法。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15 | 百度地图 v3.0：PolygonOptions}
       */
      fillColor?: string

      /**
       * 线条或边框宽度，单位为像素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15 | 百度地图 v3.0：PolygonOptions}
       */
      strokeWeight?: number

      /**
       * 线条或边框的不透明度，取值为 0 至 1。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15 | 百度地图 v3.0：PolygonOptions}
       */
      strokeOpacity?: number

      /**
       * 填充不透明度，取值为 0 至 1。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15 | 百度地图 v3.0：PolygonOptions}
       */
      fillOpacity?: number

      /**
       * 线条或边框样式，通常使用 solid 或 dashed。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15 | 百度地图 v3.0：PolygonOptions}
       */
      strokeStyle?: string

      /**
       * 是否允许通过地图的 clearOverlays 方法批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15 | 百度地图 v3.0：PolygonOptions}
       */
      enableMassClear?: boolean

      /**
       * 是否允许编辑覆盖物的几何形状。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15 | 百度地图 v3.0：PolygonOptions}
       */
      enableEditing?: boolean

      /**
       * 是否响应点击事件。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15 | 百度地图 v3.0：PolygonOptions}
       */
      enableClicking?: boolean
    }

    /**
     * 海量点预设形状的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_POINT_SHAPE_CIRCLE}
     * @see {@link BMAP_POINT_SHAPE_STAR}
     * @see {@link BMAP_POINT_SHAPE_SQUARE}
     * @see {@link BMAP_POINT_SHAPE_RHOMBUS}
     * @see {@link BMAP_POINT_SHAPE_WATERDROP}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b22 | 百度地图 v3.0：ShapeType}
     */
    export type ShapeType = 1 | 2 | 3 | 4 | 5

    /**
     * 点标注使用的图像及其尺寸和锚点。
     *
     * @see {@link BMap.Size}
     * @see {@link BMap.IconOptions}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
     */
    export class Icon {
      /**
       * 创建点标注使用的图像及其尺寸和锚点实例。
       *
       * @param url 图片资源的地址。
       * @param size 显示区域的像素尺寸。
       * @param opts Icon 的配置选项。
       * @see {@link BMap.Size}
       * @see {@link BMap.IconOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      constructor(url: string, size: Size, opts?: IconOptions)

      /**
       * 相对于参考位置的定位锚点。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      anchor: Size

      /**
       * 显示尺寸。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      size: Size

      /**
       * 图片相对于图标可视区域的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      imageOffset: Size

      /**
       * 图标使用的原始图片显示尺寸。
       *
       * 官网未说明省略图片尺寸时的状态；runtime 在未提供 imageSize 选项时保留 undefined。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      imageSize?: Size

      /**
       * 图标使用的图片资源地址。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      imageUrl: string

      /**
       * 信息窗口开启点相对于图标左上角的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      infoWindowAnchor: Size

      /**
       * 旧版 IE 打印兼容功能使用的图片地址。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      printImageUrl: string

      /**
       * 设置图标图片的资源地址。
       *
       * @param imageUrl 图片资源的地址。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      setImageUrl(imageUrl: string): void

      /**
       * 设置显示尺寸。
       *
       * @param size 显示区域的像素尺寸。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      setSize(size: Size): void

      /**
       * 设置图标图片的显示尺寸。
       *
       * @param offset 图标原始图片需要显示的像素尺寸。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      setImageSize(offset: Size): void

      /**
       * 设置定位锚点。
       *
       * @param anchor 定位锚点或停靠位置。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      setAnchor(anchor: Size): void

      /**
       * 设置图片在图标可视区域内的偏移量。
       *
       * @param offset 相对于参考位置的偏移量。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      setImageOffset(offset: Size): void

      /**
       * 设置信息窗口相对于图标的开启位置。
       *
       * @param anchor 定位锚点或停靠位置。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      setInfoWindowAnchor(anchor: Size): void

      /**
       * 设置旧版打印兼容使用的图片地址。
       *
       * @param url 图片资源的地址。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       */
      setPrintImageUrl(url: string): void
    }

    /**
     * 显示文本或 HTML 内容的文字标注。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
     */
    export interface Label extends Overlay {}

    /**
     * 显示文本或 HTML 内容的文字标注。
     *
     * @see {@link BMap.LabelOptions}
     * @see {@link BMap.Point}
     * @see {@link BMap.Size}
     * @see {@link BMap.Map}
     * @see {@link MapEvent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
     */
    export class Label {
      /**
       * 创建显示文本或 HTML 内容的文字标注实例。
       *
       * @param content 需要展示的文字、HTML 字符串或 DOM 元素。
       * @param opts Label 的配置选项。
       * @see {@link BMap.LabelOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      constructor(content: string, opts?: LabelOptions)

      /**
       * 设置文字标注的 CSS 样式。
       *
       * @param styles 形状、尺寸、颜色或 CSS 样式配置。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      setStyle(styles: Partial<CSSStyleDeclaration>): void

      /**
       * 设置显示的文本或 HTML 内容。
       *
       * @param content 需要展示的文字、HTML 字符串或 DOM 元素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      setContent(content: string): void

      /**
       * 设置对象的地理坐标。
       *
       * @param position 目标位置的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      setPosition(position: Point): void

      /**
       * 获取对象的地理坐标。
       *
       * 官网返回值只列出 Point；runtime 在尚未设置位置时返回 null。
       *
       * @returns 对象的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getPosition(): Point | null

      /**
       * 设置像素偏移量。
       *
       * @param offset 相对于参考位置的偏移量。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      setOffset(offset: Size): void

      /**
       * 获取像素偏移量。
       *
       * @returns 像素偏移量。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      getOffset(): Size

      /**
       * 设置用于展示或鼠标悬停提示的标题。
       *
       * @param title 显示的标题内容。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      setTitle(title: string): void

      /**
       * 获取用于展示或鼠标悬停提示的标题。
       *
       * @returns 用于展示或鼠标悬停提示的标题。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      getTitle(): string

      /**
       * 启用通过 Map.clearOverlays 批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      enableMassClear(): void

      /**
       * 禁用通过 Map.clearOverlays 批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      disableMassClear(): void

      /**
       * 设置覆盖物的层叠顺序。
       *
       * @param zIndex 目标层叠顺序。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      setZIndex(zIndex: number): void

      /**
       * 获取覆盖物所属的地图实例。
       *
       * 官网返回值只列出 Map；runtime 在覆盖物尚未添加到地图时返回 null。
       *
       * @returns 覆盖物所属的地图实例。
       * @see {@link BMap.Map}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getMap(): Map | null

      /**
       * 鼠标单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      onclick?: (event: MapEvent<Label>) => void

      /**
       * 鼠标双击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      ondblclick?: (event: MapEvent<Label>) => void

      /**
       * 鼠标按下时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      onmousedown?: (event: MapEvent<Label>) => void

      /**
       * 鼠标释放时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      onmouseup?: (event: MapEvent<Label>) => void

      /**
       * 鼠标移出时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      onmouseout?: (event: MapEvent<Label>) => void

      /**
       * 鼠标移入时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      onmouseover?: (event: MapEvent<Label>) => void

      /**
       * 覆盖物被移除时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      onremove?: (event: MapEvent<Label>) => void

      /**
       * 鼠标右键单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       */
      onrightclick?: (event: MapEvent<Label>) => void
      /**
       * 获取文字标注的内容。官网方法表未列出 getContent，runtime 实际导出此方法。
       *
       * @returns 文字标注显示的文本或 HTML 字符串。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9 | 百度地图 v3.0：Label}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getContent(): string
    }

    /**
     * 以中心坐标和米制半径定义的圆形覆盖物。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
     */
    export interface Circle extends Overlay {}

    /**
     * 以中心坐标和米制半径定义的圆形覆盖物。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.CircleOptions}
     * @see {@link BMap.Bounds}
     * @see {@link BMap.Map}
     * @see {@link MapEvent}
     * @see {@link MapPixelEvent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
     */
    export class Circle {
      /**
       * 创建以中心坐标和米制半径定义的圆形覆盖物实例。
       *
       * @param center 目标中心点、检索位置或城市名称。
       * @param radius 半径，单位为米。
       * @param opts Circle 的配置选项。
       * @see {@link BMap.Point}
       * @see {@link BMap.CircleOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      constructor(center: Point, radius: number, opts?: CircleOptions)

      /**
       * 设置中心地理坐标。
       *
       * @param center 目标中心点、检索位置或城市名称。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      setCenter(center: Point): void

      /**
       * 获取中心地理坐标。
       *
       * @returns 中心地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      getCenter(): Point

      /**
       * 设置半径，单位为米。
       *
       * @param radius 半径，单位为米。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      setRadius(radius: number): void

      /**
       * 获取半径，单位为米。
       *
       * @returns 半径，单位为米。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      getRadius(): number

      /**
       * 获取对象覆盖的地理矩形范围。
       *
       * @returns 对象覆盖的地理矩形范围。
       * @see {@link BMap.Bounds}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      getBounds(): Bounds

      /**
       * 设置线条或边框颜色。
       *
       * @param color 符合 CSS 颜色规范的颜色值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      setStrokeColor(color: string): void

      /**
       * 获取线条或边框颜色。
       *
       * @returns 线条或边框颜色。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      getStrokeColor(): string

      /**
       * 设置填充颜色。
       *
       * @param color 符合 CSS 颜色规范的颜色值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      setFillColor(color: string): void

      /**
       * 获取填充颜色。
       *
       * @returns 填充颜色。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      getFillColor(): string

      /**
       * 设置线条或边框不透明度，范围为 0 至 1。
       *
       * @param opacity 不透明度，取值为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      setStrokeOpacity(opacity: number): void

      /**
       * 获取线条或边框不透明度，范围为 0 至 1。
       *
       * @returns 线条或边框不透明度，范围为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      getStrokeOpacity(): number

      /**
       * 设置填充不透明度，范围为 0 至 1。
       *
       * @param opacity 不透明度，取值为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      setFillOpacity(opacity: number): void

      /**
       * 获取填充不透明度，范围为 0 至 1。
       *
       * @returns 填充不透明度，范围为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      getFillOpacity(): number

      /**
       * 设置线条或边框宽度，单位为像素。
       *
       * @param weight 线条或边框宽度，单位为像素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      setStrokeWeight(weight: number): void

      /**
       * 获取线条或边框宽度，单位为像素。
       *
       * @returns 线条或边框宽度，单位为像素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      getStrokeWeight(): number

      /**
       * 设置线条或边框样式。
       *
       * @param style 线条样式或地图样式配置。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      setStrokeStyle(style: string): void

      /**
       * 获取线条或边框样式。
       *
       * @returns 线条或边框样式。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      getStrokeStyle(): string

      /**
       * 启用覆盖物几何编辑。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      enableEditing(): void

      /**
       * 禁用覆盖物几何编辑。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      disableEditing(): void

      /**
       * 启用通过 Map.clearOverlays 批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      enableMassClear(): void

      /**
       * 禁用通过 Map.clearOverlays 批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      disableMassClear(): void

      /**
       * 获取覆盖物所属的地图实例。
       *
       * 官网返回值只列出 Map；runtime 在覆盖物尚未添加到地图时返回 null。
       *
       * @returns 覆盖物所属的地图实例。
       * @see {@link BMap.Map}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getMap(): Map | null

      /**
       * 鼠标单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      onclick?: (event: MapEvent<Circle>) => void

      /**
       * 鼠标双击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      ondblclick?: (event: MapPixelEvent<Circle>) => void

      /**
       * 鼠标按下时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      onmousedown?: (event: MapPixelEvent<Circle>) => void

      /**
       * 鼠标释放时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      onmouseup?: (event: MapPixelEvent<Circle>) => void

      /**
       * 鼠标移出时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      onmouseout?: (event: MapPixelEvent<Circle>) => void

      /**
       * 鼠标移入时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      onmouseover?: (event: MapPixelEvent<Circle>) => void

      /**
       * 覆盖物被移除时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      onremove?: (event: MapEvent<Circle>) => void

      /**
       * 覆盖物的几何形状更新时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 | 百度地图 v3.0：Circle}
       */
      onlineupdate?: (event: MapEvent<Circle>) => void
    }

    /**
     * 海量点预设尺寸的常量类型。
     *
     * 官网未完整列出常量的字面取值；这里的取值集合依据 v3 runtime 确定。
     *
     * @see {@link BMAP_POINT_SIZE_TINY}
     * @see {@link BMAP_POINT_SIZE_SMALLER}
     * @see {@link BMAP_POINT_SIZE_SMALL}
     * @see {@link BMAP_POINT_SIZE_NORMAL}
     * @see {@link BMAP_POINT_SIZE_BIG}
     * @see {@link BMAP_POINT_SIZE_BIGGER}
     * @see {@link BMAP_POINT_SIZE_HUGE}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b23 | 百度地图 v3.0：SizeType}
     */
    export type SizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7

    /**
     * 点标注使用的图像及其尺寸和锚点的配置选项。
     *
     * @see {@link BMap.Size}
     * @see {@link BMap.Icon}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b6 | 百度地图 v3.0：IconOptions}
     */
    export interface IconOptions {
      /**
       * 相对于参考位置的定位锚点。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b6 | 百度地图 v3.0：IconOptions}
       */
      anchor?: Size

      /**
       * 图片相对于图标可视区域的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b6 | 百度地图 v3.0：IconOptions}
       */
      imageOffset?: Size

      /**
       * 信息窗口开启点相对于图标左上角的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b6 | 百度地图 v3.0：IconOptions}
       */
      infoWindowAnchor?: Size

      /**
       * 旧版 IE 打印兼容功能使用的图片地址。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b6 | 百度地图 v3.0：IconOptions}
       */
      printImageUrl?: string
      /**
       * 图标图片的显示尺寸。官网选项表未列出此字段，runtime 构造函数会读取 imageSize。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5 | 百度地图 v3.0：Icon}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      imageSize?: Size
    }

    /**
     * 显示文本或 HTML 内容的文字标注的配置选项。
     *
     * @see {@link BMap.Size}
     * @see {@link BMap.Point}
     * @see {@link BMap.Label}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b10 | 百度地图 v3.0：LabelOptions}
     */
    export interface LabelOptions {
      /**
       * 相对于参考位置的像素偏移量。
       *
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b10 | 百度地图 v3.0：LabelOptions}
       */
      offset?: Size

      /**
       * 对象所在位置的地理坐标。
       *
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b10 | 百度地图 v3.0：LabelOptions}
       */
      position?: Point

      /**
       * 是否允许通过地图的 clearOverlays 方法批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b10 | 百度地图 v3.0：LabelOptions}
       */
      enableMassClear?: boolean
    }

    /**
     * 以中心坐标和米制半径定义的圆形覆盖物的配置选项。
     *
     * @see {@link BMap.Circle}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17 | 百度地图 v3.0：CircleOptions}
     */
    export interface CircleOptions {
      /**
       * 线条或边框颜色，支持 CSS 颜色表示法。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17 | 百度地图 v3.0：CircleOptions}
       */
      strokeColor?: string

      /**
       * 填充颜色，支持 CSS 颜色表示法。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17 | 百度地图 v3.0：CircleOptions}
       */
      fillColor?: string

      /**
       * 线条或边框宽度，单位为像素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17 | 百度地图 v3.0：CircleOptions}
       */
      strokeWeight?: number

      /**
       * 线条或边框的不透明度，取值为 0 至 1。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17 | 百度地图 v3.0：CircleOptions}
       */
      strokeOpacity?: number

      /**
       * 填充不透明度，取值为 0 至 1。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17 | 百度地图 v3.0：CircleOptions}
       */
      fillOpacity?: number

      /**
       * 线条或边框样式，通常使用 solid 或 dashed。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17 | 百度地图 v3.0：CircleOptions}
       */
      strokeStyle?: string

      /**
       * 是否允许通过地图的 clearOverlays 方法批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17 | 百度地图 v3.0：CircleOptions}
       */
      enableMassClear?: boolean

      /**
       * 是否允许编辑覆盖物的几何形状。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17 | 百度地图 v3.0：CircleOptions}
       */
      enableEditing?: boolean

      /**
       * 是否响应点击事件。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17 | 百度地图 v3.0：CircleOptions}
       */
      enableClicking?: boolean
    }

    /**
     * 可响应鼠标交互的地图热区。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.HotspotOptions}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b24 | 百度地图 v3.0：Hotspot}
     */
    export class Hotspot {
      /**
       * 创建可响应鼠标交互的地图热区实例。
       *
       * @param position 目标位置的地理坐标。
       * @param opts Hotspot 的配置选项。
       * @see {@link BMap.Point}
       * @see {@link BMap.HotspotOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b24 | 百度地图 v3.0：Hotspot}
       */
      constructor(position: Point, opts?: HotspotOptions)

      /**
       * 设置对象的地理坐标。
       *
       * @param position 目标位置的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b24 | 百度地图 v3.0：Hotspot}
       */
      setPosition(position: Point): void

      /**
       * 获取对象的地理坐标。
       *
       * @returns 对象的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b24 | 百度地图 v3.0：Hotspot}
       */
      getPosition(): Point

      /**
       * 设置提示文字。
       *
       * @param text 需要展示的文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b24 | 百度地图 v3.0：Hotspot}
       */
      setText(text: string): void

      /**
       * 获取提示文字。
       *
       * @returns 提示文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b24 | 百度地图 v3.0：Hotspot}
       */
      getText(): string

      /**
       * 设置热区关联的自定义业务数据。
       *
       * @param data 需要保存的自定义业务数据。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b24 | 百度地图 v3.0：Hotspot}
       */
      setUserData(data: unknown): void

      /**
       * 获取热区关联的自定义业务数据。
       *
       * @returns 热区关联的自定义业务数据。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b24 | 百度地图 v3.0：Hotspot}
       */
      getUserData(): unknown
    }

    /**
     * 通过 SVG 路径或预设形状定义的矢量符号。
     *
     * @see {@link BMap.SymbolShapeType}
     * @see {@link BMap.SymbolOptions}
     * @see {@link BMap.Size}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b26 | 百度地图 v3.0：Symbol}
     */
    export class Symbol {
      /**
       * 创建通过 SVG 路径或预设形状定义的矢量符号实例。
       *
       * @param path 按顺序排列的路径坐标，或矢量符号的 SVG 路径及预设形状。
       * @param opts Symbol 的配置选项。
       * @see {@link BMap.SymbolShapeType}
       * @see {@link BMap.SymbolOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b26 | 百度地图 v3.0：Symbol}
       */
      constructor(path: string | SymbolShapeType, opts?: SymbolOptions)

      /**
       * 设置矢量符号的 SVG 路径或预设形状。
       *
       * @param path 按顺序排列的路径坐标，或矢量符号的 SVG 路径及预设形状。
       * @see {@link BMap.SymbolShapeType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b26 | 百度地图 v3.0：Symbol}
       */
      setPath(path: string | SymbolShapeType): void

      /**
       * 设置定位锚点。
       *
       * @param anchor 定位锚点或停靠位置。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b26 | 百度地图 v3.0：Symbol}
       */
      setAnchor(anchor: Size): void

      /**
       * 设置旋转角度，单位为度。
       *
       * @param rotation 旋转角度，单位为度。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b26 | 百度地图 v3.0：Symbol}
       */
      setRotation(rotation: number): void

      /**
       * 设置矢量符号的缩放比例。
       *
       * @param scale 矢量符号的缩放比例。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b26 | 百度地图 v3.0：Symbol}
       */
      setScale(scale: number): void

      /**
       * 设置线条或边框宽度，单位为像素。
       *
       * @param strokeWeight 线条宽度，单位为像素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b26 | 百度地图 v3.0：Symbol}
       */
      setStrokeWeight(strokeWeight: number): void

      /**
       * 设置线条或边框颜色。
       *
       * @param color 符合 CSS 颜色规范的颜色值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b26 | 百度地图 v3.0：Symbol}
       */
      setStrokeColor(color: string): void

      /**
       * 设置线条或边框不透明度，范围为 0 至 1。
       *
       * @param opacity 不透明度，取值为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b26 | 百度地图 v3.0：Symbol}
       */
      setStrokeOpacity(opacity: number): void

      /**
       * 设置填充不透明度，范围为 0 至 1。
       *
       * @param opacity 不透明度，取值为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b26 | 百度地图 v3.0：Symbol}
       */
      setFillOpacity(opacity: number): void

      /**
       * 设置填充颜色。
       *
       * @param color 符合 CSS 颜色规范的颜色值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b26 | 百度地图 v3.0：Symbol}
       */
      setFillColor(color: string): void
    }

    /**
     * 由有序地理坐标组成的折线覆盖物。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
     */
    export interface Polyline extends Overlay {}

    /**
     * 由有序地理坐标组成的折线覆盖物。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.PolylineOptions}
     * @see {@link BMap.Bounds}
     * @see {@link BMap.Map}
     * @see {@link MapEvent}
     * @see {@link MapPixelEvent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
     */
    export class Polyline {
      /**
       * 创建由有序地理坐标组成的折线覆盖物实例。
       *
       * @param points 需要展示或转换的地理坐标点集合。
       * @param opts Polyline 的配置选项。
       * @see {@link BMap.Point}
       * @see {@link BMap.PolylineOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      constructor(points: Point[], opts?: PolylineOptions)

      /**
       * 设置构成覆盖物的路径。
       *
       * @param path 按顺序排列的路径坐标，或矢量符号的 SVG 路径及预设形状。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      setPath(path: Point[]): void

      /**
       * 获取构成覆盖物的路径。
       *
       * @returns 构成覆盖物的路径。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      getPath(): Point[]

      /**
       * 设置线条或边框颜色。
       *
       * @param color 符合 CSS 颜色规范的颜色值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      setStrokeColor(color: string): void

      /**
       * 获取线条或边框颜色。
       *
       * @returns 线条或边框颜色。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      getStrokeColor(): string

      /**
       * 设置填充颜色。
       *
       * 官网 Polyline 方法表未列出填充控制；runtime 继承通用矢量覆盖物实现并提供此方法。
       *
       * @param color 符合 CSS 颜色规范的颜色值。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      setFillColor(color: string): void

      /**
       * 获取填充颜色。
       *
       * 官网 Polyline 方法表未列出填充控制；runtime 继承通用矢量覆盖物实现并提供此方法。
       *
       * @returns 填充颜色。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      getFillColor(): string

      /**
       * 设置线条或边框不透明度，范围为 0 至 1。
       *
       * @param opacity 不透明度，取值为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      setStrokeOpacity(opacity: number): void

      /**
       * 获取线条或边框不透明度，范围为 0 至 1。
       *
       * @returns 线条或边框不透明度，范围为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      getStrokeOpacity(): number

      /**
       * 设置填充不透明度，范围为 0 至 1。
       *
       * 官网 Polyline 方法表未列出填充控制；runtime 继承通用矢量覆盖物实现并提供此方法。
       *
       * @param opacity 不透明度，取值为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      setFillOpacity(opacity: number): void

      /**
       * 获取填充不透明度，范围为 0 至 1。
       *
       * 官网 Polyline 方法表未列出填充控制；runtime 继承通用矢量覆盖物实现并提供此方法。
       *
       * @returns 填充不透明度，范围为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      getFillOpacity(): number

      /**
       * 设置线条或边框宽度，单位为像素。
       *
       * @param weight 线条或边框宽度，单位为像素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      setStrokeWeight(weight: number): void

      /**
       * 获取线条或边框宽度，单位为像素。
       *
       * @returns 线条或边框宽度，单位为像素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      getStrokeWeight(): number

      /**
       * 设置线条或边框样式。
       *
       * @param style 线条样式或地图样式配置。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      setStrokeStyle(style: string): void

      /**
       * 获取线条或边框样式。
       *
       * @returns 线条或边框样式。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      getStrokeStyle(): string

      /**
       * 获取对象覆盖的地理矩形范围。
       *
       * @returns 对象覆盖的地理矩形范围。
       * @see {@link BMap.Bounds}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      getBounds(): Bounds

      /**
       * 启用覆盖物几何编辑。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      enableEditing(): void

      /**
       * 禁用覆盖物几何编辑。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      disableEditing(): void

      /**
       * 启用通过 Map.clearOverlays 批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      enableMassClear(): void

      /**
       * 禁用通过 Map.clearOverlays 批量清除此覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      disableMassClear(): void

      /**
       * 更新路径中指定索引的地理坐标。
       *
       * @param index 目标成员的索引，从 0 开始。
       * @param point 需要处理的地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      setPositionAt(index: number, point: Point): void

      /**
       * 获取覆盖物所属的地图实例。
       *
       * 官网返回值只列出 Map；runtime 在覆盖物尚未添加到地图时返回 null。
       *
       * @returns 覆盖物所属的地图实例。
       * @see {@link BMap.Map}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getMap(): Map | null

      /**
       * 鼠标单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      onclick?: (event: MapEvent<Polyline>) => void

      /**
       * 鼠标双击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      ondblclick?: (event: MapPixelEvent<Polyline>) => void

      /**
       * 鼠标按下时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      onmousedown?: (event: MapPixelEvent<Polyline>) => void

      /**
       * 鼠标释放时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      onmouseup?: (event: MapPixelEvent<Polyline>) => void

      /**
       * 鼠标移出时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      onmouseout?: (event: MapPixelEvent<Polyline>) => void

      /**
       * 鼠标移入时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      onmouseover?: (event: MapPixelEvent<Polyline>) => void

      /**
       * 覆盖物被移除时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      onremove?: (event: MapEvent<Polyline>) => void

      /**
       * 覆盖物的几何形状更新时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11 | 百度地图 v3.0：Polyline}
       */
      onlineupdate?: (event: MapEvent<Polyline>) => void
    }

    /**
     * 在指定地理矩形范围内显示图片的地面叠加层。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
     */
    export interface GroundOverlay extends Overlay {}

    /**
     * 在指定地理矩形范围内显示图片的地面叠加层。
     *
     * @see {@link BMap.Bounds}
     * @see {@link BMap.GroundOverlayOptions}
     * @see {@link MapEvent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
     */
    export class GroundOverlay {
      /**
       * 创建在指定地理矩形范围内显示图片的地面叠加层实例。
       *
       * @param bounds 目标地理矩形范围。
       * @param opts GroundOverlay 的配置选项。
       * @see {@link BMap.Bounds}
       * @see {@link BMap.GroundOverlayOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       */
      constructor(bounds: Bounds, opts?: GroundOverlayOptions)

      /**
       * 设置对象覆盖的地理矩形范围。
       *
       * @param bounds 目标地理矩形范围。
       * @see {@link BMap.Bounds}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       */
      setBounds(bounds: Bounds): void

      /**
       * 获取对象覆盖的地理矩形范围。
       *
       * @returns 对象覆盖的地理矩形范围。
       * @see {@link BMap.Bounds}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       */
      getBounds(): Bounds

      /**
       * 设置图层不透明度，范围为 0 至 1。
       *
       * @param opacity 不透明度，取值为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       */
      setOpacity(opacity: number): void

      /**
       * 获取图层不透明度，范围为 0 至 1。
       *
       * @returns 图层不透明度，范围为 0 至 1。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       */
      getOpacity(): number

      /**
       * 设置地面叠加层图片地址。
       *
       * @param url 图片资源的地址。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       */
      setImageURL(url: string): void

      /**
       * 获取地面叠加层图片地址。
       *
       * @returns 地面叠加层图片地址。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       */
      getImageURL(): string

      /**
       * 设置地面叠加层可见的最小缩放级别。
       *
       * @param level 地图缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       */
      setDisplayOnMinLevel(level: number): void

      /**
       * 获取地面叠加层可见的最小缩放级别。
       *
       * @returns 地面叠加层可见的最小缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       */
      getDisplayOnMinLevel(): number

      /**
       * 设置地面叠加层可见的最大缩放级别。
       *
       * 官网方法表误写为 setDispalyOnMaxLevel；runtime 实际导出 setDisplayOnMaxLevel。
       *
       * @param level 地图缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      setDisplayOnMaxLevel(level: number): void

      /**
       * 获取地面叠加层可见的最大缩放级别。
       *
       * 官网方法表误写为 getDispalyOnMaxLevel；runtime 实际导出 getDisplayOnMaxLevel。
       *
       * @returns 地面叠加层可见的最大缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getDisplayOnMaxLevel(): number

      /**
       * 鼠标单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       */
      onclick?: (event: MapEvent<GroundOverlay>) => void

      /**
       * 鼠标双击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18 | 百度地图 v3.0：GroundOverlay}
       */
      ondblclick?: (event: MapEvent<GroundOverlay>) => void
      /**
       * 获取覆盖物所属的地图。官网未在此类型列出该方法，runtime 提供此方法且在未添加时返回 null。
       *
       * @returns 所属地图；尚未添加时为 null。
       * @see {@link BMap.Map}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getMap(): Map | null
    }

    /**
     * 可响应鼠标交互的地图热区的配置选项。
     *
     * @see {@link BMap.Hotspot}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b25 | 百度地图 v3.0：HotspotOptions}
     */
    export interface HotspotOptions {
      /**
       * 热区的提示文字。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b25 | 百度地图 v3.0：HotspotOptions}
       */
      text?: string

      /**
       * 热区相对中心点向上、右、下、左的扩展距离，单位为像素，默认均为 5。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b25 | 百度地图 v3.0：HotspotOptions}
       */
      offsets?: [top: number, right: number, bottom: number, left: number]

      /**
       * 附加到热区的自定义业务数据。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b25 | 百度地图 v3.0：HotspotOptions}
       */
      userData?: unknown

      /**
       * 允许显示的最小缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b25 | 百度地图 v3.0：HotspotOptions}
       */
      minZoom?: number

      /**
       * 允许显示的最大缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b25 | 百度地图 v3.0：HotspotOptions}
       */
      maxZoom?: number
    }

    /**
     * 用于批量绘制大量地理坐标点的海量点覆盖物的配置选项。
     *
     * 与旧版单数名称 {@link BMap.PointCollectionOption} 结构兼容。
     *
     * @see {@link BMap.PointCollection}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b21 | 百度地图 v3.0：PointCollectionOptions}
     */
    export interface PointCollectionOptions extends PointCollectionOption {}

    /**
     * 支持 Canvas 2D 或 WebGL 绘制的自定义覆盖物。
     *
     * 绘制回调中可通过 this.canvas 获取画布。
     *
     * @see {@link BMap.CanvasLayerOptions}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b28 | 百度地图 v3.0：CanvasLayer}
     */
    export class CanvasLayer extends Overlay {
      /**
       * 创建支持 Canvas 2D 或 WebGL 绘制的自定义覆盖物实例。
       *
       * @param opts CanvasLayer 的配置选项。
       * @see {@link BMap.CanvasLayerOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b28 | 百度地图 v3.0：CanvasLayer}
       */
      constructor(opts: CanvasLayerOptions)

      /**
       * 当前自定义绘制层的画布元素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b28 | 百度地图 v3.0：CanvasLayer}
       */
      canvas: HTMLCanvasElement
    }

    /**
     * 支持 Canvas 2D 或 WebGL 绘制的自定义覆盖物的配置选项。
     *
     * @see {@link BMap.MapPanes}
     * @see {@link BMap.CanvasLayer}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b29 | 百度地图 v3.0：CanvasLayerOptions}
     */
    export interface CanvasLayerOptions {
      /**
       * 显示的层叠顺序，较大值位于较小值上方。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b29 | 百度地图 v3.0：CanvasLayerOptions}
       */
      zIndex?: number

      /**
       * 承载画布的覆盖物容器名称。
       *
       * @see {@link BMap.MapPanes}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b29 | 百度地图 v3.0：CanvasLayerOptions}
       */
      paneName?: keyof MapPanes

      /**
       * 地图视野变化时执行自定义绘制，this 指向当前画布覆盖物。
       *
       * @see {@link BMap.CanvasLayer}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b29 | 百度地图 v3.0：CanvasLayerOptions}
       */
      update?: (this: CanvasLayer) => void
    }
  }
}
