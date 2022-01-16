export const locationData = {
    "Version": 1,
    "Key": "249538",
    "Type": "City",
    "Rank": 42,
    "LocalizedName": "Hilversum",
    "EnglishName": "Hilversum",
    "PrimaryPostalCode": "",
    "Region": {
        "ID": "EUR",
        "LocalizedName": "Europe",
        "EnglishName": "Europe"
    },
    "Country": {
        "ID": "NL",
        "LocalizedName": "Netherlands",
        "EnglishName": "Netherlands"
    },
    "AdministrativeArea": {
        "ID": "NH",
        "LocalizedName": "North Holland",
        "EnglishName": "North Holland",
        "Level": 1,
        "LocalizedType": "Province",
        "EnglishType": "Province",
        "CountryID": "NL"
    },
    "TimeZone": {
        "Code": "CET",
        "Name": "Europe/Amsterdam",
        "GmtOffset": 1.0,
        "IsDaylightSaving": false,
        "NextOffsetChange": "2022-03-27T01:00:00Z"
    },
    "GeoPosition": {
        "Latitude": 52.218,
        "Longitude": 5.143,
        "Elevation": {
            "Metric": {
                "Value": 5.0,
                "Unit": "m",
                "UnitType": 5
            },
            "Imperial": {
                "Value": 16.0,
                "Unit": "ft",
                "UnitType": 0
            }
        }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyPollenForecast",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
    ],
    "Details": {
        "Key": "249538",
        "StationCode": "EHDB",
        "StationGmtOffset": 1.0,
        "BandMap": "NL",
        "Climo": "DEBX",
        "LocalRadar": "",
        "MediaRegion": null,
        "Metar": "EHDB",
        "NXMetro": "",
        "NXState": "EURM",
        "Population": 82740,
        "PrimaryWarningCountyCode": "",
        "PrimaryWarningZoneCode": "",
        "Satellite": "EUR3",
        "Synoptic": "06260",
        "MarineStation": "",
        "MarineStationGMTOffset": null,
        "VideoCode": "",
        "LocationStem": "nl/hilversum/249538",
        "PartnerID": null,
        "Sources": [
            {
                "DataType": "AirQualityCurrentConditions",
                "Source": "Plume Labs",
                "SourceId": 63
            },
            {
                "DataType": "AirQualityForecasts",
                "Source": "Plume Labs",
                "SourceId": 63
            },
            {
                "DataType": "Alerts",
                "Source": "Royal Netherlands Meteorological Institute",
                "SourceId": 31
            },
            {
                "DataType": "CurrentConditions",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "DailyForecast",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "DailyPollenForecast",
                "Source": "Copernicus Atmosphere Monitoring Service",
                "SourceId": 78
            },
            {
                "DataType": "ForecastConfidence",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "FutureRadar",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "HourlyForecast",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "MinuteCast",
                "Source": "AccuWeather",
                "SourceId": 1
            },
            {
                "DataType": "Radar",
                "Source": "Deutscher Wetterdienst",
                "SourceId": 6
            }
        ],
        "CanonicalPostalCode": "",
        "CanonicalLocationKey": "249538"
    }
}

export const weatherData = [
    {
        "LocalObservationDateTime": "2022-01-15T17:57:00+01:00",
        "EpochTime": 1642265820,
        "WeatherText": "Cloudy",
        "WeatherIcon": 7,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
            "Metric": {
                "Value": 1.8,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 35.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "RealFeelTemperature": {
            "Metric": {
                "Value": -0.9,
                "Unit": "C",
                "UnitType": 17,
                "Phrase": "Cold"
            },
            "Imperial": {
                "Value": 30.0,
                "Unit": "F",
                "UnitType": 18,
                "Phrase": "Cold"
            }
        },
        "RealFeelTemperatureShade": {
            "Metric": {
                "Value": -0.9,
                "Unit": "C",
                "UnitType": 17,
                "Phrase": "Cold"
            },
            "Imperial": {
                "Value": 30.0,
                "Unit": "F",
                "UnitType": 18,
                "Phrase": "Cold"
            }
        },
        "RelativeHumidity": 97,
        "IndoorRelativeHumidity": 43,
        "DewPoint": {
            "Metric": {
                "Value": 1.3,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 34.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "Wind": {
            "Direction": {
                "Degrees": 158,
                "Localized": "SSE",
                "English": "SSE"
            },
            "Speed": {
                "Metric": {
                    "Value": 11.1,
                    "Unit": "km/h",
                    "UnitType": 7
                },
                "Imperial": {
                    "Value": 6.9,
                    "Unit": "mi/h",
                    "UnitType": 9
                }
            }
        },
        "WindGust": {
            "Speed": {
                "Metric": {
                    "Value": 13.2,
                    "Unit": "km/h",
                    "UnitType": 7
                },
                "Imperial": {
                    "Value": 8.2,
                    "Unit": "mi/h",
                    "UnitType": 9
                }
            }
        },
        "UVIndex": 0,
        "UVIndexText": "Low",
        "Visibility": {
            "Metric": {
                "Value": 16.1,
                "Unit": "km",
                "UnitType": 6
            },
            "Imperial": {
                "Value": 10.0,
                "Unit": "mi",
                "UnitType": 2
            }
        },
        "ObstructionsToVisibility": "",
        "CloudCover": 100,
        "Ceiling": {
            "Metric": {
                "Value": 152.0,
                "Unit": "m",
                "UnitType": 5
            },
            "Imperial": {
                "Value": 500.0,
                "Unit": "ft",
                "UnitType": 0
            }
        },
        "Pressure": {
            "Metric": {
                "Value": 1025.0,
                "Unit": "mb",
                "UnitType": 14
            },
            "Imperial": {
                "Value": 30.27,
                "Unit": "inHg",
                "UnitType": 12
            }
        },
        "PressureTendency": {
            "LocalizedText": "Falling",
            "Code": "F"
        },
        "Past24HourTemperatureDeparture": {
            "Metric": {
                "Value": -4.1,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": -7.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "ApparentTemperature": {
            "Metric": {
                "Value": 1.7,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 35.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "WindChillTemperature": {
            "Metric": {
                "Value": -1.7,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 29.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "WetBulbTemperature": {
            "Metric": {
                "Value": 1.6,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 35.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "Precip1hr": {
            "Metric": {
                "Value": 0.0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "PrecipitationSummary": {
            "Precipitation": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PastHour": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past3Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past6Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past9Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past12Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past18Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past24Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            }
        },
        "TemperatureSummary": {
            "Past6HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": 1.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 35.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 3.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 39.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            },
            "Past12HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": 1.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 35.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 4.1,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 39.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            },
            "Past24HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": 1.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 35.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 5.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 43.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            }
        },
        "MobileLink": "http://www.accuweather.com/en/nl/hilversum/249538/current-weather/249538?lang=en-us",
        "Link": "http://www.accuweather.com/en/nl/hilversum/249538/current-weather/249538?lang=en-us"
    }
]