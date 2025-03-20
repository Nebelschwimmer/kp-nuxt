export { useScriptTriggerConsent, useScriptEventPage, useScriptTriggerElement, useScript, useScriptGoogleAnalytics, useScriptPlausibleAnalytics, useScriptCrisp, useScriptClarity, useScriptCloudflareWebAnalytics, useScriptFathomAnalytics, useScriptMatomoAnalytics, useScriptGoogleTagManager, useScriptGoogleAdsense, useScriptSegment, useScriptMetaPixel, useScriptXPixel, useScriptIntercom, useScriptHotjar, useScriptStripe, useScriptLemonSqueezy, useScriptVimeoPlayer, useScriptYouTubePlayer, useScriptGoogleMaps, useScriptNpm, useScriptUmamiAnalytics, useScriptSnapchatPixel } from '#app/composables/script-stubs';
export { isVue2, isVue3 } from 'vue-demi';
export { defineNuxtLink } from '#app/components/nuxt-link';
export { useNuxtApp, tryUseNuxtApp, defineNuxtPlugin, definePayloadPlugin, useRuntimeConfig, defineAppConfig } from '#app/nuxt';
export { useAppConfig, updateAppConfig } from '#app/config';
export { defineNuxtComponent } from '#app/composables/component';
export { useAsyncData, useLazyAsyncData, useNuxtData, refreshNuxtData, clearNuxtData } from '#app/composables/asyncData';
export { useHydration } from '#app/composables/hydrate';
export { callOnce } from '#app/composables/once';
export { useState, clearNuxtState } from '#app/composables/state';
export { clearError, createError, isNuxtError, showError, useError } from '#app/composables/error';
export { useFetch, useLazyFetch } from '#app/composables/fetch';
export { useCookie, refreshCookie } from '#app/composables/cookie';
export { onPrehydrate, prerenderRoutes, useRequestHeader, useRequestHeaders, useResponseHeader, useRequestEvent, useRequestFetch, setResponseStatus } from '#app/composables/ssr';
export { onNuxtReady } from '#app/composables/ready';
export { preloadComponents, prefetchComponents, preloadRouteComponents } from '#app/composables/preload';
export { abortNavigation, addRouteMiddleware, defineNuxtRouteMiddleware, setPageLayout, navigateTo, useRoute, useRouter } from '#app/composables/router';
export { isPrerendered, loadPayload, preloadPayload, definePayloadReducer, definePayloadReviver } from '#app/composables/payload';
export { useLoadingIndicator } from '#app/composables/loading-indicator';
export { getAppManifest, getRouteRules } from '#app/composables/manifest';
export { reloadNuxtApp } from '#app/composables/chunk';
export { useRequestURL } from '#app/composables/url';
export { usePreviewMode } from '#app/composables/preview';
export { useRouteAnnouncer } from '#app/composables/route-announcer';
export { useRuntimeHook } from '#app/composables/runtime-hook';
export { useHead, useHeadSafe, useServerHeadSafe, useServerHead, useSeoMeta, useServerSeoMeta, injectHead } from '#app/composables/head';
export { onBeforeRouteLeave, onBeforeRouteUpdate, useLink } from 'vue-router';
export { withCtx, withDirectives, withKeys, withMemo, withModifiers, withScopeId, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, computed, customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, watch, watchEffect, watchPostEffect, watchSyncEffect, isShallow, effect, effectScope, getCurrentScope, onScopeDispose, defineComponent, defineAsyncComponent, resolveComponent, getCurrentInstance, h, inject, hasInjectionContext, nextTick, provide, mergeModels, toValue, useModel, useAttrs, useCssModule, useCssVars, useSlots, useTransitionState, useId, useTemplateRef, useShadowRoot, Component, ComponentPublicInstance, ComputedRef, DirectiveBinding, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, MaybeRef, MaybeRefOrGetter, VNode, WritableComputedRef } from 'vue';
export { useValidation } from '../composables/useValidation';
export { default as dateFormatter } from '../utils/dateFormatter';
export { default as debounce } from '../utils/debounce';
export { default as declineInRussian } from '../utils/declineInRussian';
export { default as definePageTitle } from '../utils/definePageTitle';
export { default as getDefaultBirthday } from '../utils/getDefaultBirthday';
export { default as handleError } from '../utils/handleError';
export { default as randomColorGenerator } from '../utils/randomColorGenerator';
export { default as youtubeUrlToEmbed } from '../utils/youtubeUrlToEmbed';
export { useAuthStore } from '../stores/authStore';
export { useFilmStore } from '../stores/filmStore';
export { usePersonStore } from '../stores/personStore';
export { updateSiteConfig } from '../node_modules/.pnpm/nuxt-site-config@3.1.6_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/runtime/app/composables/updateSiteConfig';
export { useNitroOrigin } from '../node_modules/.pnpm/nuxt-site-config@3.1.6_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/runtime/app/composables/useNitroOrigin';
export { useSiteConfig } from '../node_modules/.pnpm/nuxt-site-config@3.1.6_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/runtime/app/composables/useSiteConfig';
export { createSitePathResolver, withSiteTrailingSlash, withSiteUrl } from '../node_modules/.pnpm/nuxt-site-config@3.1.6_magicast@0.3.5_vue@3.5.13_typescript@5.8.2_/node_modules/nuxt-site-config/dist/runtime/app/composables/utils';
export { useI18n } from '../node_modules/.pnpm/vue-i18n@11.1.2_vue@3.5.13_typescript@5.8.2_/node_modules/vue-i18n/dist/vue-i18n';
export { useRouteBaseName, useLocalePath, useLocaleRoute, useSwitchLocalePath, useLocaleHead, useBrowserLocale, useCookieLocale, useSetI18nParams, defineI18nRoute, defineI18nLocale, defineI18nConfig } from '../node_modules/.pnpm/@nuxtjs+i18n@9.3.1_@vue+compiler-dom@3.5.13_eslint@9.22.0_jiti@2.4.2__magicast@0.3.5_rollup@4_gaj2iz5uhrpgepgndx2hgmfi4u/node_modules/@nuxtjs/i18n/dist/runtime/composables/index';
export { defineStore, acceptHMRUpdate, usePinia, storeToRefs } from '../node_modules/.pnpm/@pinia+nuxt@0.9.0_magicast@0.3.5_pinia@2.3.1_typescript@5.8.2_vue@3.5.13_typescript@5.8.2__/node_modules/@pinia/nuxt/dist/runtime/composables';
export { useImage } from '../node_modules/.pnpm/@nuxt+image@1.9.0_db0@0.3.1_ioredis@5.6.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/composables';
export { useDate, useLocale, useDefaults, useDisplay, useLayout, useRtl, useTheme, useGoTo } from 'vuetify';
export { useUserSession } from '../node_modules/.pnpm/nuxt-auth-utils@0.5.14_@simplewebauthn+browser@13.1.0_@simplewebauthn+server@13.1.1_magicast@0.3.5/node_modules/nuxt-auth-utils/dist/runtime/app/composables/session';
export { definePageMeta } from '../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.1_eslint@9.22.0_jiti@2.4.2__io_s2oth3agfjxzfv6yc5beyd5qme/node_modules/nuxt/dist/pages/runtime/composables';