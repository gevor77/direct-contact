export const oneDayMs = 86400000;
export function objectTemplate() {
  this.type = 'schedule';
  this.dates = [];
}
export function intervalTemplate() {
  this.dates = [];
}
export const getDateString = (date => {
  const _month = date.getMonth() + 1;
  const month = `${_month.toString().length === 1 ? '0' : ''}${_month}`;

  const _day = date.getDate();
  const day = `${_day.toString().length === 1 ? '0' : ''}${_day}`;

  return `${date.getFullYear()}-${month}-${day}`;
});

export const getDateFromString = (str => {
  const date = new Date(str);
  date.setHours(0, 0, 0, 0);
  return date;
});

export const api = {
  get: '/get-route-schedules',
  post: '/create-route-schedule',
  remove: '/remove-schedule-by-route-id'
};

export const getDateStringToShow = (date => {
  const _month = date.getMonth() + 1;
  const month = `${_month.toString().length === 1 ? '0' : ''}${_month}`;

  const _day = date.getDate();
  const day = `${_day.toString().length === 1 ? '0' : ''}${_day}`;

  return `${day}.${month}.${date.getFullYear()}`;
});
