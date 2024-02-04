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
const arr = ['a','b','c','d', 'c']
const leanearSearch = (arr,c)=>{
    const firstPositionOfc = arr.indexOf(c)
    return firstPositionOfc >=0 ? firstPositionOfc : 'not found';
}

// console.log(leanearSearch(arr,'c'))


const arr1 = ['a','b','c','d', 'c']
const leanearSearch1 = (arr,c)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i] === c){
            return i;
        }
    }
    return 'not found'
}

// console.log(leanearSearch(arr,'c'))

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
