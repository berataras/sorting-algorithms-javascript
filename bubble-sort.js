/*
* Bubble Sort, yan yana olan element’leri tekrar tekrar yer değiştirerek çalışan en basit sıralama algoritmasıdır.
* Bu algoritma büyük veriler için uygun değildir. Average ve worst-case time complexity’leri oldukça yüksektir.
*/

function bubbleSort(arr, n){
    /*
    * 0'dan başlayıp n-1'e kadar yani 5 adım atacak.
    * burada adımları atacak sayı seçilir kısaca. yani bizim durumumuzda 30 oluyor.
    */
    for (let i = 0; i < n-1; i++) {
        /*
        * ikinci döngü elemanların üzerinde dolaşmak için. n-i-1 yapmamızın sebebi zaten sıralanmış olan i index'ini
        * tekrar dahil etmemek.
        */
        for (let j = 0; j < n-i-1; j++) {
            /*
             * ilk adımda burada array'imizin sıfırıncı elemanı olan 30 ile bir sonraki elemanı olan, yani 1 ile
             * karşılaştırılıyor.
            */
            if (arr[j] > arr[j+1]) {
                /*
                * 30'un 1'den büyük olduğunu görünce swap yapıyor ve yer değiştiriyorlar yeni array şu şekilde:
                * [1, 30, 11, 22, 34, 4345, -1]
               */
                swap(arr,j,j+1);
                /*
                * Daha sonra tekrar başa dönüyor ve bu sefer i döngüsü 1. index'ten yani 30'dan devam ediyor.
                * j döngüsü n-i-1 hesaplamasından sonra geriye 5 adım kaldığını bilmiş oluyoruz.
                * yani 30 dan sonrasına bakacak olursak 11,22,34,43,-1
                */
            }
        }
    }
    return arr;
}

function swap(arr, xp, yp)
{
    let temp = arr[xp]; // 30'un yerine 1 geçmeden önce 30 temp içerisine atılıyor.
    arr[xp] = arr[yp]; // 1, 30'un index'ine atılıyor. Çünkü swap olmak zorundalar.
    arr[yp] = temp; // daha sonrasında 30 nihayetinde 1'in index'ine atılıyor ve yer değiştirmiş oluyorlar.
}


const myArray = [30, 1, 11, 22, 34, 43, -1];

const toBubbleSort = bubbleSort(myArray, myArray.length);

console.log(toBubbleSort);