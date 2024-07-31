import CustomMap from "./CustomMap";
import { loadLibraries } from "./libraries-loader.ts";
import User from "./User";

loadLibraries
  .then(() => {
    const map = new CustomMap("map");
    const user = new User();

    map.addUserMarker(user);
  })
  .catch((error) =>
    console.error(`Error loading libraries: ${(error as Error).message}`)
  );
