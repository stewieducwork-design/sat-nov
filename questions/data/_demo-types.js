/* Reference file: one example of every question type. Copy the shape you need.
   Open it at test.html?id=demo-types (it's hidden from the home page).

   type "mcq"     multiple choice, also used for reading comprehension (add passage or notes)
   type "select"  a dropdown in each {{n}} slot of `text`; answer = one option per slot
   type "fill"    a text box in each {{n}} slot; answer = accepted spellings per slot
   type "order"   tap words into order; answer = the correct sentence (or a list of accepted ones)

   Any question may have: id, skill, passage (HTML or plain text; blank lines = paragraphs),
   notes (array of bullet points), prompt, explanation. Omit `answer` to leave a question ungraded. */
QBank.register({
  id: "demo-types",
  title: "Demo: every question type",
  description: "One example of each supported format.",
  timeLimitMinutes: null,
  sections: [
    {
      title: "Question types",
      directions: "<p>This demo shows each question format the platform supports.</p>",
      questions: [
        {
          type: "mcq",
          skill: "Reading: main idea",
          passage: "Octopuses can change the color and texture of their skin in a fraction of a second. For decades researchers assumed this ability served mainly as camouflage against predators.\n\nRecent field studies suggest a second purpose: octopuses also flash color patterns at one another, especially when two animals meet, which may function as a form of signaling.",
          prompt: "Which choice best states the main idea of the text?",
          choices: [
            "Octopuses change color faster than any other animal.",
            "Octopus color change may serve communication as well as camouflage.",
            "Researchers no longer believe octopuses use camouflage.",
            "Octopuses meet one another more often than scientists expected."
          ],
          answer: "B",
          explanation: "The text moves from the older view (camouflage) to an added purpose (signaling). B covers both; C overstates the change."
        },
        {
          type: "select",
          skill: "Grammar: agreement",
          prompt: "Choose the correct verb for each blank.",
          text: "Neither the students nor the teacher {{0}} ready, and each of the buses {{1}} late.",
          options: [["was", "were"], ["was", "were"]],
          answer: ["was", "was"],
          explanation: "With “neither… nor,” the verb agrees with the nearer subject (teacher → was). “Each” is singular (was)."
        },
        {
          type: "fill",
          skill: "Grammar: pronouns",
          prompt: "Type the missing word.",
          text: "After a long debate, the committee announced {{0}} decision.",
          answer: [["its"]],
          explanation: "A committee acting as one body is singular, so the possessive is “its” (no apostrophe)."
        },
        {
          type: "order",
          skill: "Syntax: word order",
          prompt: "Put the words in order to make a correct sentence.",
          items: ["migrate", "thousands", "every", "of", "birds", "autumn"],
          answer: ["Thousands of birds migrate every autumn", "Every autumn thousands of birds migrate"],
          explanation: "Subject (thousands of birds) + verb (migrate) + time phrase; the time phrase may also come first."
        }
      ]
    }
  ]
});
