function cual(arr){
  let pro=-100000000;
    for(var i=1;i<arr.length;i++){
      if((arr[i]*arr[i-1])>pro){
        pro=arr[i]*arr[i-1];
      }
    }
    return pro;
}

console.log(cual([3, 6, -2, -5, 7, 3]));
