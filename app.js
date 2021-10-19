const endpoint = 'memories_history.json';
const links = document.querySelector('.links');
const btn = document.getElementById('btn')

function downloadMemories(url) {
    var parts = url.split("?");
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", parts[0], true);
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var a = document.createElement("a");
            a.href = xhttp.responseText;
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();} 
                else if (xhttp.readyState == 4 && xhttp.status >= 400) {
                    document.getElementById("mem-info-bar").innerText = "Oops! Something went wrong. Status " + xhttp.status}
                };
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send(parts[1]);
            }

let arrLength = []

async function fetchMemories() {
    const response = await fetch(endpoint);
    // waits until the request completes...
    const newJson = await response.json()
    console.log(newJson);
    const properties = Object.entries(newJson)
    const arrayProps = properties[0][1]
    console.log(arrayProps)
    const arr = Object.values(arrayProps)
    
    for(let i = 0; i<arr.length; i++){
        let hey = Object.entries(arr[i])
        arrLength.push(arr[i])
        let x = document.createElement("a");
        x.setAttribute('download', `memory${i}`);
        x.setAttribute('id', `memory${i}`);
        x.href = `javascript:downloadMemories('${hey[2][1]}')`
        x.innerHTML = `Download link ${[i + 1]}`
        links.appendChild(x)
    }
}
fetchMemories()


let arr = []
async function test() {
    console.log('start timer');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(arr.length)
    for(let i = 0; i < arrLength.length; i++) {
        let y = document.getElementById(`memory${i}`)
        arr.push(y)
    }
    arr.forEach((element, i) => {
        setTimeout(
            function(){
                 console.log(element)
                 element.click()
            }
        , i * 3000);
    });
    console.log('after 1 second');
  }
  
btn.addEventListener('click', () => {
    test()
})