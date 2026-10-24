import type { EventEmitter, MapEvent, MapPixelEvent } from './events'

declare global {
  namespace BMap {
    /**
     * 地图实例，负责视野控制、图层管理和地图交互。
     *
     * 创建后需调用 {@link BMap.Map.centerAndZoom} 完成地图初始化。
     *
     * @see {@link BMap.MapOptions}
     * @see {@link BMap.MapStyleV2}
     * @see {@link BMap.Panorama}
     * @see {@link BMap.Bounds}
     * @see {@link BMap.Point}
     * @see {@link BMap.MapType}
     * @see {@link BMap.Size}
     * @see {@link BMap.ViewportOptions}
     * @see {@link BMap.Viewport}
     * @see {@link BMap.PanOptions}
     * @see {@link BMap.Hotspot}
     * @see {@link BMap.Control}
     * @see {@link BMap.ContextMenu}
     * @see {@link BMap.Overlay}
     * @see {@link BMap.InfoWindow}
     * @see {@link BMap.Pixel}
     * @see {@link BMap.MapPanes}
     * @see {@link BMap.TileLayer}
     * @see {@link MapPixelEvent}
     * @see {@link MapEvent}
     * @see {@link BMap.HotspotOptions}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
     */
    export class Map {
      /**
       * 创建地图实例实例。
       *
       * @param container 地图或全景的容器元素，或该元素的标识。
       * @param opts Map 的配置选项。
       * @see {@link BMap.MapOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      constructor(container: string | HTMLElement, opts?: MapOptions)

      /**
       * 启用拖拽交互。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      enableDragging(): void

      /**
       * 禁用拖拽交互。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      disableDragging(): void

      /**
       * 启用鼠标滚轮缩放。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      enableScrollWheelZoom(): void

      /**
       * 禁用鼠标滚轮缩放。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      disableScrollWheelZoom(): void

      /**
       * 启用双击缩放。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      enableDoubleClickZoom(): void

      /**
       * 禁用双击缩放。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      disableDoubleClickZoom(): void

      /**
       * 启用键盘平移与缩放操作。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      enableKeyboard(): void

      /**
       * 禁用键盘平移与缩放操作。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      disableKeyboard(): void

      /**
       * 启用惯性拖拽。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      enableInertialDragging(): void

      /**
       * 禁用惯性拖拽。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      disableInertialDragging(): void

      /**
       * 启用连续缩放动画。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      enableContinuousZoom(): void

      /**
       * 禁用连续缩放动画。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      disableContinuousZoom(): void

      /**
       * 启用双指缩放。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      enablePinchToZoom(): void

      /**
       * 禁用双指缩放。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      disablePinchToZoom(): void

      /**
       * 启用自动适应地图容器尺寸变化。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      enableAutoResize(): void

      /**
       * 禁用自动适应地图容器尺寸变化。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      disableAutoResize(): void

      /**
       * 设置地图默认的 CSS 鼠标指针样式。
       *
       * @param cursor 符合 CSS cursor 规范的鼠标指针样式。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      setDefaultCursor(cursor: string): void

      /**
       * 获取地图默认的 CSS 鼠标指针样式。
       *
       * @returns 地图默认的 CSS 鼠标指针样式。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getDefaultCursor(): string

      /**
       * 设置拖拽时的 CSS 鼠标指针样式。
       *
       * @param cursor 符合 CSS cursor 规范的鼠标指针样式。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      setDraggingCursor(cursor: string): void

      /**
       * 获取拖拽时的 CSS 鼠标指针样式。
       *
       * @returns 拖拽时的 CSS 鼠标指针样式。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getDraggingCursor(): string

      /**
       * 设置最小缩放级别。
       *
       * @param zoom 地图或全景的缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      setMinZoom(zoom: number): void

      /**
       * 设置最大缩放级别。
       *
       * @param zoom 地图或全景的缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      setMaxZoom(zoom: number): void

      /**
       * 设置地图展示样式。
       *
       * 官网方法签名未列出参数，runtime 实际读取传入的地图样式对象。
       *
       * @param mapStyle 地图要素与风格配置。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      setMapStyle(mapStyle: MapStyle): void

      /**
       * 设置个性化地图 V2 样式。
       *
       * @param style 线条样式或地图样式配置。
       * @see {@link BMap.MapStyleV2}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      setMapStyleV2(style: MapStyleV2): void

      /**
       * 设置与地图绑定的全景实例。
       *
       * @param pano 需要绑定到地图的全景实例。
       * @see {@link BMap.Panorama}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      setPanorama(pano: Panorama): void

      /**
       * 关闭地图中的三维建筑显示。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      disable3DBuilding(): void

      /**
       * 获取对象覆盖的地理矩形范围。
       *
       * @returns 对象覆盖的地理矩形范围。
       * @see {@link BMap.Bounds}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getBounds(): Bounds

      /**
       * 获取中心地理坐标。
       *
       * @returns 中心地理坐标。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getCenter(): Point

      /**
       * 获取两点、路段或方案的距离。
       *
       * @param start 起点的关键字、地理坐标或兴趣点信息。
       * @param end 终点的关键字、地理坐标或兴趣点信息。
       * @returns 两点之间的距离，单位为米。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getDistance(start: Point, end: Point): number

      /**
       * 获取地图底图类型。
       *
       * @returns 地图底图类型。
       * @see {@link BMap.MapType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getMapType(): MapType

      /**
       * 获取显示尺寸。
       *
       * @returns 显示尺寸。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getSize(): Size

      /**
       * 获取包含指定坐标的最佳地图视野。
       *
       * 官网参数表只列出坐标数组；runtime 同时接受 Bounds 地理矩形。
       *
       * @param view 用于确定视野的地理坐标集合或视野配置。
       * @param viewportOptions 计算和应用地图视野时的附加配置。
       * @returns 包含指定坐标的最佳地图视野。
       * @see {@link BMap.Point}
       * @see {@link BMap.ViewportOptions}
       * @see {@link BMap.Viewport}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getViewport(
        view: Point[] | Bounds,
        viewportOptions?: ViewportOptions,
      ): Viewport

      /**
       * 获取缩放级别。
       *
       * @returns 缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getZoom(): number

      /**
       * 获取与地图绑定的全景实例。
       *
       * @returns 与地图绑定的全景实例。
       * @see {@link BMap.Panorama}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getPanorama(): Panorama

      /**
       * 初始化地图的中心位置和缩放级别；城市名称可自动适配级别。
       *
       * @param center 目标中心点、检索位置或城市名称。
       * @param zoom 地图或全景的缩放级别。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      centerAndZoom(center: Point, zoom: number): void

      /**
       * 初始化地图的中心位置和缩放级别；城市名称可自动适配级别。
       *
       * @param city 检索所属的城市名称。
       * @param zoom 地图或全景的缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      centerAndZoom(city: string, zoom?: number): void

      /**
       * 检查地图容器尺寸变化并更新视图。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      checkResize(): void

      /**
       * 将地图中心平移到指定地理坐标。
       *
       * @param center 目标中心点、检索位置或城市名称。
       * @param opts Map 的配置选项。
       * @see {@link BMap.Point}
       * @see {@link BMap.PanOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      panTo(center: Point, opts?: PanOptions): void

      /**
       * 按指定的水平和垂直像素偏移量平移地图。
       *
       * @param x 水平方向的坐标或移动像素数。
       * @param y 垂直方向的坐标或移动像素数。
       * @param opts Map 的配置选项。
       * @see {@link BMap.PanOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      panBy(x: number, y: number, opts?: PanOptions): void

      /**
       * 恢复地图初始化时的中心位置和缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      reset(): void

      /**
       * 设置中心地理坐标。
       *
       * @param center 目标中心点、检索位置或城市名称。
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      setCenter(center: Point | string): void

      /**
       * 设置地图所在的城市。
       *
       * @param city 检索所属的城市名称。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      setCurrentCity(city: string): void

      /**
       * 设置地图底图类型。
       *
       * @param mapType 需要使用的地图类型。
       * @see {@link BMap.MapType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      setMapType(mapType: MapType): void

      /**
       * 设置包含指定坐标的最佳地图视野。
       *
       * 官网参数表列出坐标数组和 Viewport；runtime 同时接受 Bounds 地理矩形。
       *
       * @param view 用于确定视野的地理坐标集合或视野配置。
       * @param viewportOptions 计算和应用地图视野时的附加配置。
       * @see {@link BMap.ViewportOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      setViewport(
        view: Point[] | Bounds | Viewport,
        viewportOptions?: ViewportOptions,
      ): void

      /**
       * 设置缩放级别。
       *
       * @param zoom 地图或全景的缩放级别。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      setZoom(zoom: number): void

      /**
       * 判断当前设备与地图配置是否已启用高分辨率底图。
       *
       * @returns 当前是否已启用高分辨率底图。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      highResolutionEnabled(): boolean

      /**
       * 将地图放大一个缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      zoomIn(): void

      /**
       * 将地图缩小一个缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      zoomOut(): void

      /**
       * 添加指定的地图热区。
       *
       * @param hotspot 需要操作的地图热区。
       * @see {@link BMap.Hotspot}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      addHotspot(hotspot: Hotspot): void

      /**
       * 移除指定的地图热区。
       *
       * @param hotspot 需要操作的地图热区。
       * @see {@link BMap.Hotspot}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      removeHotspot(hotspot: Hotspot): void

      /**
       * 移除地图上的全部热区。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      clearHotspots(): void

      /**
       * 添加指定的地图控件。
       *
       * @param control 需要操作的地图控件。
       * @see {@link BMap.Control}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      addControl(control: Control): void

      /**
       * 移除指定的地图控件。
       *
       * @param control 需要操作的地图控件。
       * @see {@link BMap.Control}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      removeControl(control: Control): void

      /**
       * 获取地图容器元素。
       *
       * @returns 地图容器元素。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getContainer(): HTMLElement

      /**
       * 添加指定的右键菜单。
       *
       * @param menu 需要操作的右键菜单。
       * @see {@link BMap.ContextMenu}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      addContextMenu(menu: ContextMenu): void

      /**
       * 移除指定的右键菜单。
       *
       * @param menu 需要操作的右键菜单。
       * @see {@link BMap.ContextMenu}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      removeContextMenu(menu: ContextMenu): void

      /**
       * 添加指定的覆盖物。
       *
       * @param overlay 需要操作的覆盖物。
       * @see {@link BMap.Overlay}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      addOverlay(overlay: Overlay): void

      /**
       * 移除指定的覆盖物。
       *
       * @param overlay 需要操作的覆盖物。
       * @see {@link BMap.Overlay}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      removeOverlay(overlay: Overlay): void

      /**
       * 批量移除允许清除的地图覆盖物。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      clearOverlays(): void

      /**
       * 在地图或当前标注位置打开信息窗口。
       *
       * @param infoWnd 需要打开的信息窗口实例。
       * @param point 需要处理的地理坐标。
       * @see {@link BMap.InfoWindow}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      openInfoWindow(infoWnd: InfoWindow, point: Point): void

      /**
       * 关闭当前打开的信息窗口。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      closeInfoWindow(): void

      /**
       * 将地理坐标转换为覆盖物容器内的像素坐标。
       *
       * @param point 需要处理的地理坐标。
       * @returns 地理坐标转换为覆盖物容器内的像素坐标。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      pointToOverlayPixel(point: Point): Pixel

      /**
       * 将覆盖物容器内的像素坐标转换为地理坐标。
       *
       * @param pixel 需要转换的像素坐标。
       * @returns 覆盖物容器内的像素坐标转换为地理坐标。
       * @see {@link BMap.Pixel}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      overlayPixelToPoint(pixel: Pixel): Point

      /**
       * 获取当前打开的信息窗口。
       *
       * 没有打开的信息窗口时返回 null。
       *
       * @returns 当前打开的信息窗口；没有打开的窗口时返回 null。
       * @see {@link BMap.InfoWindow}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getInfoWindow(): InfoWindow | null

      /**
       * 获取地图上的覆盖物集合。
       *
       * @returns 地图上的覆盖物集合。
       * @see {@link BMap.Overlay}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getOverlays(): Overlay[]

      /**
       * 获取地图覆盖物的 DOM 容器集合。
       *
       * @returns 地图覆盖物的 DOM 容器集合。
       * @see {@link BMap.MapPanes}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      getPanes(): MapPanes

      /**
       * 添加指定的图块图层。
       *
       * @param tileLayer 需要操作的图块图层。
       * @see {@link BMap.TileLayer}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      addTileLayer(tileLayer: TileLayer): void

      /**
       * 移除指定的图块图层。
       *
       * @param tilelayer 需要移除的图块图层。
       * @see {@link BMap.TileLayer}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      removeTileLayer(tilelayer: TileLayer): void

      /**
       * 将地图容器内的像素坐标转换为地理坐标。
       *
       * @param pixel 需要转换的像素坐标。
       * @returns 地图容器内的像素坐标转换为地理坐标。
       * @see {@link BMap.Pixel}
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      pixelToPoint(pixel: Pixel): Point

      /**
       * 将地理坐标转换为地图容器内的像素坐标。
       *
       * @param point 需要处理的地理坐标。
       * @returns 地理坐标转换为地图容器内的像素坐标。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      pointToPixel(point: Point): Pixel

      /**
       * 鼠标单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       * @see {@link BMap.Overlay}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onclick?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        type: string

        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        target: Map

        /**
         * 对应位置的地理坐标。
         *
         * @see {@link BMap.Point}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        point: Point

        /**
         * 相对于地图容器左上角的像素坐标。
         *
         * @see {@link BMap.Pixel}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        pixel: Pixel

        /**
         * 鼠标事件关联的覆盖物。
         *
         * @see {@link BMap.Overlay}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        overlay: Overlay
      }) => void

      /**
       * 鼠标双击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      ondblclick?: (event: MapPixelEvent<Map>) => void

      /**
       * 鼠标右键单击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       * @see {@link BMap.Overlay}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onrightclick?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        type: string

        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        target: Map

        /**
         * 对应位置的地理坐标。
         *
         * @see {@link BMap.Point}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        point: Point

        /**
         * 相对于地图容器左上角的像素坐标。
         *
         * @see {@link BMap.Pixel}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        pixel: Pixel

        /**
         * 鼠标事件关联的覆盖物。
         *
         * @see {@link BMap.Overlay}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        overlay: Overlay
      }) => void

      /**
       * 鼠标右键双击时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       * @see {@link BMap.Overlay}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onrightdblclick?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        type: string

        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        target: Map

        /**
         * 对应位置的地理坐标。
         *
         * @see {@link BMap.Point}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        point: Point

        /**
         * 相对于地图容器左上角的像素坐标。
         *
         * @see {@link BMap.Pixel}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        pixel: Pixel

        /**
         * 鼠标事件关联的覆盖物。
         *
         * @see {@link BMap.Overlay}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        overlay: Overlay
      }) => void

      /**
       * 地图类型发生变化时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onmaptypechange?: (event: MapEvent<Map>) => void

      /**
       * 鼠标移动时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       * @see {@link BMap.Overlay}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onmousemove?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        type: string

        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        target: Map

        /**
         * 对应位置的地理坐标。
         *
         * @see {@link BMap.Point}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        point: Point

        /**
         * 相对于地图容器左上角的像素坐标。
         *
         * @see {@link BMap.Pixel}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        pixel: Pixel

        /**
         * 鼠标事件关联的覆盖物。
         *
         * @see {@link BMap.Overlay}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        overlay: Overlay
      }) => void

      /**
       * 鼠标移入时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onmouseover?: (event: MapEvent<Map>) => void

      /**
       * 鼠标移出时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onmouseout?: (event: MapEvent<Map>) => void

      /**
       * 地图开始移动时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onmovestart?: (event: MapEvent<Map>) => void

      /**
       * 地图移动过程中时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onmoving?: (event: MapEvent<Map>) => void

      /**
       * 地图移动结束时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onmoveend?: (event: MapEvent<Map>) => void

      /**
       * 地图开始缩放时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onzoomstart?: (event: MapEvent<Map>) => void

      /**
       * 地图缩放结束时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onzoomend?: (event: MapEvent<Map>) => void

      /**
       * 地图添加覆盖物时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onaddoverlay?: (event: MapEvent<Map>) => void

      /**
       * 地图添加控件时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onaddcontrol?: (event: MapEvent<Map>) => void

      /**
       * 地图移除控件时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onremovecontrol?: (event: MapEvent<Map>) => void

      /**
       * 地图移除覆盖物时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onremoveoverlay?: (event: MapEvent<Map>) => void

      /**
       * 地图批量清除覆盖物时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onclearoverlays?: (event: MapEvent<Map>) => void

      /**
       * 开始拖拽时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      ondragstart?: (event: MapPixelEvent<Map>) => void

      /**
       * 拖拽过程中时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      ondragging?: (event: MapPixelEvent<Map>) => void

      /**
       * 拖拽结束时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      ondragend?: (event: MapPixelEvent<Map>) => void

      /**
       * 地图添加图块图层时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onaddtilelayer?: (event: MapEvent<Map>) => void

      /**
       * 地图移除图块图层时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onremovetilelayer?: (event: MapEvent<Map>) => void

      /**
       * 地图初始化的位置和缩放级别确定时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.Point}
       * @see {@link BMap.Pixel}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onload?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        type: string

        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        target: Map

        /**
         * 对应位置的地理坐标。
         *
         * @see {@link BMap.Point}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        point: Point

        /**
         * 相对于地图容器左上角的像素坐标。
         *
         * @see {@link BMap.Pixel}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        pixel: Pixel

        /**
         * 地图或全景的缩放级别。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        zoom: number
      }) => void

      /**
       * 地图可视区域尺寸变化时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.Size}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onresize?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        type: string
        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        target: Map
        /**
         * 显示尺寸。
         *
         * @see {@link BMap.Size}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        size: Size
      }) => void

      /**
       * 鼠标点击热区时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.HotspotOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onhotspotclick?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        type: string

        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        target: Map

        /**
         * 发生交互的热区信息。
         *
         * @see {@link BMap.HotspotOptions}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        spots: HotspotOptions
      }) => void

      /**
       * 鼠标移入热区时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.HotspotOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onhotspotover?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        type: string

        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        target: Map

        /**
         * 发生交互的热区信息。
         *
         * @see {@link BMap.HotspotOptions}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        spots: HotspotOptions
      }) => void

      /**
       * 鼠标移出热区时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置或业务数据。
       * @see {@link BMap.HotspotOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onhotspotout?: (event: {
        /**
         * 事件名称。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        type: string

        /**
         * 触发事件的 SDK 对象。
         *
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        target: Map

        /**
         * 发生交互的热区信息。
         *
         * @see {@link BMap.HotspotOptions}
         * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
         */
        spots: HotspotOptions
      }) => void

      /**
       * 当前视野的地图图块加载完成时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      ontilesloaded?: (event: MapEvent<Map>) => void

      /**
       * 触摸开始时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      ontouchstart?: (event: MapPixelEvent<Map>) => void

      /**
       * 触摸移动时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      ontouchmove?: (event: MapPixelEvent<Map>) => void

      /**
       * 触摸结束时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      ontouchend?: (event: MapPixelEvent<Map>) => void

      /**
       * 长按地图时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
       */
      onlongpress?: (event: MapPixelEvent<Map>) => void
    }

    /**
     * 地图平移动画的配置选项。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b2 | 百度地图 v3.0：PanOptions}
     */
    export interface PanOptions {
      /**
       * 是否在平移时关闭过渡动画。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b2 | 百度地图 v3.0：PanOptions}
       */
      noAnimation?: boolean
    }

    /**
     * 地图实例的配置选项。
     *
     * @see {@link BMap.MapType}
     * @see {@link BMap.Map}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b1 | 百度地图 v3.0：MapOptions}
     */
    export interface MapOptions {
      /**
       * 允许显示的最小缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b1 | 百度地图 v3.0：MapOptions}
       */
      minZoom?: number

      /**
       * 允许显示的最大缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b1 | 百度地图 v3.0：MapOptions}
       */
      maxZoom?: number

      /**
       * 地图使用的底图类型。
       *
       * @see {@link BMap.MapType}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b1 | 百度地图 v3.0：MapOptions}
       */
      mapType?: MapType

      /**
       * 是否在受支持设备上使用高分辨率底图。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b1 | 百度地图 v3.0：MapOptions}
       */
      enableHighResolution?: boolean

      /**
       * 是否自动适应地图容器的尺寸变化。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b1 | 百度地图 v3.0：MapOptions}
       */
      enableAutoResize?: boolean

      /**
       * 是否启用底图兴趣点的点击交互。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b1 | 百度地图 v3.0：MapOptions}
       */
      enableMapClick?: boolean
    }

    /**
     * 由地图中心点和缩放级别组成的视野。
     *
     * @see {@link BMap.Point}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b3 | 百度地图 v3.0：Viewport}
     */
    export interface Viewport {
      /**
       * 地图视野、查询范围或城市的中心位置。
       *
       * @see {@link BMap.Point}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b3 | 百度地图 v3.0：Viewport}
       */
      center: Point

      /**
       * 地图或全景的缩放级别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b3 | 百度地图 v3.0：Viewport}
       */
      zoom: number
    }

    /**
     * 由地图中心点和缩放级别组成的视野的配置选项。
     *
     * @see {@link BMap.Viewport}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b4 | 百度地图 v3.0：ViewportOptions}
     */
    export interface ViewportOptions {
      /**
       * 调整视野时是否启用过渡动画。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b4 | 百度地图 v3.0：ViewportOptions}
       */
      enableAnimation?: boolean

      /**
       * 计算视野时预留的上、右、下、左边距，单位为像素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b4 | 百度地图 v3.0：ViewportOptions}
       */
      margins?: [top: number, right: number, bottom: number, left: number]

      /**
       * 在计算出的适配级别上追加的缩放偏移量。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b4 | 百度地图 v3.0：ViewportOptions}
       */
      zoomFactor?: number

      /**
       * 视野调整的延迟时间，单位为毫秒。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b4 | 百度地图 v3.0：ViewportOptions}
       */
      delay?: number
    }

    /**
     * 以字符串表示的地图 API 版本标识。
     *
     * 官网未说明与 SDK 版本字段的差异；本次核对的 v3 runtime 中 BMAP_API_VERSION 仍为字符串 2.0，而 BMap.version 为 3.0，因此不将此类型固定为某个版本字面量。
     *
     * @see {@link BMAP_API_VERSION}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b5 | 百度地图 v3.0：APIVersion}
     */
    export type APIVersion = string

    /**
     * 地图展示要素与预设底图风格。
     *
     * 官网没有标明字段的必填性；runtime 允许单独指定 features 或 style。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b6 | 百度地图 v3.0：MapStyle}
     * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
     */
    export interface MapStyle {
      /**
       * 需要展示的地图要素，如兴趣点、道路、水域、陆地和建筑。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b6 | 百度地图 v3.0：MapStyle}
       */
      features?: MapFeature[]

      /**
       * 预设的底图风格，如 normal、dark 或 light。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b6 | 百度地图 v3.0：MapStyle}
       */
      style?: MapStyleName

      /**
       * 自定义地图样式规则。官网 MapStyle 字段表未列出此字段，runtime 的 setMapStyle 会读取并应用它。
       *
       * @see {@link BMap.MapStyleItem}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      styleJson?: MapStyleItem[]
    }

    /**
     * 承载不同覆盖物的地图 DOM 容器集合。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b1 | 百度地图 v3.0：MapPanes}
     */
    export interface MapPanes {
      /**
       * 信息窗口所在的顶层容器。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b1 | 百度地图 v3.0：MapPanes}
       */
      floatPane?: HTMLElement

      /**
       * 用于接收标注鼠标事件的容器。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b1 | 百度地图 v3.0：MapPanes}
       */
      markerMouseTarget?: HTMLElement

      /**
       * 信息窗口阴影所在的容器。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b1 | 百度地图 v3.0：MapPanes}
       */
      floatShadow?: HTMLElement

      /**
       * 文字标注所在的容器。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b1 | 百度地图 v3.0：MapPanes}
       */
      labelPane?: HTMLElement

      /**
       * 点标注图标所在的容器。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b1 | 百度地图 v3.0：MapPanes}
       */
      markerPane?: HTMLElement

      /**
       * 点标注阴影所在的容器。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b1 | 百度地图 v3.0：MapPanes}
       */
      markerShadow?: HTMLElement

      /**
       * 地图底层覆盖物所在的容器。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b1 | 百度地图 v3.0：MapPanes}
       */
      mapPane?: HTMLElement

      /**
       * 自定义绘制层可使用的底层容器。官网 MapPanes 字段表未列出 vertexPane，runtime 的 getPanes 会返回此字段。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b1 | 百度地图 v3.0：MapPanes}
       */
      vertexPane?: HTMLElement
    }

    /**
     * 个性化地图 V2 的样式配置。
     *
     * @see {@link BMap.MapStyleItem}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b7 | 百度地图 v3.0：MapStyleV2}
     */
    export type MapStyleV2 =
      | {
          /**
           * 地图样式编辑器生成的规则集合。
           *
           * @see {@link BMap.MapStyleItem}
           */
          styleJson: MapStyleItem[]
          /**
           * 已发布的个性化样式标识。官网字段表未列出此字段，runtime 支持通过此标识加载样式。
           *
           * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
           */
          styleId?: string
        }
      | {
          /**
           * 已发布的个性化样式标识。官网字段表未列出此字段，runtime 支持通过此标识加载样式。
           *
           * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
           */
          styleId: string
          /**
           * 同时配置样式标识时可省略的样式规则，runtime 优先加载 styleId。
           *
           * @see {@link BMap.MapStyleItem}
           */
          styleJson?: MapStyleItem[]
        }

    /**
     * 个性化地图样式中的要素、元素及渲染规则。
     *
     * 官网仅将样式规则列为数组；此辅助结构按 runtime 读取的要素、元素及渲染规则字段细化。
     *
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b7 | 百度地图 v3.0：MapStyleV2}
     */
    export interface MapStyleItem {
      /**
       * 规则匹配的地图要素类别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b7 | 百度地图 v3.0：MapStyleV2}
       */
      featureType?: string

      /**
       * 规则匹配的地图元素类别。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b7 | 百度地图 v3.0：MapStyleV2}
       */
      elementType?: string

      /**
       * 地图元素的渲染属性及其取值。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b7 | 百度地图 v3.0：MapStyleV2}
       */
      stylers?: Record<string, string | number>
    }
    /**
     * Map 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.Map}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0 | 百度地图 v3.0：Map}
     */
    export interface Map extends EventEmitter {}

    /**
     * 可单独配置显示状态的地图要素类别。
     *
     * @see {@link BMap.MapStyle}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b6 | 百度地图 v3.0：MapStyle}
     */
    export type MapFeature = 'point' | 'road' | 'water' | 'land' | 'building'

    /**
     * 地图底图的预设样式名称。
     *
     * @see {@link BMap.MapStyle}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b6 | 百度地图 v3.0：MapStyle}
     */
    export type MapStyleName = 'normal' | 'dark' | 'light'
  }
}
