/* Site settings. This is the only file you edit to change behaviour (not content). */
window.APP_CONFIG = {
  siteName: "Echelon Practice",
  tagline: "One test a day. Real test-day feel.",

  // Passcode for teacher.html. NOTE: this is a convenience gate, not real security —
  // anyone who reads the page source can see it.
  teacherPasscode: "teacher2026",

  // "local"    → attempts are saved in each student's own browser (localStorage).
  //              The teacher dashboard can only see attempts made on the same browser.
  // "firebase" → attempts are saved to Cloud Firestore, so the dashboard sees every student.
  storage: "local",

  // Firestore collection. Kept separate from the SAT app's own "attempts" collection.
  firebaseCollection: "practiceAttempts",

  // Paste the web-app config from Firebase console → Project settings → Your apps.
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    appId: ""
  }
};
