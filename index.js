
import { NativeModules } from 'react-native';

import MapView, {Animated, MAP_TYPES, ProviderPropType} from './src/modules/map/MapView';
import Marker from './src/modules/map/MapMarker.js';
import Overlay from './src/modules/map/MapOverlay.js';

export {default as Polyline} from './src/modules/map/MapPolyline.js';
export {default as Heatmap} from './src/modules/map/MapHeatmap.js';
export {default as Polygon} from './src/modules/map/MapPolygon.js';
export {default as Circle} from './src/modules/map/MapCircle.js';
export {default as UrlTile} from './src/modules/map/MapUrlTile.js';
export {default as WMSTile} from './src/modules/map/MapWMSTile.js';
export {default as LocalTile} from './src/modules/map/MapLocalTile.js';
export {default as Callout} from './src/modules/map/MapCallout.js';
export {default as CalloutSubview} from './src/modules/map/MapCalloutSubview.js';
export {default as AnimatedRegion} from './src/modules/map/AnimatedRegion.js';
export {default as Geojson} from './src/modules/map/Geojson.js';

export {Marker, Overlay};
export {Animated, MAP_TYPES, ProviderPropType};

export const PROVIDER_HUAWEI = MapView.PROVIDER_HUAWEI;
export const PROVIDER_DEFAULT = MapView.PROVIDER_DEFAULT;

export const MarkerAnimated = Marker.Animated;
export const OverlayAnimated = Overlay.Animated;

export const { HmsMessaging } = NativeModules;

export { 
  RNRemoteMessage, 
  RNReceiverEvent,
  RNErrorEnum
} from './src/modules/push/RNMessageParser';

const { 
  Utils,
  Analytics,
  InstanceId,
  Messaging,
} = NativeModules;

export default {
  Utils,
  Analytics,
  InstanceId,
  MapView,
  Messaging,
};

