<template>
	<v-empty-state
		:headline="$t('empty_states.no_content')"
		:title="$t('empty_states.no_content_notice')"
		:action-text="$t('empty_states.actions.add_persons')"
		icon="mdi-alert-circle"
		@click:action="navigateTo($localeRoute('/persons/new'))"
	/>
</template>

<script lang="ts" setup>
definePageMeta({
	name: "emptyPage",
	path: "/empty-page",
	layout: "home",
});
</script>

<style></style>
