<template>
  <div>
    <template v-if="computedFilmographyDispay">
      <v-list nav>
        <div
          v-for="(value, key, index) in person?.filmWorks"
          :key="index"
          class="my-2"
        >
          <v-card
            v-if="value && value.length > 0"
            prepend-icon="mdi-format-list-bulleted"
            :title="defineCardTitle(key)"
          >
            <v-divider />
            <v-table hover>
              <thead class="text-primary glassed">
                <tr>
                  <th style="width: 20%">
                    {{ $t("pages.films.release_year") }}
                  </th>
                  <th>
                    {{ $t("pages.films.name") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in value" :key="i">
                  <td>{{ item.releaseYear || $t("general.no_data") }}</td>
                  <td>
                    <nuxt-link :to="`/films/${item?.slug}`" class="text-accent">
                      {{ item?.name }}</nuxt-link
                    >
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </div>
      </v-list>
    </template>
    <v-empty-state
      v-else
      :title="$t('empty_states.filmography')"
      icon="mdi-filmstrip"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  person?: IPerson | null;
}>();

const { t } = useI18n();

const defineCardTitle = (key: string) => {
  switch (key) {
    case "actedInFilms":
      return t("pages.persons.featuredInFilms");
    case "directedFilms":
      return t("pages.persons.directed_films");
    case "writtenFilms":
      return t("pages.persons.written_films");
    case "producedFilms":
      return t("pages.persons.produced_films");
    case "composedFilms":
      return t("pages.persons.composed_films");
    default:
      return key;
  }
};

const computedFilmographyDispay = computed(() => {
  return (
    props.person?.filmWorks &&
    Object.values(props.person?.filmWorks).some((value) => value.length > 0)
  );
});
</script>

<style></style>
