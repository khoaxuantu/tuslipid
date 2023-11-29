import { Location } from "react-router-dom";
import Default from '../../../package.json';

export function getMetadataURL(location: Location) {
  return Default.homepage.slice(0, -1) + location.pathname + "/";
}
