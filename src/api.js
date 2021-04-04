async function getQuestions() {
    let response = await fetch('../api/questions.php', {
        method: 'GET',
    });
    if (response) {
        let json = await response.json();
        return json;
    }
}

async function getAnswers() {
    let response = await fetch('../api/answers.php', {
        method: 'GET',
    });
    if (response) {
        let json = await response.json();
        return json;
    }
}

export { getQuestions, getAnswers };