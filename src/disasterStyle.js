export const disasterLayer = {
    id: "disasters",
    type: "circle",
    paint: {
        "circle-color": [
            "case",
            ["==", ["get", "type"], "Flood"],
            "#a8ddb5",
            ["==", ["get", "type"], "Storm"],
            "#2b8cbe",
            ["==", ["get", "type"], "Drought"],
            "#c51b8a",
            ["==", ["get", "type"], "Wildfire"],
            "#d8b365",
            "#8073ac"
        ],
        "circle-radius": [
            "interpolate",
            ["linear"],
            ["get", "events"],
            1,
            3,
            100,
            40
        ],
        "circle-opacity": 1,
        "circle-stroke-color": "#000",
        "circle-stroke-width": 0.5
    }
};