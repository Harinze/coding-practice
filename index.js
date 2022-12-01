

// Find All Numbers Disappeared in an Array
//Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums.

//Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

var findDisappearedNumbers = function(nums) {
    
    let output = []

    let  set = new Set(nums)

     // set is mapping index to the value. And since,it's zero indexed, we add 1 to index. The function needs it from index 1.

      for(let i = 0; i < nums.length; i++){
         if(!set.has(i+1)){output.push(i+1)}
      }
      return output;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) // output: [5,6]
