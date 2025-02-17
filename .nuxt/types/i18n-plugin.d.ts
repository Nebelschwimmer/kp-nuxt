// Generated by @nuxtjs/i18n
import type { ExportedGlobalComposer, Composer } from 'vue-i18n'
import type { NuxtI18nRoutingCustomProperties, ComposerCustomProperties } from '../../node_modules/.pnpm/@nuxtjs+i18n@9.2.0_@vue+compiler-dom@3.5.13_eslint@9.20.0_jiti@2.4.2__magicast@0.3.5_rollup@4_4iohylulbxel3nmgw3gsdg5rsu/node_modules/@nuxtjs/i18n/dist/runtime/types.ts'
import type { Strategies, Directions, LocaleObject } from '../../node_modules/.pnpm/@nuxtjs+i18n@9.2.0_@vue+compiler-dom@3.5.13_eslint@9.20.0_jiti@2.4.2__magicast@0.3.5_rollup@4_4iohylulbxel3nmgw3gsdg5rsu/node_modules/@nuxtjs/i18n/dist/types.d.ts'

declare module 'vue-i18n' {
  interface ComposerCustom extends ComposerCustomProperties<LocaleObject[]> {}
  interface ExportedGlobalComposer extends NuxtI18nRoutingCustomProperties<LocaleObject[]> {}
  interface VueI18n extends NuxtI18nRoutingCustomProperties<LocaleObject[]> {}
}

declare module '@intlify/core-base' {
  // generated based on configured locales
  interface GeneratedTypeConfig { 
    locale: "ru" | "en" | "fr"
  }
}


declare module '#app' {
  interface NuxtApp {
    $i18n: ExportedGlobalComposer & Composer & NuxtI18nRoutingCustomProperties<LocaleObject[]>
  }
}


declare module 'vue-router' {
  import type { RouteNamedMapI18n } from 'vue-router/auto-routes'

  export interface TypesConfig {
    RouteNamedMapI18n: RouteNamedMapI18n
  }

  export type RouteMapI18n =
    TypesConfig extends Record<'RouteNamedMapI18n', infer RouteNamedMap> ? RouteNamedMap : RouteMapGeneric
    
  // Prefer named resolution for i18n
  export type RouteLocationNamedI18n<Name extends keyof RouteMapI18n = keyof RouteMapI18n> =
      | Name
      | Omit<RouteLocationAsRelativeI18n, 'path'> & { path?: string }
      /**
       * Note: disabled route path string autocompletion, this can break depending on `strategy`
       * this can be enabled again after route resolve has been improved.
      */
      // | RouteLocationAsStringI18n
      // | RouteLocationAsPathI18n

  export type RouteLocationRawI18n<Name extends keyof RouteMapI18n = keyof RouteMapI18n> =
    RouteMapGeneric extends RouteMapI18n
      ? RouteLocationAsStringI18n | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
      :
          | _LiteralUnion<RouteLocationAsStringTypedList<RouteMapI18n>[Name], string>
          | RouteLocationAsRelativeTypedList<RouteMapI18n>[Name]

  export type RouteLocationResolvedI18n<Name extends keyof RouteMapI18n = keyof RouteMapI18n> =
    RouteMapGeneric extends RouteMapI18n
      ? RouteLocationResolvedGeneric
      : RouteLocationResolvedTypedList<RouteMapI18n>[Name]

  export interface RouteLocationNormalizedLoadedTypedI18n<
    RouteMapI18n extends RouteMapGeneric = RouteMapGeneric,
    Name extends keyof RouteMapI18n = keyof RouteMapI18n
  > extends RouteLocationNormalizedLoadedGeneric {
    name: Extract<Name, string | symbol>
    params: RouteMapI18n[Name]['params']
  }
  export type RouteLocationNormalizedLoadedTypedListI18n<RouteMapOriginal extends RouteMapGeneric = RouteMapGeneric> = {
    [N in keyof RouteMapOriginal]: RouteLocationNormalizedLoadedTypedI18n<RouteMapOriginal, N>
  }
  export type RouteLocationNormalizedLoadedI18n<Name extends keyof RouteMapI18n = keyof RouteMapI18n> =
    RouteMapGeneric extends RouteMapI18n
      ? RouteLocationNormalizedLoadedGeneric
      : RouteLocationNormalizedLoadedTypedListI18n<RouteMapI18n>[Name]

  type _LiteralUnion<LiteralType, BaseType extends string = string> = LiteralType | (BaseType & Record<never, never>)

  export type RouteLocationAsStringI18n<Name extends keyof RouteMapI18n = keyof RouteMapI18n> =
    RouteMapGeneric extends RouteMapI18n
      ? string
      : _LiteralUnion<RouteLocationAsStringTypedList<RouteMapI18n>[Name], string>

  export type RouteLocationAsRelativeI18n<Name extends keyof RouteMapI18n = keyof RouteMapI18n> =
    RouteMapGeneric extends RouteMapI18n
      ? RouteLocationAsRelativeGeneric
      : RouteLocationAsRelativeTypedList<RouteMapI18n>[Name]

  export type RouteLocationAsPathI18n<Name extends keyof RouteMapI18n = keyof RouteMapI18n> =
    RouteMapGeneric extends RouteMapI18n ? RouteLocationAsPathGeneric : RouteLocationAsPathTypedList<RouteMapI18n>[Name]

  /**
   * Helper to generate a type safe version of the {@link RouteLocationAsRelative} type.
   */
  export interface RouteLocationAsRelativeTypedI18n<
    RouteMapI18n extends RouteMapGeneric = RouteMapGeneric,
    Name extends keyof RouteMapI18n = keyof RouteMapI18n
  > extends RouteLocationAsRelativeGeneric {
    name?: Extract<Name, string | symbol>
    params?: RouteMapI18n[Name]['paramsRaw']
  }
}



export {}