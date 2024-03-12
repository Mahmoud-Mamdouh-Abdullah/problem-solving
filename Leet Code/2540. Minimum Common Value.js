/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let map = {};
    for(const n of nums1) {
        map[n] =0;
    }
    let min = Number.MAX_VALUE;
    for(const n of nums2) {
        if(map.hasOwnProperty(n)) {
            if(n < min) min = n;
        }
    }
    if(min === Number.MAX_VALUE) {
        return -1;
    }
    return min;
};