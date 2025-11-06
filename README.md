# 🌙 C346 Tutorial — _[Your Tutorial Title]_

[![Module](https://img.shields.io/badge/Module-C346%20Mobile%20App%20Development-6A5ACD?logo=android&logoColor=white)](#)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-2E8B57.svg)](#)
[![Language](https://img.shields.io/badge/Language-JavaScript%20%7C%20React%20Native-61DAFB?logo=react&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Status-Completed-success)](#)

---

## 📝 Overview

A brief summary of this tutorial — what was built, what concepts were covered, and key learning points.

> ✨ _Example:_ Implemented a scrollable FlatList and explored reusable components in React Native.

---

## 🎬 Demo / Media

![App Demo](./media/demo.gif)

<p align="center">
  <img src="./media/screenshot1.png" width="180" alt="Screenshot1" />
  <img src="./media/screenshot2.png" width="180" alt="Screenshot2" />
</p>

---

## 🚀 Features

- ✅ Reusable components
- ✅ Props for dynamic content
- ✅ FlatList for efficient rendering
- ✅ Flexbox layout
- ✅ Clean and responsive UI

---

## 💡 Key Concepts

| Concept        | Description                     |
| :------------- | :------------------------------ |
| **Components** | Modular UI blocks for reuse     |
| **Props**      | Passing data between components |
| **FlatList**   | Optimized scrolling list        |
| **Flexbox**    | Responsive layout structure     |

---

## 🧱 Code Snippet

```jsx
export default function IslandCard({ name, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}
```
