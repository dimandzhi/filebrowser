export default async function displayREADME() {
    const stdPrefix = '/files/';
    let baseURL = '';
    const loc = window.location.pathname;
    if (!loc.startsWith(stdPrefix)) {
      baseURL = '/' + loc.split('/')[1];
    }
    const dir = loc.slice(baseURL.length).substring(0, loc.lastIndexOf('/')).slice(stdPrefix.length);
    const url = baseURL + `/api/resources/${dir}/README.html`;
    const resp = await fetch(url);
    if (!resp.ok) {
      return;
    }
    const data = await resp.json();
    let readme = document.getElementById("readme");
    if (!readme) {
      return;
    }
    readme.innerHTML = "<h3>README</h3>" + data.content;
}