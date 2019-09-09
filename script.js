let flag = 0; // 0 - color, 1 - image

let colorsList = ["cadetblue", "brown", "darkseagreen", "lawngreen", "gray", "orangered", "blue", "blueviolet", "seagreen"];

let getSel = x => document.querySelector(x);

for (let i = 0; i < colorsList.length; i++) {
    getSel(`.div${i + 1}`).addEventListener('click', (event) => {
        if (flag === 0) {
            getSel('.container').style.backgroundColor = colorsList[i];
            getSel('.container').style.backgroundImage = ``;
        }
        if (flag === 1) {
            getSel('.container').style.background = `url('img/img${i + 1}.jpg') 100% 100% no-repeat`;
            getSel('.container').style.backgroundSize = '100% 100%';
            getSel('.container').style.backgroundColor = '';
        }
    });
}

getSel('.color_class').addEventListener('click', () => {
    flag = 0;
    setColors();
});
getSel('.image_class').addEventListener('click', () => {
    flag = 1;
    setImages();
})

let setColors = () => {
    for (let i = 0; i < 9; i++) {
        getSel(`.div${i + 1}`).style.backgroundColor = colorsList[i];
        getSel(`.div${i + 1}`).style.backgroundImage = '';

        getSel(`.div${i + 1}`).style.border = '1px solid black';
    }
};

let setImages = () => {
    for (let i = 0; i < 9; i++) {
        getSel(`.div${i + 1}`).style.backgroundColor = '';
        getSel(`.div${i + 1}`).style.backgroundImage = `url('img/img${i + 1}.jpg')`;
        getSel(`.div${i + 1}`).style.backgroundSize = '100% 100%';
        getSel(`.div${i + 1}`).style.border = '1px solid black';
    }
};
