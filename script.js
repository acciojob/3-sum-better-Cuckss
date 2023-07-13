function threeSum(arr, target) {
arr.sort((a,b)=>a-b);
	let closestSum=Infinity;
	for(let i=0;i<arr.length-2;i++){
		let low=i+1;
		let high=arr.length-1;
		while(low<high){
			let currSum=arr[i]+arr[low]+arr[high];
			if(Math.abs(target-currSum)<Math.abs(target-closestSum)){
				closestSum=currSum;
			}
			if(currSum<target){
				low++;
			}
		  else if(currSum>target){
			  high--;
		  }
			else{
				return closestSum
			}
		}
		
	}
	return closestSum;
  
}

module.exports = threeSum;
