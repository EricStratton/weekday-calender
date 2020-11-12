export default class weekdayCalculator {
  constructor(ourDate, weekday) {
    this.ourDate = ourDate;
    this.weekday = weekday;
  }
  getOurWeekDay() {
    return this.weekday = this.ourDate.getDay(); 
  }
};
