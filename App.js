import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Alert,
  Button,
  StatusBar,
} from "react-native";
import Question from "./components/Question";
import firstAidData from "./data/firstAidData";

export default function App() {
  const [answers, setAnswers] = useState({});
  function handleSubmit() {
    let correctCount = 0;
    firstAidData.forEach((qn, index) => {
      if (answers[index] === qn.correctAnswer) {
        correctCount++;
      }
    });

    Alert.alert(
      `You got ${correctCount} out of ${firstAidData.length} correct!`
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" />

      {firstAidData.map((qn, index) => {
        return (
          <Question
            key={qn.id}
            index={index}
            question={qn}
            selectedAnswer={answers[index]}
            onSelect={(value) =>
              setAnswers((prev) => ({ ...prev, [index]: value }))
            }
          />
        );
      })}

      <Button
        title="Submit Answer"
        onPress={handleSubmit}
        disabled={firstAidData.some((qn, index) => !answers[index])}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});
