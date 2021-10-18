const endpoint = 'memories_history.json';
const albumName = [];
const albumsOutput = document.querySelector('.albums');


async function fetchMemories() {
    const response = await fetch(endpoint);
    // waits until the request completes...
    const newJson = await response.json()
    console.log(newJson);
    const properties = Object.entries(newJson)
    const arrayProps = properties[0][1]
    console.log(arrayProps)
    const arr = Object.values(arrayProps)
    console.log(Object.entries(arr[1]))
    
    for(let i = 0; i<arr.length; i++){
        let hey = Object.entries(arr[i])
        let x = document.createElement("div");
        x.classList.add('card')
        x.innerHTML = `${hey[2][1]}`
        albumsOutput.appendChild(x)
    }
}
fetchMemories()
