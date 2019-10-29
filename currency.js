
// Define currency data
const currencyData = { 
        CadToUsd : 1.5,
        UsdToCad : 0.5
    };

// CadToUsd module export
exports.CadToUsd = function(amount) {
    return amount * Number(currencyData.CadToUsd);
    } ;


// UsdToCad module export
exports.UsdToCad = function(amount) { 
    return amount * Number(currencyData.UsdToCad);
    } ;

// New currency rate setting module export
exports.setRate = function(rateName, rateValue) {
    if (currencyData[rateName]) {
        currencyData[rateName] = rateValue;
        return true;
    } else {
        return false;
    } 
}

// Current currency rate getting module export
exports.getRate = function(rateName){
    if (currencyData[rateName]){
        return currencyData[rateName];
    }
    else {
        return undefined;
    }
}
