import weekdayCalculator from '../src/js/weekday.js';

describe('weekdayCalculator', () => {

  test('should correctly return the current day-of-the-week', () => {
    const date = new weekdayCalculator ();
    let weekday = date.getWeekDay();
    expect(weekday).toEqual(4);
  });
  
});