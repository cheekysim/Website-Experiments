btn = document.getElementById("search-button");

btn.addEventListener("click", (event) => {
    console.log("Button clicked")
    event.preventDefault();
    let search = document.getElementById("search-input").innerText;
    let url = `https://www.google.com/search?q=${search}`;
    window.open(url, "_blank");
});

input = document.getElementById("search-input");

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log("Enter pressed")
        event.preventDefault();
        let search = document.getElementById("search-input").innerText;
        let url = `https://www.google.com/search?q=${search}`;
        window.open(url, "_blank");
    }
    else {
        console.log(event.key)
        if (input.innertext.length === 0) {
            input.empty = "false";
        }
    }
});

