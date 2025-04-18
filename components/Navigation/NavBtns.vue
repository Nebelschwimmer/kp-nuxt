<template>
  <ClientOnly>
    <div class="d-flex align-center justify-center ga-1 pa-1">
      <v-btn
        key="home_nav"
        :active="computedActiveNavBtn.home"
        :to="$localeRoute('/')"
        prepend-icon="mdi-home"
      >
        {{ $t("nav.home") }}
      </v-btn>
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            :active="computedActiveNavBtn.films"
            prepend-icon="mdi-filmstrip"
            append-icon="mdi-chevron-down"
          >
            {{ $t("nav.films") }}
          </v-btn>
        </template>
        <v-list nav density="compact">
          <v-list-item
            :active="computedActiveNavBtn.films"
            prepend-icon="mdi-list-box"
            :title="$t('nav.films_list')"
            :to="$localeRoute('/films')"
          />
          <v-tooltip
            :disabled="currentUser ? true : false"
            activator="parent"
            location="bottom"
          >
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                :disabled="!currentUser"
                :active="$route.name === 'newFilm'"
                prepend-icon="mdi-plus"
                :title="$t('nav.films_add')"
                :to="$localeRoute('/films/new')"
              />
            </template>
            <span>{{ $t("actions.login_required") }}</span>
          </v-tooltip>
        </v-list>
      </v-menu>
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            :active="computedActiveNavBtn.persons"
            prepend-icon="mdi-account"
            append-icon="mdi-chevron-down"
          >
            {{ $t("nav.persons") }}
          </v-btn>
        </template>
        <v-list nav density="compact">
          <v-list-item
           :active="computedActiveNavBtn.persons"
            prepend-icon="mdi-list-box"
            :title="$t('nav.persons_list')"
            :to="$localeRoute('/persons')"
          />
          <v-tooltip
            :disabled="currentUser ? true : false"
            activator="parent"
            location="bottom"
          >
            {{ $t("actions.login_required") }}
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                :disabled="!currentUser"
                :active="computedActiveNavBtn.persons"
                prepend-icon="mdi-plus"
                :title="$t('nav.persons_add')"
                :to="$localeRoute('/persons/new')"
              />
            </template>
          </v-tooltip>
        </v-list>
      </v-menu>
      <v-btn
        prepend-icon="mdi-information"
        :to="$localeRoute('/about')"
        :active="computedActiveNavBtn.about"
      >
        {{ $t("general.about") }}
      </v-btn>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { ClientOnly } from "#components";
import { useAuthStore } from "~/stores/authStore";

const { currentUser } = storeToRefs(useAuthStore());

const computedActiveNavBtn = computed((): { [key: string]: boolean } => {
  const route = useRoute();
  const routeName = (route.name as string) || "";
  return {
    home: routeName.startsWith("home"),
    films: routeName.startsWith("film") || routeName.startsWith("newFilm"),
    persons:
      routeName.startsWith("person") || routeName.startsWith("newPerson"),
    about: routeName.startsWith("about"),
  };
});
</script>

<style></style>
