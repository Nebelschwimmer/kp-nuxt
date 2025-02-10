<template>
	<div>
		<client-only>
			<v-navigation-drawer
				v-if="$vuetify.display.mdAndUp"
				v-model="showLeftDrawer"
				location="start">
				<FilmDrawerContent
					:general-info="generalInfo"
					:starring="film?.actorsData"
					:team="team" />
			</v-navigation-drawer>
			<v-navigation-drawer
				location="end"
				order="1">
				<v-list nav>
					<v-list-item
						v-for="(link, index) in pageContents"
						:key="index"
						:active="link.value === activeSection"
						:title="link.title"
						:value="link.value"
						:prepend-icon="link.icon"
						@click="scrollOnContentItemClick(link.value)"/>
					<NotAuthWarning v-if="!isAuthenticated" />
				</v-list>
				<ScrollTopBtn
					:show="showScrollFab"
					@scroll:top="scrollTop" />
			</v-navigation-drawer>
		</client-only>
		<DetailCard
			:page-name="film?.name + ' (' + film?.releaseYear + ')' || ''"
			:loading="loading"
			:display-avatar="false"
			:cover="film?.cover || ''"
			:is-auth="isAuthenticated"
			left-drawer
			@drawer:toggle="showLeftDrawer = !showLeftDrawer">
			<template #menu>
				<FilmDetailMenu
					:is-authenticated="isAuthenticated"
					@choose:cover="chooseCover"
					@edit:general="handleGeneralInfoEdit"
					@edit:description="handleEditDescription"
					@edit:gallery="openGalleryEditor"
					@delete:film="handleFilmDelete"/>
				
			</template>
			<template #text>
				<main v-scroll="onScroll">
					<FilmDrawerContent
						v-if="$vuetify.display.smAndDown"
						:general-info="generalInfo"
						:starring="film?.actorsData"
						:team="team" />
					<v-expansion-panels
						v-model="rightColumnAccordion"
						variant="accordion"
						bg-color="transparent"
						multiple>
						<v-expansion-panel
							id="gallery"
							:title="$t('pages.films.gallery')"
							value="gallery"
							class="content-item"
							tag="section">
							<v-expansion-panel-text>
								<GalleryViewer
									:slider-arr="sliderGalleryArr || []"
									:disabled="!isAuthenticated"
									:gallery="film?.gallery || []"
									:entity-name="film?.name || ''"
									:loading="loading"
									@editor:open="openGalleryEditor" />
							</v-expansion-panel-text>
						</v-expansion-panel>

						<v-expansion-panel
							id="rating"
							:title="$t('pages.films.rating')"
							tag="section"
							value="rating"
							class="content-item">
							<v-expansion-panel-text>
								<div class="d-flex flex-column justify-center ga-1">
									<FilmAssessments
										:current-rating="film?.rating || ''"
										:assessments="film?.assessments || []"
										:is-assessing="isAssessing"
										:is-authenticated="isAuthenticated"
										:rating="rating"
										:comment="comment"
										@assession:submit="submitAssessment"
										@assession:enable="isAssessing = true"
										@assession:cancel="cancelAssessment"
										@comment:update="comment = $event"
										@rating:update="rating = $event" />
								</div>
							</v-expansion-panel-text>
						</v-expansion-panel>
						<v-expansion-panel
							id="description"
							:title="$t('pages.films.description')"
							tag="section"
							class="content-item"
							value="description">
							<v-expansion-panel-text>
								<IndentedEditableText
									:edit-mode="editDescriptionMode"
									:messages="$t('pages.films.edit_description')"
									:text="film?.description || ''"
									@sumbit:edit="submitDescriptionEdit" />
							</v-expansion-panel-text>
						</v-expansion-panel>
					</v-expansion-panels>
				</main>
			</template>
			<template #footer>
				<v-footer
					class="d-flex align-center ga-2 text-caption"
					color="surface-variant">
					<v-spacer/>
					<span>{{ $t("general.published_by") }}</span>
					<nuxt-link>{{
						film?.publisherData ? film?.publisherData.name : ""
					}}</nuxt-link>
					{{ film?.createdAt || "" }}
				</v-footer>
			</template>
		</DetailCard>
		<ConfirmDialog
			v-model="showConfirmDialog"
			type="error"
			:text="$t('forms.film.gallery_item_delete_confirm')"
			:loading="loading"
			@confirm="handleGalleryItemsDelete"
			@cancel="showConfirmDialog = false"/>
		<BaseDialog
			v-model:opened="generalInfoEdit"
			:max-width="800"
			:title="$t('pages.films.edit') + ' ' + film?.name"
			:loading="loading"
			@close="generalInfoEdit = false">
			<template #text>
				<FilmForm
					:film-form="filmForm || {}"
					:show-description="false"
					:genres="genres"
					:actors="actors"
					:directors="directors"
					:producers="producers"
					:writers="writers"
					:composers="composers"
					:is-valid="isFormValid"
					@validate="isFormValid = $event"
					@form:submit="sumbitEdit" />
			</template>
		</BaseDialog>
		<BaseDialog
			v-model:opened="editGalleryMode"
			:loading="loading"
			:title="computedGalleryEditTitle"
			:max-width="1200"
			@close="editGalleryMode = false">
			<template #text>
				<FilmGalleryEdit
					v-model:selected="selectedImagesIndices"
					:active-tab="activeTab"
					:film="film"
					:slider-arr="sliderGalleryArr || []"
					:upload-count="uploadCount"
					:edit-mode="editGalleryMode"
					:upload-disabled="uploadCount === 0"
					:remove-disabled="!film?.gallery.length"
					:card-height="GALLERY_CARD_HEIGHT"
					@cover:change="handleChangeCover"
					@update:selected="selectedImagesIndices = $event"
					@delete:selected="showConfirmDialog = true"
					@upload="handleGalleryUpload" />
			</template>
		</BaseDialog>
		<SuccessSnackbar
			v-model:show="showSnackbar"
			@close="showSnackbar = false" />
		<ConfirmDialog
			v-model="showDeleteWarning"
			:text="$t('general.entity_delete_warning')"
			@cancel="showDeleteWarning = false"
			@confirm="handleFilmDelete" />
	</div>
