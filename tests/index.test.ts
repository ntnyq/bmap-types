import { execFile } from 'node:child_process'
import { copyFile, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { promisify } from 'node:util'
import { build } from 'tsdown'
import { expect, it } from 'vitest'

const require = createRequire(import.meta.url)
const runCompiler = promisify(execFile)
const compiler = join(
  dirname(require.resolve('typescript/package.json')),
  'bin/tsc',
)

const consumer = `
const point = new BMap.Point(116.404, 39.915)
const size = new BMap.Size(16, 16)
const bounds = new BMap.Bounds(point, point)
const map = new BMap.Map('map', { applicationId: 'example' })
const marker = new BMap.Marker(point, { icon: new BMap.Icon('marker.png', size) })

map.centerAndZoom(point, 15)
map.centerAndZoom('北京')
map.addOverlay(marker)
map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT }))
map.addTileLayer(new BMap.TrafficLayer())
map.addContextMenu(new BMap.ContextMenu())
marker.setAnimation(BMAP_ANIMATION_BOUNCE)

const overlay: BMap.Overlay = marker
const optionalDraw: (() => void) | undefined = overlay.draw
const callback: BMap.Map['ondragend'] = event => {
  const position: BMap.Point = event.point
  const pixel: BMap.Pixel = event.pixel
  const eventType: string = event.type
}

const shape: BMap.ShapeType = BMAP_POINT_SHAPE_STAR
const navigationType: BMap.NavigationControlType = BMAP_NAVIGATION_CONTROL_LARGE
const polylineOptions: BMap.PolylineOptions = {}
const groundOverlay = new BMap.GroundOverlay(bounds)
groundOverlay.setDisplayOnMaxLevel(18)
const imageUrl: string = marker.getIcon().imageUrl
const shadow: BMap.Icon = marker.getShadow()

new BMap.LocalSearch(map).search('park')
new BMap.BusLineSearch(map).getBusList('1')
new BMap.Autocomplete({ input: 'search' }).setLocation(map)
new BMap.DrivingRoute(map).search(point, point)
new BMap.TransitRoute(map).search(point, point)
new BMap.WalkingRoute(map).search(point, 'airport')
new BMap.Geocoder().getPoint('北京', result => result?.equals(point), '北京')
new BMap.LocalCity().get(result => result.center?.equals(point))
new BMap.Geolocation().getCurrentPosition(result => result?.point.equals(point))
new BMap.Boundary().get('北京', result => result.boundaries.join(';'))
new BMap.Panorama('panorama').setPosition(point)
new BMap.PanoramaService().getPanoramaById('id', result => result?.position.equals(point))

const style: BMap.MapStyleV2 = {
  styleJson: [{ featureType: 'water', elementType: 'all', stylers: { color: '#ffffff' } }],
}
map.setMapStyleV2(style)
map.centerAndZoom('北京', 12)
map.removeEventListener('click', () => {})
marker.setAnimation(null)

const canvas = new BMap.CanvasLayer({
  paneName: 'vertexPane',
  update() {
    const context = this.canvas.getContext('2d')
    context?.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },
})
map.addOverlay(canvas)
const collectionOptions: BMap.PointCollectionOptions = {
  shape: BMAP_POINT_SHAPE_STAR,
  size: BMAP_POINT_SIZE_NORMAL,
}
new BMap.PointCollection([point], collectionOptions)

const riding = new BMap.RidingRoute(map, {
  onSearchComplete(result) {
    const plan = result.getPlan(0)
    if (!plan) return
    const count: number | undefined = plan.getRoute(0)?.getNumSteps()
  },
})
riding.search(point, point)
const transit = new BMap.TransitRoute(map, {
  intercityPolicy: BMAP_INTERCITY_POLICY_EARLY_START,
  transitTypePolicy: BMAP_TRANSIT_TYPE_POLICY_TRAIN,
  policy: BMAP_TRANSIT_POLICY_FIRST_SUBWAYS,
  onPolylinesSet(lines, routes) {
    const line: BMap.Line = lines[0]!
    const route: BMap.Route = routes[0]!
  },
})
transit.setIntercityPolicy(BMAP_INTERCITY_POLICY_CHEAP_PRICE)
transit.setTransitTypePolicy(BMAP_TRANSIT_TYPE_POLICY_AIRPLANE)
transit.setMarkersSetCallback((pois, transfers) => {
  const station: BMap.LocalResultPoi = transfers[0]!
})
const transitType: BMap.TransitType | undefined = transit.getResults()?.getTransitType()
const segment: BMap.Line | BMap.Route | undefined = transit.getResults()?.getPlan(0)?.getTotal(0)
const segmentType: BMap.TransitPlanType | undefined = transit.getResults()?.getPlan(0)?.getTotalType(0)
const segmentCount: number | undefined = transit.getResults()?.getPlan(0)?.getNumTotal()
const ridingType: BMap.RouteType = BMAP_ROUTE_TYPE_RIDING
const drivingPolicy: BMap.DrivingPolicy = BMAP_DRIVING_POLICY_AVOID_CONGESTION
const trainType: BMap.LineType = BMAP_LINE_TYPE_TRAIN

new BMap.Convertor().translate([point], 1, 5, result => {
  const status: number = result.status
  const points: BMap.Point[] | undefined = result.points
})
const locationControl = new BMap.GeolocationControl()
locationControl.location()
const address: BMap.AddressComponent | null = locationControl.getAddressComponent()
locationControl.onlocationSuccess = event => {
  const address: BMap.AddressComponent = event.AddressComponent
}
locationControl.onlocationError = event => {
  const status: BMap.StatusCode = event.StatusCode
}
const geolocation = new BMap.Geolocation()
geolocation.enableSDKLocation()
geolocation.disableSDKLocation()
geolocation.getCurrentPosition(result => {
  const address: BMap.GeolocationAddress | null | undefined = result?.address
}, { SDKLocation: true })
new BMap.Geocoder().getLocation(point, result => {
  if (!result) return
  const pois: BMap.LocalResultPoi[] = result.surroundingPois
  const marker: BMap.Marker | undefined = pois[0]?.marker
})

declare global {
  namespace BMap {
    interface MapOptions {
      applicationId?: string
    }
  }
}

// @ts-expect-error Coordinates remain numeric.
new BMap.Point('116.404', 39.915)
// @ts-expect-error Canvas panes must use a supported map pane name.
new BMap.CanvasLayer({ paneName: 'unknownPane' })
// @ts-expect-error Converted coordinates remain Point instances.
new BMap.Convertor().translate(['116.404,39.915'], 1, 5, () => {})
// @ts-expect-error Internal event helpers do not add global types.
type LeakedEvent = MapEvent
// @ts-expect-error The package does not expose named exports.
import type { Point } from 'bmap-types'
`

const v3Signatures = `
const intersection: BMap.Bounds | null = bounds.intersects(bounds)
const version: BMap.APIVersion = BMAP_API_VERSION
const versionText: string = version
const controlType: BMap.NavigationControlType = new BMap.NavigationControl().getType()
const iconSequence = new BMap.IconSequence(new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE), '100%', '0')
new BMap.Polyline([point], { icons: [iconSequence] })
new BMap.Polygon([point], { strokeStyle: 'dashed' })
const panoramaLink: BMap.PanoramaLink = { description: '道路', heading: 90, id: 'id' }
const mapTypeOptions: BMap.MapTypeOptions = { textColor: 0xffffff }

new BMap.BusLineSearch(map, {
  onGetBusLineComplete(line) {
    const stations: number = line.getNumBusStations()
    // @ts-expect-error The station count is numeric.
    const previousCount: string = line.getNumBusStations()
  },
})
new BMap.DrivingRoute(map, {
  onSearchComplete(result) {
    const nightFare: BMap.TaxiFareDetail | null = result.taxiFare.night
    const nullableFare: typeof nightFare = null
    // @ts-expect-error Cities without night pricing return null.
    const previousFare: BMap.TaxiFareDetail = result.taxiFare.night
    const route = result.getPlan(0)?.getRoute(0)
    if (!route) return
    const stepCount: number = route.getNumSteps()
    const position: BMap.Point | undefined = route.getStep(0)?.getPosition()
    // @ts-expect-error Route uses getNumSteps, not getNumRoutes.
    route.getNumRoutes()
    // @ts-expect-error Step uses getPosition, not getPoint.
    route.getStep(0)?.getPoint()
  },
})

const infoWindow: BMap.InfoWindow | null = map.getInfoWindow()
const absentWindow: ReturnType<BMap.Map['getInfoWindow']> = null
map.getInfoWindow()?.setTitle('位置')
// @ts-expect-error The map may have no open information window.
const previousWindow: BMap.InfoWindow = map.getInfoWindow()
// @ts-expect-error Bounds returns the intersection rectangle.
const previousIntersection: boolean = bounds.intersects(bounds)
// @ts-expect-error API versions are strings.
const previousVersion: number = BMAP_API_VERSION
// @ts-expect-error NavigationControl.getType returns the type constant.
const previousControlType: BMap.NavigationControlOptions = new BMap.NavigationControl().getType()
// @ts-expect-error Icon.imageUrl is a URL string.
const previousImageUrl: BMap.Size = marker.getIcon().imageUrl
// @ts-expect-error Marker.getShadow returns an Icon.
const previousShadow: void = marker.getShadow()
// @ts-expect-error Bounds requires southwest and northeast points.
new BMap.Bounds(0, 0, 1, 1)
// @ts-expect-error Bounds exposes geographic corner methods instead of numeric limits.
bounds.minX
// @ts-expect-error Polyline icons must be an array when supplied.
new BMap.Polyline([point], { icons: null })
// @ts-expect-error Polygon stroke styles are strings.
new BMap.Polygon([point], { strokeStyle: 1 })
// @ts-expect-error Panorama road headings are numeric angles.
const previousHeading: BMap.PanoramaLink = { description: '道路', heading: '90', id: 'id' }
const textColorOptions: BMap.MapTypeOptions = { textColor: '#ffffff' }
// @ts-expect-error The runtime accepts strings or numbers, not boolean colors.
const previousTextColor: BMap.MapTypeOptions = { textColor: true }
// @ts-expect-error DrivingRoute v3 requires coordinates or POIs for both endpoints.
new BMap.DrivingRoute(map).search(point, 'airport')
// @ts-expect-error TransitRoute v3 requires coordinates or POIs for both endpoints.
new BMap.TransitRoute(map).search('airport', point)
// @ts-expect-error DrivingRoute.search has no third options argument in v3.
new BMap.DrivingRoute(map).search(point, point, {})
new BMap.Polygon([point]).setPositionAt(0, point)
new BMap.Polyline([point]).setPositionAt(0, point)
// @ts-expect-error Polygon uses setPositionAt, not setPointAt.
new BMap.Polygon([point]).setPointAt(0, point)
// @ts-expect-error Polyline uses setPositionAt, not setPointAt.
new BMap.Polyline([point]).setPointAt(0, point)

const geocoder = new BMap.Geocoder()
const pointCallback: Parameters<BMap.Geocoder['getPoint']>[1] = result => {
  const point: BMap.Point | null = result
  // @ts-expect-error Address lookup can fail.
  const previousPoint: BMap.Point = result
}
pointCallback(null)
geocoder.getPoint('北京', pointCallback, '北京')
const geocoderCallback: Parameters<BMap.Geocoder['getLocation']>[1] = result => {
  if (!result) return
  const pois: BMap.LocalResultPoi[] = result.surroundingPois
  // @ts-expect-error The documented field is surroundingPois.
  result.surroundingPoi
}
geocoderCallback(null)
geocoder.getLocation(point, geocoderCallback)

const geolocationCallback: Parameters<BMap.Geolocation['getCurrentPosition']>[0] = result => {
  const location: BMap.GeolocationResult | null = result
  // @ts-expect-error Position lookup can fail.
  const previousLocation: BMap.GeolocationResult = result
}
geolocationCallback(null)
geolocation.getCurrentPosition(geolocationCallback)
const boundaryCallback: Parameters<BMap.Boundary['get']>[1] = result => {
  const boundaries: string[] = result.boundaries
  // @ts-expect-error The runtime returns a result object, not a coordinate-string array.
  const previousBoundaries: string[] = result
}
boundaryCallback({ boundaries: [] })
new BMap.Boundary().get('北京', boundaryCallback)

const panoramaCallback: Parameters<BMap.PanoramaService['getPanoramaById']>[1] = result => {
  const panorama: BMap.PanoramaData | null = result
  // @ts-expect-error Panorama lookup can fail.
  const previousPanorama: BMap.PanoramaData = result
}
panoramaCallback(null)
const panoramaService = new BMap.PanoramaService()
panoramaService.getPanoramaById('id', panoramaCallback)
panoramaService.getPanoramaByLocation(point, panoramaCallback)
panoramaService.getPanoramaByLocation(point, 100, panoramaCallback)
// @ts-expect-error The runtime only applies the default radius in the two-argument overload.
panoramaService.getPanoramaByLocation(point, undefined, panoramaCallback)
// @ts-expect-error The default-radius callback must handle missing panorama data.
panoramaService.getPanoramaByLocation(point, (result: BMap.PanoramaData) => {})
// @ts-expect-error The explicit-radius callback must handle missing panorama data.
panoramaService.getPanoramaByLocation(point, 100, (result: BMap.PanoramaData) => {})
// @ts-expect-error Panorama lookup requires a completion callback.
panoramaService.getPanoramaByLocation(point, 100)
// @ts-expect-error Panorama lookup requires a completion callback.
panoramaService.getPanoramaByLocation(point)
`

const refinedTypes = `
// Constants expose their shared semantic type rather than one literal value.
const alternativeUnit: typeof BMAP_UNIT_METRIC = BMAP_UNIT_IMPERIAL
const alternativeAnchor: typeof BMAP_ANCHOR_TOP_LEFT = BMAP_ANCHOR_BOTTOM_RIGHT
const alternativeScene: typeof BMAP_PANORAMA_INDOOR_SCENE = BMAP_PANORAMA_STREET_SCENE
map.setMapStyle({ features: ['road', 'water'] })
map.setMapStyle({ style: 'dark' })
map.setMapStyle({ styleJson: [{ featureType: 'water', stylers: { color: '#fff' } }] })
map.setMapStyleV2({ styleId: 'published-style' })
const emptyCity: BMap.LocalCityResult = {}
map.setViewport(bounds)
map.setViewport({ center: point, zoom: 12 })
const viewport: BMap.Viewport = map.getViewport(bounds)
const emptyBounds = new BMap.Bounds()
const singlePointBounds = new BMap.Bounds(point)
const emptyCenter: BMap.Point | null = emptyBounds.getCenter()
const emptyCorner: BMap.Point | null = emptyBounds.getSouthWest()
const missingMenuItem: BMap.MenuItem | undefined = new BMap.ContextMenu().getItem(999)
const missingCopyright: BMap.Copyright | undefined = new BMap.CopyrightControl().getCopyright(999)
const tileCopyright: BMap.Copyright | null = new BMap.TileLayer().getCopyright()
new BMap.OverviewMapControl()
const mercator: BMap.Projection = new BMap.MercatorProjection()
const perspective: BMap.Projection = new BMap.PerspectiveProjection()
const projected: BMap.Pixel = mercator.lngLatToPoint(point)
const label = new BMap.Label('文字')
label.setStyle({ color: 'red', fontSize: '16px' })
const labelContent: string = label.getContent()
const labelPosition: BMap.Point | null = label.getPosition()
const unattachedMap: BMap.Map | null = marker.getMap()
const absentLabel: BMap.Label | null = marker.getLabel()
const infoPosition: BMap.Point | undefined = new BMap.InfoWindow('内容').getPosition()
const iconSize: BMap.Size | undefined = marker.getIcon().imageSize
new BMap.Icon('retina.png', size, { imageSize: new BMap.Size(32, 32) })
const numericColor: string | number = new BMap.MapType('custom', new BMap.TileLayer(), { textColor: 0xffffff }).getTextColor()
const textColor: string | number = new BMap.MapType('custom', new BMap.TileLayer(), { textColor: '#fff' }).getTextColor()

map.addEventListener('click', function(event) {
  const target: BMap.Map = event.target
  const position: BMap.Point = event.point
  const pixel: BMap.Pixel = event.pixel
  const currentMap: BMap.Map = this
  // @ts-expect-error A map event target is not a number.
  const wrongTarget: number = event.target
  // @ts-expect-error Click coordinates are points, not strings.
  const wrongPosition: string = event.point
}, 'map-click')
map.removeEventListener('click', 'map-click')
marker.addEventListener('ondblclick', event => {
  const target: BMap.Marker = event.target
  const pixel: BMap.Pixel = event.pixel
  // @ts-expect-error Marker event targets are not maps.
  const wrongTarget: BMap.Map = event.target
})
map.addEventListener('custom-event', event => {
  const target: BMap.Map = event.target
  // @ts-expect-error Custom payloads must be narrowed or explicitly modeled.
  event.missingField
})
// @ts-expect-error A known event cannot be registered with an unrelated parameter type.
map.addEventListener('click', (event: { wrong: number }) => {})
new BMap.Panorama('panorama').addEventListener('pov_changed', event => {
  const target: BMap.Panorama = event.target
})
const dispatchResult: boolean = marker.dispatchEvent('custom-event', { count: 1 })
const objectDispatchResult: boolean | undefined = marker.dispatchEvent({ type: 'custom-event', count: 1 })
new BMap.ContextMenu().onopen = event => {
  const target: BMap.ContextMenu = event.target
  const position: BMap.Point = event.point
}

const autocomplete = new BMap.Autocomplete({ input: 'search', types: 'city' })
autocomplete.setTypes('city')
autocomplete.onconfirm = event => {
  const target: BMap.Autocomplete = event.target
  const index: number = event.item.index
  const city: string = event.item.value.city
  // @ts-expect-error The runtime uses lowercase city.
  event.item.value.City
  // @ts-expect-error Autocomplete addresses are typed, not any.
  const wrongCity: number = event.item.value.city
}
autocomplete.onhighlight = event => {
  const previousCity: string | undefined = event.fromitem.value.city
  const nextIndex: number = event.toitem.index
}
new BMap.CustomLayer({ geotableId: '1' }).onhotspotclick = event => {
  const target: BMap.CustomLayer = event.target
  const customPoi: BMap.Custompoi = event.content
  const customValue: unknown = event.content.extendedData['custom']
  // @ts-expect-error User-defined JSON values require narrowing.
  const uncheckedValue: string = event.content.extendedData['custom']
}
const hotspot = new BMap.Hotspot(point, { userData: { id: 'example' } })
const userData: unknown = hotspot.getUserData()
// @ts-expect-error User data has no known structure without narrowing.
hotspot.getUserData().id

new BMap.LocalSearch(map, {
  renderOptions: { panel: 'results' },
  onSearchComplete(results) {
    if (Array.isArray(results)) return
    const city: string = results.city
    const cityList = results.getCityList()
    if (!cityList?.[0]) return
    const count: number = cityList[0].numResults
    // @ts-expect-error City-result counts are numeric, not any.
    const wrongCount: string = cityList[0].numResults
  },
}).search('公园', { forceLocal: true, customData: { geotableId: 1 } })
// @ts-expect-error Search options expose named fields instead of unrestricted objects.
new BMap.LocalSearch(map).search('公园', { unknownOption: true })
new BMap.WalkingRoute(map, {
  onSearchComplete(result) {
    const plan = result.getPlan(0)
    if (!plan) return
    const meters: number = plan.getDistance(false)
    const distanceText: string = plan.getDistance()
    const seconds: number = plan.getDuration(false)
    const durationText: string = plan.getDuration(true)
    const route = plan.getRoute(0)
    if (!route) return
    const dynamicFormat: boolean | undefined = Math.random() > 0.5 ? false : undefined
    const dynamicDistance: string | number = route.getDistance(dynamicFormat)
    const routeMeters: number = route.getDistance(false)
    const routeText: string = route.getDistance(true)
    route.getStep(0)?.getDescription()
  },
})
const noSearchResult: ReturnType<BMap.LocalSearch['getResults']> = undefined
const noPlan: ReturnType<BMap.TransitRouteResult['getPlan']> = undefined
const noStep: ReturnType<BMap.Route['getStep']> = undefined
const noPoi: ReturnType<BMap.LocalResult['getPoi']> = undefined
const noConvertedPoints: BMap.TranslateResults = { status: 25 }
const noAddress: BMap.GeolocationResult = { point, accuracy: 0 }
const nullAddress: BMap.GeolocationResult = { point, accuracy: 0, address: null }
const nativeAddress: BMap.GeolocationAddress = { city: '北京', street_number: '1' }
const noSearchStatus: ReturnType<BMap.LocalSearch['getStatus']> = undefined
const noLocationStatus: ReturnType<BMap.Geolocation['getStatus']> = undefined
const noPanoramaId: ReturnType<BMap.Panorama['getId']> = null
const noPanoramaPosition: ReturnType<BMap.Panorama['getPosition']> = null
const noPanoramaScene: ReturnType<BMap.Panorama['getSceneType']> = ''
const noPanoramaLabelPov: ReturnType<BMap.PanoramaLabel['getPov']> = null
const routeSegmentType: BMap.TransitPlanType = BMAP_TRANSIT_PLAN_TYPE_ROUTE
const lineSegmentType: BMap.TransitPlanType = BMAP_TRANSIT_PLAN_TYPE_LINE
// @ts-expect-error Finite navigation control values are derived from SDK constants.
const unknownNavigationType: BMap.NavigationControlType = 123
// @ts-expect-error Length units are metric or us.
new BMap.ScaleControl().setUnit('kilometers')
// @ts-expect-error The SDK declares a finite set of map feature names.
map.setMapStyle({ features: ['unknown-feature'] })
// @ts-expect-error A viewport must describe coordinates or a center and zoom.
map.setViewport({ incorrect: true })
// @ts-expect-error SVG symbols are not geographic map overlays.
map.addOverlay(new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE))
// @ts-expect-error Icons are not geographic map overlays.
map.addOverlay(marker.getIcon())
// @ts-expect-error Hotspots have their own API instead of being overlays.
map.addOverlay(hotspot)
// @ts-expect-error The runtime requires a repeat string.
new BMap.IconSequence(new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE))
// @ts-expect-error The runtime spells Display correctly.
groundOverlay.setDispalyOnMaxLevel(18)
// @ts-expect-error There is no getTileLayer method on Map in the SDK.
map.getTileLayer('normal')
`

// Compile historical contracts without implying the v3 core SDK exports them.
const compatibilityTypes = `
const legacyStar: BMap.ShapeType = APE_STAR
const legacySquare: BMap.ShapeType = APE_SQUARE
const legacyRhombus: BMap.ShapeType = APE_RHOMBUS
const legacyWaterdrop: BMap.ShapeType = APE_WATERDROP
new BMap.PointCollection([point], { shape: APE_STAR })
const legacyLeastTime: BMap.DrivingPolicy = BMAP_DRIVING_POLICY_LEAST_TIME
const legacyLeastDistance: BMap.DrivingPolicy = BMAP_DRIVING_POLICY_LEAST_DISTANCE
new BMap.DrivingRoute(map, { policy: BMAP_DRIVING_POLICY_LEAST_TIME })
new BMap.DrivingRoute(map).setPolicy(BMAP_DRIVING_POLICY_LEAST_DISTANCE)
// @ts-expect-error Legacy shape constants retain the semantic numeric type.
const legacyShapeText: string = APE_STAR
// @ts-expect-error Legacy driving policies retain the semantic numeric type.
const legacyPolicyText: string = BMAP_DRIVING_POLICY_LEAST_TIME

const trafficControl = new BMap.TrafficControl()
trafficControl.setPanelOffset(size)
trafficControl.show()
trafficControl.hide()

const pushpinOptions: BMap.PushpinToolOptions = {
  icon: marker.getIcon(), cursor: 'crosshair', followText: '添加标注',
}
const pushpin = new BMap.PushpinTool(map, pushpinOptions)
new BMap.PushpinTool(map)
const pushpinOpened: boolean = pushpin.open()
const pushpinClosed: boolean = pushpin.close()
const pushpinIcon: BMap.Icon = pushpin.setIcon(marker.getIcon())
const currentPushpinIcon: BMap.Icon = pushpin.getIcon()
const pushpinCursor: string = pushpin.setCursor('crosshair')
const currentPushpinCursor: string = pushpin.getCursor()
const pushpinDescription: string = pushpin.toString()
pushpin.onmarkend = event => {
  const type: string = event.type
  const target: unknown = event.target
  const result: BMap.Marker = event.marker
  // @ts-expect-error Unverified event targets require narrowing.
  const uncheckedTarget: BMap.PushpinTool = event.target
}

const distanceTool = new BMap.DistanceTool(map)
const distanceOpened: boolean = distanceTool.open()
const distanceClosed: void = distanceTool.close()
const distanceDescription: string = distanceTool.toString()
distanceTool.ondrawend = event => {
  const type: string = event.type
  const target: unknown = event.target
  const points: BMap.Point[] = event.points
  const polylines: BMap.Polyline[] = event.polylines
  const distance: number = event.distance
  // @ts-expect-error Historical distance values are numeric.
  const wrongDistance: string = event.distance
}

const zoomIn: BMap.ZoomType = BMAP_ZOOM_IN
const zoomOut: BMap.ZoomType = BMAP_ZOOM_OUT
const zoomOptions: BMap.DragAndZoomToolOptions = {
  zoomType: zoomIn, autoClose: true, followText: '拉框缩放',
}
const zoomTool = new BMap.DragAndZoomTool(map, zoomOptions)
new BMap.DragAndZoomTool(map)
const zoomOpened: boolean = zoomTool.open()
const zoomClosed: void = zoomTool.close()
const zoomDescription: string = zoomTool.toString()
zoomTool.ondrawend = event => {
  const type: string = event.type
  const target: unknown = event.target
  const bounds: BMap.Bounds[] = event.bounds
  // @ts-expect-error The historical payload contains a bounds array.
  const wrongBounds: BMap.Bounds = event.bounds
}
// @ts-expect-error A distance tool requires its associated map.
new BMap.DistanceTool()
// @ts-expect-error Tool offsets use Size instances.
trafficControl.setPanelOffset(point)
// @ts-expect-error Pushpin options require an Icon object.
new BMap.PushpinTool(map, { icon: 'marker.png' })
// @ts-expect-error Zoom modes preserve their historical numeric type.
new BMap.DragAndZoomTool(map, { zoomType: 'in' })
`

it('exposes v3 SDK and historical compatibility signatures in an isolated built package', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'bmap-types-'))
  const packageDirectory = join(directory, 'node_modules/bmap-types')

  try {
    await mkdir(packageDirectory, { recursive: true })
    await build({ outDir: join(packageDirectory, 'dist'), logLevel: 'silent' })
    await copyFile(
      new URL('../package.json', import.meta.url),
      join(packageDirectory, 'package.json'),
    )
    await writeFile(
      join(directory, 'import.mts'),
      `import 'bmap-types'\n${consumer}\n${v3Signatures}\n${refinedTypes}\n${compatibilityTypes}`,
    )
    await writeFile(
      join(directory, 'ambient.mts'),
      `export {}\n${consumer}\n${v3Signatures}\n${refinedTypes}\n${compatibilityTypes}`,
    )

    await Promise.all(
      ['import', 'ambient'].map(async mode => {
        const config = join(directory, `tsconfig.${mode}.json`)
        await writeFile(
          config,
          JSON.stringify({
            compilerOptions: {
              strict: true,
              exactOptionalPropertyTypes: true,
              noEmit: true,
              module: 'NodeNext',
              lib: ['ES2023', 'DOM'],
              types: mode === 'ambient' ? ['bmap-types'] : [],
            },
            files: [`${mode}.mts`],
          }),
        )
        const result = await runCompiler(
          process.execPath,
          [compiler, '--project', config],
          {
            encoding: 'utf8',
          },
        ).catch((error: unknown) => {
          if (error instanceof Error && 'stdout' in error) {
            throw new Error(String(error.stdout), { cause: error })
          }
          throw error
        })

        expect(result.stdout).toBe('')
        expect(result.stderr).toBe('')
      }),
    )

    const runtime = await import(
      pathToFileURL(join(packageDirectory, 'dist/index.js')).href
    )
    expect(Object.keys(runtime)).toStrictEqual([])
  } finally {
    await rm(directory, { recursive: true, force: true })
  }
}, 15_000)
