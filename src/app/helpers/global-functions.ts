import * as moment from 'moment-timezone';

export class GlobalFunctions {

  public static formatDateForSafariForSingleDateInput(date) {     // Фикс глюка Сафари, ИЕ с неправильным форматом даты для DatePipe - это для скедуля (Активен до в html)
    return moment(date).format();
  }
}
