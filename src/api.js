async function getData() {
    let data = await fetch('../api/data.php', {
        method: 'GET',
    });

    if(data.ok) {
        let json = await data.json();
        return json;
    }    
}

export { getData };