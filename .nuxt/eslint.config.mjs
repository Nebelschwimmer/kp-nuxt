// ESLint config generated by Nuxt
/// <reference path="./eslint-typegen.d.ts" />
/* eslint-disable */
// @ts-nocheck

import typegen from '../node_modules/.pnpm/eslint-typegen@1.0.0_eslint@9.21.0_jiti@2.4.2_/node_modules/eslint-typegen/dist/index.mjs';
import { createConfigForNuxt, defineFlatConfigs, resolveOptions } from '../node_modules/.pnpm/@nuxt+eslint-config@1.1.0_@vue+compiler-sfc@3.5.13_eslint@9.21.0_jiti@2.4.2__typescript@5.7.3/node_modules/@nuxt/eslint-config/dist/flat.mjs';
import { fileURLToPath } from 'url';

const r = (...args) => fileURLToPath(new URL(...args, import.meta.url))

export { defineFlatConfigs }

export const options = resolveOptions({
  features: {
  "standalone": true
},
  dirs: {
    pages: ["pages"],
    composables: ["composables", "utils", "types/*.ts", "store/*.ts", "types/**/*.ts", "utils/**/*.ts"],
    components: ["components"],
    componentsPrefixed: [],
    layouts: ["layouts"],
    plugins: ["plugins"],
    middleware: ["middleware"],
    modules: ["modules"],
    servers: [],
    root: [],
    src: [""],
}
})

export const configs = createConfigForNuxt(options)

