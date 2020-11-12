import weekdayCalculator from '../src/js/weekday.js';

describe('weekdayCalculator', () => {

  test('should correctly return the current day-of-the-week', () => {
    const date = new weekdayCalculator ();
    date.ourDate = new Date();
    date.getOurWeekDay();
    expect(date.weekday).toEqual(4);
  });
  
});