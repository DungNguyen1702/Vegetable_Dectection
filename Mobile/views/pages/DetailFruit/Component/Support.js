
const Support = {
    StringProccessSplit : (stringProccess) => {
        // Tách chuỗi thành mảng các dòng
        const lines = stringProccess.split("\n");
    
        // Lọc ra các mục có dạng "- ..."
        const items = lines.map((line) => {
            return line.trim();
        });
    
        const lastResult = items.slice(1, items.length - 1);
    
        return lastResult;
    },
    ImageProccess : (imageArray)=>{
        if (imageArray.length == 0) return [];
        return imageArray.map((item) => item.image);
    },
}

export default Support