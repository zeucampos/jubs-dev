import * as React from "react";

const Skills = () => {
    React.useEffect(() => {
        (function () {
          var start = 0;
          var par = document.getElementById("Carousel");
          var initial = par.firstElementChild.offsetLeft;
    
          var scroll = function () {
            start+=150;
            console.log(start, par.firstElementChild.offsetLeft, initial)
            if (par.firstElementChild.offsetLeft < initial-150) {
              //first element is out of sight, so move to the end of the list
              start = 0;
              par.firstElementChild.style.marginRight = "10px"; //reset to zero
              par.firstElementChild.style.marginLeft = "10px"; //reset to zero
              par.firstElementChild.style.transition = "1000ms";
              par.appendChild(par.firstElementChild);
            } else {
              //move the first element 'top' px up
              par.firstElementChild.style.marginLeft = "-" + start + "px";
              par.firstElementChild.style.transition = "500ms";
            }
            setTimeout(scroll, 700); //repeat after 100ms
          };
          scroll();
        })();
      }, []);

    return (
        <div className="Tech-Slideshow">
          <div className="Carousel" id="Carousel">
            {[
              {
                name: `Coisa Linda`,
                tag: `T`,
                color: `#444`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Fofura`,
                tag: `E`,
                color: `#444`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Gatona`,
                tag: `A`,
                color: `#ed3261`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Gostosa`,
                tag: `M`,
                color: `#ed3261`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `deusa`,
                tag: `O`,
                color: `#ed3261`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Charmosa`,
                tag: `V`,
                color: `#9f32ed`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Cheirosa`,
                tag: `A`,
                color: `#9f32ed`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Tesuda`,
                tag: `N`,
                color: `#9f32ed`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Pitéu`,
                tag: `E`,
                color: `#9f32ed`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Mulherão da porra`,
                tag: `S`,
                color: `#9f32ed`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Saborosa`,
                tag: `S`,
                color: `#9f32ed`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Suculenta`,
                tag: `A`,
                color: `#9f32ed`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
            ].map((variant, idx) => (
              <div style={{ color: '#d6d6d6', background: variant.color }}>
                {/* <img src={variant.img} style={{ width: `80px` }}/> */}
                <h2>{variant.tag}</h2>
                <h5 style={{ color: '#d6d6d6' }}>{variant.name}</h5>
              </div>
            ))}
          </div>
        </div>
    )
}

export default Skills