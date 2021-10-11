// const favoriteState = require('./project');
const getGreeting = require('./project');

test('getGreeting can return a greeting', () => {
  expect(getGreeting('Hi', 'Sam')).toEqual("Hi Sam")
});

// test('can learn what is their favorite state', () => {
//   expect(favoriteState('Utah ')).toBe("Utah is my favorite too!")
// });



