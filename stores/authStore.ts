
export const useAuthStore = defineStore("authStore", () => {
	const currentUser = ref<CurrentUser | null>();
	const loading = ref(false);
	const authError = ref<Error | null>();
	const tokenCookie = useCookie("auth_token");
	const token = ref<string | null>(tokenCookie.value || null || "");
	const isAuthenticated = computed(() => {
		return !!token.value && !!currentUser.value;
	});
	const authHeaders = computed(() => {
		return {
			Authorization: `Bearer ${token.value}`,
		};
	});
	const baseUrl = useRuntimeConfig().public.apiBase;
	const defaultUserValues: Partial<CurrentUser> = {
		id: null,
		username: "",
		email: "",
		password: "",
		cover: "",
		displayName: "",
		avatar: "",
		age: 0,
	};
	const userForm = ref<Partial<CurrentUser>>({ ...defaultUserValues });
	const showErrorMessage = ref(false);

	const fetchCurrentUser = async () => {
		try {
			loading.value = true;
			const response = await $fetch<CurrentUser>(`${baseUrl}/current-user`, {
				headers: authHeaders.value,
			});
			currentUser.value = response;
		} catch (error: any) {
			authError.value = error;
			showErrorMessage.value = true;
		} finally {
			loading.value = false;
		}
	};

	const register = async () => {
		try {
			loading.value = true;
			await $fetch<CurrentUser>(`${baseUrl}/register`, {
				method: "POST",
				body: userForm.value,
			});
		} catch (error: any) {
			authError.value = error;
			showErrorMessage.value = true;
		} finally {
			loading.value = false;
		}
	};

	const login = async () => {
		try {
			loading.value = true;

			const response = await $fetch<JWTResponse>(
				`${baseUrl}/login_check`,
				{
					headers: authHeaders.value,
					method: "POST",
					body: userForm.value,
				}
			);
			token.value = response?.token || null;
			tokenCookie.value = token.value;
		} catch (error: any) {
			authError.value = error;
			showErrorMessage.value = true;
		} finally {
			loading.value = false;
		}
	};
	const signOut = async () => {
		await $fetch<CurrentUser>(`${baseUrl}/logout`, {
			method: "POST",
		});
		currentUser.value = null;
		token.value = null;
	};
	const uploadAvatar = async (avatar: File, id: Number) => {
		try {
			loading.value = true;
			const formData = new FormData();
			formData.append("file", avatar);
			const response = await $fetch<CurrentUser>(
				`${baseUrl}/users/${id}/avatar`,
				{
					headers: authHeaders.value,
					method: "POST",
					body: formData,
				}
			);
			currentUser.value = response;
		} catch (error: any) {
			authError.value = error;
			showErrorMessage.value = true;
		} finally {
			loading.value = false;
		}
	};

	const uploadCover = async (cover: File, id: Number) => {
		try {
			loading.value = true;
			const formData = new FormData();
			formData.append("file", cover);
			const response = await $fetch<CurrentUser>(
				`${baseUrl}/users/${id}/cover`,
				{
					headers: authHeaders.value,
					method: "POST",
					body: formData,
				}
			);
			currentUser.value = response;
		} catch (error: any) {
			authError.value = error;
			showErrorMessage.value = true;
		} finally {
			loading.value = false;
		}
	};

	return {
		currentUser,
		userForm,
		loading,
		authError,
		showErrorMessage,
		token,
		isAuthenticated,
		register,
		login,
		signOut,
		uploadAvatar,
		uploadCover,
		fetchCurrentUser,
	};
});
