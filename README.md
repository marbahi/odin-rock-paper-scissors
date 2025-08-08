# Rock Paper Scissors (UI Version) 🎮

## 📋 Project Description

This is an upgraded version of the **Rock Paper Scissors** game with a user interface. Originally built as a console-based game, it has been refactored to allow players to click buttons instead of typing their choices in a prompt.

---

## 🚀 Features

* Human player vs Computer.
* Computer randomly selects between `rock`, `paper`, or `scissors`.
* Player makes selections by clicking buttons.
* Game continues until one player reaches **5 points**.
* Score is tracked and displayed in real-time.
* Winner is announced once the score limit is reached.

---

## 🧠 Development Workflow

### 1. Create and push a feature branch

```bash
git checkout -b rps-ui
git push origin rps-ui
```

Make sure you are on `rps-ui` branch before making changes.

### 2. Build the UI

* Remove the 5-round limit.
* Create three buttons: **Rock**, **Paper**, **Scissors**.
* Add event listeners to buttons that call `playRound()` with the correct choice.
* Use DOM elements instead of `console.log()` for results and scores.
* Display running scores and declare a winner once a player reaches 5 points.

### 3. Commit and push changes

```bash
git add .
git commit -m "feat(ui): add buttons and DOM updates"
git push origin rps-ui
```

### 4. Merge into `main`

```bash
git checkout main
git merge rps-ui
git push origin main
```

### 5. Cleanup branches

```bash
git branch -d rps-ui
git push origin --delete rps-ui
```

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

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Click the buttons to play.

---

## 🛠️ Technologies Used

* **HTML** (UI layout)
* **JavaScript** (game logic & DOM manipulation)

---

## 🔗 Live Preview

Play the game live: [https://yourusername.github.io/your-repo-name/](https://yourusername.github.io/your-repo-name/)

---

## 📚 Reference

This project was developed as part of the [JavaScript Foundations](https://www.theodinproject.com/) section in **The Odin Project** curriculum.