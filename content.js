var j = 0;

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var tid = setInterval(mycode, 500);

function mycode() {
    var bottoneAttacca = getElementByXpath('/html/body/div[4]/div/main/section[7]/div/div/div[2]/div/div/div[2]/div[1]/div[4]/div/button');

    var iframe = document.getElementsByClassName('interaction-script ember-view')[0];
    if (iframe) {
        var bottoneSurvey = iframe.contentDocument.querySelector("#sc-app > div > div > div > div.children-wrapper > div:nth-child(2) > div > div.children-wrapper > div:nth-child(8) > div > div > div.component > button");

        if (bottoneAttacca !== null && bottoneAttacca !== undefined && bottoneSurvey !== null && bottoneSurvey !== undefined && j == 0) {
            if (bottoneAttacca) {
                var nuovoBottone = document.createElement("button");
                nuovoBottone.style.border = "none";
                nuovoBottone.style.padding = "0"; 
                nuovoBottone.style.backgroundColor = "transparent";
                nuovoBottone.style.marginLeft = "8px";

                var iconaSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                iconaSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                iconaSVG.setAttribute("viewBox", "0 0 34.47 17");
                iconaSVG.style.width = "27px";
                iconaSVG.style.height = "22px";
                iconaSVG.style.paddingTop = '8px'
                iconaSVG.innerHTML = `
                    <defs>
                        <style>
                            .cls-1 {
                                fill: #666666;
                            }
                        </style>
                    </defs>
                    <g id="Layer_1" data-name="Layer 1">
                        <path class="cls-1" d="m34.46,10.96l-.07-1.3c0-.19-.03-.39-.06-.59.06-1.34-.67-3.41-2.93-4.94-.31-.21-.63-.42-.98-.63l.02-.02-.57-.32C21.18-1.82,10.18-.85,2.5,5.56c-.18.16-.37.32-.52.49-.7.7-1.25,1.52-1.59,2.39-.1.27-.17.51-.21.69C.04,9.65-.02,10.19,0,10.75l.07,1.32c.01.31.06.62.14.95.13.54.34,1.05.62,1.51.95,1.54,2.62,2.47,4.4,2.47.09,0,.18-.01,.27-.01l2.03-.1c.91-.04,1.8-.33,2.56-.83.3-.19.59-.43.84-.68,1.03-1.03,1.59-2.45,1.52-3.92l-.07-1.33c-.02-.42-.09-.82-.21-1.21,3.21-1.21,6.76-1.38,10.08-.46-.18.58-.25,1.19-.22,1.8l.07,1.32c.07,1.38.67,2.65,1.7,3.59.1.09.2.18.3.26.99.76,2.21,1.15,3.42,1.07l2.04-.1c1.28-.07,2.49-.6,3.39-1.51.19-.18.37-.4.57-.68.54-.76.86-1.67.93-2.6.02-.25.02-.46.01-.65Zm-2.11.45c-.04.55-.23,1.09-.55,1.54-.11.15-.22.29-.33.41-.54.53-1.25.85-2,.88l-2.04.1c-.74.03-1.44-.18-2-.62l-.2-.16c-.61-.55-.97-1.31-1.01-2.12l-.07-1.32c-.03-.57.1-1.12.36-1.61l.13-.24c.15-.28.17-.61.05-.89-.11-.28-.34-.51-.65-.62l-.27-.09c-4.32-1.45-9-1.25-13.18.56l-.25.1c-.26.11-.47.34-.57.61-.1.27-.08.57.05.83l.11.23c.19.38.29.78.31,1.21l.07,1.32c.04.86-.28,1.71-.89,2.32-.14.14-.3.27-.5.4-.46.29-.98.46-1.5.49l-2.03.1c-1.13.04-2.17-.5-2.75-1.45-.17-.27-.29-.56-.37-.9-.05-.2-.07-.37-.08-.55l-.07-1.33c-.02-.32.02-.63.1-.96.04-.14.09-.29.15-.46.27-.73.79-1.42,1.48-2.01C7.87,3.83,12.88,2.11,17.92,2.11c3.74,0,7.5.95,10.88,2.88.51.3.97.58,1.41.87,1.55,1.06,2.05,2.48,2,3.13l-.02.25.06.16c.02.1.03.2.03.32l.07,1.3v.39Z"/>
                    </g>
                `;

                nuovoBottone.appendChild(iconaSVG);

                bottoneAttacca.parentNode.insertBefore(nuovoBottone, bottoneAttacca.nextSibling);
                j = 1;
            }

            nuovoBottone.onclick = function() {
                bottoneSurvey.click();
            }

            bottoneSurvey.style.display = 'none';
            bottoneAttacca.style.display = 'none';
        }

        if (bottoneSurvey == null) {
            j = 0;
        }
    } else {
        j = 0;
    }
}
