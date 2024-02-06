const modal = document.querySelector('.Modal_Big')
const overlay = document.querySelector('.overlay')
function openmodal(){
    console.log('Modal is Open');
    modal.classList.remove("-z-10","scale-0");
    modal.classList.add("z-20","scale-100");
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-1");
}

function closemodal(){
    console.log('Modal is Closed')
    modal.classList.remove("z-20","scale-100");
    modal.classList.add("-z-10","scale-0");
    overlay.classList.remove("opacity-1");
    overlay.classList.add("opacity-0");
    }
