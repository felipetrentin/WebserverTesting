var gauge = new LinearGauge({
    renderTo: 'gauge-temperature',
    width: 120,
    height: 400,
    units: "Ticos",
    minValue: 0,
    maxValue: 40,
    highlights: [
        {
            "from": 30,
            "to": 40,
            "color": "rgba(200, 50, 50, .75)"
        }
    ],
}).draw();