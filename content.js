// Function to apply RTL to an element
function applyRTL(element) {
  element.style.setProperty('direction', 'rtl', 'important');
}

// Function to apply RTL to input elements
function applyRTLToInputs() {
  // Select the textboxes, textareas, and input fields
  let elements = document.querySelectorAll('input[type=text], textarea, p, input[type=search], textbox');
  
  // Iterate over the selected elements and apply RTL
  for(let i = 0; i < elements.length; i++){
      applyRTL(elements[i]);
  }
}

// Apply RTL to existing inputs
applyRTLToInputs();

// Create a MutationObserver instance
let observer = new MutationObserver(function(mutations) {
  // For each mutation
  for(let mutation of mutations) {
      // If nodes were added
      if(mutation.addedNodes.length) {
          // For each added node
          for(let node of mutation.addedNodes) {
              // If the added node is an input or textarea, or contains one
              if(node.matches && node.matches('input[type=text], textarea, p, input[type=search], textbox')) {
                  applyRTL(node);
              } else if(node.querySelectorAll) {
                  let elements = node.querySelectorAll('input[type=text], textarea, p, input[type=search], textbox');
                  for(let element of elements) {
                      applyRTL(element);
                  }
              }
          }
      }
  }
});

// Start observing the document with the configured mutation observer
observer.observe(document, { childList: true, subtree: true });
