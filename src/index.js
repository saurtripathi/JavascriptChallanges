



async function synchronizedFetch(){
    const res = await fetch('https://my-json-server.typicode.com/saurtripathi/Typicode/posts/1')
    const data = await res.json()
    return data
}

console.log(1)

console.log(synchronizedFetch())

console.log(3)