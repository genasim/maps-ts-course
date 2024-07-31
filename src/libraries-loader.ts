export const loadLibraries = Promise.all([
    google.maps.importLibrary("maps"),
    google.maps.importLibrary("marker"),
])
