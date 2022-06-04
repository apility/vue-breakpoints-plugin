import { inject } from 'vue'
import { breakpointsInjectionKey } from './injectionKey'

export const useBreakpoints = () => {
  const breakpointsInjection = inject(breakpointsInjectionKey)

  if (breakpointsInjection === undefined) {
    throw new Error('Breakpoints injection was not provided')
  }

  return breakpointsInjection
}
