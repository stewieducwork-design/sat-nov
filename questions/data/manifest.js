/* The list of tests shown on the home page (newest entries appear first).
   To publish a new test: add its file to this folder, then add one line here.
     id          must match the id inside the file
     file        file name in questions/data/
     questions   / minutes   only used for the label on the home page
     cover       optional: short text shown big on the home-page card (e.g. "GR")
     hidden      true = not listed, but still opens via test.html?id=...        */
window.TEST_MANIFEST = [
  { id: "test-01", file: "test-01.js", title: "Test 01", description: "Standard English Conventions and Rhetorical Synthesis", questions: 20, minutes: 24 },
  { id: "test-02", file: "test-02.js", title: "Test 02", description: "Standard English Conventions, Rhetorical Synthesis, and Transitions", questions: 30, minutes: 36 },

  // Buổi 02
  { id: "b02-grammar", file: "b02-grammar.js", title: "Grammar", description: "Buổi 02: Standard English Conventions", questions: 35, minutes: 41, cover: "GR" },
  { id: "b02-rhetorical-synthesis", file: "b02-rhetorical-synthesis.js", title: "Rhetorical Synthesis / Student Notes", description: "Buổi 02: Student notes questions", questions: 35, minutes: 41, cover: "RS" },
  { id: "b02-transitions", file: "b02-transitions.js", title: "Transitions", description: "Buổi 02: Logical transitions", questions: 35, minutes: 41, cover: "TR" },

  { id: "demo-types", file: "_demo-types.js", title: "Demo: every question type", hidden: true }
];
