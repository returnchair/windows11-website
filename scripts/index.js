document.querySelectorAll('.window__header .item').forEach((el) => {
    el.addEventListener('click', () => {
        if(el.parentElement.className == 'window__header'){
            document.querySelectorAll('.window__header .item').forEach((i) => i.classList.remove("active"));

            el.classList.add("active");
            
            document.querySelector('.h1').textContent = el.textContent;
    
            if(el.classList.contains('first') && el.classList.contains('active')){
                // console.log("about me");
                // document.querySelector('.bodyParagraph').textContent = document.getElementById("first").textContent;

                document.getElementById("first").style.display = "inline";
                document.getElementById("second").style.display = "none";
                document.getElementById("third").style.display = "none";
            } 

            else if(el.classList.contains('second') && el.classList.contains('active')){
                // console.log("projects");
                // document.querySelector('.bodyParagraph').textContent = document.getElementById("second").textContent;

                document.getElementById("first").style.display = "none";
                document.getElementById("second").style.display = "inline";
                document.getElementById("third").style.display = "none";
            } 

            else if(el.classList.contains('third') && el.classList.contains('active')){
                // console.log("misc");
                // document.querySelector('.bodyParagraph').textContent = document.getElementById("third").textContent;
                
                document.getElementById("first").style.display = "none";
                document.getElementById("second").style.display = "none";
                document.getElementById("third").style.display = "inline";
            }
        }
    });
});

if (document.body.clientWidth < 2048) {
    viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width, initial-scale=0.67, user-scalable=0');
  } 