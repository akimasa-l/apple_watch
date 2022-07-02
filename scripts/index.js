// get width and height
const width = window.innerWidth;
const height = window.innerHeight;
const main = document.querySelector(".main");
// add div.img to main
const imgSize = 60
const halfImgSize = imgSize / 2
const gap = 10
const sin60 = Math.sqrt(3) / 2
const imgList = [
    { x: 0, y: 0, },
    { x: 1, y: 0, },
    { x: 2, y: 0, },
    { x: 3, y: 0, },
    { x: 0, y: 1, },
    { x: 1, y: 1, },
    { x: 2, y: 1, },
    { x: 0, y: 2, },
    { x: 1, y: 2, },
    { x: 0, y: 3, },
]
if (main) {
    /*   const img01 = document.createElement("div");
      img01.classList.add("img");
      img01.style.left = `${width / 2 - halfImgSize}px`;
      img01.style.top = `${height / 2 - halfImgSize}px`;
      main.appendChild(img01);
  
      const img02 = document.createElement("div");
      img02.classList.add("img");
      img02.style.left = `${width / 2 - halfImgSize - imgSize - gap}px`;
      img02.style.top = `${height / 2 - halfImgSize}px`;
      main.appendChild(img02);
  
      const img03 = document.createElement("div");
      img03.classList.add("img");
      img03.style.left = `${width / 2 - halfImgSize + imgSize + gap}px`;
      img03.style.top = `${height / 2 - halfImgSize}px`;
      main.appendChild(img03);
  
      const img04 = document.createElement("div");
      img04.classList.add("img");
      img04.style.left = `${width / 2 - halfImgSize + 2 * (imgSize + gap)}px`;
      img04.style.top = `${height / 2 - halfImgSize}px`;
      main.appendChild(img04);
  
      const img05 = document.createElement("div");
      img05.classList.add("img");
      img05.style.left = `${width / 2 - halfImgSize - halfImgSize - (gap / 2)}px`;
      img05.style.top = `${height / 2 - halfImgSize + sin60 * (imgSize + gap)}px`;
      main.appendChild(img05);
  
      const img06 = document.createElement("div");
      img06.classList.add("img");
      img06.style.left = `${width / 2 - halfImgSize - halfImgSize - (gap / 2) + imgSize + gap}px`;
      img06.style.top = `${height / 2 - halfImgSize + sin60 * (imgSize + gap)}px`;
      main.appendChild(img06);
  
      const img07 = document.createElement("div");
      img07.classList.add("img");
      img07.style.left = `${width / 2 - halfImgSize - halfImgSize - (gap / 2) + 2 * (imgSize + gap)}px`;
      img07.style.top = `${height / 2 - halfImgSize + sin60 * (imgSize + gap)}px`;
      main.appendChild(img07);
  
      const img08 = document.createElement("div");
      img08.classList.add("img");
      img08.style.left = `${width / 2 - halfImgSize - 2 * (halfImgSize + (gap / 2)) + imgSize + gap}px`;
      img08.style.top = `${height / 2 - halfImgSize + 2 * sin60 * (imgSize + gap)}px`;
      main.appendChild(img08);
  
      const img09 = document.createElement("div");
      img09.classList.add("img");
      img09.style.left = `${width / 2 - halfImgSize - 2 * (halfImgSize + (gap / 2)) + 2 * (imgSize + gap)}px`;
      img09.style.top = `${height / 2 - halfImgSize + 2 * sin60 * (imgSize + gap)}px`;
      main.appendChild(img09);
  
      const img10 = document.createElement("div");
      img10.classList.add("img");
      img10.style.left = `${width / 2 - halfImgSize - 3 * (halfImgSize + (gap / 2)) + 2 * (imgSize + gap)}px`;
      img10.style.top = `${height / 2 - halfImgSize + 3 * sin60 * (imgSize + gap)}px`;
      main.appendChild(img10);
   */
    createImage(main, 0, 0, width, height);
    createImage(main, 1, 0, width, height);
    createImage(main, 2, 0, width, height);
    createImage(main, 3, 0, width, height);
    createImage(main, 0, 1, width, height);
    createImage(main, 1, 1, width, height);
    createImage(main, 2, 1, width, height);
    createImage(main, 0, 2, width, height);
    createImage(main, 1, 2, width, height);
    createImage(main, 0, 3, width, height);
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} width 
 * @param {number} height 
 * @returns {{left:number, top:number}}
 */
function calcPosition(x, y, width, height) {
    return {
        left: width / 2 - halfImgSize + y * (halfImgSize + (gap / 2)) + x * (imgSize + gap),
        top: height / 2 - halfImgSize + y * sin60 * (imgSize + gap)
    }
}

/**
 * 
 * @param {Element} main 
 * @param {number} x 
 * @param {number} y 
 * @param {number} width
 * @param {number} height
 * @returns {HTMLDivElement}
 */
function createImage(main, x, y, width, height) {
    const img = document.createElement("div");
    img.classList.add("img");/* 
    img.style.left = `${width / 2 - halfImgSize + y * (halfImgSize + (gap / 2)) + x * (imgSize + gap)}px`;
    img.style.top = `${height / 2 - halfImgSize + y * sin60 * (imgSize + gap)}px`; */
    const position = calcPosition(x, y, width, height);
    img.style.left = `${position.left}px`;
    img.style.top = `${position.top}px`;
    main.appendChild(img);
    return img;
}

document.addEventListener('mousemove', logKey);
/**
 * 
 * @param {MouseEvent} e 
 */
function logKey(e) {
    const imgs = document.getElementsByClassName("img");
    for (const img of imgs) {

    }
}