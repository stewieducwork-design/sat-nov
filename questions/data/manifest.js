/* The list of tests shown on the home page (newest entries appear first).
   To publish a new test: add its file to this folder, then add one line here.
     id          must match the id inside the file
     file        file name in questions/data/
     questions   / minutes   only used for the label on the home page
     hidden      true = not listed, but still opens via test.html?id=...        */
window.TEST_MANIFEST = [
  { id: "test-01", file: "test-01.js", title: "Test 01", description: "Standard English Conventions and Rhetorical Synthesis", questions: 20, minutes: 24 },
  { id: "test-02", file: "test-02.js", title: "Test 02", description: "Standard English Conventions, Rhetorical Synthesis, and Transitions", questions: 30, minutes: 36 },

  { id: "demo-types", file: "_demo-types.js", title: "Demo: every question type", hidden: true }
];
