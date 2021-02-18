
document.querySelector(".header--burger")
.addEventListener('click',()=>{
    document.querySelector(".header--burger").classList.toggle('active');
    document.querySelector(".header--body__nav").classList.toggle('active');
    document.querySelector("html").classList.toggle("lock");
})


