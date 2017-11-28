import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const flyOut = trigger('flyOut', [
  state('void', style({ opacity: 0, transform: 'translateY(-30%)' })),
  transition('void => *', [
    animate(
      '300ms ease-out',
      style({
        opacity: 1,
        transform: 'translateY(0%)'
      })
    )
  ]),
  transition('* => void', [
    animate(
      '300ms ease-out',
      style({
        opacity: 0,
        transform: 'translateX(-80%)'
      })
    )
  ])
]);
