/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    

    let temp =0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]!==0)
        {
            nums[temp] = nums[i];
            temp++;
        }
    }
    
    for(let j=temp;j<nums.length;j++)
    {
        nums[j]=0;
    }
    
    return nums;
    

};