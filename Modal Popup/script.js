const open = document.getElementById("open");
const close = document.getElementById("close");
const modalContainer = document.getElementById("modal-container");

open.addEventListener("click", () => {          // When Open button is clicked
    modalContainer.classList.add("show");       // Add "show" class → CSS makes the modal visible
});

close.addEventListener("click", () => {         // When Close button is clicked
    modalContainer.classList.remove("show");    // Remove "show" class → CSS hides the modal
});

modalContainer.addEventListener("click", (e) => {       // Listen for clicks anywhere inside the modal container
    if(e.target === modalContainer){                    // e.target = the element that was actually clicked,  If the clicked element is the background/container itself
        modalContainer.classList.remove("show");        // Remove "show" → close the modal
    }
});