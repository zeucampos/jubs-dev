import * as React from "react";

const Skills = () => {
    React.useEffect(() => {
        (function () {
            var start = 0;
            var par = document.getElementById("Carousel");
            var initial = par.firstElementChild.offsetLeft;

            if (par.childElementCount > 4) {
                var scroll = function () {
                    start += 150;
                    if (par.firstElementChild.offsetLeft < initial - 150) {
                        //first element is out of sight, so move to the end of the list
                        start = 0;
                        par.firstElementChild.style.marginRight = "10px"; //reset to zero
                        par.firstElementChild.style.marginLeft = "10px"; //reset to zero
                        par.firstElementChild.style.transition = "500ms";
                        par.appendChild(par.firstElementChild);
                    } else {
                        //move the first element 'top' px up
                        par.firstElementChild.style.marginLeft = "-" + start + "px";
                        par.firstElementChild.style.transition = "500ms";
                    }
                    setTimeout(scroll, 700); //repeat after 100ms
                };
                scroll();
            }
        })();
    }, []);

    return (
        <div className="Tech-Slideshow">
            <div className="Carousel" id="Carousel">
                {[
                    {
                        name: `Javascript`,
                        backgroundColor: `#444`,
                        color: `#f1f1f1`,
                        img: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 1776 2500" viewBox="0 0 1776 2500"><path d="m1776 489.9h-1776l166.5 1805.5 721.4 204.6 721.4-204.6z" fill="#e6a329" /><path d="m887.9 637v1710l584.5-165.6 142.2-1544.4z" fill="#f1bf22" /><path d="m1352.9 858.5h-898.7l-62.6 676 1.3-4.2h763.5l-24.9 286-243.6 70.1-247.2-71.2-14.8-173.1h-224.4l32 345.9 454.4 129 454.6-129 62.6-678.9h-810.3l10.4-226.2h562.2l8.4 129.6h226.4z" fill="#fff" /><path d="m888.1 858.5h-433.9l-62.6 676 1.3-4.2h495.2v-220.5h-261.7l10.4-226.2h251.3zm-261.7 783.6h-224.9l32 345.7 454.4 128.8v-230l-247.2-71.4z" fill="#ebebeb" /><path d="m715.2 223.6h-158.1v113.5h271.2v-337.1h-113.1zm503.6-221.8h-275.6v118c36.8 36.8 56 54.5 110.2 107.8h-110.2v107.6h275.6v-107.4l-110.2-107.8h110.2z" fill="#231f20" /></svg>,
                    },
                    {
                        name: `Javascript`,
                        backgroundColor: `#D8D8D8`,
                        color: `#444`,
                        img: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 1999 2474.2" viewBox="0 0 1999 2474.2"><linearGradient id="a" gradientTransform="matrix(380.4042 -380.4175 -53.104 -53.1021 908228.3125 -700059.5)" gradientUnits="userSpaceOnUse" x1="-2115.0029" x2="-2115.0029" y1="1930.7407" y2="1929.7407"><stop offset=".2" stop-opacity=".15"/><stop offset=".85" stop-color="#616161" stop-opacity=".01"/></linearGradient><linearGradient id="b" gradientTransform="matrix(565.291 0 0 -380.9571 1196694.25 743476.5625)" gradientUnits="userSpaceOnUse" x1="-2115.2688" x2="-2114.2688" y1="1946.3563" y2="1946.3563"><stop offset=".2" stop-opacity=".55"/><stop offset=".85" stop-color="#616161" stop-opacity=".01"/></linearGradient><path d="m381 1618-381-381 1237.1-1237h761.9m0 1141.5h-761.9l-285.4 285.4 381 381" fill="#42a5f5" fill-opacity=".8"/><path d="m951.7 2188.8 285.4 285.4h761.9l-666.3-666.3" fill="#0d47a1"/><path d="m571.6 1808.1 380.4-380.5 380.4 380.4-380.4 380.5z" fill="#42a5f5"/><path d="m952 2188.5 380.4-380.4 53.1 53.1-380.4 380.4z" fill="url(#a)"/><path d="m951.7 2188.8 565.3-195.3-184.3-185.7" fill="url(#b)"/></svg>
                    },
                ].map((item, idx) => (
                    <div className="Item Text-Center" style={{ color: '#d6d6d6', background: item.backgroundColor }}>
                        <div style={{ width: '50px', margin: 'auto' }}>{item.img ? item.img : null}</div>
                        <h5 style={{ color: item.color }}>{item.name}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills