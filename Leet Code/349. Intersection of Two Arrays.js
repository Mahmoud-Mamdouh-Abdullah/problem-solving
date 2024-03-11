/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const a = new Set(nums1);
    const b = new Set(nums2);
    const result = [];
    for(const aa of a) {
        if(b.has(aa)) {
            result.push(aa);
        }
    }
    return result;
};