function internalLinkClicked(anchor, event) {
    updateSection(anchor.getAttribute("href").substring(1), event);
}

function updateSection(section, e) {
    if (section) {
        var topLinks = document.querySelector("nav").getElementsByTagName("a");
        for (var i = 0; i < topLinks.length; i++) {
            if (topLinks[i].getAttribute("href").substr(1) === section)
            {
                topLinks[i].parentElement.style.backgroundColor = "#61707d";
                topLinks[i].style.pointerEvents = "none";
            }
            else {
                topLinks[i].parentElement.style.backgroundColor = "";
                topLinks[i].style.pointerEvents = "auto";
            }

        }
    }

    if (e) {
        e.preventDefault();
        window.location = "#" + section;
    }
    var list = document.querySelector("main").getElementsByTagName("section");
    var visibleElement = false;
    for (var i = 0; i < list.length; i++) {
        list[i].hidden = true;
        if (list[i].id === section) {
            list[i].hidden = false;
            visibleElement = true;
        }
    }
    if ((!visibleElement) && (list.length > 0)) {
        updateSection(list[0].id)
    }
}

function createLinks()
{
    var list = document.querySelector("main").getElementsByTagName("section");
    var x = window.matchMedia("(print)")

    for (var i=0;i<list.length;i++)
    {
        var child = document.createElement('a');
        if (i < list.length-1)
        {
            child.innerHTML = "Next >";
            child.href = "#"+list[i+1].id;
            child.style.cssFloat="right";
            child.style.marginTop="20px";
            child.style.marginBottom="40px";
            list[i].appendChild(child);
        }

        if (i > 0)
        {
            var child = document.createElement('a');
            child.innerHTML = "< Back";
            child.href = "#"+list[i-1].id;
            child.style.cssFloat="left";
            child.style.marginTop="20px";
            child.style.marginBottom="40px";
            list[i].appendChild(child);
        }
    }
}

var h = window.location.hash;
updateSection(h ? h.substr(1) : "", null);
createLinks();

var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
    if (a[i].hasAttribute("href")) {
        var href = a[i].getAttribute("href");
        if (href && href[0] === "#")
            a[i].addEventListener('click', internalLinkClicked.bind(null, a[i]), false);
    }
}