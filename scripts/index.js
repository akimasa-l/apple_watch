// get width and height
const width = window.innerWidth;
const height = window.innerHeight;
const main = document.querySelector(".main");
// add div.img to main
const imgSize = 60
const halfImgSize = imgSize / 2
const gap = 10
const sin60 = Math.sqrt(3) / 2
if (main) {
    const img01 = document.createElement("div");
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

}
document.addEventListener('mousemove', logKey);
/**
 * 
 * @param {MouseEvent} e 
 */
function logKey(e) {
    const img01 = document.querySelector(".img");
    const img02 = document.querySelector(".img:nth-child(2)");
    const img03 = document.querySelector(".img:nth-child(3)");
    const img04 = document.querySelector(".img:nth-child(4)");
    const img05 = document.querySelector(".img:nth-child(5)");
    const img06 = document.querySelector(".img:nth-child(6)");
    const img07 = document.querySelector(".img:nth-child(7)");
    const img08 = document.querySelector(".img:nth-child(8)");
    const img09 = document.querySelector(".img:nth-child(9)");
    const img10 = document.querySelector(".img:nth-child(10)");
    if (img01) {
        img01.style.left = `${e.clientX - halfImgSize}px`;
        img01.style.top = `${e.clientY - halfImgSize}px`;
    }
    if (img02) {
        img02.style.left = `${e.clientX - halfImgSize - imgSize - gap}px`;
        img02.style.top = `${e.clientY - halfImgSize}px`;
    }
    if (img03) {
        img03.style.left = `${e.clientX - halfImgSize + imgSize + gap}px`;
        img03.style.top = `${e.clientY - halfImgSize}px`;
    }
    if (img04) {
        img04.style.left = `${e.clientX - halfImgSize + 2 * (imgSize + gap)}px`;
        img04.style.top = `${e.clientY - halfImgSize}px`;
    }
    if (img05) {
        img05.style.left = `${e.clientX - halfImgSize - halfImgSize - (gap / 2)}px`;
        img05.style.top = `${e.clientY - halfImgSize + sin60 * (imgSize + gap)}px`;
    }
    if (img06) {
        img06.style.left = `${e.clientX - halfImgSize - halfImgSize - (gap / 2) + imgSize + gap}px`;
        img06.style.top = `${e.clientY - halfImgSize + sin60 * (imgSize + gap)}px`;
    }
    if (img07) {
        img07.style.left = `${e.clientX - halfImgSize - halfImgSize - (gap / 2) + 2 * (imgSize + gap)}px`;
        img07.style.top = `${e.clientY - halfImgSize + sin60 * (imgSize + gap)}px`;
    }
    if (img08) {
        img08.style.left = `${e.clientX - halfImgSize - 2 * (halfImgSize + (gap / 2)) + imgSize + gap}px`;
        img08.style.top = `${e.clientY - halfImgSize + 2 * sin60 * (imgSize + gap)}px`;
    }
    if (img09) {
        img09.style.left = `${e.clientX - halfImgSize - 2 * (halfImgSize + (gap / 2)) + 2 * (imgSize + gap)}px`;
        img09.style.top = `${e.clientY - halfImgSize + 2 * sin60 * (imgSize + gap)}px`;
    }
    if (img10) {
        img10.style.left = `${e.clientX - halfImgSize - 3 * (halfImgSize + (gap / 2)) + 2 * (imgSize + gap)}px`;
        img10.style.top = `${e.clientY - halfImgSize + 3 * sin60 * (imgSize + gap)}px`;
    }
}