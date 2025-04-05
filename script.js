function firstNonRepeatedChar(str) {
 let arr=str.split("");
	arr.sort();
	let c=arr[0];
	let count=1;
	for(let i=1;i<arr.length;i++){
		if(arr[i]==c){
			count++;
			
		}
		else{
			if(count==1){ 
				return c;
			}
			count=1;
			c=arr[i];
		}
	}
	if(count==1){
		return c;
	}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
