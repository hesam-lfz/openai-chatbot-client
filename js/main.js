'use strict';
// HTTP Request - Fetch - LFZ Proxy Cors Server:
async function fetchDataWithFetch() {
  // const targetUrl = encodeURIComponent('http://api.no-cors.com/data?foo=bar');
  const targetUrl = encodeURIComponent(
    'https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines',
  );
  try {
    const response = await fetch(
      'https://cors.learningfuze.com/?url=' + targetUrl,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// HTTP Request - Ajax - LFZ Proxy Cors Server:
function fetchDataWithAjax() {
  // const targetUrl = encodeURIComponent('http://api.no-cors.com/data?foo=bar');
  const targetUrl = encodeURIComponent(
    'https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines',
  );
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://cors.learningfuze.com/?url=' + targetUrl);
  xhr.setRequestHeader('token', 'abc123');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    const data = xhr.response;
    console.log(data);
  });
  xhr.send();
}
fetchDataWithFetch();
fetchDataWithAjax();
