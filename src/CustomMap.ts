/// <reference types="@types/google.maps" />
import Company from "./Company";
import User from "./User";

export default class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        center: { lat: 0, lng: 0 },
        zoom: 1,
        mapId: "asfasfs",
      }
    );
  }

  public addUserMarker(user: User) {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
      title: "Uluru",
    });
  }

  public addCompanyMarker(company: Company): void {}
}
