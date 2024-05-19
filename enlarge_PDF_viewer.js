// ==UserScript==
// @name         enlarge pdf viewer
// @namespace    http://tampermonkey.net/
// @version      2024-03-12
// @description  adjust the size of the pdf viewer to 700px
// @author       Nasotro
// @match        https://learning.devinci.fr/mod/resource/view.php*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://github.com/Nasotro/enlarge_DVL_pdf_viewer/blob/main/enlarge_PDF_viewer.js
// @downloadURL  https://github.com/Nasotro/enlarge_DVL_pdf_viewer/blob/main/enlarge_PDF_viewer.js
// @grant        none
// ==/UserScript==


'use strict';

console.log('FOLLOW ME ON GITHUB : https://github.com/Nasotro');

// Create a new script element
const script = document.createElement('script');

// Set the initial size of the PDF viewer
let pdfViewerSize = 700;

// Define a function to update the size of the PDF viewer
const updatePdfViewerSize = () => {
  const pdfViewer = document.evaluate(
    '//*[@id="resourceobject"]',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  if (pdfViewer) {
    pdfViewer.style.height = `${pdfViewerSize}px`;
  }
};

// Define a function to handle keyboard shortcuts
const handleKeyboardShortcuts = (event) => {
  // Check if the event was caused by a key press
  if (event.key) {
    // Increase the size of the PDF viewer if the '+' key was pressed
    if (event.key === '+') {
      pdfViewerSize += 100;
      updatePdfViewerSize();
    }
    // Decrease the size of the PDF viewer if the '-' key was pressed
    else if (event.key === '-') {
      pdfViewerSize -= 100;
      updatePdfViewerSize();
    }
  }
};

// Set the script's source to a blob URL containing your code
script.src = URL.createObjectURL(
  new Blob([`
    window.addEventListener('load', () => {
      updatePdfViewerSize();
    });

    document.addEventListener('keydown', (event) => {
      handleKeyboardShortcuts(event);
    });
  `], { type: 'text/javascript' })
);

// Append the script to the page
document.head.appendChild(script);
