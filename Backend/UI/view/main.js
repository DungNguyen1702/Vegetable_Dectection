require("dotenv").config();
const { uploadImage } = require("../api/fruitAPI");
var video = document.getElementById('video');
// Lấy phương tiện truyền thông từ camera
const vegetable_content = document.createElement("div");

navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        // Đặt nguồn video của phần tử video thành stream từ camera
        video.srcObject = stream;
    })  
    .catch(function(err) {
        console.log("Something went wrong!", err);
    });

// Khi nhấn nút snap, chụp ảnh từ video và vẽ lên canvas
document.getElementById('snap').addEventListener('click', async function() {
    var canvas = document.createElement("canvas")
    var app_content = document.getElementsByClassName("app__container")
    var context = canvas.getContext('2d');
    canvas.width = 320;
    canvas.height = 240;
    context.drawImage(video,0,0, 320, 240);
    var imgData = canvas.toDataURL('image/jpeg');
    var link = document.createElement('a');
    link.href = imgData;
    link.download = 'image.png';
    link.click();
    var data = await uploadImage(imgData)
    vegetable_content.innerHTML = 
    `
        <ul class = "vegetable__info">
            <li>Name: ${data.name}</li>
            <li>English Name: ${data.englishName}</li>
            <li>Origin: ${data.origin} </li>
            <li>Taste: ${data.taste}</li>
            <li>Nutrition: ${data.nutrition}</li>
            <li>Color: ${data.color}</li>
            <li>Season: ${data.season}</li>
            <li>Medical:; ${data.medical}</li>
            <li>Star: ${data.star}</li>
        </ul>
    `
    app_content[0].appendChild(vegetable_content)
    console.log(imgData)
    // document.body.appendChild(vegetable_content)
    
});