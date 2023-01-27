//1. Сделайте обработку ошибок для любого из заданий прошлой недели. Например, что случится, если нет 
//интернета или имя сервера, куда мы обращаемся, недоступно? Добейтесь, чтобы ваше приложение выводило 
//понятные пользователю сообщения в случае ошибки, например "Сервер не доступен".


// поиск гифок

const btn = document.querySelector("#btnFindGif");

btn.addEventListener("click", function (event)
{
const findThatGif = document.querySelector("#findGif").value;
fetch ("https://api.giphy.com/v1/gifs/search?api_key=CFrJQIOEZfFZdoLYdaKrEsPmD4nVMTs1&limit=5&q=" + findThatGif)
.then(response => response.json())
.then(gifs => {
    getGifs(gifs)
}
)});


function getGifs(a) {
    const container = document.querySelector("#gifResult");
    try {
        
        for (let i = 0; i < a.data.length; i++) {
            const userContainer = createElement('div'); //например, отвалился document. перед create
            container.append(userContainer);
            const img = document.createElement('img');
            img.src = a.data[i].images.original.url;
            img.style.width = '150px';
            userContainer.append(img);
            document.querySelector("#findGif").value = "";
            }
        }
        catch (error) {
            console.log(error.message); //это тип для разработчиков
            container.innerHTML = "Oops! Что-то пошло не так... Мы уже разбираемся в чем дело!";
        }
};
