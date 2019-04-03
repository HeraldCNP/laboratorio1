function cua(cad) {
  var p=1;
  for(var i=1;i<cad.length;i++){
    if((cua[i]*arr[i-1])>pro+i){
      cua=cad[i]*cau[i-1];
    }
    else {
      return false;
    }
  }
  return true;

}
console.log(cua(aabaa));
