// get width and height
const width = window.innerWidth;
const height = window.innerHeight;
const main = document.querySelector(".main");
// add div.img to main
const imgSize = 60
const halfImgSize = imgSize / 2
const gap = 10
if (main) {
    const img1 = document.createElement("div");
    img1.classList.add("img");
    img1.style.left = `${width / 2 - halfImgSize}px`;
    img1.style.top = `${height / 2 - halfImgSize}px`;
    main.appendChild(img1);

    const img2 = document.createElement("div");
    img2.classList.add("img");
    img2.style.left = `${width / 2 - halfImgSize - imgSize - gap}px`;
    img2.style.top = `${height / 2 - halfImgSize}px`;
    main.appendChild(img2);

    const img3 = document.createElement("div");
    img3.classList.add("img");
    img3.style.left = `${width / 2 - halfImgSize + imgSize + gap}px`;
    img3.style.top = `${height / 2 - halfImgSize}px`;
    main.appendChild(img3);

    const img4 = document.createElement("div");
    img4.classList.add("img");
    img4.style.left = `${width / 2 - halfImgSize + 2 * (imgSize + gap)}px`;
    img4.style.top = `${height / 2 - halfImgSize}px`;
    main.appendChild(img4);
}
document.addEventListener('mousemove', logKey);
/**
 * 
 * @param {MouseEvent} e 
 */
function logKey(e) {
    const img1 = document.querySelector(".img");
    const img2 = document.querySelector(".img:nth-child(2)");
    const img3 = document.querySelector(".img:nth-child(3)");
    const img4 = document.querySelector(".img:nth-child(4)");
    if (img1) {
        img1.style.left = `${e.clientX - halfImgSize}px`;
        img1.style.top = `${e.clientY - halfImgSize}px`;
    }
    if (img2) {
        img2.style.left = `${e.clientX - halfImgSize - imgSize - gap}px`;
        img2.style.top = `${e.clientY - halfImgSize}px`;
    }
    if (img3) {
        img3.style.left = `${e.clientX - halfImgSize + imgSize + gap}px`;
        img3.style.top = `${e.clientY - halfImgSize}px`;
    }
    if (img4) {
        img4.style.left = `${e.clientX - halfImgSize + 2 * (imgSize + gap)}px`;
        img4.style.top = `${e.clientY - halfImgSize}px`;
    }
}