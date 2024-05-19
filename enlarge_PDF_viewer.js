// ==UserScript==
// @name         enlarge pdf viewer
// @namespace    http://tampermonkey.net/
// @version      2024-03-12
// @description  adjust the size of the pdf viewer to 700px
// @author       Nasotro
// @match        https://learning.devinci.fr/mod/resource/view.php*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==



'use strict';

console.log('FOLLOW ME ON GITHUB : https://github.com/Nasotro');

// Create a new script element
const script = document.createElement('script');

// Set the script's source to a blob URL containing your code
script.src = URL.createObjectURL(new Blob([`
    setInterval(() => {
        var pdf_viewer = document.evaluate('//*[@id="resourceobject"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        // console.log('chuis ? linterieur');

        if (pdf_viewer) {
            pdf_viewer.style.height = '700px';
        }
    }, 1000); // run every 100ms
`], { type: 'text/javascript' }));

// Append the script to the page
document.head.appendChild(script);