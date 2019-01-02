function nameMediaMatchChanged(mediaMatch) {
    if (mediaMatch.matches) {
        let n = document.querySelector("body>nav>ul>li>a");
        n.innerHTML = "DG";
        n.style.fontSize = "110%";
    }
    else {
        let n = document.querySelector("body>nav>ul>li>a");
        n.innerHTML = "DAVID GUNDRY";
        n.style.fontSize = "100%";
        n.style.margin = "0"
    }
}

var mediaMatch = window.matchMedia("(max-width: 360px)")
nameMediaMatchChanged(mediaMatch);
mediaMatch.addListener(nameMediaMatchChanged); 
