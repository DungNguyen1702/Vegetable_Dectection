var video = document.getElementById("video");
const vegetable_content = document.createElement("div");
const app_content = document.getElementsByClassName("app__container");
const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
        const response = await fetch(
            "https://be-vegetable-dectection-mobile-9s6n.onrender.com/api/fruit/predict_fruit",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();
        const vegetableInfo = data.result
        vegetable_content.innerHTML =
            `
            <ul class = "vegetable__info">
                <li>Name: ${vegetableInfo.name}</li>
                <li>English Name: ${vegetableInfo.englishName}</li>
                <li>Origin: ${vegetableInfo.origin} </li>
                <li>Taste: ${vegetableInfo.taste}</li>
                <li>Nutrition: ${vegetableInfo.nutrition}</li>
                <li>Color: ${vegetableInfo.color}</li>
                <li>Season: ${vegetableInfo.season}</li>
                <li>Medical: ${vegetableInfo.medical}</li>
                <li>Star: ${vegetableInfo.star}</li>
            </ul>
            `
        app_content[0].appendChild(vegetable_content)
        // console.log(data);
    } catch (error) {
        console.error("Error uploading image:", error);
    }
};

navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
        // Đặt nguồn video của phần tử video thành stream từ camera
        video.srcObject = stream;
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });

document.getElementById("snap").addEventListener("click", async function () {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 320;
    canvas.height = 240;
    context.drawImage(video, 0, 0, 320, 240);

    // Chuyển đổi ảnh từ canvas thành định dạng Blob
    canvas.toBlob(async function (blob) {
        // Chuyển đổi Blob thành File để có thể thêm vào FormData
        const file = new File([blob], "snapshot.jpg", { type: "image/jpeg" });

        // Gọi hàm uploadImage với tệp ảnh đã chụp
        await uploadImage(file);
    }, "image/jpeg");
});