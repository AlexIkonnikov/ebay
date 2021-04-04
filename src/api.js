async function getQuestions() {
    let questions = await fetch('../api/questions.php', {
        method: 'GET',
    });
    if (questions) {
        let json = await questions.json();
        return json;
    }
}

async function getAnswers() {
    let answers = await fetch('../api/answers.php', {
        method: 'GET',
    });
    if (answers) {
        let json = await answers.json();
        return json;
    }
}

export { getQuestions, getAnswers };