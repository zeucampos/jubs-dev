import * as React from "react";

const Skills = () => {
    React.useEffect(() => {
        (function () {
            var carousel = document.getElementById("carousel"); // father node object of items list
            
            var scroll = function () {
                var height = carousel.firstElementChild.offsetHeight; // height of first carousel child

                var start = -height;

                carousel.firstElementChild.style.marginTop = start + `px`;

                setTimeout(() => {
                    carousel.firstElementChild.style.marginTop = `10px`;
                    carousel.appendChild(carousel.firstElementChild);
                }, 1000); // set start to 0, reset margin top and appends the first item of list to the #Carousel after 1000ms

                setTimeout(scroll, 2500); //repeat after 2500ms
            };
            scroll();
        })();
    }, []);

    return (
        <div className="carousel" id="carousel">
            {[
                {
                    name: `Javascript`,
                    backgroundColor: `#D8D8D8`,
                    color: `#444`,
                    img: <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 1776 2500" viewBox="0 0 1776 2500"><path d="m1776 489.9h-1776l166.5 1805.5 721.4 204.6 721.4-204.6z" fill="#e6a329" /><path d="m887.9 637v1710l584.5-165.6 142.2-1544.4z" fill="#f1bf22" /><path d="m1352.9 858.5h-898.7l-62.6 676 1.3-4.2h763.5l-24.9 286-243.6 70.1-247.2-71.2-14.8-173.1h-224.4l32 345.9 454.4 129 454.6-129 62.6-678.9h-810.3l10.4-226.2h562.2l8.4 129.6h226.4z" fill="#fff" /><path d="m888.1 858.5h-433.9l-62.6 676 1.3-4.2h495.2v-220.5h-261.7l10.4-226.2h251.3zm-261.7 783.6h-224.9l32 345.7 454.4 128.8v-230l-247.2-71.4z" fill="#ebebeb" /><path d="m715.2 223.6h-158.1v113.5h271.2v-337.1h-113.1zm503.6-221.8h-275.6v118c36.8 36.8 56 54.5 110.2 107.8h-110.2v107.6h275.6v-107.4l-110.2-107.8h110.2z" fill="#231f20" /></svg>,
                },
                {
                    name: `Javascript`,
                    backgroundColor: `#D8D8D8`,
                    color: `#444`,
                    img: <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 1776 2500" viewBox="0 0 1776 2500"><path d="m1776 489.9h-1776l166.5 1805.5 721.4 204.6 721.4-204.6z" fill="#e6a329" /><path d="m887.9 637v1710l584.5-165.6 142.2-1544.4z" fill="#f1bf22" /><path d="m1352.9 858.5h-898.7l-62.6 676 1.3-4.2h763.5l-24.9 286-243.6 70.1-247.2-71.2-14.8-173.1h-224.4l32 345.9 454.4 129 454.6-129 62.6-678.9h-810.3l10.4-226.2h562.2l8.4 129.6h226.4z" fill="#fff" /><path d="m888.1 858.5h-433.9l-62.6 676 1.3-4.2h495.2v-220.5h-261.7l10.4-226.2h251.3zm-261.7 783.6h-224.9l32 345.7 454.4 128.8v-230l-247.2-71.4z" fill="#ebebeb" /><path d="m715.2 223.6h-158.1v113.5h271.2v-337.1h-113.1zm503.6-221.8h-275.6v118c36.8 36.8 56 54.5 110.2 107.8h-110.2v107.6h275.6v-107.4l-110.2-107.8h110.2z" fill="#231f20" /></svg>,
                },
                {
                    name: `Javascript`,
                    backgroundColor: `#444`,
                    color: `#fff`,
                    img: <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 1776 2500" viewBox="0 0 1776 2500"><path d="m1776 489.9h-1776l166.5 1805.5 721.4 204.6 721.4-204.6z" fill="#e6a329" /><path d="m887.9 637v1710l584.5-165.6 142.2-1544.4z" fill="#f1bf22" /><path d="m1352.9 858.5h-898.7l-62.6 676 1.3-4.2h763.5l-24.9 286-243.6 70.1-247.2-71.2-14.8-173.1h-224.4l32 345.9 454.4 129 454.6-129 62.6-678.9h-810.3l10.4-226.2h562.2l8.4 129.6h226.4z" fill="#fff" /><path d="m888.1 858.5h-433.9l-62.6 676 1.3-4.2h495.2v-220.5h-261.7l10.4-226.2h251.3zm-261.7 783.6h-224.9l32 345.7 454.4 128.8v-230l-247.2-71.4z" fill="#ebebeb" /><path d="m715.2 223.6h-158.1v113.5h271.2v-337.1h-113.1zm503.6-221.8h-275.6v118c36.8 36.8 56 54.5 110.2 107.8h-110.2v107.6h275.6v-107.4l-110.2-107.8h110.2z" fill="#231f20" /></svg>,
                },
                {
                    name: `Javascript asdcklajrenler asdclaudhioq asdlfjadslkja asdlfalkdf alsd kadflka sdfalkd fakldf`,
                    backgroundColor: `#444`,
                    color: `#fff`,
                    img: <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 1776 2500" viewBox="0 0 1776 2500"><path d="m1776 489.9h-1776l166.5 1805.5 721.4 204.6 721.4-204.6z" fill="#e6a329" /><path d="m887.9 637v1710l584.5-165.6 142.2-1544.4z" fill="#f1bf22" /><path d="m1352.9 858.5h-898.7l-62.6 676 1.3-4.2h763.5l-24.9 286-243.6 70.1-247.2-71.2-14.8-173.1h-224.4l32 345.9 454.4 129 454.6-129 62.6-678.9h-810.3l10.4-226.2h562.2l8.4 129.6h226.4z" fill="#fff" /><path d="m888.1 858.5h-433.9l-62.6 676 1.3-4.2h495.2v-220.5h-261.7l10.4-226.2h251.3zm-261.7 783.6h-224.9l32 345.7 454.4 128.8v-230l-247.2-71.4z" fill="#ebebeb" /><path d="m715.2 223.6h-158.1v113.5h271.2v-337.1h-113.1zm503.6-221.8h-275.6v118c36.8 36.8 56 54.5 110.2 107.8h-110.2v107.6h275.6v-107.4l-110.2-107.8h110.2z" fill="#231f20" /></svg>,
                },
            ].map((item, idx) => (
                <div key={idx} className="carousel-item text-center" style={{ color: '#d6d6d6', background: item.backgroundColor }}>
                    <div className="item-image">{item.img ? item.img : null}</div>
                    <h5 style={{ color: item.color }}>{item.name}</h5>
                </div>
            ))}
        </div>
    )
}

export default Skills