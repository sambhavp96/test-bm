const myLibrary = (function() {
  // an object that will be returned by the module
  const library = {};

  // A method that changes the class name of a DOM element
  library.changeClassName = function(element, newClassName) {
    element.classList.replace(element.className, newClassName);
  };

  // A method that gets datasets from a DOM element
  library.getDataSets = function(element) {
    return element.dataset;
  };

  // A method that injects a new DOM element
  library.injectElement = function(parentElement, elementType, attributes) {
    const element = document.createElement(elementType);
    for (let key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        element.setAttribute(key, attributes[key]);
      }
    }
    parentElement.appendChild(element);
    return element;
  };

  // A method that makes an AJAX or GET request
  library.makeRequest = function(requestType, url, data, successCallback, errorCallback) {
    const request = new XMLHttpRequest();
    request.open(requestType, url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        const response = request.responseText;
        successCallback(response);
      } else {
        errorCallback();
      }
    };
    request.onerror = function() {
      errorCallback();
    };
    if (requestType === 'POST') {
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }
    request.send(data);
  };

  // A method that gets or sets the value of an input, checkbox, or select dropdown element
  library.inputValue = function(element, newValue) {
    if (newValue === undefined) {
      if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'password' || element.type === 'hidden')) {
        return element.value;
      } else if (element.tagName === 'INPUT' && element.type === 'checkbox') {
        return element.checked;
      } else if (element.tagName === 'SELECT') {
        return element.options[element.selectedIndex].value;
      } else {
        return null;
      }
    } else {
      if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'password' || element.type === 'hidden')) {
        element.value = newValue;
      } else if (element.tagName === 'INPUT' && element.type === 'checkbox') {
        element.checked = newValue;
      } else if (element.tagName === 'SELECT') {
        for (let i = 0; i < element.options.length; i++) {
          if (element.options[i].value === newValue) {
            element.selectedIndex = i;
            break;
          }
        }
      }
    }
  };

  // Return the library object
  return library;
})();
