 // Question no 1

function validatePalindrome(str) {  
              
          
         const len = string.length;  
      
           
        for (let i = 0; i < len / 2; i++) {  
      
                
             if (string[i] !== string[len - 1 - i]) {  
                alert( 'It is not a palindrome');  
             }  
        }  
         alert( 'It is a palindrome');  
     }  
    
    
      
      
     const string = prompt('Enter a string or number: ');  
      
    const value = validatePalindrome(string);  
      
    console.log(value);


    // question no 2---------------------------------------------------------------------------------------------

    // function setMini(A) {
    //         let mini = Infinity;
    //         for (let i = 0; i < A.length; i++) {
    //             if (A[i] < mini) {
    //                 mini = A[i];
    //             }
    //         }
    //         return mini;
    //     }
        
    //     function setMaxi(A) {
    //         let maxi = -Infinity;
        
    //         for (let i = 0; i < A.length; i++) {
    //             if (A[i] > maxi) {
    //                 maxi = A[i];
    //             }
    //         }
    //         return maxi;
    //     }
        
    //     function main() {
    //         const A = [1,2,3,4,5,6];
    //         console.log("Minimum element is: " + setMini(A));
    //         console.log("Maximum element is: " + setMaxi(A));
    //      }
        
    //      main();

    //Question no 3------------------------------------------------------------------

//     function prletMissingElements(arr, N)
// {

//     // Initialize diff
//     let diff = arr[0] - 0;
  
//     for(let i = 0; i < N; i++)
//     {
  
//         // Check if diff and arr[i]-i
//         // both are equal or not
//         if (arr[i] - i != diff)
//         {
  
//             // Loop for consecutive
//             // missing elements
//             while (diff < arr[i] - i)
//             {
//                 document.write((i + diff) + " ");
//                 diff++;
//             }
//         }
//     }
// }
 
// // Driver Code
 
//      // Given array arr[]
//     let arr = [ 11 , 12 , 14 , 15 , 16 , 18 , 19 ,20 ];
      
//     let N = arr.length;
      
//     // Function call
//     prletMissingElements(arr, N);
  