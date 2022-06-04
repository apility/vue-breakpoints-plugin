import { App } from 'vue'
import { Breakpoints } from './types'
import { breakpointsInjectionKey } from './injectionKey'

export const breakpointsPlugin = (
  app: App,
  { breakpoints }: { breakpoints: Breakpoints },
) => {
  app.provide(breakpointsInjectionKey, breakpoints)
}
