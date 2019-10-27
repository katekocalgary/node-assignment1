
// Define currency data
const currencyData = [
    { 
        name : "CadToUsd",
        rate : 1.5
    },
    { 
        name : "UsdToCad",
        rate : 0.5
    }
];

// CadToUsd module export
exports.CadToUsd = function(amount) {
    const cadToUseRate = currencyData.filter(function(x) {
        return x.name === "CadToUsd";
    }) 
    return amount * cadToUseRate[0].rate;
};

// UsdToCad module export
exports.UsdToCad = function(amount) { 
    const UsdToCadRate = currencyData.filter(function(x){
        return x.name === "UsdToCad";
    })
    return amount * UsdToCadRate[0].rate;
};

// New currency rate setting module export
exports.setRate = function(rateName, rateValue) {
    const newRateIndex = currencyData.findIndex(x => x.name === rateName);
    if (newRateIndex != -1) {
        currencyData[newRateIndex].rate = rateValue;
        return true; 
 
    } else {
        return false;
    }    
}

// Current currency rate getting module export
exports.getRate = function(rateName){
    const newRateIndex = currencyData.findIndex(x => x.name === rateName);
    if (newRateIndex != -1){
        return currencyData[newRateIndex].rate;
    }
    else {
        return undefined;
    }
}
