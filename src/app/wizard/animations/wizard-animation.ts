import {trigger, animate, transition, style, state} from '@angular/animations';

export const wizardAnimation = [
  trigger('wizard', [
    state('step0', style({
      opacity: 1,
      transform: 'translateX(177px)',
    })),
    state('step1', style({
      opacity: 0,
      transform: 'translateX(0)',
    })),
    state('step2', style({
      opacity: 0,
      transform: 'translateX(0)',
    })),

    transition(':enter', [
      style({ opacity: 1, transform: 'translateX(354px)' }),
      animate(300, style({ transform: 'translateX(177px)', opacity: 1, }))
    ]),
    transition('* => step0', [
      style({ transform: 'translateX(-0px)', opacity: 1, }),
      animate(300, style({ transform: 'translateX(177px)', }))
    ])
  ]),

  trigger('wizard1', [
    state('step0', style({
      opacity: 0,
      position: 'relative',
      transform: 'translateX(0)',
    })),
    state('step1', style({
      opacity: 1,
      position: 'absolute',
      transform: 'translateX(0)',
    })),
    state('step2', style({
      opacity: 0,
      position: 'relative',
      transform: 'translateX(0)',
    })),

    transition('step0 => step1', [
      style({ transform: 'translateX(177px)', opacity: 1, }),
      animate(300, style({ transform: 'translateX(0)', }))
    ]),
    transition('step2 => step1', [
      style({ transform: 'translateX(-177px)', opacity: 1, }),
      animate(300, style({ transform: 'translateX(0)', }))
    ])
  ]),

  trigger('wizard2', [
    state('step0', style({
      opacity: 0,
      transform: 'translateX(0)',
    })),
    state('step1', style({
      opacity: 0,
      transform: 'translateX(0)',
    })),
    state('step2', style({
      opacity: 1,
      transform: 'translateX(-177px)',
    })),

    transition('step0 => step2', [
      style({ transform: 'translateX(100px)', opacity: 1, }),
      animate(300, style({ transform: 'translateX(0)' }))
    ]),
    transition('step1 => step2', [
      style({ transform: 'translateX(0px)', opacity: 1, }),
      animate(300, style({ transform: 'translateX(-177px)' }))
    ])
  ])
];
