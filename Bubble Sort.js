function bubbleSort(arr){
   var len = arr.length; //array variable
   for (var i = len-1; i>=0; i--){ // outer loop
     for(var j = 1; j<=i; j++){ // inner loop
       if(arr[j-1]>arr[j]){ // swapping on condition
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
bubbleSort([7,5,2,4,6,8]); //[2, 4, 5, 6, 7, 8]