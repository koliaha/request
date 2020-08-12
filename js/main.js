var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "113px";
    } else {
        document.getElementById("navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
    document.querySelector("#display-drop").style.display = "none"
    document.querySelector(".copy").style.display = "none"
    document.querySelector(".callback-modal").style.display = "none"
    document.querySelector('.shadow').style.display = "none"
    document.querySelector('.shadow-blur-modal').style.display = "none"
}


function display(x){
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
document.querySelector('.category').addEventListener('click', (e) => {
    display(document.querySelector("#display-drop"))
    display(document.querySelector('.shadow'))
})
document.querySelector('.mail-copy').addEventListener('click', (e) => {
    display(document.querySelector(".copy"))
    display(document.querySelector('.shadow'))
})

document.querySelector('.call').addEventListener('mouseover', (e) => {
    document.querySelector(".callback-modal").style.display = "block"
    document.querySelector('.shadow-blur-modal').style.display = "block"
    document.querySelector('.shadow').style.display = "block"
})
document.querySelector('.close').addEventListener('click', (e) => {
    document.querySelector(".callback-modal").style.display = "none"
    document.querySelector('.shadow-blur-modal').style.display = "none"
    document.querySelector('.shadow').style.display = "none"
})

document.querySelector('.plus').addEventListener('click', (e) => {
    let x = document.querySelectorAll('.complex-more')
    x.forEach((el) => {
        if (el.style.display == "block") {
            el.style.display = "none";
            e.target.innerHTML = '+'
        } else {
            el.style.display = "block";
            e.target.innerHTML = 'X'
        }
    })

})
document.querySelector('.copy').addEventListener('click', (e) => {
    console.log('copy')
     document.querySelector(".copymail-field").select();
     document.execCommand("copy");
})

document.querySelectorAll('#display-drop ul li a').forEach((el)=>{
    el.addEventListener('click', (elem)=>{
        elem.preventDefault();
        document.querySelector('.category').innerHTML = elem.target.innerHTML
        display(document.querySelector("#display-drop"))
    })
})
