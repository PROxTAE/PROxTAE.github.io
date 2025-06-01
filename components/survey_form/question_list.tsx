interface SurveyOption {
  label: string;
  tags: string[];
}

interface SurveyQuestion {
  question: string;
  options: SurveyOption[];
}

const surveyQuestions: SurveyQuestion[] = [
  {
    question: "How do you want to feel today?",
    options: [
      { label: "Relaxed", tags: ["calm"] },
      { label: "Refreshed and energetic", tags: ["active"] },
      { label: "Connected with myself", tags: ["reflect", "self-compassion"] },
      { label: "Happy and playful", tags: ["fun"] },
      { label: "Calm and mindful", tags: ["mindfulness"] },
    ],
  },
  {
    question: "How are you feeling right now?",
    options: [
      { label: "Tired", tags: ["calm", "no-screen"] },
      { label: "Stressed", tags: ["mindfulness", "calm"] },
      { label: "Bored or indifferent", tags: ["fun", "active", "creative"] },
      { label: "Lonely or isolated", tags: ["connect", "reflect"] },
      { label: "Confused or uncertain about myself", tags: ["self-compassion", "reflect"] },
    ],
  },
  {
    question: "What type of activity do you prefer?",
    options: [
      { label: "No screen time", tags: ["no-screen"] },
      { label: "Physical movement", tags: ["active"] },
      { label: "Quiet, alone time", tags: ["calm", "mindfulness"] },
      { label: "Talking or social interaction", tags: ["connect"] },
      { label: "Creative thinking", tags: ["creative"] },
    ],
  },
  {
    question: "How much free time do you have right now?",
    options: [
      { label: "Less than 5 minutes", tags: ["routine boost", "fun", "calm"] },
      { label: "5–10 minutes", tags: ["calm", "fun", "creative", "active", "mindfulness"] },
      { label: "More than 10 minutes", tags: ["creative", "connect", "meaning & joy"] },
    ],
  },
  {
    question: "Do you want to go outside or stay in a peaceful place?",
    options: [
      { label: "I want to be in nature", tags: ["nature", "active"] },
      { label: "I want to be in a calm/private place", tags: ["calm", "mindfulness"] },
      { label: "Anywhere is fine", tags: ["all"] },
    ],
  },
  {
    question: "Do you want to do something for others?",
    options: [
      { label: "Yes, I want to do something good for others", tags: ["connect", "meaning & joy"] },
      { label: "Not sure, I want to see options first", tags: ["all"] },
      { label: "No, I want to focus on myself", tags: ["self-compassion", "calm", "reflect"] },
    ],
  },
  {
    question: "What kind of activity style do you prefer?",
    options: [
      { label: "Clear and short steps", tags: ["routine boost", "active"] },
      { label: "Free and spontaneous", tags: ["creative", "fun"] },
      { label: "Deep and meaningful", tags: ["reflect", "meaning & joy"] },
      { label: "Light and easy, no thinking", tags: ["calm", "nature", "fun"] },
    ],
  },
  {
    question: "Do you want to use your body or mind more?",
    options: [
      { label: "Use my body", tags: ["active", "nature"] },
      { label: "Use my brain/emotions", tags: ["reflect", "self-compassion", "mindfulness"] },
      { label: "Use my hands for crafts/art", tags: ["creative"] },
      { label: "Not sure", tags: ["all"] },
    ],
  },
];

export default surveyQuestions;
