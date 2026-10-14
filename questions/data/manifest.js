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

  // SAT Reading: Information and Ideas
  { id: "r01-main-ideas", file: "r01-main-ideas.js", title: "Reading: Main Ideas", description: "Information and Ideas: Main Ideas", questions: 38, minutes: 43, cover: "MI" },
  { id: "r02-details", file: "r02-details.js", title: "Reading: Details", description: "Information and Ideas: Details", questions: 62, minutes: 65, cover: "DT" },
  { id: "r03-inference", file: "r03-inference.js", title: "Reading: Inferences", description: "Information and Ideas: Inferences", questions: 149, minutes: 205, cover: "IN" },
  { id: "r04-coe-support", file: "r04-coe-support.js", title: "Reading: Command of Evidence (Support)", description: "Information and Ideas: Command of Evidence: Support", questions: 58, minutes: 75, cover: "CS" },
  { id: "r05-coe-weaken", file: "r05-coe-weaken.js", title: "Reading: Command of Evidence (Weaken)", description: "Information and Ideas: Command of Evidence: Weaken", questions: 18, minutes: 23, cover: "CW" },
  { id: "r06-quotation", file: "r06-quotation.js", title: "Reading: Command of Evidence (Quotation)", description: "Information and Ideas: Command of Evidence: Quotation", questions: 72, minutes: 81, cover: "QT" },
  { id: "r07a-coe-graphs", file: "r07a-coe-graphs.js", title: "Reading: Graphs 1–27", description: "Command of Evidence: Quantitative (graphs & tables), part 1", questions: 27, minutes: 40, cover: "G1" },
  { id: "r07b-coe-graphs", file: "r07b-coe-graphs.js", title: "Reading: Graphs 28–54", description: "Command of Evidence: Quantitative (graphs & tables), part 2", questions: 27, minutes: 40, cover: "G2" },
  { id: "r07c-coe-graphs", file: "r07c-coe-graphs.js", title: "Reading: Graphs 55–81", description: "Command of Evidence: Quantitative (graphs & tables), part 3", questions: 26, minutes: 39, cover: "G3" },
  { id: "r07d-coe-graphs", file: "r07d-coe-graphs.js", title: "Reading: Graphs 82–108", description: "Command of Evidence: Quantitative (graphs & tables), part 4", questions: 27, minutes: 40, cover: "G4" },

  // SAT Grammar (sections grouped by skill)
  { id: "g01-boundaries", file: "g01-boundaries.js", title: "Grammar: Boundaries", description: "Standard English Conventions: sentence boundaries & punctuation", questions: 251, minutes: 146, cover: "BD" },
  { id: "g02-form-structure-sense", file: "g02-form-structure-sense.js", title: "Grammar: Form, Structure, and Sense", description: "Standard English Conventions: agreement, verbs, pronouns, modifiers", questions: 186, minutes: 101, cover: "FS" },
  { id: "g03-transitions", file: "g03-transitions.js", title: "Grammar: Transitions", description: "Expression of Ideas: Transitions", questions: 203, minutes: 161, cover: "TR" },
  { id: "g04-rhetorical-synthesis", file: "g04-rhetorical-synthesis.js", title: "Grammar: Rhetorical Synthesis", description: "Expression of Ideas: Rhetorical Synthesis (student notes)", questions: 206, minutes: 154, cover: "RS" },

  { id: "demo-types", file: "_demo-types.js", title: "Demo: every question type", hidden: true }
];
