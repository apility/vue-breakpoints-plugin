import { Breakpoints } from './types'
import { InjectionKey } from 'vue'

export const breakpointsInjectionKey: InjectionKey<Breakpoints> = Symbol('breakpointsInjection')
