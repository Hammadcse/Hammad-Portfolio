const links = document.querySelectorAll(".alternate-style"),
      totalLinks = links.length;

    function setActiveStyle(color){
        for(let i =0; i<totalLinks; i++){
            if(color == links[i].getAttribute("title")){
                links[i].removeAttribute("disabled");
            }
            else{
                links[i].setAttribute("disabled", "true");
            }
        }
    }
    
//Toggle style-switcher
document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

//Body skin
const skins = document.querySelectorAll(".body-skin");
      totalSkins = skins.length;

    for(let i = 0; i<totalSkins; i++){
        skins[i].addEventListener("change",function(){
            if(this.value == "light"){
                document.querySelector("body").className = "light";
            }
            else if(this.value == "gray"){
                document.querySelector("body").className = "gray";
            }
            else{
                document.querySelector("body").className = "";
            }
        })
    }