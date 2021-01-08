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
            setTimeout(scroll, 1000); //repeat after 100ms
          };
          scroll();
        })();
      }, []);

    return (
        <div className="Tech-Slideshow">
          <div className="Carousel" id="Carousel">
            {[
              {
                name: `Bootstrap`,
                tag: `B`,
                color: `#62247a`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Bootstrap`,
                tag: `B`,
                color: `#444`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Bootstrap`,
                tag: `C`,
                color: `#f9f9f9`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Bootstrap`,
                tag: `D`,
                color: `#df9877`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Bootstrap`,
                tag: `E`,
                color: `#a8d8f5`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `PHP`,
                tag: `P`,
                color: `#345bac`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Bootstrap`,
                tag: `G`,
                color: `#444`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Bootstrap`,
                tag: `H`,
                color: `#444`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Bootstrap`,
                tag: `I`,
                color: `#444`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Bootstrap`,
                tag: `J`,
                color: `#444`,
                img:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              },
              {
                name: `Bootstrap`,
                tag: `K`,
                color: `#444`,
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