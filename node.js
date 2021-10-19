const endpoint = 'memories_history.json';
const fs = require('fs');



function fetchMemories() {
    let rawdata = fs.readFileSync(endpoint);
    let jsonOut = JSON.parse(rawdata);
    const properties = Object.entries(jsonOut)
    const arrayProps = properties[0][1]
    const arr = Object.values(arrayProps)
    
    for(let i = 0; i<arr.length; i++){
        let hey = Object.entries(arr[i])
        let downloadLink = `downloadMemories('${hey[2][1]}')`
        console.log(downloadLink)
    }
}
fetchMemories()
