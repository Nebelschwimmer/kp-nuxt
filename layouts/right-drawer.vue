<template>
    <div>
        <ClientOnly>
            <v-navigation-drawer location="end" width="300" order="1">
                <slot />
            </v-navigation-drawer>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
