window.onload=function() {

    const loading=document.querySelector(".loading");
    const data=document.querySelector(".main");

    setTimeout(()=>{
        loading.style.opacity=0;
        loading.style.zIndex="-1";
        data.style.display="block";
    },4000);
    



    const btn=document.querySelectorAll(".btn");
    btn.forEach(b => {
        b.addEventListener("click",function(e){
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples=document.createElement("span");
            ripples.classList.add('spantext')
            ripples.style.left= x + 'px';
            ripples.style.top= y + 'px';
            this.appendChild(ripples);

            setTimeout(()=>{
                ripples.classList.remove("spantext");
            },1000)
        });
    });

}