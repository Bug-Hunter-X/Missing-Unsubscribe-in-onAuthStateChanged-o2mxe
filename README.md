# Firebase onAuthStateChanged Unsubscribe Bug

This repository demonstrates a common error in Firebase applications: forgetting to unsubscribe from the `onAuthStateChanged` listener.  Failure to unsubscribe can lead to memory leaks and unexpected behavior.

## Bug Description
The `firebaseBug.js` file showcases the problem. The `onAuthStateChanged` listener is attached, but there's no mechanism to detach it when it's no longer needed. This can lead to the listener continuously firing even after the component using it is unmounted, causing performance issues and potential memory leaks.

## Solution
The `firebaseBugSolution.js` file presents the corrected code.  It includes an `unsubscribe` function to properly detach the listener when necessary, preventing the issues described above.

## How to Reproduce
1. Clone this repository.
2. Install the necessary packages: `npm install firebase`
3. Configure your Firebase project and obtain your API key.
4. Run `firebaseBug.js` and observe the behavior.
5. Then run `firebaseBugSolution.js` and note the improved memory management.