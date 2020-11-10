window.onload = init;

function init() {
    const windowWidth = window.innerWidth;
    const maxJadeIsWidth = windowWidth / 2;
    let yPos = 100;

    let jadeIsElts = document.getElementsByClassName("jade-is");
    for (let e = 0; e < jadeIsElts.length; e++) {
        const elt = jadeIsElts[e];

        // Position
        let leftPos = (Math.random() * windowWidth);
        if (leftPos + elt.clientWidth > windowWidth) {
            leftPos -= elt.clientWidth;
        }
        elt.style.left = leftPos + 'px';
        const y = yPos + 'px';
        elt.style.top = y;
        yPos += elt.clientHeight + 50;
        elt.style.visibility = 'visible';
    }


    // let links = document.getElementsByClassName("link");
    // for (let e = 0; e < links.length; e++) {
    //     const elt = links[e];

    //     // Position
    //     let leftPos = (Math.random() * windowWidth);
    //     if (leftPos + elt.clientWidth > windowWidth) {
    //         leftPos -= elt.clientWidth;
    //     }
    //     elt.style.left = leftPos + 'px';
    //     const y = yPos + 'px';
    //     elt.style.top = y;
    //     yPos += elt.clientHeight + 50;
    // }
}

