const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@database-uyoe8.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connect Database Success')
    } else {
        console.log('Connect Database Fail')
    }
})

require('./questionModel')
require('./imageModel')

const Question = mongoose.model('Question');
const Image = mongoose.model('Image');

// Question.create([
//     {question:"https://firebasestorage.googleapis.com/v0/b/fir-test-b3876.appspot.com/o/ets2016_1_101.png?alt=media&token=67e57725-ba48-4527-b665-a63e286b1981",key:"B",explain:"Key : B GT: visit là 1 noun do đó cần adj phía trước -> B là tính từ sỡ hữu"},
//     {question:"https://firebasestorage.googleapis.com/v0/b/fir-test-b3876.appspot.com/o/ets2016_1_102.png?alt=media&token=dda56e64-326b-49e9-b877-c02a49dc5130",key:"C",explain:"Cần 1 V có nghĩa phù hợp. Cấu trúc: To V (để) Dấu hiệu store, nearest. >> chọn Locate: định vị, xác định."},
//     {question:"https://firebasestorage.googleapis.com/v0/b/fir-test-b3876.appspot.com/o/ets2016_1_104.png?alt=media&token=af72e30f-ecb5-4e1a-9c22-4d3bcc17ad45",key:"A",explain:"Key: A. GT: theo sau động từ work -> trạng từ directly."},
//     {question:"https://firebasestorage.googleapis.com/v0/b/fir-test-b3876.appspot.com/o/ets2016_1_108.png?alt=media&token=f81d915e-1a76-4ca4-97cc-c9e7792f7221",key:"D",explain:"Key: D. GT:Điện tử Ulrich sẽ cài đặt miễn phí cho bất kỳ hệ thống giải trí nào mua trước ngày 30/6"},
//     {question:"https://firebasestorage.googleapis.com/v0/b/fir-test-b3876.appspot.com/o/ets2016_1_110.png?alt=media&token=bec7b4f6-1665-4a69-b0d6-de3e967f76e0",key:"A",explain:"Key: A. GT: Often đi với thì HTĐ; Once và Previously đi với quá khứ: once có thể đi với thì hiện tại hoàn thành  chọn A"},
// ])
    
    Image.create([
        {image:"https://images.pexels.com/photos/1531683/pexels-photo-1531683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500."},
        {image:"https://images.pexels.com/photos/2826351/pexels-photo-2826351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
        {image:"https://images.pexels.com/photos/2973098/pexels-photo-2973098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
        {image:"https://images.pexels.com/photos/2086917/pexels-photo-2086917.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    ])