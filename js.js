function internalLinkClicked(anchor, event)
{
    updateSection(anchor.getAttribute("href").substring(1), event);   
}

function updateSection(section, e)
{
    if (section)
    {
        var topLinks = document.querySelector("nav").getElementsByTagName("a");
        for (var i = 0; i < topLinks.length; i++)
        {
            if (topLinks[i].getAttribute("href").substr(1) === section)
                topLinks[i].parentElement.style.backgroundColor = "red";
            else
            {
                topLinks[i].parentElement.style.backgroundColor = "";
            }
                
        }
    }

    if (e)
    {
        e.preventDefault();
        window.location = "#" + section;
    }
    var list = document.querySelector("main").getElementsByTagName("section");
    var visibleElement = false;
    for (var i = 0; i < list.length; i++)
    {
        list[i].hidden = true;
        if (list[i].id === section)
        {
            list[i].hidden = false;
            visibleElement = true;

            var leftButton = document.querySelector("#sideButton_left")
            if (leftButton)
            {
                if (i > 0)
                {
                    leftButton.href = "#"+list[i-1].id;
                    leftButton.hidden = false;
                }
                else
                {
                    leftButton.href = "";
                    leftButton.hidden = true;
                }
            }
            var rightButton = document.querySelector("#sideButton_right")
            if (rightButton)
            {
                if (i < list.length-1)
                {
                    rightButton.href = "#"+list[i+1].id;
                    rightButton.hidden = false;
                }
                else
                {
                    rightButton.href = "";
                    rightButton.hidden = true;
                }
            }
        }
    }
    if (!visibleElement)
    {
        updateSection(list[0].id)
    }

    
}



function createSideButton(parent, content, side)
{
    var button = document.createElement("a");
    button.id = "sideButton_"+side;
    button.style.cssText = "float: " + side + "; color: grey; font-size: 60pt; margin: 0; text-decoration: none;";
    button.addEventListener('click', internalLinkClicked.bind(null, button), false);
    button.appendChild(document.createTextNode(content));
    parent.appendChild(button);
}

function createSideButtons()
{
    var container = document.createElement("div");
    container.id = "sideButtons";
    container.style.cssText = "position: fixed; left: 50%; top: 50%; width: 100%; min-width: 580px; max-width: 800px; transform: translate(-50%,-50%);"
    createSideButton(container, "<", "left");
    createSideButton(container, ">", "right");
    var main = document.querySelector("main");
    main.appendChild(container);
}

function mediaMatchChanged(mediaMatch)
{
    if (mediaMatch.matches)
        document.querySelector("#sideButtons").hidden = false;
    else
        document.querySelector("#sideButtons").hidden = true;
}

var mediaMatch = window.matchMedia("(min-width: 580px)") // 480 + 
createSideButtons();
mediaMatchChanged(mediaMatch);
mediaMatch.addListener(mediaMatchChanged); // Attach listener function on state changes 

var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
    if (a[i].hasAttribute("href"))
    {
        var href = a[i].getAttribute("href");
        if (href && href[0] === "#")
            a[i].addEventListener('click', internalLinkClicked.bind(null, a[i]), false);
    }
}

var h = window.location.hash;
updateSection(h ? h.substr(1) : "", null);
