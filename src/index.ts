/// <reference types="@types/google.maps" />
// import User from "./User";

let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 0, lng: 0 },
    zoom: 1,
  });
}

initMap();
