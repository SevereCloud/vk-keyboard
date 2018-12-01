# [Генератор клавиатуры для VK](https://severecloud.github.io/vk-keyboard)

Генерирует [клавиатуру](https://vk.com/dev/bots_docs_3) для ботов. Проверить клавиатуру можно отправив JSON [боту](https://vk.com/im?sel=-174472256).

## Поддерживаеммые языки

- JSON
- Golang

## Запустить локально

Код основан на магически исчезающем фреймоврке [Svelte](https://svelte.technology/)

```bash
cd vk-keyboard
npm install
```

Запустить сервер на [localhost:5000](http://localhost:5000):

```bash
npm run dev
```

Собрать проект без сервера:

```bash
npm run build
```