</template>

<script lang="ts" setup>
	import { useFilmStore } from "~/stores/filmStore";
	import { useAuthStore } from "~/stores/authStore";
	import DetailCard from "~/components/Containment/Cards/DetailCard.vue";
	import BaseDialog from "~/components/Dialogs/BaseDialog.vue";
	import FilmGalleryEdit from "~/components/Gallery/FilmGalleryEdit.vue";
	import ConfirmDialog from "~/components/Dialogs/ConfirmDialog.vue";
	import FilmForm from "~/components/Forms/FilmForm.vue";
	import IndentedEditableText from "~/components/Misc/IndentedEditableText.vue";
	import GalleryViewer from "~/components/Gallery/GalleryViewer.vue";
	import SuccessSnackbar from "~/components/Misc/SuccessSnackbar.vue";
	import FilmAssessments from "~/components/FilmSubComponents/FilmAssessments.vue";
	import FilmDrawerContent from "~/components/FilmSubComponents/FilmDrawerContent.vue";
	import FilmDetailMenu from "~/components/FilmSubComponents/FilmDetailMenu.vue";
	import NotAuthWarning from "~/components/Misc/NotAuthWarning.vue";
	import ScrollTopBtn from "~/components/Containment/Btns/ScrollTopBtn.vue";
	const showDeleteWarning = ref(false);
	const GALLERY_CARD_HEIGHT = 200;
	const editDescriptionMode = ref(false);
	const selectedImagesIndices = ref<number[]>([]);
	const showConfirmDialog = ref(false);
	const editGalleryMode = ref(false);
	const showSnackbar = ref(false);
	const generalInfoEdit = ref(false);
	const isFormValid = ref(true);
	const isAssessing = ref(false);
	const showAssessDialog = ref(false);
	const comment = ref("");
	const rating = ref(0);
	const activeSection = ref<string | undefined>("gallery");
	const rightColumnAccordion = ref(["gallery", "rating"]);
	const showLeftDrawer = ref(true);
	const showScrollFab = ref(false);
	const { isAuthenticated } = storeToRefs(useAuthStore());
	const {
		film,
		genres,
		filmForm,
		actors,
		composers,
		producers,
		writers,
		directors,
		loading,
	} = storeToRefs(useFilmStore());
	const {
		editFilm,
		fetchFilmForm,
		fetchFilmById,
		fetchGenres,
		uploadGallery,
		clearFilmForm,
		deleteGalleryItems,
		assessFilmById,
		deleteFilm,
		fetchSpecialists,
		GALLERY_SIZE,
	} = useFilmStore();
	const { locale, t } = useI18n();
	const activeTab = ref(0);
	const imagesToDelete = computed(() => {
		return film.value?.gallery
			.filter((_: string, index: number) => selectedImagesIndices.value.includes(index))
			.map((imageName: string) => {
				const fileName = imageName ? imageName.split("/").at(-1) : "";

				return fileName ? fileName.split(".")[0] : "";
			});
	}) as ComputedRef<string[]>;

	const pageContents = [
		{
			title: t("pages.films.gallery"),
			value: "gallery",
			icon: "mdi-image",
		},
		{
			title: t("pages.films.rating"),
			value: "rating",
			icon: "mdi-star",
		},
		{
			title: t("pages.films.description"),
			value: "description",
			icon: "mdi-text",
		},
	];

	const generalInfo = computed(() => {
		const info = [
			{
				name: "forms.film.name",
				value: film.value?.name || "",
				icon: "mdi-movie",
				tooltip: film.value && film.value.name?.length > 60 ? true : false,
			},
			{
				name: "forms.film.slogan",
				value: film.value?.slogan || "",
				icon: "mdi-format-title",
				tooltip:
					film.value?.slogan && film.value.slogan?.length > 60 ? true : false,
			},
			{
				name: "forms.film.duration",
				value: film.value?.duration || "",
				icon: "mdi-timer",
			},
			{
				name: "forms.film.genres",
				value: film.value?.genreNames ? film.value?.genreNames.join(", ") : "",
				icon: "mdi-filmstrip",
				tooltip:
					film.value?.genreNames &&
					film.value?.genreNames.join(", ").length > 120
						? true
						: false,
			},
			{
				name: "forms.film.age",
				value: film.value?.age + "+" || "",
				icon: "mdi-account-supervisor",
			},
		];

		return info;
	});

	const team = computed(() => {
		const teamMembersTitles = [
			"forms.film.director",
			"forms.film.writer",
			"forms.film.producer",
			"forms.film.composer",
			"forms.film.actors",
		];
		return film.value
			? film.value.teamData?.map((person: FilmPerson, index: number) => {
					return {
						name: teamMembersTitles[index],
						value: person.name,
						to: person.id,
						avatar: person.avatar || "",
					};
				})
			: [];
	});

	const computedGalleryEditTitle = computed(() => {
		return t("pages.films.edit_gallery");
	});
	const fetchData = async () => {
		const filmId = Number(useRoute().params.id);
		await Promise.allSettled([
			fetchGenres(locale.value),
			fetchFilmById(filmId, locale.value),
			fetchFilmForm(filmId, locale.value),
			fetchSpecialists(),
		]);
	};

	const onScroll = () => {
		const scrollPosition = window.scrollY;
		const contentItems = document.querySelectorAll(".content-item");
		contentItems.forEach((element: Element): void => {
			const htmlElement = element as HTMLElement;
			const elementTop = htmlElement.offsetTop; 
			const elementHeight = htmlElement.clientHeight;
			const elementBottom = elementTop + elementHeight;
			if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
				activeSection.value = element.id;
			}
		});

		showScrollFab.value = scrollPosition > 100;
	};

	const scrollOnContentItemClick = (anchor: string) => {
		const element = document.getElementById(anchor);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			if (!rightColumnAccordion.value.includes(anchor)) {
				rightColumnAccordion.value.push(anchor);
			}
			const index = rightColumnAccordion.value.indexOf(anchor);
			activeSection.value = rightColumnAccordion.value[index];
		}
	};

	const sliderGalleryArr = computed(() => {
		const initialArr = Array.from({ length: GALLERY_SIZE }, (_, i) => i);

		return initialArr.map((item) => {
			return (film.value && film?.value.gallery[item]) || "";
		});
	}) as ComputedRef<string[]>;

	const uploadCount = computed(() => {
		return film.value?.gallery.length
			? sliderGalleryArr.value.filter((item: string) => item === "").length
			: GALLERY_SIZE;
	});

	const handleFilmDelete = async () => {
		const filmId = Number(useRoute().params.id);
		await deleteFilm(filmId);
		navigateTo("/films");
	};

	const handleGeneralInfoEdit = () => {
		generalInfoEdit.value = true;
	};

	const openGalleryEditor = () => {
		editGalleryMode.value = true;
		activeTab.value = 1;
	};
	const cancelAssessment = () => {
		showAssessDialog.value = false;
		isAssessing.value = false;
		rating.value = 0;
		comment.value = "";
	};

	const submitAssessment = async () => {
		await assessFilmById(
			Number(useRoute().params.id),
			rating.value,
			comment.value,
			locale.value
		);
		await fetchData();
		await nextTick(() => {
			showSnackbar.value = true;
			cancelAssessment();
		});
	};

	const handleEditDescription = async () => {
		editDescriptionMode.value = true;
		if (rightColumnAccordion.value.indexOf("description") === -1) {
			rightColumnAccordion.value.push("description");
		}
		const descriptionPanelElement = document.getElementById("description");
		await nextTick(() => {
			if (descriptionPanelElement) {
				descriptionPanelElement.scrollIntoView({ behavior: "smooth" });
			}
		});
	};

	const sumbitEdit = async () => {
		await editFilm(locale.value);
		await fetchData();
		await nextTick(() => {
			showSnackbar.value = true;
			editDescriptionMode.value = !editDescriptionMode.value;
			generalInfoEdit.value = false;
		});
	};

	const handleGalleryItemsDelete = async () => {
		console.log(imagesToDelete.value);
		await deleteGalleryItems(imagesToDelete.value);
		await fetchData();
		await nextTick(() => {
			showSnackbar.value = true;
			showConfirmDialog.value = false;
			editGalleryMode.value = false;
		});
	};

	const chooseCover = () => {
		editGalleryMode.value = true;
		activeTab.value = 0;
	};

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const handleGalleryUpload = async (files: File[]) => {
		const id = Number(useRoute().params.id);
		await uploadGallery(files, id);
		editGalleryMode.value = false;
		await fetchData();
		await nextTick(() => {
			showSnackbar.value = true;
		});
	};

	const handleChangeCover = async (index: number) => {
		filmForm.value.cover = film.value?.gallery[index - 1] || "";
		await editFilm(locale.value);
		editGalleryMode.value = false;
		await fetchData();
		await nextTick(() => {
			showSnackbar.value = true;
		});
	};

	const submitDescriptionEdit = async (text: string) => {
		filmForm.value.description = text;
		await editFilm(locale.value);
		await fetchData();
		editDescriptionMode.value = false;
	};

	watch(
		locale,
		async (newVal) => {
			const filmId = Number(useRoute().params.id);
			await fetchFilmById(filmId, newVal);
		},
		{ immediate: true }
	);

	onMounted(async () => {
		clearFilmForm();
		await fetchData();
	});

	definePageMeta({
		name: "filmDetails",
		path: "/films/:id",
		key: (route) => route.fullPath,
	});
</script>

<style>
	.content-item {
		scroll-margin-top: 100px;
		background-color: rgba(0, 0, 0, 0.031) !important;
	}
</style>
