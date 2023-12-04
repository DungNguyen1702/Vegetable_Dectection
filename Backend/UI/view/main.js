var video = document.getElementById("video");
const vegetable_content = document.createElement("div");
vegetable_content.className = "vegetable__container"
const app_content = document.getElementsByClassName("app__container");

const StringProccessSplit = (stringProccess) => {
    // Tách chuỗi thành mảng các dòng
    const lines = stringProccess.split("\n");

    // Lọc ra các mục có dạng "- ..."
    const items = lines.map((line) => {
        return line.trim();
    });

    const lastResult = items.slice(1, items.length - 1);

    return lastResult;
}
const ImageProccess = (imageArray) => {
    if (imageArray.length == 0) return [];
    return imageArray.map((item) => item.image);
}

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
        const fruitImages = vegetableInfo.FruitImages
        const vegetableDishes = vegetableInfo.Dishes
        
        // console.log(ImageProccess(fruitImages))
        // console.log(fruitImages[0]['image'])
        // console.log(StringProccessSplit(vegetableDishes[0].ingredients))
        // console.log(fruitImages[0]['image'])
        // console.log((vegetableDishes[0].DishImages)[0]['image'])
        // console.log((vegetableDishes[1].DishImages)[0]['image'])
        // console.log((vegetableDishes[2].DishImages)[0]['image'])

        var style =
        `
            .vegetable__item-1::after{
                background-image : url(${fruitImages[0]['image']});
            }
            .vegetable__item-2::after{
                background-image : url(${(vegetableDishes[0].DishImages)[0]['image']});
            }.vegetable__item-3::after{
                background-image : url(${(vegetableDishes[1].DishImages)[0]['image']});
            }.vegetable__item-4::after{
                background-image : url(${(vegetableDishes[2].DishImages)[0]['image']});
            }
        `

        vegetable_content.innerHTML =
            `
            <div class="vegetable__item vegetable__item-1">
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
            </div>
            <div class="vegetable__item vegetable__item-2">
                <ul class = "vegetable__info">
                    <li>Name: ${vegetableDishes[0].name}</li>
                    <li>Ingredients:</li>
                    <li>Nutrition:</li>
                </ul>
            </div>
            <div class="vegetable__item vegetable__item-3">
                <ul class = "vegetable__info">
                    <li>Name: ${vegetableDishes[1].name}</li>
                    <li>Ingredients:</li>
                    <li>Nutrition:</li>
                </ul>
            </div>
            <div class="vegetable__item vegetable__item-4">
                <ul class = "vegetable__info">
                    <li>Name: ${vegetableDishes[2].name}</li>
                    <li>Ingredients:</li>
                    <li>Nutrition:</li>
                </ul>
            </div>
            `
        
        var styleSheet = document.createElement("style");
        styleSheet.innerText = style;
        document.head.appendChild(styleSheet);
        app_content[0].appendChild(vegetable_content);
        for (let i = 0; i < vegetableDishes.length; i ++){
            var ingredients = document.querySelector(`.vegetable__item-${i + 2} .vegetable__info li:nth-child(2)`);
            var ingredientsList = (StringProccessSplit(vegetableDishes[i].ingredients));
            for (let y = 0; y <ingredientsList.length; y++){
                var info = document.createElement('p')
                info.textContent= ingredientsList[y]
                info.style.margin = '10px 10px'  
                ingredients.appendChild(info)
            }
            var nutrition = document.querySelector(`.vegetable__item-${i + 2} .vegetable__info li:nth-child(3)`);
            var nutritionList = (StringProccessSplit(vegetableDishes[i].nutrition));
            for (let y = 0; y <nutritionList.length; y++){
                var info = document.createElement('p')
                info.textContent= nutritionList[y]
                info.style.margin = '10px 10px'  
                nutrition.appendChild(info)
            }
        }
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

