export const usePersonStore = defineStore("persons", () => {
	const persons = ref<IPerson[]>([]);
	const person = ref<IPerson | null>(null);
	const loading = ref<boolean>(false);
	const currentPage = ref<number>(1);
	const totalPages = ref<number>(0);
	const networkError = ref<Error | null>();
	const genders = ref<IGender[]>([]);
	const specialties = ref<ISpecialty[]>([]);
	const personsPresent = ref<boolean>(false);
	const baseUrl = useRuntimeConfig().public.apiBase;
	const defaultPersonValues: Partial<IPerson> = {
		id: null,
		firstname: "",
		lastname: "",
		genderId: 1,
		specialtyIds: [1],
		birthday: getDefaultBirthday(),
		bio: "",
		photos: [],
	};
	const personForm = ref<Partial<IPerson>>({
		...defaultPersonValues,
	});
	const GALLERY_SIZE: number = 8;

	const fetchFilteredPersons = async (
		limit: number | string,
		offset: number,
		search: string,
		sortBy: string,
		order: string,
		specialty: string,
		locale: string
	) => {
		try {
			loading.value = true;
			const response  = await $fetch<IPersonListResponse>(
				`${baseUrl}/persons/filter?limit=${limit}&offset=${offset}&search=${search}&sortBy=${sortBy}&order=${order}&specialty=${specialty}&locale=${locale}`
			);
			persons.value = response?.items || [];
			currentPage.value = response?.currentPage || 1;
			totalPages.value = response?.totalPages || 0;
		} catch (error: any) {
			networkError.value = error;
		} finally {
			loading.value = false;
		}
	};

	const fetchPersonDetails = async (id: number, locale: string) => {
		try {
			loading.value = true;
			const response  = await $fetch<IPerson>(
				`${baseUrl}/persons/${id}?locale=${locale}`
			);
			person.value = response;
		} catch (error: any) {
			networkError.value = error;
		} finally {
			loading.value = false;
		}
	};

	const fetchPersonForm = async (id: number) => {
		try {
			loading.value = true;
			const response = await $fetch<Partial<IPerson>>(
				`${baseUrl}/persons/${id}/form`
			);
			personForm.value = response || {};
		} catch (error: any) {
			networkError.value = error;
		} finally {
			loading.value = false;
		}
	};

	const fetchGenders = async (locale: string) => {
		try {
			loading.value = true;
			const response = await $fetch<Array<IGender>>(
				`${baseUrl}/genders/translations?locale=${locale}`
			);
			genders.value = response || [];
		} catch (error: any) {
			networkError.value = error;
		} finally {
			loading.value = false;
		}
	};

	const fetchSpecialties = async (locale: string) => {
		try {
			loading.value = true;
			const response = await $fetch<Array<ISpecialty>>(
				`${baseUrl}/specialties/translations?locale=${locale}`
			);
			specialties.value = response || [];
		} catch (error: any) {
			networkError.value = error;
		} finally {
			loading.value = false;
		}
	};

	const addPerson = async (): Promise<boolean> => {
		try {
			loading.value = true;
			const response = await $fetch<Partial<IPerson>>(`${baseUrl}/persons`, {
				method: "POST",
				body: personForm.value,
			});
			personForm.value = response || {};
			return true;
		} catch (error: any) {
			networkError.value = error;
			return false;
		} finally {
			loading.value = false;
		}
	};

	const editPerson = async (): Promise<boolean> => {
		try {
			loading.value = true;
			const response = await $fetch<IPerson>(`${baseUrl}/persons/${personForm.value.id}`, {
				method: "PUT",
				body: personForm.value,
			});
			person.value = response;
			return true;
		} catch (error: any) {
			networkError.value = error;
			return false;
		} finally {
			loading.value = false;
		}
	};

	const uploadPhotos = async (photos: File[], id: number): Promise<boolean> => {
		try {
			loading.value = true;
			const formData = new FormData();
			photos.forEach((photo) => {
				formData.append("photos[]", photo);
			});
			const response = await $fetch<IPerson>(
				`${baseUrl}/persons/${id}/photos`,
				{
					method: "POST",
					body: formData,
				}
			);
			person.value = response;
			personForm.value = response || {};
			return true;
		} catch (error: any) {
			networkError.value = error;
			return false;
		} finally {
			loading.value = false;
		}
	};

	const uploadCover = async (cover: File, id: number): Promise<boolean> => {
		try {
			loading.value = true;
			const formData = new FormData();
			formData.append("file", cover);
			const response = await $fetch<IPerson>(`${baseUrl}/persons/${id}/cover`, {
				method: "POST", 
				body: formData,
			});
			person.value = response
			personForm.value = response || {};
			return true;
		} catch (error: any) {
			networkError.value = error;
			return false;
		} finally {
			loading.value = false;
		}
	};

	const removePerson = async (id: number): Promise<boolean> => {
		try {
			loading.value = true;
			await $fetch<IPerson>(`${baseUrl}/persons/${id}`, {
				method: "DELETE",
			});
			return true;
		} catch (error: any) {
			networkError.value = error;
			return false;
		} finally {
			loading.value = false;
		}
	};

	const checkPersonsPresence = async () => {
		try {
			loading.value = true;
			const response =
				await  $fetch<ICheckEmptyResponse>(`${baseUrl}/persons/check`);
			personsPresent.value = response?.present || false;
		} catch (error: any) {
			networkError.value = error;
		} finally {
			loading.value = false;
		}
	};

	const clearPersonForm = () => {
		personForm.value = {
			...defaultPersonValues,
		} as Partial<IPerson>;
	};

	return {
		persons,
		person,
		personForm,
		loading,
		networkError,
		genders,
		specialties,
		totalPages,
		currentPage,
		GALLERY_SIZE,
		personsPresent,
		fetchFilteredPersons,
		fetchPersonDetails,
		fetchGenders,
		fetchSpecialties,
		addPerson,
		uploadPhotos,
		clearPersonForm,
		editPerson,
		fetchPersonForm,
		uploadCover,
		removePerson,
		checkPersonsPresence,
	};
});
