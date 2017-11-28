import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  state('void', style({ opacity: 0, transform: 'translateY(-2rem)' })),
  transition('void => *', [
    animate(
      '300ms ease-in',
      style({
        opacity: 1,
        transform: 'translateY(0rem)'
      })
    )
  ]),
  transition('* => void', [
    animate(
      '300ms ease-out',
      style({
        opacity: 0,
        transform: 'translateY(-2rem)'
      })
    )
  ])
]);
