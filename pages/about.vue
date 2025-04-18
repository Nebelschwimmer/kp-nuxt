<template>
  <div>
    <Head>
      <Title>{{ definePageTitle($t("pages.about.title")) }}</Title>
    </Head>
    <v-card max-width="1000" class="mx-auto" border>
      <v-toolbar class="glassed">
        <template #prepend>
          <BackBtn />
        </template>
        <v-toolbar-title>
          {{ $t("pages.about.title") }}
        </v-toolbar-title>
      </v-toolbar>

      <GradientWrapper>
        <v-container fluid>
          <v-card
            :title="$t('pages.about.stack')"
            prepend-icon="mdi-hammer-wrench"
            class="my-2 glassed"
            variant="elevated"
            border
          >
            <v-card-text>
              <v-table hover class="glassed">
                <thead>
                  <tr>
                    <th />
                    <th class="text-center">
                      {{ $t("pages.about.table_headers.language") }}
                    </th>
                    <th class="text-center">
                      {{ $t("pages.about.table_headers.main_framework") }}
                    </th>
                    <th class="text-center">
                      {{ $t("pages.about.table_headers.additional_framework") }}
                      / DB
                    </th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr>
                    <td>{{ $t("pages.about.table_headers.frontend") }}</td>
                    <td>
                      <div class="d-flex align-center justify-center ga-2">
                        <v-icon size="x-large" color="blue"
                          >mdi-language-typescript
                        </v-icon>
                        Typescript
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-center justify-center ga-2">
                        <v-icon size="x-large" color="green-accent-3"
                          >mdi-nuxt
                        </v-icon>
                        Nuxt 3
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-center justify-center ga-2">
                        <v-icon size="x-large" color="light-blue-accent-4"
                          >mdi-vuetify
                        </v-icon>
                        Vuetify 3
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>{{ $t("pages.about.table_headers.backend") }}</td>
                    <td>
                      <div class="d-flex align-center justify-center ga-2">
                        <v-icon size="x-large" color="deep-purple-lighten-3"
                          >mdi-language-php
                        </v-icon>
                        Php 8.3
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-center justify-center ga-2">
                        <v-icon color="purple" size="x-large"
                          >mdi-symfony</v-icon
                        >
                        Symfony 7
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-center justify-center ga-2">
                        <nuxt-img
                          provider="myProvider"
                          width="32"
                          height="32"
                          src="/img/psql.svg"
                        />

                        Postresql 16
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>
          <v-card
            title="DevOps"
            prepend-icon="mdi-all-inclusive"
            class="my-2 glassed"
            border
            variant="elevated"
          >
            <v-card-text>
              <v-table hover class="glassed">
                <thead>
                  <tr>
                    <th class="text-center">
                      {{ $t("pages.about.dev_prod.table_headers.os") }}
                    </th>
                    <th class="text-center">
                      {{
                        $t("pages.about.dev_prod.table_headers.version_control")
                      }}
                    </th>
                    <th class="text-center">
                      {{ $t("pages.about.dev_prod.table_headers.pipeline") }}
                    </th>
                    <th class="text-center">
                      {{
                        $t(
                          "pages.about.dev_prod.table_headers.containerisation"
                        )
                      }}
                    </th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr>
                    <td>
                      <div class="d-flex ga-1 justify-center align-center">
                        <v-icon size="x-large">mdi-linux</v-icon>
                        Linux

                        <v-icon size="x-large" color="light-blue"
                          >mdi-microsoft</v-icon
                        >
                        Windows
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-center justify-center ga-2">
                        <v-icon color="blue" size="x-large">mdi-github</v-icon>
                        GitHub
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-center justify-center ga-2">
                        <v-icon color="purple" size="x-large"
                          >mdi-github</v-icon
                        >
                        GitHub Actions: CI & CD
                      </div>
                    </td>
                    <td>
                      <div class="d-flex ga-1 justify-center align-center">
                        <span>
                          <v-icon size="x-large" color="blue"
                            >mdi-docker</v-icon
                          >
                          Docker
                        </span>
                        <span>
                          <v-icon size="x-large" color="pink"
                            >mdi-docker</v-icon
                          >
                          Docker Compose
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>
          <v-card variant="elevated" class="my-2 glassed" border>
            <v-card-title>
             <div class="d-flex"> 
              <span>{{ $t("pages.about.author.title") }}</span>
              <v-spacer/>

              <a
                href="https://github.com/nebelschwimmer"
                target="_blank"
                class="text-blue d-flex align-center justify-end ma-2 ga-2 flex-wrap"
                ><v-icon size="large">mdi-github</v-icon>GitHub</a
              >
            </div>
            </v-card-title>
            <v-card-text>
              <div :class="$vuetify.display.smAndDown ? 'text-center' : ''">
                <v-avatar
                  size="200"
                  :class="['mr-10', { 'float-left': $vuetify.display.mdAndUp }]"
                >
                  <nuxt-img
                    provider="myProvider"
                    src="/img/nebelschwimmer_avatar.jpg"
                    alt="author"
                    fit="cover"
                    class="fill-height"
                    loading="lazy"
                  />
                </v-avatar>

                <div class="d-flex flex-column ga-2">
                  <h5 class="text-primary text-h6">
                    {{ $t("pages.about.author.name") }}
                  </h5>
                  <div>{{ $t("pages.about.author.first_section") }}:</div>
                  <v-divider />
                  <div class="d-flex flex-column ga-2">
                    <div class="d-flex align-center ga-2">
                      <v-icon color="blue" size="large">mdi-react</v-icon>React
                      JS
                    </div>

                    <div class="d-flex align-center ga-2">
                      <v-icon size="large" color="green">mdi-nodejs</v-icon>
                      Node JS
                    </div>
                    <div class="d-flex align-center ga-2">
                      <v-icon size="large" color="pink">mdi-jquery</v-icon>
                      jQuery
                    </div>
                  </div>
                  <v-divider />
                  <div class="d-flex ga-2 align-center">
                    <span> {{ $t("pages.about.author.second_section") }}:</span>
                    <div class="d-flex align-center ga-1">
                      <v-icon color="blue" size="x-large"
                        >mdi-language-go</v-icon
                      >
                      Golang
                    </div>
                    <div class="d-flex align-center ga-1">
                      <v-icon color="purple" size="x-large"
                        >mdi-all-inclusive</v-icon
                      >
                      DevOps
                    </div>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-container>
      </GradientWrapper>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import BackBtn from "~/components/Containment/Btns/BackBtn.vue";
import definePageTitle from "~/utils/definePageTitle";
import GradientWrapper from "~/components/Containment/Cards/GradientWrapper.vue";

definePageMeta({
  name: "about",
  path: "/about",
  title: "About",
});
</script>

<style></style>
