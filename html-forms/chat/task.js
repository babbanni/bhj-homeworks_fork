const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const answerBot = [
    'Кто тут?',
    'Где ваша совесть?',
    'К сожалению все операторы сейчас заняты! Не пишите больше нам!',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
]

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

chatWidgetInput.addEventListener('keydown', (e) => {
    let rand = Math.floor(Math.random() * answerBot.length);
    if (e.code == 'Enter' && chatWidgetInput.value !== '') {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let currentText = chatWidgetInput.value;
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${currentText}</div>
            </div>
        `;

        chatWidgetInput.value = '';

        setTimeout(() => {
            let currentDate = new Date();
            let hours = currentDate.getHours();
            let minutes = currentDate.getMinutes();

            messages.innerHTML += `
            <div class="message">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">
                ${answerBot[rand]}
                </div>
            </div>
            `;
        }, 2000);
    }
})