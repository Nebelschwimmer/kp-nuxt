<template>
	<div>
		<v-container>
			<section id="newest_films" class="d-flex flex-column ga-2">
				<h4 class="text-h4">{{ $t("pages.home.newest") }}</h4>
				<v-divider></v-divider>

				<masonry-wall :items="latestFilms" :ssr-columns="1" :gap="16">
					<template #default="{ item, index }">
						<v-card :key="index" :loading="loading" :title="item?.name + ' (' + item?.releaseYear + ')'">
							<v-img :src="item?.cover || ''" min-height="400" cover @click="navigateTo(`/films/${item?.id}`)"></v-img>
							<template #append>
								<ClientOnly>
									<v-rating :model-value="item?.rating || 0" density="compact" size="small"
										active-color="yellow-darken-3"></v-rating>
								</ClientOnly>
							</template>
							<v-expansion-panels v-model="openSections" variant="accordion" multiple>
								<v-expansion-panel :title="$t('pages.films.description')" value="description">
									<v-expansion-panel-text>
										<v-list-item :lines="!expandedDesciption ? 'three' : false">
											<v-list-item-subtitle>{{ item?.description || $t("general.no_data") }}</v-list-item-subtitle>
										</v-list-item>
									</v-expansion-panel-text>

								</v-expansion-panel>
								<v-expansion-panel :title="$t('pages.films.comments')" value="comments">
									<v-expansion-panel-text>
										<template v-if="item.assessments.length > 0">
											<v-list-item v-for="(comment, i) in item.assessments.slice(0, 2)" :key="i" :title="comment?.authorName ? comment?.authorName : 'Anonymous'
												" :prepend-avatar="comment?.authorAvatar ? comment?.authorAvatar : undefined
													" :subtitle="comment.comment">
												<template #append>
													<v-chip color="warning" density="compact" size="small" prepend-icon="mdi-star">
														{{ comment.rating }}
													</v-chip>
												</template>
											</v-list-item>
											<div v-if="item.assessments.length > 2" class="d-flex flex-column justify-center align-center">
												<span>...</span>
												<div class="d-flex ga-1 text-subtitle-2 justify-end">
													<span>{{ $t("general.total") }}:</span>
													<span>{{
														locale !== "ru"
															? $t("general.comments")
															: declineInRussian(item.assessments?.length, [
																"комментарий",
																"комментария",
																"комментариев",
															])
													}}</span>
												</div>
											</div>
										</template>
										<template v-else>
											<div class="text-center"><span class="text-disabled text-caption">{{
												$t("pages.films.no_comments")
											}}</span>
											</div>
										</template>
									</v-expansion-panel-text>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-card>
					</template>
				</masonry-wall>
			</section>
		</v-container>
		<v-app-bar location="bottom" eleavation="4" order="0">
			<v-footer class="d-flex flex-column text-subtitle-2 my-4">
				<span>© Nebelschwimmer, {{ new Date().getFullYear() }}</span>
				<nuxt-link style="text-decoration: underline" to="/about">{{ $t("general.about") }}</nuxt-link>
			</v-footer>
		</v-app-bar>
	</div>
</template>

<script lang="ts" setup>
import { useFilmStore } from "~/stores/filmStore";
import ExpandBtn from "~/components/Containment/Btns/ExpandBtn.vue";

const { loading, filmsPresent, latestFilms } = storeToRefs(useFilmStore());
const { fetchLatestFilms, checkFilmsPresence } = useFilmStore();
const { locale } = useI18n();
const expandedDesciption = ref(false);
const openSections = ref<string[]>(['description', 'comments']);
const fetchData = async () => {
	await checkFilmsPresence();
	if (filmsPresent.value) {
		await fetchLatestFilms();
		return true;
	} else {
		navigateTo("/films/empty");
		return false;
	}
};
onMounted(async () => {
	await fetchData();
});

definePageMeta({
	name: "home",
	path: "/",
});
</script>
