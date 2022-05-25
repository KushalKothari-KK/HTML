// navbar component

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', ()=>{
    headerElem.classList.toggle("active")
})


// portfolio taqbbed component 

const p_btns = document.querySelector(".p-btns");  //parent
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll('.img-ovelay');

p_btns.addEventListener('click',(e)=>{

    const p_btn_clicked = e.target;  //to get current clicked button block

    // console.log(p_btn_clicked);

    //For making button up and down
    p_btn.forEach((curElem)=>{
        curElem.classList.remove('p-btn-active');
    })

    p_btn_clicked.classList.add('p-btn-active');

    // to find the number in the data attr
    const btn_num = p_btn_clicked.dataset.btnNum;  //btnNum is way of writing data-btn-num

    // p_img_elem  p-btn--1
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem)=>curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem)=>curElem.classList.remove("p-image-not-active"));
})

// swiper js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   for media query

const myJsMedia = (widthSize) =>{
    if(widthSize.matches){
        const swiper = new Swiper(".swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }else{
        const swiper = new Swiper(".swiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}
 const widthSize =  window.matchMedia("(max-width:980px)");
// Call listener function at run time
myJsMedia(widthSize);
//  Attach listener function on state changes
 widthSize.addEventListener("change",myJsMedia);



//   Scroll to top button

const heroSection = document.querySelector(".section-hero")

const footerElem = document.querySelector(".section-footer");

const scrollToTop = document.createElement("div");
scrollToTop.classList.add("scrollTop-style");

scrollToTop.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollToTop);

const scrollTopfun = () =>{
    heroSection.scrollIntoView({behavior:"smooth"});
}

scrollToTop.addEventListener('click', scrollTopfun);


// Animate Number

const counterNum = document.querySelectorAll(".counter-number");

const speed = 200;

counterNum.forEach((crEle)=>{
    const updateNumber = () =>{
        const targetNumber = parseInt(crEle.dataset.number);
        const initialNum = parseInt(crEle.innerText);

        const incrementNumber = Math.trunc(targetNumber/speed); //will increment number ex first one 10 20 30 in 5sec till 2000
        // console.log(incrementNumber);
        if(initialNum < targetNumber){
            crEle.innerText =  `${initialNum + incrementNumber} +`;
            setTimeout(updateNumber,5)
        }
    };
    updateNumber();
})


// Lazy loading images

const imgRef = document.querySelector("img[data-src]");

const lazyImg = (entries) =>{
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting) return;
    entry.target.src = imgRef.dataset.src;
}

const imgObserver =  new IntersectionObserver(lazyImg,{
    root:null,
    threshold:0,
});
imgObserver.observe(imgRef)