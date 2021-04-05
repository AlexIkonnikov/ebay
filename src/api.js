
const api = {
    getData: async function() {
        let data = await fetch('../api/data.php', {
            method: 'GET',
        });

        if(data.ok) {
            let json = await data.json();
            return json;
        }    
    }
}

export { api };