<template>
	<div>
		<ClientOnly>
			<v-navigation-drawer :mobile="false" location="end" order="1">
				<slot />
			</v-navigation-drawer>
		</ClientOnly>
	</div>
</template>

<script lang="ts" setup></script>

<style></style>
