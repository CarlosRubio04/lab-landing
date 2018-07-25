import { 
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef 
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { 
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { colors } from '../demo-utils/colors';


@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  modalData: {
    action: string;
    event: CalendarEvent;
  };


  view: string = 'week';

  viewDate: Date = new Date('08 13 2018');

  events: CalendarEvent[] = [
  	{
      title: 'Campamento Educativo',
      color: colors.purple,
      start: new Date('08 13 2018 08:00'),
      end: new Date('08 13 2018 10:00'),
      cssClass: 'directivos',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio vivo',
      color: colors.red,
      start: new Date('08 13 2018 14:00'),
      end: new Date('08 13 2018 16:00'),
      cssClass: 'experiencias',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio vivo',
      color: colors.red,
      start: new Date('08 14 2018 08:00'),
      end: new Date('08 14 2018 09:30'),
      cssClass: 'experiencias',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio vivo',
      color: colors.red,
      start: new Date('08 14 2018 14:00'),
      end: new Date('08 14 2018 16:00'),
      cssClass: 'experiencias',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio vivo',
      color: colors.orange,
      start: new Date('08 15 2018 08:00'),
      end: new Date('08 15 2018 10:00'),
      cssClass: 'entorno',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'El Poder del Ahora',
      color: colors.orange,
      start: new Date('08 15 2018 10:00'),
      end: new Date('08 15 2018 12:00'),
      cssClass: 'entorno',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio vivo',
      color: colors.orange,
      start: new Date('08 15 2018 14:00'),
      end: new Date('08 15 2018 16:00'),
      cssClass: 'entorno',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio vivo',
      color: colors.purple,
      start: new Date('08 16 2018 08:00'),
      end: new Date('08 16 2018 10:00'),
      cssClass: 'gamificador',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio vivo',
      color: colors.purple,
      start: new Date('08 16 2018 10:00'),
      end: new Date('08 16 2018 12:00'),
      cssClass: 'gamificador',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio vivo',
      color: colors.purple,
      start: new Date('08 16 2018 14:00'),
      end: new Date('08 16 2018 16:00'),
      cssClass: 'gamificador',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio vivo',
      color: colors.orange,
      start: new Date('08 17 2018 08:00'),
      end: new Date('08 17 2018 10:00'),
      cssClass: 'entorno',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'rectores'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('08 17 2018 10:00'),
      end: new Date('08 17 2018 12:00'),
      cssClass: 'entorno',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'rectores'
      },
    },
    {
      title: 'Inmersión Laboratorio vivo',
      color: colors.purple,
      start: new Date('08 17 2018 14:00'),
      end: new Date('08 17 2018 16:00'),
      cssClass: 'gamificador',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 1',
      color: colors.red,
      start: new Date('08 21 2018 08:00'),
      end: new Date('08 21 2018 10:00'),
      cssClass: 'experiencias',
      meta: {
         id: 1,
         cupos: 26,
         insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 1',
      color: colors.red,
      start: new Date('08 21 2018 11:00'),
      end: new Date('08 21 2018 14:00'),
      cssClass: 'experiencias',
      meta: {
         id: 1,
         cupos: 26,
         insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 1',
      color: colors.red,
      start: new Date('08 21 2018 14:00'),
      end: new Date('08 21 2018 17:00'),
      cssClass: 'experiencias',
      meta: {
         id: 1,
         cupos: 26,
         insc: 'libre'
      },
    },
    {
      title: 'Territorio Educador 1',
      color: colors.orange,
      start: new Date('08 22 2018 08:00'),
      end: new Date('08 22 2018 11:00'),
      cssClass: 'entorno',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Territorio Educador 1',
      color: colors.orange,
      start: new Date('08 22 2018 14:00'),
      end: new Date('08 22 2018 17:00'),
      cssClass: 'entorno',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Aprender Jugando 1',
      color: colors.purple,
      start: new Date('08 23 2018 08:00'),
      end: new Date('08 23 2018 11:00'),
      cssClass: 'gamificador',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.purple,
      start: new Date('08 23 2018 11:00'),
      end: new Date('08 23 2018 14:00'),
      cssClass: 'gamificador',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Aprender Jugando 1',
      color: colors.purple,
      start: new Date('08 23 2018 14:00'),
      end: new Date('08 23 2018 17:00'),
      cssClass: 'gamificador',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Territorio Educador 1',
      color: colors.orange,
      start: new Date('08 24 2018 08:00'),
      end: new Date('08 24 2018 11:00'),
      cssClass: 'entornos',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
    {
      title: 'Territorio Educador 1',
      color: colors.orange,
      start: new Date('08 24 2018 11:00'),
      end: new Date('08 24 2018 14:00'),
      cssClass: 'entornos',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'rectores'
      },
    },
    {
      title: 'Aprender Jugando 1',
      color: colors.purple,
      start: new Date('08 24 2018 14:00'),
      end: new Date('08 24 2018 17:00'),
      cssClass: 'gamificador',
      meta: {
         id: 1,
         cupos: 20,
         insc: 'libre'
      },
    },
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'sm' });
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }
}
