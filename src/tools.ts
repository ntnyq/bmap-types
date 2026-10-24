export {}

declare global {
  namespace BMap {
    /**
     * 控制路况信息面板显示的兼容工具。
     *
     * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此兼容声明，当前 v3 核心 runtime 未导出对应工具。
     * 以下签名沿用历史声明，尚未通过对应工具脚本验证；使用前需确认所加载脚本提供该工具。
     *
     * @see {@link BMap.Size}
     */
    export class TrafficControl {
      /**
       * 创建控制路况信息面板显示的兼容工具实例。
       */
      constructor()

      /**
       * 设置路况面板相对于参考位置的偏移量。
       *
       * @param offset 相对于参考位置的偏移量。
       * @see {@link BMap.Size}
       */
      setPanelOffset(offset: Size): void

      /**
       * 显示当前对象。
       */
      show(): void

      /**
       * 隐藏当前对象。
       */
      hide(): void
    }

    /**
     * 通过地图点击添加标注的兼容工具。
     *
     * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此兼容声明，当前 v3 核心 runtime 未导出对应工具。
     * 以下签名沿用历史声明，尚未通过对应工具脚本验证；使用前需确认所加载脚本提供该工具。
     *
     * @see {@link BMap.Map}
     * @see {@link BMap.PushpinToolOptions}
     * @see {@link BMap.Icon}
     * @see {@link BMap.Marker}
     */
    export class PushpinTool {
      /**
       * 创建通过地图点击添加标注的兼容工具实例。
       *
       * @param map 关联的地图实例。
       * @param opts PushpinTool 的配置选项。
       * @see {@link BMap.Map}
       * @see {@link BMap.PushpinToolOptions}
       */
      constructor(map: Map, opts?: PushpinToolOptions)

      /**
       * 启用当前地图交互工具。
       *
       * @returns 工具是否成功开启。
       */
      open(): boolean

      /**
       * 关闭当前地图交互工具。
       *
       * @returns 工具是否成功关闭。
       */
      close(): boolean

      /**
       * 设置标注图像。
       *
       * @param icon 点标注使用的图像对象。
       * @returns 标注图像。
       * @see {@link BMap.Icon}
       */
      setIcon(icon: Icon): Icon

      /**
       * 获取标注图像。
       *
       * @returns 标注图像。
       * @see {@link BMap.Icon}
       */
      getIcon(): Icon

      /**
       * 设置工具使用的 CSS 鼠标指针样式。
       *
       * @param cursor 符合 CSS cursor 规范的鼠标指针样式。
       * @returns 工具使用的 CSS 鼠标指针样式。
       */
      setCursor(cursor: string): string

      /**
       * 获取工具使用的 CSS 鼠标指针样式。
       *
       * @returns 工具使用的 CSS 鼠标指针样式。
       */
      getCursor(): string

      /**
       * 返回当前服务或工具的类型说明。
       *
       * @returns 当前对象的类型说明文字。
       */
      toString(): string

      /**
       * 标注工具完成添加标注时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.Marker}
       */
      onmarkend: (event: {
        /**
         * 事件名称。
         */
        type: string
        /**
         * 触发事件的对象；对应工具脚本尚未验证，使用前需自行收窄类型。
         */
        target: unknown
        /**
         * 交互工具创建的点标注。
         *
         * @see {@link BMap.Marker}
         */
        marker: Marker
      }) => void
    }

    /**
     * 通过地图点击添加标注的兼容工具的配置选项。
     *
     * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此兼容声明，当前 v3 核心 runtime 未导出对应工具。
     * 以下签名沿用历史声明，尚未通过对应工具脚本验证；使用前需确认所加载脚本提供该工具。
     *
     * @see {@link BMap.Icon}
     * @see {@link BMap.PushpinTool}
     */
    export interface PushpinToolOptions {
      /**
       * 点标注使用的图像对象。
       *
       * @see {@link BMap.Icon}
       */
      icon?: Icon

      /**
       * 工具启用时使用的 CSS 鼠标指针样式。
       */
      cursor?: string

      /**
       * 跟随鼠标显示的操作提示文字。
       */
      followText?: string
    }

    /**
     * 在地图上交互绘制路径并测量距离的兼容工具。
     *
     * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此兼容声明，当前 v3 核心 runtime 未导出对应工具。
     * 以下签名沿用历史声明，尚未通过对应工具脚本验证；使用前需确认所加载脚本提供该工具。
     *
     * @see {@link BMap.Map}
     * @see {@link BMap.Point}
     * @see {@link BMap.Polyline}
     */
    export class DistanceTool {
      /**
       * 创建在地图上交互绘制路径并测量距离的兼容工具实例。
       *
       * @param map 关联的地图实例。
       * @see {@link BMap.Map}
       */
      constructor(map: Map)

      /**
       * 启用当前地图交互工具。
       *
       * @returns 工具是否成功开启。
       */
      open(): boolean

      /**
       * 关闭当前地图交互工具。
       */
      close(): void

      /**
       * 返回当前服务或工具的类型说明。
       *
       * @returns 当前对象的类型说明文字。
       */
      toString(): string

      /**
       * 交互工具完成一次绘制时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.Point}
       * @see {@link BMap.Polyline}
       */
      ondrawend: (event: {
        /**
         * 事件名称。
         */
        type: string

        /**
         * 触发事件的对象；对应工具脚本尚未验证，使用前需自行收窄类型。
         */
        target: unknown

        /**
         * 按顺序排列的地理坐标点集合。
         *
         * @see {@link BMap.Point}
         */
        points: Point[]

        /**
         * 测距过程中生成的折线覆盖物集合。
         *
         * @see {@link BMap.Polyline}
         */
        polylines: Polyline[]

        /**
         * 距离或里程，单位为米。
         */
        distance: number
      }) => void
    }

    /**
     * 通过拖拽矩形区域缩放地图的兼容工具。
     *
     * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此兼容声明，当前 v3 核心 runtime 未导出对应工具。
     * 以下签名沿用历史声明，尚未通过对应工具脚本验证；使用前需确认所加载脚本提供该工具。
     *
     * @see {@link BMap.Map}
     * @see {@link BMap.DragAndZoomToolOptions}
     * @see {@link BMap.Bounds}
     */
    export class DragAndZoomTool {
      /**
       * 创建通过拖拽矩形区域缩放地图的兼容工具实例。
       *
       * @param map 关联的地图实例。
       * @param opts DragAndZoomTool 的配置选项。
       * @see {@link BMap.Map}
       * @see {@link BMap.DragAndZoomToolOptions}
       */
      constructor(map: Map, opts?: DragAndZoomToolOptions)

      /**
       * 启用当前地图交互工具。
       *
       * @returns 工具是否成功开启。
       */
      open(): boolean

      /**
       * 关闭当前地图交互工具。
       */
      close(): void

      /**
       * 返回当前服务或工具的类型说明。
       *
       * @returns 当前对象的类型说明文字。
       */
      toString(): string

      /**
       * 交互工具完成一次绘制时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.Bounds}
       */
      ondrawend: (event: {
        /**
         * 事件名称。
         */
        type: string

        /**
         * 触发事件的对象；对应工具脚本尚未验证，使用前需自行收窄类型。
         */
        target: unknown

        /**
         * 对应的地理矩形范围。
         *
         * @see {@link BMap.Bounds}
         */
        bounds: Bounds[]
      }) => void
    }

    /**
     * 通过拖拽矩形区域缩放地图的兼容工具的配置选项。
     *
     * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此兼容声明，当前 v3 核心 runtime 未导出对应工具。
     * 以下签名沿用历史声明，尚未通过对应工具脚本验证；使用前需确认所加载脚本提供该工具。
     *
     * @see {@link BMap.ZoomType}
     * @see {@link BMap.DragAndZoomTool}
     */
    export interface DragAndZoomToolOptions {
      /**
       * 拉框操作使用的放大或缩小模式。
       *
       * @see {@link BMap.ZoomType}
       */
      zoomType?: ZoomType

      /**
       * 完成一次拉框缩放后是否自动关闭工具。
       */
      autoClose?: boolean

      /**
       * 跟随鼠标显示的操作提示文字。
       */
      followText?: string
    }

    /**
     * 拉框缩放工具的放大或缩小模式类型。
     *
     * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此兼容声明，当前 v3 核心 runtime 未导出对应工具。
     * 以下签名沿用历史声明，尚未通过对应工具脚本验证；使用前需确认所加载脚本提供该工具。
     *
     * @see {@link BMAP_ZOOM_IN}
     * @see {@link BMAP_ZOOM_OUT}
     */
    export type ZoomType = number
  }
}
