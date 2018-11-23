function updateSection(section, e)
{
    if (e)
    {
        e.preventDefault();
        window.location = "#" + section;
    }
    var list =  document.getElementsByTagName("main")[0].getElementsByTagName("section");
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
    if (!visibleElement)
        list[0].hidden = false;
}

var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
    if (a[i].hasAttribute("href"))
    {
        var href = a[i].getAttribute("href");
        if (href && href[0] === "#")
            a[i].addEventListener('click', updateSection.bind(null, href.substring(1)), false);
    }
}

var h = window.location.hash;
console.log(h);
updateSection(h ? h.substr(1) : "", null);
