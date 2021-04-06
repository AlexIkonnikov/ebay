
const api = {
    getData: async function() {
        let data = await fetch('../api/data.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if(data.ok) {
            let json = await data.json();
            return json;
        }    
    },
    setUserAnswer: async function(data) {
        fetch('../api/setData.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
    }
}

export { api };