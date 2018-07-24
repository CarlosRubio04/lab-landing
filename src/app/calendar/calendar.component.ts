import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { colors } from '../demo-utils/colors';


@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  view: string = 'week';

  viewDate: Date = new Date('08 13 2018');

  events: CalendarEvent[] = [
  	{
      title: 'Campamento Educativo',
      color: colors.purple,
      start: new Date('08 13 2018 08:00'),
      end: new Date('08 13 2018 10:00'),
      cssClass: 'my-custom-class'
    }
  ];

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }
}
