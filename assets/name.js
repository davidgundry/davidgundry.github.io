function nameMediaMatchChanged(mediaMatch)
{
    let n = document.querySelector("body>nav>ul>li:first-child");
    let a = n.querySelector("a");
    let t = a || n;

    if (mediaMatch.matches)
    {
        t.innerHTML = "DG";
        t.style.fontSize = "110%";
    }
    else
    {
        t.innerHTML = "DAVID GUNDRY";
        t.style.fontSize = "100%";
    }
}

var mediaMatch = window.matchMedia("(max-width: 319px)")
nameMediaMatchChanged(mediaMatch);
mediaMatch.addListener(nameMediaMatchChanged); 
