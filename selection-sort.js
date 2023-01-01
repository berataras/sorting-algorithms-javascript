/*
* Algoritma şu şekilde çalışır: Listenin ilk elemanına alır. Kendinden sonraki tüm sayılar ile kıyaslanır. Listedeki en
*  küçük sayıyı bulduğumuzda indisdeki değer ile yer değiştiririz. Bu şekilde tüm elemanların üzerinden geçilir.
*/

function selectionSort(arr,  n)
{
    // tek tek sıralanmamış elemanlar üzerinden geçer.
    for (let i = 0; i < n-1; i++)
    {
        // min_idx array içerisindeki sıralanmamış en küçük elemanın index'ini alır.
        let min_idx = i;
        for (let j = i + 1; j < n; j++){
            /*
            * dizi içerisinde sırayla dolaşılırken 30'dan küçük olan 1'i bulur sonra 11, 22 ve en son -1'in en küçük
            * olduğuna karar verir ve en son -1 içeride kalır.
            */
            if (arr[j] < arr[min_idx]){
                min_idx = j;
            }
        }

        // İlk elemanla bulunan en küçük eleman yer değiştirir.
        swap(arr,min_idx, i);
    }

    return arr;


}

function swap(arr,xp, yp)
{
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

const myArray = [30, 1, 11, 22, 34, 43, -1];

const toSelectionSort = selectionSort(myArray, myArray.length);

console.log(toSelectionSort);