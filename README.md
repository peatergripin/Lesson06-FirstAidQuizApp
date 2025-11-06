# 🌙 C346 Week03 Lesson06

[![Module](https://img.shields.io/badge/Module-C346%20Mobile%20App%20Development-6A5ACD?logo=android&logoColor=white)](#)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-2E8B57.svg)](#)
[![Language](https://img.shields.io/badge/Language-JavaScript%20%7C%20React%20Native-61DAFB?logo=react&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Status-Completed-success)](#)

---

## 📝 Overview

Lessons 5 & 6 taught us on several Components that can be used in react native such as TextInput, Button, TouchableOpacity, Picker (with npm install), Alert and Toast Android. Additionally, we learned on how to use states in our apps.

> ✨ _Example:_ Implemented a state to capture user answers in React Native.

---

## 🎬 Demo / Media

![App Demo](./media/demo.gif)

<p align="center">
  <img src="./assets/img/screenshot1.png" width="180" alt="Screenshot1" />
  <img src="./assets/img/screenshot2.png" width="180" alt="Screenshot2" />
</p>

---

## 🚀 Features

- ✅ Reusable components
- ✅ Use of states
- ✅ Varied kinds of media output

---

## 💡 Key Concepts

| Concept        | Description                     |
| :------------- | :------------------------------ |
| **Components** | Picker                          |
| **Props**      | Passing data between components |
| **State**      | State to capture user answer    |

---

## 🧱 Code Snippet

```jsx
<View style={styles.pickerContainer}>
  <Picker value={userAns} onValueChange={handleValueChange}>
    {question.options.map((element) => (
      <Picker.Item label={element} value={element} />
    ))}
  </Picker>
</View>
```
