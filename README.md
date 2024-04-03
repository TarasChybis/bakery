# Сучасна пекарня

## Зміст

1. [Загальні дані](#1)</br>
2. [Додаткова документація](#2)
3. [Зборка репозиторію та локальний запуск](#3)
4. [Налаштування](#4)
5. [Наповнення бази даних](#5)
6. [Запуск](#6)
7. [Функціонал](#7)

## 1. Загальні дані <a id="1"></a>

**Сучасна пекарня** - Простий сайт - Landing Page з картками шеф-поварів та картками пекарень.

Тип додатку: Landing Page. </br>
Front-end виконано з адаптивним верстанням.

<img src="../app_css_flex/img/Main-page.png"/>
<!-- <img src="https://github.com/TarasChybis/webAppProject/blob/button-left/img/main_page.png"/> -->

Технології, що використовуються:

- **HTML, CSS**

Реалізовані фічі:

- Локалізація шрифтів;
- Кольори представлено змінними;
- Якорні посилання;
- Flexbox;
- SVG векторні зображення;
- Градієнт, Тінь;
- Псевдоелементи;
- iFrame, tel:, mailto;
- Іконки, Спрайти, icons-sprite;
- Форми;
- Кнопки;
- Спецсимволи;
- 

## 2. Додаткова документація <a id="2"></a>

- <a href="https://learn.microsoft.com/ru-ru/contribute/how-to-write-links#bookmark-links">White paper</a>
- <a href="https://learn.microsoft.com/ru-ru/contribute/how-to-write-links#bookmark-links">Рекогносцювання</a>
- <a href="https://learn.microsoft.com/ru-ru/contribute/how-to-write-links#bookmark-links">Схема взаємодії з користувачем</a>

<p>Проект запущено на Heroku (посилання).</b>
Використовується база данних SQL.</p>

## 3. Зборка репозиторію та локальний запуск <a id="3"></a>

Виконайте в консолі:

```
git clone https://github.com/TarasChybis/...
```

## 4. Налаштування <a id="4"></a>

Створіть файл .env і додайте туди наступні налаштування:

```
BOT_API_KEY = "Апі ключ, який ви отримали у BotFather"

PROXY_URL = socks5h://ВАШ_ПРОКСІ:1080
PROXY_USERNAME = ЛОГІН
PROXY_PASSWORD = ПАРОЛЬ

DATABASE_URL = "Посилання на вашу базу даних"
```

## 5. Наповнення бази даних <a id="5"></a>

З корня проекту запустіть парсер:

```
python crawlers/zoon/main.py
```

Дочекайтеся, доки спарсяться дані по ресторанам.

## 6. Запуск <a id="6"></a>

Щоб запустити бота, виконайте в консолі:

```
python3 app.py
```

## 7. Функціонал <a id="7"></a>

[Переадресація на іншу сторінку html](#7.1)</br>
[Переадресація на іншу сторінку html з затримкою 5с](#7.2)</br>

Переадресація на іншу сторінку html:<a id="7.1"></a>

```
function onClickProject() {
    document.location.href='../webAppProject/html/projects.html';
}
```

Переадресація на іншу сторінку html з затримкою 5с:<a id="7.2"></a>

```
setTimeout(function onClickProject() {
    document.location.href='../webAppProject/html/projects.html';
}, 5000);
```
