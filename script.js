const first = document.querySelector(".green ul li:first-of-type");
const second = document.querySelector(".green ul li:nth-of-type(2)");
const third = document.querySelector(".green ul li:nth-of-type(3)");
const four = document.querySelector(".green ul li:nth-of-type(4)");
const five = document.querySelector(".green ul li:nth-of-type(6)");
const six = document.querySelector(".green ul li:nth-of-type(7)");
const seven = document.querySelector(".green ul li:nth-of-type(8)");
const hoverHeader = document.querySelector(".hover-header");
const container = document.querySelector(".hover-header .container")
first.addEventListener("mouseover",function(){
    hoverHeader.style.display = "flex";
    container.children[0].classList = "show"
    container.children[1].classList.remove("show")
    container.children[2].classList.remove("show")
    container.children[3].classList.remove("show")
    container.children[4].classList.remove("show")
    container.children[5].classList.remove("show")
    container.children[6].classList.remove("show")
})
first.addEventListener("mouseout",function(){
    hoverHeader.style.display = "none";
    hoverHeader.addEventListener("mouseover",function(){
        hoverHeader.style.display = "flex"
    })
    hoverHeader.addEventListener("mouseout",function(){
        hoverHeader.style.display = "none";
    })
})

second.addEventListener("mouseover",function(){
    hoverHeader.style.display = "flex";
    container.children[1].classList = "show"
    container.children[0].classList.remove("show")
    container.children[2].classList.remove("show")
    container.children[3].classList.remove("show")
    container.children[4].classList.remove("show")
    container.children[5].classList.remove("show")
    container.children[6].classList.remove("show")
})
second.addEventListener("mouseout",function(){
    hoverHeader.style.display = "none";
    hoverHeader.addEventListener("mouseover",function(){
        hoverHeader.style.display = "flex"
    })
    hoverHeader.addEventListener("mouseout",function(){
        hoverHeader.style.display = "none";
    })
})

third.addEventListener("mouseover",function(){
    hoverHeader.style.display = "flex";
    container.children[2].classList = "show"
    container.children[0].classList.remove("show")
    container.children[1].classList.remove("show")
    container.children[3].classList.remove("show")
    container.children[4].classList.remove("show")
    container.children[5].classList.remove("show")
    container.children[6].classList.remove("show")
})
third.addEventListener("mouseout",function(){
    hoverHeader.style.display = "none";
    hoverHeader.addEventListener("mouseover",function(){
        hoverHeader.style.display = "flex"
    })
    hoverHeader.addEventListener("mouseout",function(){
        hoverHeader.style.display = "none";
    })
})

four.addEventListener("mouseover",function(){
    hoverHeader.style.display = "flex";
    container.children[3].classList = "show"
    container.children[0].classList.remove("show")
    container.children[1].classList.remove("show")
    container.children[2].classList.remove("show")
    container.children[4].classList.remove("show")
    container.children[5].classList.remove("show")
    container.children[6].classList.remove("show")
})
four.addEventListener("mouseout",function(){
    hoverHeader.style.display = "none";
    hoverHeader.addEventListener("mouseover",function(){
        hoverHeader.style.display = "flex"
    })
    hoverHeader.addEventListener("mouseout",function(){
        hoverHeader.style.display = "none";
    })
})

five.addEventListener("mouseover",function(){
    hoverHeader.style.display = "flex";
    container.children[4].classList = "show"
    container.children[0].classList.remove("show")
    container.children[1].classList.remove("show")
    container.children[2].classList.remove("show")
    container.children[3].classList.remove("show")
    container.children[5].classList.remove("show")
    container.children[6].classList.remove("show")
})
five.addEventListener("mouseout",function(){
    hoverHeader.style.display = "none";
    hoverHeader.addEventListener("mouseover",function(){
        hoverHeader.style.display = "flex"
    })
    hoverHeader.addEventListener("mouseout",function(){
        hoverHeader.style.display = "none";
    })
})

six.addEventListener("mouseover",function(){
    hoverHeader.style.display = "flex";
    container.children[5].classList = "show"
    container.children[0].classList.remove("show")
    container.children[1].classList.remove("show")
    container.children[2].classList.remove("show")
    container.children[3].classList.remove("show")
    container.children[4].classList.remove("show")
    container.children[6].classList.remove("show")
})
six.addEventListener("mouseout",function(){
    hoverHeader.style.display = "none";
    hoverHeader.addEventListener("mouseover",function(){
        hoverHeader.style.display = "flex"
    })
    hoverHeader.addEventListener("mouseout",function(){
        hoverHeader.style.display = "none";
    })
})
seven.addEventListener("mouseover",function(){
    hoverHeader.style.display = "flex";
    container.children[6].classList = "show"
    container.children[0].classList.remove("show")
    container.children[1].classList.remove("show")
    container.children[2].classList.remove("show")
    container.children[3].classList.remove("show")
    container.children[4].classList.remove("show")
    container.children[5].classList.remove("show")
})
seven.addEventListener("mouseout",function(){
    hoverHeader.style.display = "none";
    hoverHeader.addEventListener("mouseover",function(){
        hoverHeader.style.display = "flex"
    })
    hoverHeader.addEventListener("mouseout",function(){
        hoverHeader.style.display = "none";
    })
})