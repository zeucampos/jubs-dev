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
                    name: `Angular`,
                    backgroundColor: `#D8D8D8`,
                    color: `#444`,
                    img: 'https://i.imgur.com/vTB2pLh.png'
                },
                {
                    name: `NGINX`,
                    backgroundColor: `#D8D8D8`,
                    color: `#444`,
                    img: 'https://i.imgur.com/zXkxvpL.png'
                },
                {
                    name: `VueJS`,
                    backgroundColor: `#444`,
                    color: `#fff`,
                    img: 'https://i.imgur.com/jxvEfeV.png'
                },
                {
                    name: `HTML 5`,
                    backgroundColor: `#444`,
                    color: `#fff`,
                    img: 'https://i.imgur.com/MzuM4EJ.png'
                },
                {
                    name: `TypeScript`,
                    backgroundColor: `#444`,
                    color: `#fff`,
                    img: 'https://i.imgur.com/tRCOxaa.png'
                },
                {
                    name: `Flutter`,
                    backgroundColor: `#444`,
                    color: `#fff`,
                    img: 'https://i.imgur.com/G8QHmI7.png'
                },
            ].map((item, idx) => (
                <div key={idx} className="carousel-item text-center" style={{ color: '#d6d6d6', background: item.backgroundColor }}>
                    <div className="item-image">
                        <img src={item.img} className="img-fluid" alt={item.name} />
                    </div>
                    <br />
                    <h5 style={{ color: item.color }}>{item.name}</h5>
                </div>
            ))}
        </div>
    )
}

export default Skills