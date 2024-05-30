const ImageUtils = {
    resizeImageFile(imageFile : File, size : number, callback : Function){
        const reader = new FileReader();
        const image = new Image();
        
        reader.addEventListener('load',(e)=>{
            image.src = e.target!.result as string; //읽은 파일의 내용으로 image 객체의 내용을 구성한다.
        });

        image.addEventListener('load',(e)=>{
            const imgDataUrl = ImageUtils.resizeImageElement(image,size);
            callback(imgDataUrl);
        });
        
        reader.readAsDataURL(imageFile);
    },
    resizeImageElement(image : HTMLImageElement, size : number){
        const canvas = document.createElement("canvas");
        const max_size = size;
            // 최대 기준을 1280으로 잡음.
        let width = image.width;
        let height = image.height;
        if (width > height) {
            // 가로가 길 경우
            if (width > max_size) {
            height *= max_size / width;
            width = max_size;
            }
        } else {
            // 세로가 길 경우
            if (height > max_size) {
            width *= max_size / height;
            height = max_size;
            }
        }
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d")!.drawImage(image, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.5);
        return dataUrl;
    }
}


export default ImageUtils;