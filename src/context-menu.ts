import type { EventEmitter, MapPixelEvent } from './events'

declare global {
  namespace BMap {
    /**
     * 右键菜单内置图标的标识类型。
     *
     * @see {@link BMAP_CONTEXT_MENU_ICON_ZOOMIN}
     * @see {@link BMAP_CONTEXT_MENU_ICON_ZOOMOUT}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b3 | 百度地图 v3.0：ContextMenuIcon}
     */
    export type ContextMenuIcon = string

    /**
     * 包含显示文字、图标和点击回调的右键菜单项的配置选项。
     *
     * @see {@link BMap.MenuItem}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b2 | 百度地图 v3.0：MenuItemOptions}
     */
    export interface MenuItemOptions {
      /**
       * 宽度，单位为像素。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b2 | 百度地图 v3.0：MenuItemOptions}
       */
      width?: number

      /**
       * 对象的唯一标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b2 | 百度地图 v3.0：MenuItemOptions}
       */
      id?: string

      /**
       * 菜单项图标的图片地址或内置图标标识。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b2 | 百度地图 v3.0：MenuItemOptions}
       */
      iconUrl?: string
    }

    /**
     * 包含显示文字、图标和点击回调的右键菜单项。
     *
     * @see {@link BMap.Point}
     * @see {@link BMap.MenuItemOptions}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b1 | 百度地图 v3.0：MenuItem}
     */
    export class MenuItem {
      /**
       * 创建包含显示文字、图标和点击回调的右键菜单项实例。
       *
       * @param text 需要展示的文字。
       * @param callback 异步查询完成或交互发生后执行的回调。
       * @param callback.point 需要处理的地理坐标。
       * @param opts MenuItem 的配置选项。
       * @see {@link BMap.Point}
       * @see {@link BMap.MenuItemOptions}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b1 | 百度地图 v3.0：MenuItem}
       */
      constructor(
        text: string,
        callback: (point: Point) => void,
        opts?: MenuItemOptions,
      )

      /**
       * 设置提示文字。
       *
       * @param text 需要展示的文字。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b1 | 百度地图 v3.0：MenuItem}
       */
      setText(text: string): void

      /**
       * 设置标注图像。
       *
       * @param iconUrl 菜单项图标的图片地址或内置图标标识。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b1 | 百度地图 v3.0：MenuItem}
       */
      setIcon(iconUrl: string): void

      /**
       * 启用当前菜单项。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b1 | 百度地图 v3.0：MenuItem}
       */
      enable(): void

      /**
       * 禁用当前菜单项。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b1 | 百度地图 v3.0：MenuItem}
       */
      disable(): void
    }

    /**
     * 地图或覆盖物上的右键菜单。
     *
     * @see {@link BMap.MenuItem}
     * @see {@link MapPixelEvent}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b0 | 百度地图 v3.0：ContextMenu}
     */
    export class ContextMenu {
      /**
       * 创建地图或覆盖物上的右键菜单实例。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b0 | 百度地图 v3.0：ContextMenu}
       */
      constructor()

      /**
       * 添加指定的菜单项。
       *
       * @param item 需要操作的菜单项。
       * @see {@link BMap.MenuItem}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b0 | 百度地图 v3.0：ContextMenu}
       */
      addItem(item: MenuItem): void

      /**
       * 返回指定索引位置的菜单项，第一个菜单项的索引为0。
       *
       * 官网未说明越界索引；runtime 在索引无效时返回 undefined。
       *
       * @param index 目标成员的索引，从 0 开始。
       * @returns 返回指定索引位置的菜单项，第一个菜单项的索引为0。
       * @see {@link BMap.MenuItem}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b0 | 百度地图 v3.0：ContextMenu}
       * @see {@link https://api.map.baidu.com/getscript?v=3.0 | v3 SDK runtime}
       */
      getItem(index: number): MenuItem | undefined

      /**
       * 移除指定的菜单项。
       *
       * @param item 需要操作的菜单项。
       * @see {@link BMap.MenuItem}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b0 | 百度地图 v3.0：ContextMenu}
       */
      removeItem(item: MenuItem): void

      /**
       * 在右键菜单中追加分隔线。
       *
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b0 | 百度地图 v3.0：ContextMenu}
       */
      addSeparator(): void

      /**
       * 移除指定索引的右键菜单分隔线。
       *
       * @param index 目标成员的索引，从 0 开始。
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b0 | 百度地图 v3.0：ContextMenu}
       */
      removeSeparator(index: number): void

      /**
       * 对象打开时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b0 | 百度地图 v3.0：ContextMenu}
       */
      onopen?: (event: MapPixelEvent<ContextMenu>) => void

      /**
       * 对象关闭时执行的事件回调。
       *
       * @param event 事件对象，包含事件名称、触发对象及相关位置。
       * @see {@link MapPixelEvent}
       * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b0 | 百度地图 v3.0：ContextMenu}
       */
      onclose?: (event: MapPixelEvent<ContextMenu>) => void
    }
    /**
     * ContextMenu 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.ContextMenu}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b0 | 百度地图 v3.0：ContextMenu}
     */
    export interface ContextMenu extends EventEmitter {}

    /**
     * MenuItem 的事件监听能力。
     *
     * @see {@link EventEmitter}
     * @see {@link BMap.MenuItem}
     * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b1 | 百度地图 v3.0：MenuItem}
     */
    export interface MenuItem extends EventEmitter {}
  }
}
