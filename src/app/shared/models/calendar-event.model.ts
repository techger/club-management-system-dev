import { CalendarEventAction, CalendarEvent } from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

export class CalendarAppEvent implements CalendarEvent {
  _id?: string;
  start: Date;
  time?:string;
  mainCast?:string;
  customer?:string;
  customerId?:number;
  numberOfCustomer?:number;
  douhanCasts?:string;
  douhanCastsId?:number;
  note?:string;
  end?: Date;
  title: string;
  content?: string;
  color?: {
    primary: string;
    secondary: string;
  };
  btn?: string;
  actions?: CalendarEventAction[];
  allDay?: boolean;
  cssClass?: string;
  resizable?: {
    beforeStart?: boolean;
    afterEnd?: boolean;
  };
  draggable?: boolean;
  meta?: {
    location: string,
    notes: string
  };

  constructor(data?) {
    data = data || {};
    this._id = data._id || '';
    this.start = new Date(data.start) || startOfDay(new Date());
    this.time = data.time || '19:00';
    this.mainCast = data.mainCast || '';
    this.customer = data.customer || '';
    this.customerId = data.customerId || null;
    this.numberOfCustomer = data.numberOfCustomer || null;
    this.douhanCasts = data.douhanCasts || '';
    this.douhanCastsId = data.douhanCastsId || null;
    this.note = data.note || '';
    this.end = new Date(data.end) || endOfDay(new Date());
    this.title = data.title || '';
    this.content = data.content || '';
    this.color = {
      primary: data.color && data.color.primary || '#247ba0',
      secondary: data.color && data.color.secondary || '#D1E8FF'
    };
    this.btn = data.btn || '';
    this.draggable = data.draggable || true;
    this.resizable = {
      beforeStart: data.resizable && data.resizable.beforeStart || true,
      afterEnd: data.resizable && data.resizable.afterEnd || true
    };
    this.actions = data.actions || [];
    this.allDay = data.allDay || false;
    this.cssClass = data.cssClass || '';
    this.meta = {
      location: data.meta && data.meta.location || '',
      notes: data.meta && data.meta.notes || ''
    };
  }
}
