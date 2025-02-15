<template>
	<div>
		<v-card class="pa-4 mt-15 mx-auto" style="max-width: 600px;" variant="outlined">
			<v-toolbar>
				<template #prepend>
					<BackBtn />
				</template>
				<v-toolbar-title>
					{{ $t("auth.sign_in") }}
				</v-toolbar-title>
			</v-toolbar>
	
			<v-form
				ref="loginFormRef"
				class="mt-4">
				<div class="d-flex flex-column ga-2">
					<v-text-field
						v-model="userForm.username"
						:label="$t('auth.login')"
						:placeholder="$t('auth.login_placeholder')"
						prepend-inner-icon="mdi-account-key"
						variant="outlined"
						:rules="requiredRules">
					</v-text-field>
					<v-text-field
						v-model="userForm.password"
						:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
						:type="visible ? 'text' : 'password'"
						:label="$t('auth.password')"
						:placeholder="$t('auth.password_placeholder')"
						prepend-inner-icon="mdi-lock-outline"
						variant="outlined"
						:rules="requiredRules"
						@click:append-inner="visible = !visible">
					</v-text-field>
				</div>
			</v-form>
			<div class="d-flex flex-column ga-4 mt-5">
				<v-btn
					color="primary"
					size="large"
					variant="tonal"
					block
					:loading="loading"
					@click="validate">
					{{ $t("auth.sign_in") }}
				</v-btn>
				<v-btn
					to="/auth/sign-up"
					variant="outlined"
					block
					size="large"
					color="secondary"
					prepend-icon="mdi-account-plus">
					{{ $t("auth.register") }}
				</v-btn>
	
				<v-btn
					prepend-icon="mdi-account-off"
					variant="plain"
					block
					size="large"
					to="/">
					{{ $t("auth.continue_as_guest") }}
				</v-btn>
			</div>
	
		</v-card>
		<v-snackbar
			v-model="showErrorMessage"
			color="error"
			:text="$t('auth.invalid_credentials')"></v-snackbar>
	</div>
</template>

<script lang="ts" setup>
	import BackBtn from "~/components/Containment/Btns/BackBtn.vue";
	import { useAuthStore } from "~/stores/authStore";
	import { storeToRefs } from "pinia";
	const { userForm, loading, showErrorMessage } = storeToRefs(useAuthStore());
	const { t } = useI18n();
	const loginFormRef = ref();
	const { login, fetchCurrentUser } = useAuthStore();
	const requiredRules = [
		(value: string) => {
			if (value) return true;
			return t("forms.rules.required");
		},
	];
	const validate = async () => {
		const { valid } = await loginFormRef.value.validate();
		if (valid) {
			await login();
			if (!showErrorMessage.value) {
				await fetchCurrentUser();
				navigateTo("/");
			}
		}
	};

	definePageMeta({
		name: "signIn",
		path: "/auth/sign-in",
		middleware: "auth",
	});

	const visible = ref(false);
</script>
