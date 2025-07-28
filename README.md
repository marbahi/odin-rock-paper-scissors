
---

# Rock Paper Scissors (Without UI) 🎮

## 📋 Project Description

This is a simple **Rock Paper Scissors** game played entirely in the browser console using JavaScript. It’s a beginner-friendly project designed to practice problem-solving and JavaScript fundamentals before diving into graphical user interface (GUI) development.

---

## 🚀 Features

* Human player vs Computer.
* Computer randomly selects between `rock`, `paper`, or `scissors`.
* User inputs their choice via a `prompt()`.
* Game consists of **5 rounds**.
* Score is tracked for both players.
* Each round announces a winner and updates the score in the console.

---

## 🧠 Problem-Solving Approach

1. Set up the project structure and test JavaScript connection.
2. Write a function to randomly generate the computer’s choice.
3. Prompt the user to get their choice.
4. Compare choices and determine the round winner.
5. Loop through 5 rounds and display updated scores after each.

---

## 🗂️ Project Structure

```
rock-paper-scissors/
│
├── index.html
├── script.js
└── README.md
```

---

## 📄 How to Run the Project

1. **Clone or download** this repository.
2. Open `index.html` in your preferred browser.
3. Open the **Developer Console** (`F12` or `Ctrl+Shift+I` → *Console* tab).
4. The game will automatically begin once the page is loaded.

---

## 🛠️ Technologies Used

* **HTML** (basic structure)
* **JavaScript** (game logic)
* **Browser Console** (for user interaction and displaying output)

---

## 📸 Example Console Output

```
Human choice rock | Computer choice paper
You Lose!, Paper beats Rock
Round 1     Human: 0 | Computer: 1

Human choice scissors | Computer choice paper
You Win!, Scissors beats Paper
Round 2     Human: 1 | Computer: 1
...
```

---

## 🔍 Additional Notes

* User input is **case-insensitive** (e.g., `ROCK`, `rock`, or `RoCk` are all valid).
* The program does not reprompt for invalid input, as input validation is not covered at this stage of the curriculum.

---

## ✅ Status

✔️ **Complete and functional** — runs directly in the browser console.

---

## 📚 Reference

This project was developed as part of the [JavaScript Foundations](https://www.theodinproject.com/) section in **The Odin Project** curriculum.

---