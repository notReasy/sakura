document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tabs li a");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);

            tabContents.forEach(content => {
                content.style.display = "none";
            });

            document.getElementById(targetId).style.display = "block";
        });
    });

    // Standardmäßig das erste Tab anzeigen
    tabs[0].click();
});
