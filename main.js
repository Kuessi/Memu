const imageFileInput = document.querySelector("#imageFileInput");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const canvas = document.querySelector("#meme");

let image;


imageFileInput.addEventListener("change", () =>{
    const imageDataUrl = URL.createObjectURL(imageFileInput.files[0]);

    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener("load", () => {
        updateNameCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
    }, { once: true });

});

topTextInput.addEventListener("change", () => {
    updateNameCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
})


bottomTextInput.addEventListener("change", () => {
    updateNameCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
})

function updateNameCanvas(canvas, image, topText, bottomText){
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const spaceBetween = height / 25;


    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);



    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;


    ctx.textBaseline = "top";
    ctx.strokeText(topText, width / 2, spaceBetween);
    ctx.fillText(topText, width / 2, spaceBetween);

    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomText, width / 2, height - spaceBetween);
    ctx.fillText(bottomText, width / 2, height - spaceBetween);

}

