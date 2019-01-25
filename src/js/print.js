export default function printMe() {
  console.log('learning webpack is what we do...');

  const MY_NUMBER = 12;

  (() => {
    for (let i = 12; i >= 0; i--) {
      console.log(`My Number = ${MY_NUMBER}, but add i, and it is ${MY_NUMBER + i}`);
    }
  })();
}
