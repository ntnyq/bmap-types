/**
 * 地图及覆盖物共用的基础事件结构。
 */
export interface MapEvent<Target = unknown> {
  /**
   * 事件名称。
   */
  type: string
  /**
   * 触发事件的 SDK 对象。
   */
  target: Target
  /**
   * 当前处理事件的 SDK 对象。
   */
  currentTarget?: Target
  /**
   * 事件分发后的返回标志。
   */
  returnValue?: boolean
}
/**
 * 包含事件发生位置的地图事件结构。
 *
 * @see {@link BMap.Point}
 * @see {@link MapEvent}
 */
export interface MapPointEvent<Target = unknown> extends MapEvent<Target> {
  /**
   * 对应位置的地理坐标。
   *
   * @see {@link BMap.Point}
   */
  point: BMap.Point
}
/**
 * 同时包含地理坐标和像素坐标的地图事件结构。
 *
 * @see {@link BMap.Pixel}
 * @see {@link MapPointEvent}
 */
export interface MapPixelEvent<Target = unknown> extends MapPointEvent<Target> {
  /**
   * 相对于地图容器左上角的像素坐标。
   *
   * @see {@link BMap.Pixel}
   */
  pixel: BMap.Pixel
}
/**
 * 从 SDK 对象的 on 开头回调属性中提取事件名称及事件参数。
 */
export type EventsOf<Target> = {
  [
    Key in keyof Target as Key extends `on${infer Name}` ? Name : never
  ]-?: NonNullable<Target[Key]> extends (event: infer Event) => void
    ? Event
    : never
}

/**
 * 可传入 SDK 分发方法的事件对象；runtime 会补全未提供的 target。
 */
export interface DispatchableEvent<Target> {
  /**
   * 事件名称。
   */
  type: string

  /**
   * 事件的原始触发对象，省略时使用当前分发对象。
   */
  target?: Target

  /**
   * 事件分发后的返回标志，未提供时分发结果可能为 undefined。
   */
  returnValue?: boolean
}
/**
 * SDK 对象共用的事件注册、移除和分发方法。
 */
export interface EventEmitter {
  /**
   * 注册内置事件监听，并根据事件名称推导事件参数。
   *
   * @param event 事件名称，可带 on 前缀。
   * @param handler 事件监听函数，this 指向当前 SDK 对象。
   * @param key 可选的监听标识，可用于移除监听。
   */
  addEventListener<Name extends keyof EventsOf<this> & string>(
    event: Name | `on${Name}`,
    handler: (this: this, event: EventsOf<this>[Name]) => void,
    key?: string,
  ): void
  /**
   * 注册自定义名称的事件监听。
   *
   * @param event 自定义事件名称。
   * @param handler 事件监听函数。
   * @param key 可选的监听标识。
   */
  addEventListener(
    event: string,
    handler: (this: this, event: MapEvent<this>) => void,
    key?: string,
  ): void
  /**
   * 移除内置事件监听。
   *
   * @param event 事件名称，可带 on 前缀。
   * @param handler 原监听函数或注册时使用的监听标识。
   */
  removeEventListener<Name extends keyof EventsOf<this> & string>(
    event: Name | `on${Name}`,
    handler: ((this: this, event: EventsOf<this>[Name]) => void) | string,
  ): void
  /**
   * 移除自定义名称的事件监听。
   *
   * @param event 自定义事件名称。
   * @param handler 原监听函数或注册时使用的监听标识。
   */
  removeEventListener(
    event: string,
    handler: ((this: this, event: MapEvent<this>) => void) | string,
  ): void
  /**
   * 按名称分发事件，SDK 会创建基础事件对象。
   *
   * @param event 事件名称。
   * @param data 附加到事件对象的数据。
   * @returns 事件处理后的返回标志。
   */
  dispatchEvent(event: string, data?: Record<string, unknown>): boolean
  /**
   * 分发已构造的事件对象。
   *
   * @param event 包含事件类型及触发对象的事件。
   * @param data 附加到事件对象的数据。
   * @returns 事件处理后的返回标志；事件未定义返回标志时为 undefined。
   */
  dispatchEvent<Event extends DispatchableEvent<this>>(
    event: Event,
    data?: Record<string, unknown>,
  ): boolean | undefined
}
