/**
 * @typedef {import("./bundle")}
 */

const canvas = document.querySelector("#canvas");
const rect = canvas.getBoundingClientRect();
canvas.width = outerWidth;
canvas.height = outerHeight;

const raindropFx = new RaindropFX({
    canvas: canvas,
    background: "./images/b.jpg",
});

window.onresize = () => {
    const rect = canvas.getBoundingClientRect();
    raindropFx.resize(outerWidth, outerHeight);
}
raindropFx.start();
// https://s3.ax1x.com/2021/03/07/6KFoWQ.jpg
// https://imgtu.com/i/6KFoWQ
// https://inews.gtimg.com/newsapp_ls/0/13257231567/0