<template>
	<v-card>
		<v-toolbar>
			<template #prepend>
				<v-app-bar-nav-icon
					v-if="drawer && $vuetify.display.smAndDown"
					@click="$emit('drawer:toggle')"/>
				<BackBtn v-else />
			</template>
			<v-app-bar-title>
				<div class="d-flex ga-2">
					<span class="font-weight-bold"> {{ pageName }} </span>
					<span
						v-if="!displayAvatar"
						class="font-weight-bold">
						{{ title }}</span
					>
				</div>
			</v-app-bar-title>
			<slot name="menu"/>
		</v-toolbar>

		<v-card flat>
			<v-img
				:src="cover"
				cover
				height="300">
				<template #placeholder>
					<v-sheet
						height="100%"
						:class="
							$vuetify.theme.themes.dark ? 'default-cover-light' : 'default-cover-light'
						"/>
				
				</template>
			</v-img>
			<div
			v-if="displayAvatar"	
			class="position-relative"
				>
				<v-sheet
					height="200"
					border>
					<div class="d-flex justify-center">
						<div
							class="position-absolute text-center"
							style="top: -50%">
							<div>
								<v-avatar
									size="200"
									border>
									<v-img
										:src="avatar"
										:lazy-src="avatar"
										cover>
										<template #placeholder>
											<v-sheet height="100%">
												<div class="d-flex align-center justify-center h-100">
													<v-icon
														size="64"
														icon="mdi-account-off"/>
												</div>
											</v-sheet>
										</template>
										<template #error>
											<v-sheet height="100%">
												<div class="d-flex align-center justify-center h-100">
													<v-icon
														color="error"
														icon="mdi-image-broken"/>
												</div>
											</v-sheet>
										</template>
									</v-img>
								</v-avatar>
							</div>
							<template v-if="!loading">
								<span class="text-h6 text-lg-h4 font-weight-bold text-primary">
									{{ title }}</span
								>
								<div class="text-caption text-lg-subtitle-1">
									{{ generalInfo?.map((item: Detail) => item.value).join(", ") }}
								</div>
								<div class="text-capitalize text-caption text-lg-subtitle-1">
									<span v-for="(text, index) in subtitle?.split(',')" :key="index">
										<span
											v-if="
												index !== 0 && index !== text?.split(',').length - 1
											">
											&bull;</span
										>
										<span>{{ subtitle }}</span>
									</span>
								</div>
							</template>
							<template v-else>
								<v-skeleton-loader
									class="stained-glass"
									type="list-item-three-line"/>
							</template>
						</div>
					</div>
				</v-sheet>
			</div>
			<slot name="text"/>
		</v-card>
		<v-footer class="text-subtitle-2">
			<slot name="footer"/>
		</v-footer>
	</v-card>
</template>

<script lang="ts" setup>
	import BackBtn from "../Btns/BackBtn.vue";
	defineEmits(["drawer:toggle"]);

	defineProps<{
		title?: string;
		pageName?: string;
		subtitle?: string;
		loading: boolean;
		cover?: string;
		generalInfo?: Detail[];
		avatar?: string;
		displayAvatar?: boolean;
		drawer?: boolean;
	}>();
</script>

<style>
	.default-cover-dark {
		background-image: repeating-radial-gradient(
			circle at center center,
			rgb(27, 27, 27, 0.3) 0px,
			rgb(27, 27, 27, 0.3) 36px,
			rgb(84, 84, 84, 0.3) 36px,
			rgba(55, 162, 192, 0.3) 64px,
			rgba(21, 127, 219, 0.512) 64px,
			rgba(65, 102, 172, 0.917) 87px
		) !important;
		background-size: 53px 53px !important;
	}
	.default-cover-light {
		background-image: repeating-radial-gradient(
				circle at center center,
				transparent 0px,
				transparent 1px,
				rgba(0, 0, 0, 0.05) 1px,
				rgba(0, 0, 0, 0.05) 10px,
				transparent 10px,
				transparent 11px
			),
			repeating-radial-gradient(
				circle at center center,
				rgb(255, 255, 255, 0.2) 0px,
				rgb(255, 255, 255, 0.2) 9px,
				rgb(255, 255, 255, 0.2) 9px,
				rgb(255, 255, 255, 0.2) 18px,
				rgb(255, 255, 255, 0.2) 18px,
				rgb(255, 255, 255, 0.2) 20px,
				rgb(255, 255, 255, 0.2) 20px,
				rgb(255, 255, 255, 0.2) 26px
			);
		background-size: 53px 53px !important;
	}
</style>
