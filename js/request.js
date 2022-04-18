class Request{
async get(url){
    const request = await fetch(url)
    const data = await request.json()
    return data;
}
}