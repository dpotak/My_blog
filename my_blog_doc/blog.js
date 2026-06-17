const pages = document.querySelectorAll(".page");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumber = document.getElementById("pageNumber");

let currentPage = 0;

function showPage(index){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

    pageNumber.textContent =
        `${index + 1} / ${pages.length}`;
}

nextBtn.addEventListener("click",()=>{

    if(currentPage < pages.length - 1){

        currentPage++;

        showPage(currentPage);

    }

});

prevBtn.addEventListener("click",()=>{

    if(currentPage > 0){

        currentPage--;

        showPage(currentPage);

    }

});

showPage(currentPage);

