a)

{
    meterConfig: {
    “
    viewReward”: 0,
    Tap: [1]
    }
}


Corrección

{
    "meterConfig": [{
        “viewReward”: 0,
        "tap": 0
        }
    ]
}

b)

{
"AdColonyGeneralConfig",
{
"active": 1,
["timesToShow: -1],
"coolDown": 0,
"daysSinceInstall": 7,
maxWinStreak: “-1”
}
}

Corrección
{
"AdColonyGeneralConfig":[{
        "active": 1,
        "timesToShow": -1
        "coolDown": 0,
        "daysSinceInstall": 0,
        "maxWinStreak": -1
        }
    ]
}