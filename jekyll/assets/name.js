function nameMediaMatchChanged(mediaMatch) {
    if (mediaMatch.matches)
    {
        let n = document.querySelector("body>nav>ul>li:first-child");
        let a = n.querySelector("a");
        let t = a || n;
        t.innerHTML = "DG";
        t.style.fontSize = "110%";
    }
    else
    {
        let n = document.querySelector("body>nav>ul>li:first-child");
        let a = n.querySelector("a");
        let t = a || n;
        t.innerHTML = "DAVID GUNDRY";
        t.style.fontSize = "100%";
    }
}

var mediaMatch = window.matchMedia("(max-width: 410px)")
nameMediaMatchChanged(mediaMatch);
mediaMatch.addListener(nameMediaMatchChanged); 
