// Sorting by done by partition swaping left and right from the pivot point.
function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partIndex;


  if(left < right){
    pivot = right;
    partIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partIndex - 1);
   quickSort(arr, partIndex + 1, right);
  }
  return arr;
}        

// Partition function smaller value to pivot piont is moved left and larger values to right
function partition(arr, pivot, left, right){
   var pivotVal = arr[pivot],
       partIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotVal){
      swap(arr, i, partIndex);
      partIndex++;
    }
  }
  swap(arr, right, partIndex);
  return partIndex;
}
        
//Swap values
function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
quickSort([10,8,16,3,2,7,4],0,7) 
//[2, 3, 4, 7, 8, 10, 16]
