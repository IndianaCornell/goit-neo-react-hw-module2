# Завдання. Віджет відгуків

Створи застосунок для збору відгуків про кав'ярню **Sip Happens Café**. Застосунок має відображати кількість відгуків у трьох категоріях: `good`, `neutral`, `bad`, а також зберігати ці дані між перезавантаженнями сторінки.

---

## 🔧 Крок 1. Структура компонентів

У компоненті `App` створи стан:

```js
{
  good: 0,
  neutral: 0,
  bad: 0
}
```

Додай компоненти:

- `<Feedback />` — показує статистику
- `<Options />` — кнопки для залишення відгуку

Використовуй пропси для передачі даних між компонентами.

---

## 🧠 Крок 2. Обробка подій

Оголоси функцію:

```js
const updateFeedback = (feedbackType) => {
  // оновлення стану для good, neutral або bad
};
```

Передай її як проп до компонента `<Options />`, де вона буде викликатись при кліку на відповідну кнопку.

---

## 🧮 Крок 3. Загальна кількість і умовний рендеринг

У компоненті `App` обчисли:

```js
const totalFeedback = good + neutral + bad;
```

Рендер компонента `<Feedback />` лише якщо `totalFeedback > 0`, інакше показуй компонент `<Notification message="No feedback yet" />`.

---

## ♻️ Крок 4. Кнопка Reset

У `<Options />` додай кнопку **Reset**. При кліку стан обнуляється. Кнопка з’являється лише якщо `totalFeedback > 0`.

---

## 📊 Крок 5. Статистика

Обчисли в `App`:

```js
const totalFeedback = good + neutral + bad;
const positivePercentage = Math.round((good / totalFeedback) * 100);
```

Передай ці значення у `<Feedback />`.

---

## 💾 Крок 6. Збереження в localStorage

При зміні стану зберігай дані у `localStorage`. При завантаженні сторінки перевір, чи є збережені дані — якщо є, ініціалізуй ними стан, інакше — значеннями 0.

**Приклад ініціалізації:**

```js
useEffect(() => {
  const saved = localStorage.getItem("feedback-data");
  if (saved) setState(JSON.parse(saved));
}, []);

useEffect(() => {
  localStorage.setItem("feedback-data", JSON.stringify(state));
}, [state]);
```

---

## ℹ️ Текст опису

```
Please leave your feedback about our service by selecting one of the options below.
```

---

## 🏁 Кінцева структура компонентів

- `<App>`
  - `<Options onLeaveFeedback={...} totalFeedback={...} onReset={...} />`
  - `{totalFeedback > 0 ? <Feedback ... /> : <Notification message="..." />}`
