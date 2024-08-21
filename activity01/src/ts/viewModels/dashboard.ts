import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import ArrayDataProvider = require('ojs/ojarraydataprovider');
import "oj-c/input-text";
import 'oj-c/input-number';
import "ojs/ojknockout";
import 'oj-c/form-layout';
import 'oj-c/input-password';
import 'oj-c/radioset';
import 'oj-c/button';
import 'ojs/ojlabelvalue';
import 'ojs/ojlabel';
import 'oj-c/checkbox';
import "oj-c/menu-button";
import 'ojs/ojprogress-bar';
import 'oj-c/select-single';
import 'oj-c/input-date-text';
import { IntlDateTimeConverter } from 'ojs/ojconverter-datetime';
import Message = require('ojs/ojmessaging');
import { ojDatePicker } from 'ojs/ojdatetimepicker';
import 'ojs/ojknockout';
import 'ojs/ojdatetimepicker';
import 'ojs/ojlabel';
import 'ojs/ojformlayout';
import { MenuItems, MenuSelection, CMenuButtonElement } from 'oj-c/menu-button';
type DataType = {
  value: string;
  label: string;
};
class DashboardViewModel {
  readonly progressValue = ko.observable();
  readonly indeterminate = ko.observableArray();
  username : ko.Observable<string>;
  date : ko.Observable<Date> | ko.Observable<string>;
  age : ko.Observable<number> | ko.Observable<any>;
  currentColor: ko.Observable<string>;
  colorOptions: Array<{ value: string; label: string }>;
  browsersDP: ArrayDataProvider<string, DataType>;
  timeFullConverter: IntlDateTimeConverter;
    error: Message[];
    warning: Message[];
    info: Message[];
    confirmation: Message[];
    value: ko.Observable<string>;
    datePickerWeek: ojDatePicker['datePicker'];
    timePicker: object;
  //browsersDP: ko.Observable<ArrayDataProvider<Object, Object>>;
   constructor(){
    this.username = ko.observable("");
    this.age = ko.observable(null);
    this.date = ko.observable("")
    this.currentColor = ko.observable("Male");
      this.colorOptions = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
      ];
      let browsers = [
        { value: 'undergraduate', label: 'undergraduate' },
        { value: 'postgraduate', label: 'postgraduate' },
        
        { value: 'MBBS', label: 'MBBS' },
        
        { value: 'diploma', label: 'diploma' },
        
      ];
      this.browsersDP = new ArrayDataProvider(browsers, {
        keyAttributes: 'value'
      });
      this.value = ko.observable('2022-12-20T10:00:00Z');
      this.error = [{ summary: 'summary', detail: 'detail', severity: 'error' }];
      this.warning = [{ summary: 'summary', detail: 'detail', severity: 'warning' }];
      this.info = [{ summary: 'summary', detail: 'detail', severity: 'info' }];
      this.confirmation = [{ summary: 'summary', detail: 'detail', severity: 'confirmation' }];
      this.datePickerWeek = {
        weekDisplay: 'number'
      };
      this.timePicker = {
        timeIncrement: '00:15:00:00'
      };
      this.timeFullConverter = new IntlDateTimeConverter({
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
   }
}
export = DashboardViewModel;