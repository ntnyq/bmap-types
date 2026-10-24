export {}

declare global {
  /**
   * 拉框放大模式的兼容常量。
   *
   * 与 v3 官网及核心 runtime 的差异：官网类参考未收录，当前核心 runtime 未导出此常量。
   * 沿用历史声明，具体数值及提供它的工具脚本尚未验证。
   *
   * @see {@link BMap.ZoomType}
   * @see {@link BMap.DragAndZoomTool}
   */
  const BMAP_ZOOM_IN: BMap.ZoomType

  /**
   * 拉框缩小模式的兼容常量。
   *
   * 与 v3 官网及核心 runtime 的差异：官网类参考未收录，当前核心 runtime 未导出此常量。
   * 沿用历史声明，具体数值及提供它的工具脚本尚未验证。
   *
   * @see {@link BMap.ZoomType}
   * @see {@link BMap.DragAndZoomTool}
   */
  const BMAP_ZOOM_OUT: BMap.ZoomType

  /**
   * 公制单位。
   *
   * @see {@link BMap.LengthUnit}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b11 | 百度地图 v3.0：LengthUnit}
   */
  const BMAP_UNIT_METRIC: BMap.LengthUnit

  /**
   * 英制单位。
   *
   * @see {@link BMap.LengthUnit}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b11 | 百度地图 v3.0：LengthUnit}
   */
  const BMAP_UNIT_IMPERIAL: BMap.LengthUnit

  /**
   * 控件将定位到地图的左上角。
   *
   * @see {@link BMap.ControlAnchor}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b1 | 百度地图 v3.0：ControlAnchor}
   */
  const BMAP_ANCHOR_TOP_LEFT: BMap.ControlAnchor

  /**
   * 控件将定位到地图的右上角。
   *
   * @see {@link BMap.ControlAnchor}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b1 | 百度地图 v3.0：ControlAnchor}
   */
  const BMAP_ANCHOR_TOP_RIGHT: BMap.ControlAnchor

  /**
   * 控件将定位到地图的左下角。
   *
   * @see {@link BMap.ControlAnchor}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b1 | 百度地图 v3.0：ControlAnchor}
   */
  const BMAP_ANCHOR_BOTTOM_LEFT: BMap.ControlAnchor

  /**
   * 控件将定位到地图的右下角。
   *
   * @see {@link BMap.ControlAnchor}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b1 | 百度地图 v3.0：ControlAnchor}
   */
  const BMAP_ANCHOR_BOTTOM_RIGHT: BMap.ControlAnchor

  /**
   * 标准的平移缩放控件（包括平移、缩放按钮和滑块）。
   *
   * @see {@link BMap.NavigationControlType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b4 | 百度地图 v3.0：NavigationControlType}
   */
  const BMAP_NAVIGATION_CONTROL_LARGE: BMap.NavigationControlType

  /**
   * 仅包含平移和缩放按钮。
   *
   * @see {@link BMap.NavigationControlType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b4 | 百度地图 v3.0：NavigationControlType}
   */
  const BMAP_NAVIGATION_CONTROL_SMALL: BMap.NavigationControlType

  /**
   * 仅包含平移按钮。
   *
   * @see {@link BMap.NavigationControlType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b4 | 百度地图 v3.0：NavigationControlType}
   */
  const BMAP_NAVIGATION_CONTROL_PAN: BMap.NavigationControlType

  /**
   * 仅包含缩放按钮。
   *
   * @see {@link BMap.NavigationControlType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b4 | 百度地图 v3.0：NavigationControlType}
   */
  const BMAP_NAVIGATION_CONTROL_ZOOM: BMap.NavigationControlType

  /**
   * 按钮水平方式展示，默认采用此类型展示。
   *
   * @see {@link BMap.MapTypeControlType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b17 | 百度地图 v3.0：MapTypeControlType}
   */
  const BMAP_MAPTYPE_CONTROL_HORIZONTAL: BMap.MapTypeControlType

  /**
   * 按钮呈下拉列表方式展示。
   *
   * @see {@link BMap.MapTypeControlType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b17 | 百度地图 v3.0：MapTypeControlType}
   */
  const BMAP_MAPTYPE_CONTROL_DROPDOWN: BMap.MapTypeControlType

  /**
   * 以图片方式展示类型控件，设置该类型后无法指定maptypes属性。
   *
   * @see {@link BMap.MapTypeControlType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b17 | 百度地图 v3.0：MapTypeControlType}
   */
  const BMAP_MAPTYPE_CONTROL_MAP: BMap.MapTypeControlType

  /**
   * 没有权限。对应数值“6”。
   *
   * @see {@link BMap.StatusCode}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b57 | 百度地图 v3.0：StatusCode}
   */
  const BMAP_STATUS_PERMISSION_DENIED: BMap.StatusCode

  /**
   * 服务不可用。对应数值“7”。
   *
   * @see {@link BMap.StatusCode}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b57 | 百度地图 v3.0：StatusCode}
   */
  const BMAP_STATUS_SERVICE_UNAVAILABLE: BMap.StatusCode

  /**
   * 超时。对应数值“8”。
   *
   * @see {@link BMap.StatusCode}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b57 | 百度地图 v3.0：StatusCode}
   */
  const BMAP_STATUS_TIMEOUT: BMap.StatusCode

  /**
   * 返回当前API版本。例如，1.2版本返回字符串“1.2”。
   *
   * @see {@link BMap.APIVersion}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b5 | 百度地图 v3.0：APIVersion}
   */
  const BMAP_API_VERSION: BMap.APIVersion

  /**
   * 麻点密度高。
   *
   * @see {@link BMap.PointDensityType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b9 | 百度地图 v3.0：PointDensityType}
   */
  const BMAP_POINT_DENSITY_HIGH: BMap.PointDensityType

  /**
   * 麻点密度中等，默认。
   *
   * @see {@link BMap.PointDensityType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b9 | 百度地图 v3.0：PointDensityType}
   */
  const BMAP_POINT_DENSITY_MEDIUM: BMap.PointDensityType

  /**
   * 麻点密度低。
   *
   * @see {@link BMap.PointDensityType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b9 | 百度地图 v3.0：PointDensityType}
   */
  const BMAP_POINT_DENSITY_LOW: BMap.PointDensityType

  /**
   * 此地图类型展示普通街道视图。
   *
   * @see {@link BMap.MapType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
   */
  const BMAP_NORMAL_MAP: BMap.MapType

  /**
   * 透视地图类型，保留旧版兼容常量。
   *
   * @see {@link BMap.MapType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
   */
  const BMAP_PERSPECTIVE_MAP: BMap.MapType

  /**
   * 此地图类型展示卫星视图。
   *
   * @see {@link BMap.MapType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
   */
  const BMAP_SATELLITE_MAP: BMap.MapType

  /**
   * 此地图类型展示卫星和路网的混合视图。
   *
   * @see {@link BMap.MapType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a5b0 | 百度地图 v3.0：MapType}
   */
  const BMAP_HYBRID_MAP: BMap.MapType

  /**
   * 圆形，默认半径为1px；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_CIRCLE: BMap.SymbolShapeType

  /**
   * 矩形，默认宽度4px、高度2px；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_RECTANGLE: BMap.SymbolShapeType

  /**
   * 菱形，默认外接圆半径10px；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_RHOMBUS: BMap.SymbolShapeType

  /**
   * 五角星，五角星外接圆半径为10px；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_STAR: BMap.SymbolShapeType

  /**
   * 箭头方向向下的闭合箭头；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: BMap.SymbolShapeType

  /**
   * 箭头方向向上的闭合箭头；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: BMap.SymbolShapeType

  /**
   * 箭头方向向下的非闭合箭头；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: BMap.SymbolShapeType

  /**
   * 箭头方向向上的非闭合箭头；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: BMap.SymbolShapeType

  /**
   * 定位点图标；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_POINT: BMap.SymbolShapeType

  /**
   * 预设的飞机形状；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_PLANE: BMap.SymbolShapeType

  /**
   * 预设的照相机形状；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_CAMERA: BMap.SymbolShapeType

  /**
   * 预设的警告符号；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_WARNING: BMap.SymbolShapeType

  /**
   * 预设的笑脸形状；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_SMILE: BMap.SymbolShapeType

  /**
   * 预设的钟表形状；用于矢量符号预设图形的常量。
   *
   * @see {@link BMap.SymbolShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b30 | 百度地图 v3.0：SymbolShapeType}
   */
  const BMap_Symbol_SHAPE_CLOCK: BMap.SymbolShapeType

  /**
   * 坠落动画。
   *
   * @see {@link BMap.Animation}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b4 | 百度地图 v3.0：Animation}
   */
  const BMAP_ANIMATION_DROP: BMap.Animation

  /**
   * 跳动动画。
   *
   * @see {@link BMap.Animation}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b4 | 百度地图 v3.0：Animation}
   */
  const BMAP_ANIMATION_BOUNCE: BMap.Animation

  /**
   * 圆形，为默认形状；用于海量点预设形状的常量。
   *
   * @see {@link BMap.ShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b22 | 百度地图 v3.0：ShapeType}
   */
  const BMAP_POINT_SHAPE_CIRCLE: BMap.ShapeType

  /**
   * 星形海量点形状的旧版兼容名称；用于海量点预设形状的常量。
   *
   * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此旧版名称，当前核心 runtime 未导出此常量。
   * 沿用历史兼容声明，具体数值及来源尚未验证；使用前需确认所加载脚本提供此常量。
   *
   * @see {@link BMap.ShapeType}
   * @see {@link BMAP_POINT_SHAPE_STAR}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b22 | 百度地图 v3.0：相关 ShapeType 类型（未收录此旧版名称）}
   */
  const APE_STAR: BMap.ShapeType

  /**
   * 方形海量点形状的旧版兼容名称；用于海量点预设形状的常量。
   *
   * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此旧版名称，当前核心 runtime 未导出此常量。
   * 沿用历史兼容声明，具体数值及来源尚未验证；使用前需确认所加载脚本提供此常量。
   *
   * @see {@link BMap.ShapeType}
   * @see {@link BMAP_POINT_SHAPE_SQUARE}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b22 | 百度地图 v3.0：相关 ShapeType 类型（未收录此旧版名称）}
   */
  const APE_SQUARE: BMap.ShapeType

  /**
   * 菱形海量点形状的旧版兼容名称；用于海量点预设形状的常量。
   *
   * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此旧版名称，当前核心 runtime 未导出此常量。
   * 沿用历史兼容声明，具体数值及来源尚未验证；使用前需确认所加载脚本提供此常量。
   *
   * @see {@link BMap.ShapeType}
   * @see {@link BMAP_POINT_SHAPE_RHOMBUS}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b22 | 百度地图 v3.0：相关 ShapeType 类型（未收录此旧版名称）}
   */
  const APE_RHOMBUS: BMap.ShapeType

  /**
   * 水滴海量点形状的旧版兼容名称；用于海量点预设形状的常量。
   *
   * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此旧版名称，当前核心 runtime 未导出此常量。
   * 沿用历史兼容声明，具体数值及来源尚未验证；使用前需确认所加载脚本提供此常量。
   *
   * @see {@link BMap.ShapeType}
   * @see {@link BMAP_POINT_SHAPE_WATERDROP}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b22 | 百度地图 v3.0：相关 ShapeType 类型（未收录此旧版名称）}
   */
  const APE_WATERDROP: BMap.ShapeType

  /**
   * 定义点的尺寸为超小，宽高为2px*2px；用于海量点预设尺寸的常量。
   *
   * @see {@link BMap.SizeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b23 | 百度地图 v3.0：SizeType}
   */
  const BMAP_POINT_SIZE_TINY: BMap.SizeType

  /**
   * 定义点的尺寸为很小，宽高为4px*4px；用于海量点预设尺寸的常量。
   *
   * @see {@link BMap.SizeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b23 | 百度地图 v3.0：SizeType}
   */
  const BMAP_POINT_SIZE_SMALLER: BMap.SizeType

  /**
   * 定义点的尺寸为小，宽高为8px*8px；用于海量点预设尺寸的常量。
   *
   * @see {@link BMap.SizeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b23 | 百度地图 v3.0：SizeType}
   */
  const BMAP_POINT_SIZE_SMALL: BMap.SizeType

  /**
   * 定义点的尺寸为正常，宽高为10px*10px，为海量点默认尺寸；用于海量点预设尺寸的常量。
   *
   * @see {@link BMap.SizeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b23 | 百度地图 v3.0：SizeType}
   */
  const BMAP_POINT_SIZE_NORMAL: BMap.SizeType

  /**
   * 定义点的尺寸为大，宽高为16px*16px；用于海量点预设尺寸的常量。
   *
   * @see {@link BMap.SizeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b23 | 百度地图 v3.0：SizeType}
   */
  const BMAP_POINT_SIZE_BIG: BMap.SizeType

  /**
   * 定义点的尺寸为很大，宽高为20px*20px；用于海量点预设尺寸的常量。
   *
   * @see {@link BMap.SizeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b23 | 百度地图 v3.0：SizeType}
   */
  const BMAP_POINT_SIZE_BIGGER: BMap.SizeType

  /**
   * 定义点的尺寸为超大，宽高为30px*30px；用于海量点预设尺寸的常量。
   *
   * @see {@link BMap.SizeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b23 | 百度地图 v3.0：SizeType}
   */
  const BMAP_POINT_SIZE_HUGE: BMap.SizeType

  /**
   * 全景场景点的类型为室内场景。
   *
   * @see {@link BMap.PanoramaSceneType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b10 | 百度地图 v3.0：PanoramaSceneType}
   */
  const BMAP_PANORAMA_INDOOR_SCENE: BMap.PanoramaSceneType

  /**
   * 全景场景点的类型为室外场景。
   *
   * @see {@link BMap.PanoramaSceneType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b10 | 百度地图 v3.0：PanoramaSceneType}
   */
  const BMAP_PANORAMA_STREET_SCENE: BMap.PanoramaSceneType

  /**
   * 酒店类。
   *
   * @see {@link BMap.PanoramaPOIType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b11 | 百度地图 v3.0：PanoramaPOIType}
   */
  const BMAP_PANORAMA_POI_HOTEL: BMap.PanoramaPOIType

  /**
   * 餐饮类。
   *
   * @see {@link BMap.PanoramaPOIType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b11 | 百度地图 v3.0：PanoramaPOIType}
   */
  const BMAP_PANORAMA_POI_CATERING: BMap.PanoramaPOIType

  /**
   * 电影院。
   *
   * @see {@link BMap.PanoramaPOIType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b11 | 百度地图 v3.0：PanoramaPOIType}
   */
  const BMAP_PANORAMA_POI_MOVIE: BMap.PanoramaPOIType

  /**
   * 公交站点。
   *
   * @see {@link BMap.PanoramaPOIType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b11 | 百度地图 v3.0：PanoramaPOIType}
   */
  const BMAP_PANORAMA_POI_TRANSIT: BMap.PanoramaPOIType

  /**
   * 室内景。
   *
   * @see {@link BMap.PanoramaPOIType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b11 | 百度地图 v3.0：PanoramaPOIType}
   */
  const BMAP_PANORAMA_POI_INDOOR_SCENE: BMap.PanoramaPOIType

  /**
   * 无，即隐藏所有的poi类型。
   *
   * @see {@link BMap.PanoramaPOIType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b11 | 百度地图 v3.0：PanoramaPOIType}
   */
  const BMAP_PANORAMA_POI_NONE: BMap.PanoramaPOIType

  /**
   * 放大图标。
   *
   * @see {@link BMap.ContextMenuIcon}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b3 | 百度地图 v3.0：ContextMenuIcon}
   */
  const BMAP_CONTEXT_MENU_ICON_ZOOMIN: BMap.ContextMenuIcon

  /**
   * 缩小图标。
   *
   * @see {@link BMap.ContextMenuIcon}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a4b3 | 百度地图 v3.0：ContextMenuIcon}
   */
  const BMAP_CONTEXT_MENU_ICON_ZOOMOUT: BMap.ContextMenuIcon

  /**
   * 公交车。
   *
   * @see {@link BMap.LineType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b15 | 百度地图 v3.0：LineType}
   */
  const BMAP_LINE_TYPE_BUS: BMap.LineType

  /**
   * 地铁。
   *
   * @see {@link BMap.LineType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b15 | 百度地图 v3.0：LineType}
   */
  const BMAP_LINE_TYPE_SUBWAY: BMap.LineType

  /**
   * 轮渡。
   *
   * @see {@link BMap.LineType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b15 | 百度地图 v3.0：LineType}
   */
  const BMAP_LINE_TYPE_FERRY: BMap.LineType

  /**
   * 优先选择耗时较少的驾车方案，保留旧版策略常量。
   *
   * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此旧版名称，当前核心 runtime 未导出此常量。
   * 沿用历史兼容声明，具体数值及来源尚未验证；使用前需确认所加载脚本提供此常量。
   *
   * @see {@link BMap.DrivingPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b25 | 百度地图 v3.0：相关 DrivingPolicy 类型（未收录此旧版名称）}
   */
  const BMAP_DRIVING_POLICY_LEAST_TIME: BMap.DrivingPolicy

  /**
   * 优先选择距离较短的驾车方案，保留旧版策略常量。
   *
   * 与 v3 官网及核心 runtime 的差异：官网类参考未收录此旧版名称，当前核心 runtime 未导出此常量。
   * 沿用历史兼容声明，具体数值及来源尚未验证；使用前需确认所加载脚本提供此常量。
   *
   * @see {@link BMap.DrivingPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b25 | 百度地图 v3.0：相关 DrivingPolicy 类型（未收录此旧版名称）}
   */
  const BMAP_DRIVING_POLICY_LEAST_DISTANCE: BMap.DrivingPolicy

  /**
   * 避开高速。
   *
   * @see {@link BMap.DrivingPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b25 | 百度地图 v3.0：DrivingPolicy}
   */
  const BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: BMap.DrivingPolicy

  /**
   * 一般位置点。
   *
   * @see {@link BMap.PoiType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b6 | 百度地图 v3.0：PoiType}
   */
  const BMAP_POI_TYPE_NORMAL: BMap.PoiType

  /**
   * 公交车站位置点。
   *
   * @see {@link BMap.PoiType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b6 | 百度地图 v3.0：PoiType}
   */
  const BMAP_POI_TYPE_BUSSTOP: BMap.PoiType

  /**
   * 地铁车站位置点。
   *
   * @see {@link BMap.PoiType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b6 | 百度地图 v3.0：PoiType}
   */
  const BMAP_POI_TYPE_SUBSTOP: BMap.PoiType

  /**
   * 最少时间。
   *
   * @see {@link BMap.TransitPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b9 | 百度地图 v3.0：TransitPolicy}
   */
  const BMAP_TRANSIT_POLICY_LEAST_TIME: BMap.TransitPolicy

  /**
   * 最少换乘。
   *
   * @see {@link BMap.TransitPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b9 | 百度地图 v3.0：TransitPolicy}
   */
  const BMAP_TRANSIT_POLICY_LEAST_TRANSFER: BMap.TransitPolicy

  /**
   * 最少步行。
   *
   * @see {@link BMap.TransitPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b9 | 百度地图 v3.0：TransitPolicy}
   */
  const BMAP_TRANSIT_POLICY_LEAST_WALKING: BMap.TransitPolicy

  /**
   * 不乘地铁。
   *
   * @see {@link BMap.TransitPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b9 | 百度地图 v3.0：TransitPolicy}
   */
  const BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: BMap.TransitPolicy

  /**
   * 驾车线路。
   *
   * @see {@link BMap.RouteType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b30 | 百度地图 v3.0：RouteType}
   */
  const BMAP_ROUTE_TYPE_DRIVING: BMap.RouteType

  /**
   * 步行线路。
   *
   * @see {@link BMap.RouteType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b30 | 百度地图 v3.0：RouteType}
   */
  const BMAP_ROUTE_TYPE_WALKING: BMap.RouteType

  /**
   * 驾车结果展现中点击列表后的展现点步骤。
   *
   * @see {@link BMap.HighlightModes}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b32 | 百度地图 v3.0：HighlightModes}
   */
  const BMAP_HIGHLIGHT_STEP: BMap.HighlightModes

  /**
   * 驾车结果展现中点击列表后的展现路段。
   *
   * @see {@link BMap.HighlightModes}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b32 | 百度地图 v3.0：HighlightModes}
   */
  const BMAP_HIGHLIGHT_ROUTE: BMap.HighlightModes

  /**
   * 检索成功。对应数值“0”。
   *
   * @see {@link BMap.ServiceStatusCode}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b57 | 百度地图 v3.0：StatusCode}
   */
  const BMAP_STATUS_SUCCESS: BMap.ServiceStatusCode

  /**
   * 城市列表。对应数值“1”。
   *
   * @see {@link BMap.ServiceStatusCode}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b57 | 百度地图 v3.0：StatusCode}
   */
  const BMAP_STATUS_CITY_LIST: BMap.ServiceStatusCode

  /**
   * 位置结果未知。对应数值“2”。
   *
   * @see {@link BMap.ServiceStatusCode}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b57 | 百度地图 v3.0：StatusCode}
   */
  const BMAP_STATUS_UNKNOWN_LOCATION: BMap.ServiceStatusCode

  /**
   * 导航结果未知。对应数值“3”。
   *
   * @see {@link BMap.ServiceStatusCode}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b57 | 百度地图 v3.0：StatusCode}
   */
  const BMAP_STATUS_UNKNOWN_ROUTE: BMap.ServiceStatusCode

  /**
   * 非法密钥。对应数值“4”。
   *
   * @see {@link BMap.ServiceStatusCode}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b57 | 百度地图 v3.0：StatusCode}
   */
  const BMAP_STATUS_INVALID_KEY: BMap.ServiceStatusCode

  /**
   * 非法请求。对应数值“5”。
   *
   * @see {@link BMap.ServiceStatusCode}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b57 | 百度地图 v3.0：StatusCode}
   */
  const BMAP_STATUS_INVALID_REQUEST: BMap.ServiceStatusCode

  /**
   * 星形；用于海量点预设形状的常量。
   *
   * @see {@link BMap.ShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b22 | 百度地图 v3.0：ShapeType}
   */
  const BMAP_POINT_SHAPE_STAR: BMap.ShapeType

  /**
   * 方形；用于海量点预设形状的常量。
   *
   * @see {@link BMap.ShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b22 | 百度地图 v3.0：ShapeType}
   */
  const BMAP_POINT_SHAPE_SQUARE: BMap.ShapeType

  /**
   * 菱形；用于海量点预设形状的常量。
   *
   * @see {@link BMap.ShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b22 | 百度地图 v3.0：ShapeType}
   */
  const BMAP_POINT_SHAPE_RHOMBUS: BMap.ShapeType

  /**
   * 水滴状，该类型无size和color属性；用于海量点预设形状的常量。
   *
   * @see {@link BMap.ShapeType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b22 | 百度地图 v3.0：ShapeType}
   */
  const BMAP_POINT_SHAPE_WATERDROP: BMap.ShapeType

  /**
   * 推荐方案。
   *
   * @see {@link BMap.TransitPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b9 | 百度地图 v3.0：TransitPolicy}
   */
  const BMAP_TRANSIT_POLICY_RECOMMEND: BMap.TransitPolicy

  /**
   * 优先地铁。
   *
   * @see {@link BMap.TransitPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b9 | 百度地图 v3.0：TransitPolicy}
   */
  const BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: BMap.TransitPolicy

  /**
   * 时间短。
   *
   * @see {@link BMap.IntercityPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b10 | 百度地图 v3.0：IntercityPolicy}
   */
  const BMAP_INTERCITY_POLICY_LEAST_TIME: BMap.IntercityPolicy

  /**
   * 出发早。
   *
   * @see {@link BMap.IntercityPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b10 | 百度地图 v3.0：IntercityPolicy}
   */
  const BMAP_INTERCITY_POLICY_EARLY_START: BMap.IntercityPolicy

  /**
   * 价格低。
   *
   * @see {@link BMap.IntercityPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b10 | 百度地图 v3.0：IntercityPolicy}
   */
  const BMAP_INTERCITY_POLICY_CHEAP_PRICE: BMap.IntercityPolicy

  /**
   * 火车优先。
   *
   * @see {@link BMap.TransitTypePolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b11 | 百度地图 v3.0：TransitTypePolicy}
   */
  const BMAP_TRANSIT_TYPE_POLICY_TRAIN: BMap.TransitTypePolicy

  /**
   * 飞机优先。
   *
   * @see {@link BMap.TransitTypePolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b11 | 百度地图 v3.0：TransitTypePolicy}
   */
  const BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: BMap.TransitTypePolicy

  /**
   * 大巴优先。
   *
   * @see {@link BMap.TransitTypePolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b11 | 百度地图 v3.0：TransitTypePolicy}
   */
  const BMAP_TRANSIT_TYPE_POLICY_COACH: BMap.TransitTypePolicy

  /**
   * 国内市内换乘。
   *
   * @see {@link BMap.TransitType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b14 | 百度地图 v3.0：TransitType}
   */
  const BMAP_TRANSIT_TYPE_IN_CITY: BMap.TransitType

  /**
   * 国内跨城换乘。
   *
   * @see {@link BMap.TransitType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b14 | 百度地图 v3.0：TransitType}
   */
  const BMAP_TRANSIT_TYPE_CROSS_CITY: BMap.TransitType

  /**
   * 火车。
   *
   * @see {@link BMap.LineType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b15 | 百度地图 v3.0：LineType}
   */
  const BMAP_LINE_TYPE_TRAIN: BMap.LineType

  /**
   * 飞机。
   *
   * @see {@link BMap.LineType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b15 | 百度地图 v3.0：LineType}
   */
  const BMAP_LINE_TYPE_AIRPLANE: BMap.LineType

  /**
   * 大巴。
   *
   * @see {@link BMap.LineType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b15 | 百度地图 v3.0：LineType}
   */
  const BMAP_LINE_TYPE_COACH: BMap.LineType

  /**
   * 默认。
   *
   * @see {@link BMap.DrivingPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b25 | 百度地图 v3.0：DrivingPolicy}
   */
  const BMAP_DRIVING_POLICY_DEFAULT: BMap.DrivingPolicy

  /**
   * 优先高速。
   *
   * @see {@link BMap.DrivingPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b25 | 百度地图 v3.0：DrivingPolicy}
   */
  const BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: BMap.DrivingPolicy

  /**
   * 避开拥堵。
   *
   * @see {@link BMap.DrivingPolicy}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b25 | 百度地图 v3.0：DrivingPolicy}
   */
  const BMAP_DRIVING_POLICY_AVOID_CONGESTION: BMap.DrivingPolicy

  /**
   * 骑行线路。
   *
   * @see {@link BMap.RouteType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b30 | 百度地图 v3.0：RouteType}
   */
  const BMAP_ROUTE_TYPE_RIDING: BMap.RouteType
  /**
   * 公交方案中的步行路段类型。
   *
   * @see {@link BMap.TransitPlanType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
   */
  const BMAP_TRANSIT_PLAN_TYPE_ROUTE: BMap.TransitPlanType

  /**
   * 公交方案中的公共交通线路段类型。
   *
   * @see {@link BMap.TransitPlanType}
   * @see {@link https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b13 | 百度地图 v3.0：TransitRoutePlan}
   */
  const BMAP_TRANSIT_PLAN_TYPE_LINE: BMap.TransitPlanType
}
