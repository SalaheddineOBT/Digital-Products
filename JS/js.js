window.onload = function(){

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

    const loading=document.querySelector(".loading");
    const data=document.querySelector("main");

   /* setTimeout(()=>{
        loading.style.opacity=0;
        loading.style.zIndex="-1";
        data.style.display="block";
    },10000);*/
    //alert(navigator.onLine);

    var startTime=new Date().getTime();
    //alert(startTime);
    setTimeout(()=>{
        loading.style.opacity=0;
        loading.style.zIndex="-1";
        data.style.display="block";
    },100);
    var img=new Image();
    img.onload=function(){
        var loadtime=new Date().getTime() - startTime;
        //alert(loadtime);
        //cheeckSpeed(loadtime);
        /*setTimeout(()=>{
            loading.style.opacity=0;
            loading.style.zIndex="-1";
            data.style.display="block";
        },loadtime);*/
        
    }
    img.src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80?"+startTime;

   /* const cheeckSpeed=(v)=>{
        alert(v)
        if(v > 1000){
            alert("low");
        }else{
            alert("medium");
        }
    }*/

    document.getElementById("barsmenu").onclick=function(){
        this.classList.toggle("fa-bars");
        this.classList.toggle("fa-times");
        
        document.getElementById("menu").classList.toggle("menuact");
    }
    // document.getElementById("closemenu").onclick=function(){
    //     document.getElementById("menu").classList.remove("menuact");
    // }
    window.onscroll=function(){
        document.getElementById("menu").classList.remove("menuact");
        document.getElementById("barsmenu").classList.remove("fa-times");
        document.getElementById("barsmenu").classList.add("fa-bars");
        if(this.scrollY > 100){ 
            document.querySelector("nav").classList.add("activenave");
            document.querySelector("header nav .menu.menuact").style.marginTop ="0px";
        }
        else  document.querySelector("nav").classList.remove("activenave");
    }
    
}

