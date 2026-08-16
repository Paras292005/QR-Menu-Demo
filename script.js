/* =========================
   CATEGORY FILTER
========================= */

function filterMenu(category, button) {

    const items = document.querySelectorAll(".menu-item");
    const buttons = document.querySelectorAll(".category");

    // Remove active from all buttons
    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    // Add active to clicked button
    button.classList.add("active");

    // Show / hide menu items
    items.forEach(function(item) {

        if (
            category === "all" ||
            item.dataset.category === category
        ) {
            item.classList.remove("hidden");
        } 
        else {
            item.classList.add("hidden");
        }

    });

}


/* =========================
   SEARCH FOOD
========================= */

function searchFood() {

    const searchInput =
        document.getElementById("searchInput");

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const items =
        document.querySelectorAll(".menu-item");


    items.forEach(function(item) {

        const foodName =
            item.querySelector("h3")
                .textContent
                .toLowerCase();

        const description =
            item.querySelector("p")
                .textContent
                .toLowerCase();


        if (
            foodName.includes(searchValue) ||
            description.includes(searchValue)
        ) {

            item.classList.remove("hidden");

        } 
        else {

            item.classList.add("hidden");

        }

    });

}