// Designed by: Hoang Nguyen
// Original image: https://dribbble.com/shots/5919154-Tab-Bar-Label-Micro-Interaction

const buttons = document.querySelectorAll(".menu__item");
let activeButton = document.querySelector(".menu__item.active");

buttons.forEach(item => {

    const text = item.querySelector(".menu__text");
    setLineWidth(text, item);

    window.addEventListener("resize", () => {
        setLineWidth(text, item);
    })

    item.addEventListener("click", function() {
        if (this.classList.contains("active")) return;

        this.classList.add("active");
        
        if (activeButton) {
            activeButton.classList.remove("active");
            activeButton.querySelector(".menu__text").classList.remove("active");
        }
        
        handleTransition(this, text);
        activeButton = this;

    });

    
});


function setLineWidth(text, item) {
    const lineWidth = text.offsetWidth + "px";
    item.style.setProperty("--lineWidth", lineWidth);
}

function handleTransition(item, text) {

    item.addEventListener("transitionend", (e) => {

        if (e.propertyName != "flex-grow" || 
        !item.classList.contains("active")) return;

        text.classList.add("active");
        
    });

}


document.querySelector('.dropbtn').addEventListener('click', function() {
    var icon = document.getElementById('angleIcon');
    var dropdownContent = document.querySelector('.dropdown-content');
    var dropbtn = document.querySelector('.dropbtn');
    if (icon.classList.contains('fa-angle-up')) {
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
        dropdownContent.style.display = 'block'; /* show dropdown content */
        dropbtn.classList.add('dropbtn-active'); /* change text color */
    } else {
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
        dropdownContent.style.display = 'none'; /* hide dropdown content */
        dropbtn.classList.remove('dropbtn-active'); /* revert text color */
    }
});