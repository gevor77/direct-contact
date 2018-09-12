import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as XLSX from 'xlsx';

@Injectable()

export class ExportAsXLSXService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    // var wb = XLSX.utils.book_new();
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    // console.log('worksheet',worksheet);
    // const wc: XLSX.WorkSheet = XLSX.utils.json_to_sheet([
    //   {S:'testing'},
    //   {S:'test'}
    // ])
    // XLSX.utils.book_append_sheet(wb, wc, "People");

    const workbook: XLSX.WorkBook = { Sheets: { 'messages': worksheet }, SheetNames: ['messages'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });    
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
    
    
    
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const messages: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    
    FileSaver.saveAs(messages, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  
}

