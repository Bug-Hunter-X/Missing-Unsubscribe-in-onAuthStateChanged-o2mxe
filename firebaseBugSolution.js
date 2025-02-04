let unsubscribe;

const auth = getAuth();

const onAuthStateChangedListener = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};

const cleanup = () => {
  if (unsubscribe) {
    unsubscribe();
  }
};

onAuthStateChangedListener();

// Call cleanup when the component unmounts or is no longer needed.
export { cleanup };