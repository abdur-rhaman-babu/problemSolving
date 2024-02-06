const paymentSuccess = true;
const marks = Math.floor(prompt('Enter your marks'));
const enroll = (callback) =>{
    console.log('Course enrollment is on progress..')

    setTimeout(() => {
        if(paymentSuccess){
            callback()
        }else{
            console.log('Payment is failed')
        }
    },2000);
}
const progress = (callback) =>{
    console.log('Course is on progress....')

    setTimeout(() => {
        if(marks >=80){
            callback()
        }else{
            console.log('You could not get enough marks for getting certificate')
        }
    },3000);
}

const certificate = () =>{
    console.log('The certificate is being been prepared')

    setTimeout(() => {
        console.log('Congrats! on your brilliant success')
    },1000);
}
enroll(()=>{
   progress(certificate)
})