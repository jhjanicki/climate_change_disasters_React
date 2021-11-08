export const dataLayer = {
    "id": "countriesfill",
    "type": "fill",
    "source": "countries",
    "paint": {
        "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "NDgain"],
            0,
            "#888888",
            20,
            "#49010d",
            30,
            "#cb181d",
            40,
            "#fb6a4a",
            50,
            "#fc9272",
            60,
            "#fcbba1",
            70,
            "#fee0d2",
            80,
            "#fff5f0"
        ],
        "fill-opacity": 0.9
    }
};