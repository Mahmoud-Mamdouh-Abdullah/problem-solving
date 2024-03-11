/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const orderMap1 = {};
    const orderMap2 = {};
    const result = [];
    let rest = "";
    for(let i = 0; i < order.length; i++) {
        orderMap1[order[i]] = i;
        orderMap2[i] = order[i];
    }
    for(let i = 0; i < s.length; i++) {
        if(orderMap1.hasOwnProperty(s[i])) {
            result.push(orderMap1[s[i]]);
        }
        else {
            rest += s[i];
        }
    }
    result.sort((a,b) => a-b);
    result.map((c) => {
        rest += orderMap2[c];
    });
    return rest;
}