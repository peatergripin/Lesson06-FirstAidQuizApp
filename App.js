import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Alert,
  Button,
  StatusBar,
  TouchableOpacity,
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
      <Text style={styles.header}>🩺First Aid Quiz</Text>
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

      {/* <Button
        title="Submit Answer"
        onPress={handleSubmit}
        disabled={firstAidData.some((qn, index) => !answers[index])}
      /> */}
      <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
        <View style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit Answers</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "floralwhite",
  },
  header: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  submitButton: {
    backgroundColor: "lightcoral",
    borderRadius: 5,
    width: "40%",
    paddingVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
