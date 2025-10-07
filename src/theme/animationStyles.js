import { defineAnimationStyles } from '@chakra-ui/react';

const animationStyles = defineAnimationStyles({
  'slide-fade-in': {
    value: {
      animationName: 'slide-from-bottom, fade-in',
      animationDuration: '600ms',
      animationTimingFunction: 'ease-out',
      animationFillMode: 'forwards',
    },
  },
  'scale-fade-in': {
    value: {
      animationName: 'scale-in, fade-in',
      animationDuration: '500ms',
      animationTimingFunction: 'ease-out',
      animationFillMode: 'forwards',
    },
  },
  'slide-fade-in-delayed': {
    value: {
      animationName: 'slide-from-bottom, fade-in',
      animationDuration: '700ms',
      animationTimingFunction: 'ease-out',
      animationFillMode: 'forwards',
      animationDelay: '200ms',
    },
  },
  'scale-fade-in-stagger': {
    value: {
      animationName: 'scale-in, fade-in',
      animationDuration: '400ms',
      animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      animationFillMode: 'forwards',
    },
  },
});

export { animationStyles };
