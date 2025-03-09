document.addEventListener("DOMContentLoaded", function () {
    // Handling Exchange Buttons
    const buttons = document.querySelectorAll(".exchange-btn button");
    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                // Remove "active" class from all buttons
                buttons.forEach(btn => btn.classList.remove("active"));

                // Add "active" class to the clicked button
                this.classList.add("active");
            });
        });
    }

    // Handling Register/Login Toggle
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    if (registerBtn && loginBtn && container) {
        registerBtn.addEventListener("click", () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener("click", () => {
            container.classList.remove("active");
        });
    }

    // Handling Copy to Clipboard
    const copyButton = document.querySelector(".contract button");
    if (copyButton) {
        copyButton.addEventListener("click", function () {
            const contractAddress = "0x95B065Cce04918EAC6eE084CA94F2fCeA9f4C484";

            navigator.clipboard.writeText(contractAddress)
                .then(() => {
                    alert("Contract address copied to clipboard!");
                })
                .catch(err => {
                    console.error("Failed to copy: ", err);
                });
        });
    }
});
