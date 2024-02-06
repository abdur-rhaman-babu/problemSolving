// const status = true;
// console.log('task one')

// promise defination
// const promises = new Promise ((resolve,reject) =>{
    
//     setTimeout(() => {
//         if(status){
//             resolve('done')
//         }else{
//             reject('failed')
//         }
//     },2000);
// })

// promise call
// promises
//         .then((v)=>{
//             console.log(v)
//         })
//         .catch((e)=>{
//             console.log(e)
//         })

// console.log('task two')


const paymentSuccess = true;
const marks = 90; //Math.floor(prompt('Enter your marks')); 
const enroll = () =>{
    console.log('Course enrollment is on progress..')
    const promise = new Promise ((resolve,reject)=>{

        setTimeout(() => {
            if(paymentSuccess){
                resolve()
            }else{
                reject('Payment is failed')
            }
        },2000);
    })
    return promise;
}
const progress = () =>{
    console.log('Course is on progress....')

    const promise1 = new Promise((resolve,reject)=>{

        setTimeout(() => {
            if(marks >=80){
                resolve()
            }else{
                reject('You could not get enough marks for getting certificate')
            }
        },3000);
    })
    return promise1;
}

const certificate = () =>{
    console.log('The certificate is being been prepared')

    const promise = new Promise ((resolve)=>{
        setTimeout(() => {
            resolve('Congrats! on your brilliant success')
        },1000);
    })
    return promise;
}

enroll()
.then(progress)
.then(certificate)
.then((v)=>{
    console.log(v)
})
.catch((e)=>{
    console.log(e)
})
