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

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Inmersión Laboratorio Vivo',
      color: colors.orange,
      start: new Date('08 27 2018 08: 00'),
      end: new Date('08 27 2018 09: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio Vivo',
      color: colors.orange,
      start: new Date('08 27 2018 14: 00'),
      end: new Date('08 27 2018 15: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio Vivo',
      color: colors.orange,
      start: new Date('08 28 2018 08: 00'),
      end: new Date('08 28 2018 09: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio Vivo',
      color: colors.orange,
      start: new Date('08 28 2018 14: 00'),
      end: new Date('08 28 2018 15: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: '¡Vive la comunidad! TALLER JORGE REYNOLDS',
      color: colors.orange,
      start: new Date('08 29 2018 08: 00'),
      end: new Date('08 29 2018 11: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('08 29 2018 11: 00'),
      end: new Date('08 29 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio Vivo',
      color: colors.orange,
      start: new Date('08 29 2018 14: 00'),
      end: new Date('08 29 2018 15: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio Vivo',
      color: colors.orange,
      start: new Date('08 30 2018 08: 00'),
      end: new Date('08 30 2018 09: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio Vivo',
      color: colors.orange,
      start: new Date('08 30 2018 10: 00'),
      end: new Date('08 30 2018 11: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio Vivo',
      color: colors.orange,
      start: new Date('08 30 2018 14: 00'),
      end: new Date('08 30 2018 15: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Inmersión Laboratorio Vivo',
      color: colors.orange,
      start: new Date('08 31 2018 08: 00'),
      end: new Date('08 31 2018 09: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('08 31 2018 10: 00'),
      end: new Date('08 31 2018 11: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('08 31 2018 14: 00'),
      end: new Date('08 31 2018 15: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('08 31 2018 14: 00'),
      end: new Date('08 31 2018 15: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo',
      color: colors.purple,
      start: new Date('09 03 2018 08: 00'),
      end: new Date('09 03 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('09 03 2018 11: 00'),
      end: new Date('09 03 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 1',
      color: colors.orange,
      start: new Date('09 03 2018 14: 00'),
      end: new Date('09 03 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 1',
      color: colors.orange,
      start: new Date('09 04 2018 08: 00'),
      end: new Date('09 04 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 1',
      color: colors.orange,
      start: new Date('09 04   2018 14: 00'),
      end: new Date('09 04     2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Territorio educador 1',
      color: colors.blue,
      start: new Date('09 05 2018 08: 00'),
      end: new Date('09 05 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Territorio educador 1',
      color: colors.blue,
      start: new Date('09 05 2018 14: 00'),
      end: new Date('09 05 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Aprender jugando 1',
      color: colors.purple,
      start: new Date('09 06 2018 08: 00'),
      end: new Date('09 06 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('09 06 2018 11: 00'),
      end: new Date('09 06 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Aprender jugando 1',
      color: colors.purple,
      start: new Date('09 06 2018 14: 00'),
      end: new Date('09 06 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Territorio educador 1',
      color: colors.blue,
      start: new Date('09 07 2018 08: 00'),
      end: new Date('09 07 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Territorio educador 1',
      color: colors.blue,
      start: new Date('09 07 2018 11: 00'),
      end: new Date('09 07 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Aprender jugando 1',
      color: colors.purple,
      start: new Date('09 07 2018 14: 00'),
      end: new Date('09 07 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo',
      color: colors.purple,
      start: new Date('09 07 2018 08: 00'),
      end: new Date('09 07 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('09 10 2018 11: 00'),
      end: new Date('09 10 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 2',
      color: colors.orange,
      start: new Date('09 10 2018 14: 00'),
      end: new Date('09 10 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 2',
      color: colors.orange,
      start: new Date('09 11 2018 08: 00'),
      end: new Date('09 11 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 2',
      color: colors.orange,
      start: new Date('09 11 2018 14: 00'),
      end: new Date('09 11 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: '¡Vive la comunidad!',
      color: colors.orange,
      start: new Date('09 12 2018 08: 00'),
      end: new Date('09 12 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: '¡Vive la comunidad!',
      color: colors.orange,
      start: new Date('09 12 2018 14: 00'),
      end: new Date('09 12 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo 1',
      color: colors.purple,
      start: new Date('09 13 2018 08: 00'),
      end: new Date('09 13 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('09 13 2018 11: 00'),
      end: new Date('09 13 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo 1',
      color: colors.purple,
      start: new Date('09 13 2018 14: 00'),
      end: new Date('09 13 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: '¡Vive la comunidad!',
      color: colors.orange,
      start: new Date('09 14 2018 08: 00'),
      end: new Date('09 14 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: '¡Vive la comunidad!',
      color: colors.orange,
      start: new Date('09 14 2018 11: 00'),
      end: new Date('09 14 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo 1',
      color: colors.purple,
      start: new Date('09 14 2018 14: 00'),
      end: new Date('09 14 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo',
      color: colors.purple,
      start: new Date('09 14 2018 14: 00'),
      end: new Date('09 14 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo',
      color: colors.purple,
      start: new Date('09 17 2018 08: 00'),
      end: new Date('09 17 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El problema como oportunidad 1',
      color: colors.blue,
      start: new Date('09 17 2018 14: 00'),
      end: new Date('09 17 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El problema como oportunidad 1',
      color: colors.blue,
      start: new Date('09 18 2018 08: 00'),
      end: new Date('09 18 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El problema como oportunidad 1',
      color: colors.blue,
      start: new Date('09 18 2018 14: 00'),
      end: new Date('09 18 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Territorio educador 2',
      color: colors.blue,
      start: new Date('09 19 2018 08: 00'),
      end: new Date('09 19 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('09 19 2018 11: 00'),
      end: new Date('09 19 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Territorio educador 2',
      color: colors.blue,
      start: new Date('09 19 2018 14: 00'),
      end: new Date('09 19 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Aprender jugando 2',
      color: colors.purple,
      start: new Date('09 20 2018 08: 00'),
      end: new Date('09 20 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'CON-TACTO',
      color: colors.orange,
      start: new Date('09 20 2018 11: 00'),
      end: new Date('09 20 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Aprender jugando 2',
      color: colors.purple,
      start: new Date('09 20 2018 14: 00'),
      end: new Date('09 20 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Territorio educador 2',
      color: colors.blue,
      start: new Date('09 21 2018 08: 00'),
      end: new Date('09 21 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: '¡Vive la comunidad!',
      color: colors.orange,
      start: new Date('09 21 2018 11: 00'),
      end: new Date('09 21 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Aprender jugando 2',
      color: colors.purple,
      start: new Date('09 21 2018 14: 00'),
      end: new Date('09 21 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo',
      color: colors.purple,
      start: new Date('09 24 2018 08: 00'),
      end: new Date('09 24 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'CON-TACTO',
      color: colors.orange,
      start: new Date('09 24 2018 14: 00'),
      end: new Date('09 24 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'CON-TACTO',
      color: colors.orange,
      start: new Date('09 25 2018 08: 00'),
      end: new Date('09 25 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'CON-TACTO',
      color: colors.orange,
      start: new Date('09 25 2018 14: 00'),
      end: new Date('09 25 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo 1',
      color: colors.purple,
      start: new Date('09 26 2018 08: 00'),
      end: new Date('09 26 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('09 26 2018 11: 00'),
      end: new Date('09 26 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo 1',
      color: colors.purple,
      start: new Date('09 26 2018 14: 00'),
      end: new Date('09 26 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo 2',
      color: colors.purple,
      start: new Date('09 27 2018 08: 00'),
      end: new Date('09 27 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: '¡Vive la comunidad!',
      color: colors.orange,
      start: new Date('09 27 2018 11: 00'),
      end: new Date('09 27 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo 2',
      color: colors.purple,
      start: new Date('09 27 2018 14: 00'),
      end: new Date('09 27 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo 1',
      color: colors.purple,
      start: new Date('09 28 2018 08: 00'),
      end: new Date('09 28 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Reconocer para conocer 1',
      color: colors.purple,
      start: new Date('09 28 2018 11: 00'),
      end: new Date('09 28 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo 2',
      color: colors.purple,
      start: new Date('09 28 2018 14: 00'),
      end: new Date('09 28 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Campamento educativo',
      color: colors.purple,
      start: new Date('10 01 2018 08: 00'),
      end: new Date('10 01 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 3',
      color: colors.orange,
      start: new Date('10 01 2018 14: 00'),
      end: new Date('10 01 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 3',
      color: colors.orange,
      start: new Date('10 02 2018 08: 00'),
      end: new Date('10 02 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Imaginarios 3',
      color: colors.orange,
      start: new Date('10 02 2018 14: 00'),
      end: new Date('10 02 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Territorio educador 3',
      color: colors.blue,
      start: new Date('10 03 2018 08: 00'),
      end: new Date('10 03 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: '¡Vive la comunidad!',
      color: colors.orange,
      start: new Date('10 03 2018 11: 00'),
      end: new Date('10 03 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Territorio educador 3',
      color: colors.blue,
      start: new Date('10 03 2018 14: 00'),
      end: new Date('10 03 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'CON-TACTO',
      color: colors.orange,
      start: new Date('10 04 2018 08: 00'),
      end: new Date('10 04 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('10 04 2018 11: 00'),
      end: new Date('10 04 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'CON-TACTO',
      color: colors.orange,
      start: new Date('10 04 2018 14: 00'),
      end: new Date('10 04 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Territorio educador 3',
      color: colors.blue,
      start: new Date('10 05 2018 08: 00'),
      end: new Date('10 05 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: '¡Vive la comunidad! 2',
      color: colors.orange,
      start: new Date('10 05 2018 11: 00'),
      end: new Date('10 05 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'CON-TACTO',
      color: colors.orange,
      start: new Date('10 05 2018 14: 00'),
      end: new Date('10 05 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Reconocer para conocer 1',
      color: colors.purple,
      start: new Date('10 16 2018 08: 00'),
      end: new Date('10 16 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Reconocer para conocer 1',
      color: colors.purple,
      start: new Date('10 16 2018 11: 00'),
      end: new Date('10 16 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Reconocer para conocer 1',
      color: colors.purple,
      start: new Date('10 16 2018 14: 00'),
      end: new Date('10 16 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Construyendo un futuro sostenible',
      color: colors.purple,
      start: new Date('10 17 2018 08: 00'),
      end: new Date('10 17 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: '¡Vive la comunidad!',
      color: colors.orange,
      start: new Date('10 17 2018 11: 00'),
      end: new Date('10 17 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Construyendo un futuro sostenible',
      color: colors.purple,
      start: new Date('10 17 2018 14: 00'),
      end: new Date('10 17 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'La educación tiene ciencia',
      color: colors.blue,
      start: new Date('10 18 2018 08: 00'),
      end: new Date('10 18 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'El poder del ahora',
      color: colors.orange,
      start: new Date('10 18 2018 11: 00'),
      end: new Date('10 18 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'La educación tiene ciencia',
      color: colors.blue,
      start: new Date('10 18 2018 14: 00'),
      end: new Date('10 18 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'Construyendo un futuro sostenible',
      color: colors.purple,
      start: new Date('10 19 2018 08: 00'),
      end: new Date('10 19 2018 10: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: '¡Vive la comunidad!',
      color: colors.orange,
      start: new Date('10 19 2018 11: 00'),
      end: new Date('10 19 2018 13: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    },
    {
      title: 'La educación tiene ciencia',
      color: colors.blue,
      start: new Date('10 19 2018 14: 00'),
      end: new Date('10 19 2018 16: 00'),
      meta: {
        cupos: 30,
        insc: 'libre'
      },
    }
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
