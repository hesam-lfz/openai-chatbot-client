'use strict';
async function blah() {
  // const targetUrl = encodeURIComponent('http://api.no-cors.com/data?foo=bar');
  const targetUrl =
    'https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines';
  const targetUrlC = encodeURIComponent(targetUrl);
  // const proxyUrlC = 'https://cors.learningfuze.com/?url=' + targetUrlC;
  // Direct fetch:
  /*
    try {
      const response = await fetch(targetUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    */
  // HTTP Request Fetch - LFZ Proxy Coors Server:
  try {
    const response = await fetch(
      'https://cors.learningfuze.com/?url=' + targetUrlC,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  // HTTP Request Ajax - LFZ Proxy Coors Server:
  /*
    const xhr = new XMLHttpRequest();
    xhr.open('GET', proxyUrlC);
    xhr.setRequestHeader('token', 'abc123');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      console.log(xhr.response);
    });
    xhr.send();
    */
}
blah();
