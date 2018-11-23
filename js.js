function updateSection(section, e)
{
    if (e)
    {
        e.preventDefault();
        window.location = "#" + section;
    }
    var list =  document.querySelector("main").getElementsByTagName("section");
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

function createSideButton(main, target, content)
{
    var backButton = document.createElement("a");
    backButton.style.cssText = "position: absolute; top: 50%; color: grey; font-size: 60pt; margin: 0; text-decoration: none;";
    backButton.href = "#"+target;
    backButton.addEventListener('click', updateSection.bind(null, target), false);
    backButton.appendChild(document.createTextNode(content));
    main.appendChild(backButton);
}

function createSideButtons(x)
{
    if (x.matches)
    {
        var list =  document.querySelector("main").getElementsByTagName("section");
        for (var i = 0; i < list.length; i++)
        {
            createSideButton(list[i], "", "<");
            createSideButton(list[i], "", ">");
        }
    }
}

var x = window.matchMedia("(min-width: 500px)") // 480 + 
createSideButtons(x);
x.addListener(createSideButtons); // Attach listener function on state changes 




var h = window.location.hash;
updateSection(h ? h.substr(1) : "", null);
