import { getYearsAndMonthsPassed } from './Resume';


it('returns just number of months passed when < 12 months', () => {
  const start = new Date('2000-01-01');
  const end = new Date('2000-03-01');

  expect(getYearsAndMonthsPassed(start, end)).toEqual('2 months');
});

it('returns just number of years passed when evenly 12 month increments', () => {
  const start = new Date('2000-01-01');
  const end = new Date('2002-01-01');

  expect(getYearsAndMonthsPassed(start, end)).toEqual('2 years');
});

it('returns singular of month when only one month', () => {
  const start = new Date('2000-01-01');
  const end = new Date('2000-02-01');

  expect(getYearsAndMonthsPassed(start, end)).toEqual('1 month');
});

it('returns singular of year when only one year', () => {
  const start = new Date('2000-01-01');
  const end = new Date('2001-01-01');

  expect(getYearsAndMonthsPassed(start, end)).toEqual('1 year');
});

it('returns years and months', () => {
  const start = new Date('2000-01-01');
  const end = new Date('2003-04-01');

  expect(getYearsAndMonthsPassed(start, end)).toEqual('3 years 3 months');
});

it('returns singular mixed with plural - month', () => {
  const start = new Date('2000-01-01');
  const end = new Date('2003-02-01');

  expect(getYearsAndMonthsPassed(start, end)).toEqual('3 years 1 month');
});

it('returns singular mixed with plural - year', () => {
  const start = new Date('2000-01-01');
  const end = new Date('2001-04-01');

  expect(getYearsAndMonthsPassed(start, end)).toEqual('1 year 3 months');
});
