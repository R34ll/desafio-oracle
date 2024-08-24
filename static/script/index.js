function encriptar() {
    const content = document.querySelector(".left-content textarea").value;
    const text = btoa(content);


    document.getElementById("text-content-container").style.display = "block";
    document.getElementById("card").style.display = "none";

    document.querySelector(".right-content textarea").value = text;
}

function descriptar() {
    const content = document.querySelector(".left-content textarea").value;
    const text = atob(content);


    document.getElementById("text-content-container").style.display = "block";
    document.getElementById("card").style.display = "none";

    document.querySelector(".right-content textarea").value = text;
}


function copy() {
    const textarea = document.querySelector(".right-content textarea");

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textarea.value);
}