configs.append(
// Set globals from imports registry
{
  name: 'nuxt/import-globals',
  languageOptions: {
    globals: Object.fromEntries(["useScriptTriggerConsent","useScriptEventPage","useScriptTriggerElement","useScript","useScriptGoogleAnalytics","useScriptPlausibleAnalytics","useScriptClarity","useScriptCloudflareWebAnalytics","useScriptFathomAnalytics","useScriptMatomoAnalytics","useScriptGoogleTagManager","useScriptGoogleAdsense","useScriptSegment","useScriptMetaPixel","useScriptXPixel","useScriptIntercom","useScriptHotjar","useScriptStripe","useScriptLemonSqueezy","useScriptVimeoPlayer","useScriptYouTubePlayer","useScriptGoogleMaps","useScriptNpm","useScriptCrisp","isVue2","isVue3","defineNuxtLink","useNuxtApp","tryUseNuxtApp","defineNuxtPlugin","definePayloadPlugin","useRuntimeConfig","defineAppConfig","requestIdleCallback","cancelIdleCallback","useAppConfig","updateAppConfig","defineNuxtComponent","useAsyncData","useLazyAsyncData","useNuxtData","refreshNuxtData","clearNuxtData","useHydration","callOnce","useState","clearNuxtState","clearError","createError","isNuxtError","showError","useError","useFetch","useLazyFetch","useCookie","refreshCookie","onPrehydrate","prerenderRoutes","useRequestHeader","useRequestHeaders","useResponseHeader","useRequestEvent","useRequestFetch","setResponseStatus","onNuxtReady","preloadComponents","prefetchComponents","preloadRouteComponents","abortNavigation","addRouteMiddleware","defineNuxtRouteMiddleware","setPageLayout","navigateTo","useRoute","useRouter","isPrerendered","loadPayload","preloadPayload","definePayloadReducer","definePayloadReviver","useLoadingIndicator","getAppManifest","getRouteRules","reloadNuxtApp","useRequestURL","usePreviewMode","useRouteAnnouncer","useRuntimeHook","onBeforeRouteLeave","onBeforeRouteUpdate","withCtx","withDirectives","withKeys","withMemo","withModifiers","withScopeId","onActivated","onBeforeMount","onBeforeUnmount","onBeforeUpdate","onDeactivated","onErrorCaptured","onMounted","onRenderTracked","onRenderTriggered","onServerPrefetch","onUnmounted","onUpdated","computed","customRef","isProxy","isReactive","isReadonly","isRef","markRaw","proxyRefs","reactive","readonly","ref","shallowReactive","shallowReadonly","shallowRef","toRaw","toRef","toRefs","triggerRef","unref","watch","watchEffect","watchPostEffect","watchSyncEffect","isShallow","effect","effectScope","getCurrentScope","onScopeDispose","defineComponent","defineAsyncComponent","resolveComponent","getCurrentInstance","h","inject","hasInjectionContext","nextTick","provide","mergeModels","toValue","useModel","useAttrs","useCssModule","useCssVars","useSlots","useTransitionState","useId","useTemplateRef","useShadowRoot","Component","ComponentPublicInstance","ComputedRef","DirectiveBinding","ExtractDefaultPropTypes","ExtractPropTypes","ExtractPublicPropTypes","InjectionKey","PropType","Ref","MaybeRef","MaybeRefOrGetter","VNode","WritableComputedRef","injectHead","useHead","useSeoMeta","useHeadSafe","useServerHead","useServerSeoMeta","useServerHeadSafe","dateFormatter","debounce","declineInRussian","definePageTitle","getDefaultBirthday","handleError","randomColorGenerator","useAuthStore","useFilmStore","usePersonStore","useI18n","useRouteBaseName","useLocalePath","useLocaleRoute","useSwitchLocalePath","useLocaleHead","useBrowserLocale","useCookieLocale","useSetI18nParams","defineI18nRoute","defineI18nLocale","defineI18nConfig","defineStore","acceptHMRUpdate","usePinia","storeToRefs","useImage","useDate","useLocale","useDefaults","useDisplay","useLayout","useRtl","useTheme","useGoTo","useUserSession","useNuxtDevTools","definePageMeta","useLink","useNitroApp","useRuntimeConfig","useAppConfig","defineNitroPlugin","nitroPlugin","defineCachedFunction","defineCachedEventHandler","cachedFunction","cachedEventHandler","useStorage","defineRenderHandler","defineRouteMeta","getRouteRules","useEvent","defineTask","runTask","defineNitroErrorHandler","appendCorsHeaders","appendCorsPreflightHeaders","appendHeader","appendHeaders","appendResponseHeader","appendResponseHeaders","assertMethod","callNodeListener","clearResponseHeaders","clearSession","createApp","createAppEventHandler","createError","createEvent","createEventStream","createRouter","defaultContentType","defineEventHandler","defineLazyEventHandler","defineNodeListener","defineNodeMiddleware","defineRequestMiddleware","defineResponseMiddleware","defineWebSocket","defineWebSocketHandler","deleteCookie","dynamicEventHandler","eventHandler","fetchWithEvent","fromNodeMiddleware","fromPlainHandler","fromWebHandler","getCookie","getHeader","getHeaders","getMethod","getProxyRequestHeaders","getQuery","getRequestFingerprint","getRequestHeader","getRequestHeaders","getRequestHost","getRequestIP","getRequestPath","getRequestProtocol","getRequestURL","getRequestWebStream","getResponseHeader","getResponseHeaders","getResponseStatus","getResponseStatusText","getRouterParam","getRouterParams","getSession","getValidatedQuery","getValidatedRouterParams","handleCacheHeaders","handleCors","isCorsOriginAllowed","isError","isEvent","isEventHandler","isMethod","isPreflightRequest","isStream","isWebResponse","lazyEventHandler","parseCookies","promisifyNodeListener","proxyRequest","readBody","readFormData","readMultipartFormData","readRawBody","readValidatedBody","removeResponseHeader","sanitizeStatusCode","sanitizeStatusMessage","sealSession","send","sendError","sendIterable","sendNoContent","sendProxy","sendRedirect","sendStream","sendWebResponse","serveStatic","setCookie","setHeader","setHeaders","setResponseHeader","setResponseHeaders","setResponseStatus","splitCookiesString","toEventHandler","toNodeListener","toPlainHandler","toWebHandler","toWebRequest","unsealSession","updateSession","useBase","useSession","writeEarlyHints","__buildAssetsURL","__publicAssetsURL","defineAppConfig","defineI18nLocale","defineI18nConfig","OAuthAppleConfig","OAuthAppleTokens","OAuthAppleUser","defineOAuthAppleEventHandler","OAuthAtlassianConfig","defineOAuthAtlassianEventHandler","OAuthAuth0Config","defineOAuthAuth0EventHandler","OAuthAuthentikConfig","defineOAuthAuthentikEventHandler","OAuthBattledotnetConfig","defineOAuthBattledotnetEventHandler","OAuthCognitoConfig","defineOAuthCognitoEventHandler","OAuthDiscordConfig","defineOAuthDiscordEventHandler","OAuthDropboxConfig","defineOAuthDropboxEventHandler","OAuthFacebookConfig","defineOAuthFacebookEventHandler","OAuthGiteaConfig","defineOAuthGiteaEventHandler","OAuthGitHubConfig","defineOAuthGitHubEventHandler","OAuthGitLabConfig","defineOAuthGitLabEventHandler","OAuthGoogleConfig","defineOAuthGoogleEventHandler","OAuthHubspotConfig","defineOAuthHubspotEventHandler","OAuthInstagramConfig","defineOAuthInstagramEventHandler","OAuthKeycloakConfig","defineOAuthKeycloakEventHandler","OAuthLineConfig","defineOAuthLineEventHandler","OAuthLinearConfig","defineOAuthLinearEventHandler","OAuthLinkedInConfig","defineOAuthLinkedInEventHandler","OAuthMicrosoftConfig","defineOAuthMicrosoftEventHandler","OAuthPaypalConfig","defineOAuthPaypalEventHandler","OAuthPolarConfig","defineOAuthPolarEventHandler","OAuthSeznamConfig","OAuthSeznamUser","defineOAuthSeznamEventHandler","OAuthSpotifyConfig","defineOAuthSpotifyEventHandler","OAuthSteamConfig","defineOAuthSteamEventHandler","OAuthStravaConfig","OAuthStravaUser","OAuthStravaTokens","defineOAuthStravaEventHandler","OAuthTikTokConfig","defineOAuthTikTokEventHandler","OAuthTwitchConfig","defineOAuthTwitchEventHandler","OAuthVKConfig","defineOAuthVKEventHandler","OAuthWorkOSConfig","OAuthWorkOSUser","OAuthWorkOSAuthenticationMethod","OAuthWorkOSAuthenticateResponse","OAuthWorkOSTokens","defineOAuthWorkOSEventHandler","OAuthXConfig","defineOAuthXEventHandler","OAuthXSUAAConfig","defineOAuthXSUAAEventHandler","OAuthYandexConfig","defineOAuthYandexEventHandler","OAuthZitadelConfig","defineOAuthZitadelEventHandler","getAtprotoClientMetadata","hashPassword","verifyPassword","SessionHooks","sessionHooks","getUserSession","setUserSession","replaceUserSession","clearUserSession","requireUserSession"].map(i => [i, 'readonly'])),
  },
}
)

export function withNuxt(...customs) {
  return configs
    .clone()
    .append(...customs)
    .onResolved(configs => typegen(configs, { dtsPath: r("./eslint-typegen.d.ts"), augmentFlatConfigUtils: true }))
}

export default withNuxt