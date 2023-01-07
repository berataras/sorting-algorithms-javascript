// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, begin, mid, end) {

    let n1 = mid - begin + 1;
    let n2 = end - mid;

    // temp array'ler oluşturuluyor.
    let L = new Array(n1);
    let R = new Array(n2);

    // Data temp array'lere kopyalanıyor.
    for (let i = 0; i < n1; i++)
        L[i] = arr[begin + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    // Merge the temp arrays back into arr[begin..end]

    // Birinci subarray'in index'i
    let i = 0;

    // İkinci subarray'in index'i
    let j = 0;

    // Birleştirilen subarray'in index'i
    let k = begin;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, begin, end){
    if(begin >= end){
        return; //array en küçük parçasına bölündüğünde boş return dönüyor.
    }
    let mid = begin + parseInt((end-begin)/2); //array'in ortası bulunuyor.
    mergeSort(arr, begin, mid); //array'in başından yarısına [30, 1, 11, 22]
    mergeSort(arr, mid + 1, end); //array'in ortasından + 1 ve sonuna [34, 43, -1]
    merge(arr, begin, mid, end); // bölünme bittiğinde merge işlemi başlıyor.
    return arr;
}

const myArray = [30, 1, 11, 22, 34, 43, -1];

const toMergeSort = mergeSort(myArray, 0, 6);

console.log(toMergeSort);