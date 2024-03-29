// get width and height
const width = window.innerWidth;
const height = window.innerHeight;
const main = document.querySelector(".main");
// add div.img to main
const imgSize = 60
const halfImgSize = imgSize / 2
const gap = 10
const sin60 = Math.sqrt(3) / 2
const center = {
    left: width / 2,
    top: height / 2
}

const imgPositionList = [
    { x: +0, y: -2, },
    { x: +1, y: -2, },
    { x: +2, y: -2, },

    { x: -1, y: -1, },
    { x: +0, y: -1, },
    { x: +1, y: -1, },
    { x: +2, y: -1, },

    { x: -2, y: +0, },
    { x: -1, y: +0, },
    { x: +0, y: +0, },
    { x: +1, y: +0, },
    { x: +2, y: +0, },

    { x: -2, y: +1, },
    { x: -1, y: +1, },
    { x: +0, y: +1, },
    { x: +1, y: +1, },

    { x: -2, y: +2, },
    { x: -1, y: +2, },
    { x: +0, y: +2, },
]
if (main) {
    const imgs = imgPositionList.map(({ x, y }) => { return { img: main.appendChild(createImage(main, x, y, width, height)), x, y } });
    /**
         * 
         * @param {MouseEvent} e 
         */
    function logKey(e) {
        for (const { img, x, y } of imgs) {
            const { left, top } = calcPosition(e.clientX, e.clientY, x, y);
            // console.log({ left, top, clientX: e.clientX, clientY: e.clientY, })
            const size = calcSize(left, top)
            const halfSize = size / 2;
            img.style.left = `${left - halfSize}px`;
            img.style.top = `${top - halfSize}px`;
            img.style.width = `${size}px`;
            img.style.height = `${size}px`;
            img.style.backgroundSize = `${size}px`;
        }
    }
    document.addEventListener('mousemove', logKey);

}


/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} left 
 * @param {number} top 
 * @returns {{left:number, top:number}}
 */
function calcPosition(left, top, x, y) {
    return {
        left: left /* - halfImgSize */ + y * (halfImgSize + (gap / 2)) + x * (imgSize + gap),
        top: top /* - halfImgSize */ + y * sin60 * (imgSize + gap)
    }
}

function calcSize(left, top) {
    const xPos = left /* + halfImgSize */
    const yPos = top /* + halfImgSize */
    const distance = Math.sqrt((center.left - xPos) * (center.left - xPos) + (center.top - yPos) * (center.top - yPos))
    if (distance < 2 * (imgSize + gap)) {
        return imgSize
    }
    if (distance < 3 * (imgSize + gap)) {
        const a = -(distance - 2 * (imgSize + gap)) / (imgSize + gap)
        if (0 < a < 1) {
            return Math.pow(Math.cos(a * Math.PI / 2), 2) * imgSize
        }
        console.log("やばい")
    }
    return 0;
}

/**
 * 
 * @param {Element} main 
 * @param {number} x 
 * @param {number} y 
 * @returns {HTMLDivElement}
 */
function createImage(main, x, y) {
    const img = document.createElement("div");
    img.classList.add("img");/* 
    img.style.left = `${width / 2 - halfImgSize + y * (halfImgSize + (gap / 2)) + x * (imgSize + gap)}px`;
    img.style.top = `${height / 2 - halfImgSize + y * sin60 * (imgSize + gap)}px`; */
    const { left, top } = calcPosition(center.left, center.top, x, y);
    img.style.left = `${left}px`;
    img.style.top = `${top}px`;
    main.appendChild(img);
    return img;
}
console.log(center)
console.log(calcPosition(center.top, center.left, 0, 0));