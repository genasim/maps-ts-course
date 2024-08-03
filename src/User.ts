import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export default class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.fullName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  content(): string {
    return `<h3>${this.name}</h3>`;
  }
}
