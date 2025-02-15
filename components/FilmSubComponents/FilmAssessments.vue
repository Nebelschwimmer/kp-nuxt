<template>
	<div class="d-flex flex-column ga-2">
		<transition-group>
			<v-sheet
				v-if="!isAssessing"
				class="pa-2"
				rounded="lg"
				elevation="2">
				<div class="d-flex flex-column justify-center ga-1 align-center">
					<div class="d-flex ga-1 align-center">
						<v-icon
							icon="mdi-star"
							size="x-large"
							color="warning"></v-icon>
						<span class="text-h4">{{ currentRating }}</span>
					</div>
					<v-label>{{
						assessments.length + " " + $t("pages.films.assessments") ||
						$t("pages.films.no_assessments")
					}}</v-label>
					<v-btn
						:disabled="!isAuthenticated"
						@click="$emit('assession:enable')">
						{{ $t("pages.films.assess") }}
					</v-btn>
				</div>
			</v-sheet>
		</transition-group>
		<v-scroll-y-transition>
			<AssessmentForm
				v-if="isAssessing"
				:rating="rating"
				:comment="comment"
				@update:rating="$emit('rating:update', $event)"
				@update:comment="$emit('comment:update', $event)"
				@cancel="$emit('assession:cancel')"
				@submit="$emit('assession:submit')" />
		</v-scroll-y-transition>
		<v-sheet
			v-if="assessments.length > 0"
			class="pa-2"
			rounded="lg"
			elevation="2">
			<v-data-iterator
				:items="assessments"
				:page="page"
				:items-per-page="itemsPerPage">
				<template #header="{ page, pageCount, prevPage, nextPage }">
					<div class="d-flex justify-space-between align-center">
						<h4>{{ $t("pages.films.comments") }}</h4>
						<v-btn
							class="me-8"
							variant="text"
							@click="seeAllOnClick">
							<span class="text-decoration-underline text-none">{{
								$t("general.see_all")
							}}</span>
						</v-btn>
						<div class="d-inline-flex">
							<v-btn
								:disabled="page === 1"
								class="me-2"
								icon="mdi-arrow-left"
								size="small"
								variant="plain"
								@click="prevPage"></v-btn>

							<v-btn
								:disabled="page === pageCount"
								icon="mdi-arrow-right"
								size="small"
								variant="plain"
								@click="nextPage"></v-btn>
						</div>
					</div>
					<v-divider></v-divider>
				</template>
				<template v-slot:default="{ items }">
					<template
						v-for="(item, i) in items"
						:key="i">
						<v-list-item
							v-bind="item.raw"
							variant="tonal"
							class="rounded-lg ma-2"
							lines="two"
							:title="item.raw.authorName ? item.raw.authorName : 'Anonymous'"
							:prepend-avatar="
								item.raw.authorAvatar ? item.raw.authorAvatar : undefined
							"
							:subtitle="item.raw.comment">
							<template #append>
								<ClientOnly>
									<v-rating
										density="compact"
										size="small"
										active-color="warning"
										:readonly="true"
										:model-value="item.raw.rating"></v-rating>
								</ClientOnly>
							</template>
							<template #title>
								<div class="d-flex ga-1 align-end">
									<span>{{
										item.raw.authorName ? item.raw.authorName : "Anonymous"
									}}</span>
									<span class="text-caption text-disabled">{{
										dateFormatter(item.raw.createdAt)
									}}</span>
								</div>
							</template>
						</v-list-item>
					</template>
				</template>
				<template v-slot:footer="{ page, pageCount }">
					<v-footer
						class="justify-space-between text-body-2 mt-4"
						color="surface-variant">
						{{ $t("general.total") }}: {{ assessments.length }}

						<div>
							{{ $t("general.page") }} {{ page }} {{ $t("general.of") }}
							{{ pageCount }}
						</div>
					</v-footer>
				</template>
			</v-data-iterator>
		</v-sheet>
	</div>
</template>

<script lang="ts" setup>
	import AssessmentForm from "../Forms/AssessmentForm.vue";
	const page = ref(1);
	const { locale } = useI18n();
	defineEmits([
		"assession:submit",
		"assession:enable",
		"assession:cancel",
		"comment:update",
		"rating:update",
	]);
	const props = defineProps<{
		currentRating: string | number;
		assessments: IAssessment[];
		isAssessing: boolean;
		isAuthenticated: boolean;
		rating: number;
		comment: string;
	}>();

	const itemsPerPage = ref(5);

	const seeAllOnClick = () => {
		itemsPerPage.value =
			itemsPerPage.value === 5 ? props.assessments.length : 5;
	};
</script>

<style></style>
