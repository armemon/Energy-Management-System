FusionCharts.ready(function() {
    var tank_level

    function getFirebaseDataon() {
        firebase.database().ref('Tank_Data/1-set').on('value', function(data) { //for every object each time it is run
            tank_level = data.val()['Level']
            console.log(tank_level)
        })
    }
    getFirebaseDataon()
    var fuelVolume,
        chartObj = new FusionCharts({
            type: 'cylinder',
            dataFormat: 'json',
            id: 'fuelMeter',
            renderAt: 'chart-container',
            width: '200',
            height: '350',
            dataSource: {
                "chart": {
                    "bgColor": "#30D5C8",
                    "bgAlpha": "0",
                    "cylFillColor": "#086AFC",
                    "theme": "fusion",
                    "caption": "Water Level in Tank",
                    "lowerLimit": "0",
                    "upperLimit": "114",
                    "lowerLimitDisplay": "Empty",
                    "upperLimitDisplay": "Full",
                    "numberSuffix": " cm",
                    "showValue": "1",
                    "chartBottomMargin": "45",
                    "showValue": "0"
                },
                "value": "75",
                "annotations": {
                    "origw": "400",
                    "origh": "190",
                    "autoscale": "1",
                    "groups": [{
                        "id": "range",
                        "items": [{
                                "id": "rangeBg",
                                "type": "rectangle",
                                "x": "$canvasCenterX-45",
                                "y": "$chartEndY-30",
                                "tox": "$canvasCenterX +45",
                                "toy": "$chartEndY-75",
                                "fillcolor": "#FFFFFF"
                            },
                            {
                                "id": "rangeText",
                                "type": "Text",
                                "fontSize": "11",
                                "fillcolor": "#000000",
                                "text": "80 ltrs",
                                "x": "$chartCenterX-45",
                                "y": "$chartEndY-50"
                            }
                        ]
                    }]
                }

            },
            "events": {
                "rendered": function(evtObj, argObj) {
                    setInterval(function() {
                            (fuelVolume < 10) ? (fuelVolume = 80) : "";
                            var consVolume = tank_level
                            FusionCharts("fuelMeter").feedData("&value=" + consVolume);
                            fuelVolume = consVolume;
                        },
                        1000);
                },
                //Using real time update event to update the annotation 
                //showing available volume of Diesel
                "realTimeUpdateComplete": function(evt, arg) {
                    var annotations = evt.sender.annotations,
                        dataVal = tank_level,
                        colorVal = (dataVal >= 70) ? "#6caa03" : ((dataVal <= 35) ? "#e44b02" : "#f8bd1b");
                    //Updating value
                    annotations && annotations.update('rangeText', {
                        "text": dataVal + " cm"
                    });
                    //Changing background color as per value
                    annotations && annotations.update('rangeBg', {
                        "fillcolor": colorVal
                    });

                }
            }
        });
        // chartObj.setDataXML("<chart bgAlpha='0,0'><set value='213' /></chart>");
        chartObj.setTransparent(true);
        chartObj.render();
});