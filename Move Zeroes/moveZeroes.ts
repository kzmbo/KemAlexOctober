/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    for (let i = nums.length; i >= 0; i--){
        if(nums[i] == 0){
            for (let j = i + 1; j < nums.length; j++){
                let temp:number = nums[j];
                nums[j-1] = temp;
            } 
            nums[nums.length - 1] = 0;
        }
        
    }
};