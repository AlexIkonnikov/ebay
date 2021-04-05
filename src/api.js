async function getData() {
    let questions = await fetch('../api/data.php', {
        method: 'GET',
    });
  
    let json = await questions.json();
    return json;
    
}

export { getData };