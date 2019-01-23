function addInternalLinkEventListeners()
{
    var a = document.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
        if (a[i].hasAttribute("href")) {
            var href = a[i].getAttribute("href");
            if (href && href[0] === "#")
                a[i].addEventListener('click', internalLinkClicked.bind(null, a[i]), false);
        }
    }
}

function internalLinkClicked(anchor, event)
{
    if (event)
    {
        event.preventDefault();
        window.location = "#" + section;
    }
    updateCurrentSection(anchor.getAttribute("href").substring(1));
}

function updateCurrentSection(section)
{
    if (section)
    {
        unlinkCurrentSectionInNav(section)
        setSectionVisibility(section)
    }
    else
        updateCurrentSection(document.querySelector("main > section").id);
}

function unlinkCurrentSectionInNav(section)
{
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

function setSectionVisibility(section)
{
    var list = document.querySelector("main").getElementsByTagName("section");
    var visibleElement = false;
    for (var i = 0; i < list.length; i++)
    {
        list[i].hidden = true;
        if (list[i].id === section)
        {
            list[i].hidden = false;
            visibleElement = true;
        }
    }
    if ((!visibleElement) && (list.length > 0)) {
        updateCurrentSection(list[0].id)
    }
}

function createSectionLinks()
{
    var list = document.querySelector("main").getElementsByTagName("section");
    for (var i=0;i<list.length;i++)
    {
        if (i < list.length-1)
            list[i].appendChild(createNextLink(list));
        if (i > 0)
            list[i].appendChild(createBackLink(list));
    }
}

function createNextLink(list)
{
    var child = document.createElement('a');
    child.innerHTML = "Next >";
    child.href = "#"+list[i+1].id;
    child.style.cssFloat="right";
    child.style.marginTop="20px";
    child.style.marginBottom="40px";
    return child;
}

function createBackLink(list)
{
    var child = document.createElement('a');
    child.innerHTML = "< Back";
    child.href = "#"+list[i-1].id;
    child.style.cssFloat="left";
    child.style.marginTop="20px";
    child.style.marginBottom="40px";
    return child;
}

updateCurrentSection(window.location.hash ? window.location.hash.substr(1) : "", null);
createSectionLinks();
addInternalLinkEventListeners();