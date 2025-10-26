import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Audio, Video } from "expo-av";

export default function Question({
  index,
  question,
  selectedAnswer,
  onSelect,
}) {
  const [userAns, setUserAns] = useState(selectedAnswer || "");

  const handleValueChange = (value) => {
    setUserAns(value);
    onSelect(value);
  };

  // Play audio if this question has one
  const playAudio = async () => {
    if (question.audio) {
      const { sound } = await Audio.Sound.createAsync(question.audio);
      await sound.playAsync();
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question.questionText}</Text>

      {/* IMAGE */}
      {question.photo && (
        <Image
          source={question.photo}
          style={styles.image}
          accessibilityLabel={question.description}
        />
      )}

      {/* AUDIO */}
      {question.audio && (
        <TouchableOpacity style={styles.audioButton} onPress={playAudio}>
          <Text style={styles.audioButtonText}>▶ Play Audio</Text>
        </TouchableOpacity>
      )}

      {/* VIDEO */}
      {question.video && (
        <Video
          source={question.video}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          isLooping={false}
        />
      )}

      <RNPickerSelect
        value={userAns}
        onValueChange={handleValueChange}
        items={[
          ...question.options.map((opt) => ({
            label: opt,
            value: opt,
          })),
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  video: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  audioButton: {
    backgroundColor: "#d32f2f",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
    alignSelf: "center",
    marginBottom: 10,
  },
  audioButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
