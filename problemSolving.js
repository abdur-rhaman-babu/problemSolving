// find same name of a string

const sentence = 'Lorem, Babu ipsum dolor sit amet consectetur babu adipisicing elit. Obcaecati doloremque maxime ipsum. Iusto officiis Babu consequuntur porro maiores molestias eius cum, illo expedita beatae numquam babu voluptate architecto totam praesentium babu tenetur eligendi?'
const firstBabu = sentence.search(/babu/i)
// console.log(`The first position of Babu is ${firstBabu}`)

function getBabu(sentence) {
     return sentence.match(/babu/g).length + " " + sentence.match(/babu/gi)
}
// console.log(getBabu(sentence))

const matches = sentence.match(/babu/gi)
const babuLength = matches ? matches.length : 0
// console.log(babuLength)



// problem no 2
const findString1 = ['a','b','c','d', 'c']
const leanearSearch = (arr,c)=>{
    const firstPositionOfc = arr.indexOf(c)
    return firstPositionOfc >=0 ? firstPositionOfc : 'not found';
}

// console.log(leanearSearch(findString1,'c'))


const findString = ['a','b','c','d', 'c']
const leanearSearch1 = (arr,c)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i] === c){
            return i;
        }
    }
    return 'not found'
}

// console.log(leanearSearch(findString,'c'))

// find largest string

const arrString = ['Hasan','Bagladesh','Dhaka','Khulna','Abdullah','International'];
const getLargestString  = (arr) =>{
    let largestString = '';
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > largestString.length){
           largestString = arr[i]
        }
    }
   return `The largest string is ${largestString} and the index no is ${arr.indexOf(largestString)}`
}

console.log(getLargestString(arrString))

const arr = [25,36,100,7,8,22,1,55,99,88,102,12,105]

// array sum
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum+=arr[i]
}
// console.log(sum)

// find largest number 
let largestNumber = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>largestNumber){
        largestNumber = arr[i]
        // console.log(largestNumber)
    }
}
console.log(`largest numer is ${largestNumber}`)

// find smallest number 
let smallestNumber = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]<smallestNumber){
        smallestNumber = arr[i]
        // console.log(smallestNumber)
    }
}
console.log(`smallest number is ${smallestNumber}`)



  
