const firstAidData = [
  {
    id: 1,
    questionText: "Listen to this sound. What emergency does it represent?",
    description: "Audio of someone choking and coughing heavily.",
    audio: require("../assets/audio/choking_sound.mp3"),
    correctAnswer: "Choking",
    options: ["Choking", "Coughing", "Sneezing", "Hiccuping"],
  },
  {
    id: 2,
    questionText:
      "Watch this short clip. What first aid action is being performed?",
    description: "Video showing back blows given to a choking person.",
    video: require("../assets/video/backblows.mp4"),
    correctAnswer: "Back blows for choking",
    options: [
      "Back blows for choking",
      "CPR chest compressions",
      "Applying bandage",
      "Checking pulse",
    ],
  },
  {
    id: 3,
    questionText: "What’s the first step to treat a bleeding wound?",
    description: "A close-up of a hand bleeding with tissue applying pressure.",
    photo: require("../assets/img/bleeding.jpg"),
    correctAnswer: "Apply pressure with a clean cloth",
    options: [
      "Apply pressure with a clean cloth",
      "Remove any embedded objects",
      "Rinse with alcohol",
      "Apply a tourniquet immediately",
    ],
  },
  {
    id: 4,
    questionText: "Someone is choking. What should you do?",
    description: "A person choking while another stands behind ready to help.",
    photo: require("../assets/img/choking.png"),
    correctAnswer: "Give 5 back blows between the shoulder blades",
    options: [
      "Give 5 back blows between the shoulder blades",
      "Offer them water",
      "Hit their chest randomly",
      "Wait for them to cough it out",
    ],
  },
  {
    id: 5,
    questionText: "What is the best first aid for a sprained ankle?",
    description: "A swollen ankle wrapped in ice bandage with leg elevated.",
    photo: require("../assets/img/sprain.png"),
    correctAnswer: "Follow R.I.C.E. – Rest, Ice, Compression, Elevation",
    options: [
      "Follow R.I.C.E. – Rest, Ice, Compression, Elevation",
      "Massage vigorously",
      "Apply heat immediately",
      "Keep walking on it",
    ],
  },
  {
    id: 6,
    questionText: "What should you check first for an unconscious person?",
    description: "A person lying down while another checks their breathing.",
    photo: require("../assets/img/unconscious.jpeg"),
    correctAnswer: "Check responsiveness and breathing",
    options: [
      "Check responsiveness and breathing",
      "Give water immediately",
      "Shake them hard",
      "Lift their legs immediately",
    ],
  },
  {
    id: 7,
    questionText: "After an animal bite, what should you do first?",
    description: "An arm showing a fresh dog bite wound with light bleeding.",
    photo: require("../assets/img/animal_bite.png"),
    correctAnswer: "Wash the wound thoroughly and seek medical help",
    options: [
      "Wash the wound thoroughly and seek medical help",
      "Bandage tightly",
      "Ignore small bites",
      "Apply turmeric",
    ],
  },
  {
    id: 8,
    questionText:
      "What’s the first step for someone showing signs of heat exhaustion?",
    description:
      "A person resting in the sun with a towel on their head drinking water.",
    photo: require("../assets/img/heatstroke.jpg"),
    correctAnswer: "Move to shade and sip water slowly",
    options: [
      "Move to shade and sip water slowly",
      "Pour ice water over them immediately",
      "Keep running to build tolerance",
      "Take painkillers",
    ],
  },
];

export default firstAidData;
