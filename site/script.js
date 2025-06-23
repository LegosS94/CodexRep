// Небольшая интерактивность: всплывающая подсказка
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('h1');
    header.addEventListener('click', () => {
        alert('Привет! Это демонстрационный сайт возможностей ChatGPT.');
    });
    const askBtn = document.getElementById('ask-btn');
    if (askBtn) {
        askBtn.addEventListener('click', () => {
            const question = document.getElementById('question').value.trim();
            const answerEl = document.getElementById('answer');
            if (!question) {
                answerEl.textContent = 'Введите вопрос.';
                return;
            }
            if (question.toLowerCase().includes('привет')) {
                answerEl.textContent = 'Привет! Это демонстрация ответа ChatGPT.';
            } else {
                answerEl.textContent = `Допустим, я отвечаю на ваш вопрос: "${question}".`;
            }
        });
    }
});
