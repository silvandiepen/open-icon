
import { reactive, computed } from 'vue';
import { retrieveState, watchState } from "@sil/storage";
import { Icons } from '@/icons';
import { meta } from '@/meta/icons';




interface IconMeta {
    description: string;
    category: string | string[];
    tags: string | string[];
    title: string;
}
interface StateIcon extends IconMeta {
    key: Icons,
    value: string,
}

const iconState = reactive<{
    loaded: boolean,
    icons: StateIcon[],
    categories: { value: string, total: number }[],
    tags: { value: string, total: number }[],
    filter: {
        search: string,
        category: string[];
        tag: string[]
    }
}>(await retrieveState(
    {
        loaded: false,
        icons: [],
        categories: [],
        tags: [],
        filter: {
            search: '',
            category: '',
            tag: []
        }
    },
    'open-icon::icons')
);

watchState(iconState, 'open-icon::icons')

export const useIcons = () => {

    const init = () => {

        // if (iconState.loaded || Object.keys(Icons).length == iconState.icons.length) return;

        const allCategories: { value: string, total: number }[] = [];
        const allTags: { value: string, total: number }[] = [];

        iconState.icons = Object.keys(Icons).map((key) => {

            const metaData: IconMeta = meta[key as keyof typeof Icons] as unknown as IconMeta;

            if (metaData !== undefined) {
                const { category, tags } = metaData;

                const categoryArray = Array.isArray(category) ? category : [category];
                const tagsArray = Array.isArray(tags) ? tags : [tags];


                categoryArray.forEach((cat: string) => {
                    if (allCategories.some((t) => t.value === cat)) {
                        const index = allCategories.findIndex((t) => t.value === cat);
                        allCategories[index].total++;
                    } else {
                        allCategories.push({ value: cat, total: 1 })
                    }
                });

                tagsArray.forEach((tag: string) => {
                    if (allTags.some((t) => t.value === tag)) {
                        const index = allTags.findIndex((t) => t.value === tag);
                        allTags[index].total++;
                    } else {
                        allTags.push({ value: tag, total: 1 })
                    }
                });

            }

            return {
                key: key,
                value: Icons[key as keyof typeof Icons],
                ...(metaData as IconMeta)
            } as StateIcon;
        })

        iconState.categories = allCategories;
        iconState.tags = allTags;
    }

    const hasFilters = computed<boolean>(() => {
        return !!(iconState.filter.search || iconState.filter.category.length > 0 || iconState.filter.tag.length > 0);
    })


    const findIt = (needle: string | string[], haystack: string | string[]): boolean => {

        if (typeof needle == 'string' && typeof haystack == "string") return haystack.toLowerCase().includes(needle.toLowerCase());

        if (typeof needle !== 'string' && typeof haystack == 'string') return needle.some((n: string) => haystack.toLowerCase().includes(n.toLowerCase()));

        if (typeof needle == 'string' && typeof haystack !== 'string') return haystack.some((n: string) => n.toLowerCase().includes(needle.toLowerCase()));

        if (typeof needle !== 'string' && typeof haystack !== 'string') return needle.some((n: string) => haystack.some((h: string) => h.toLowerCase().includes(n.toLowerCase())));

        return false;

    }

    const icons = computed(() => {

        if (!hasFilters.value) {
            return iconState.icons;
        }

        let allIcons = iconState.icons;

        console.log(hasFilters.value);

        if (iconState.filter.category) allIcons = allIcons.filter((icon: StateIcon) => {
            return findIt(iconState.filter.category, icon.category);
        });

        if (iconState.filter.tag.length > 0) allIcons = allIcons.filter((icon: StateIcon) => {
            return findIt(iconState.filter.tag, icon.tags);
        });

        if (iconState.filter.search) {
            allIcons = allIcons.filter((icon: StateIcon) => {
                const { search } = iconState.filter;
                const { title, description, key, value, category, tags } = icon;
                return findIt(search, title) || findIt(search, description) || findIt(search, key) || findIt(search, value) || findIt(search, category) || findIt(search, tags);
            });
        }
        return allIcons;

    });

    return {
        init,
        icons,
        categories: computed(() => iconState.categories),
        tags: computed(() => iconState.tags),

        filterSearch: computed({
            get() {
                return iconState.filter.search;
            },
            set(value) {
                iconState.filter.search = value;
            }
        }),
        filterTags: computed({
            get() {
                return iconState.filter.tag;
            },
            set(value) {
                iconState.filter.tag = value;
            }
        }),
        filterCategory: computed({
            get() {
                return iconState.filter.category;
            },
            set(value) {
                iconState.filter.category = value;
            }
        }),
        getIcon: (key: Icons) => {
            return iconState.icons.find((icon: StateIcon) => icon.key === key);
        },
        getIconsByCategory: (category: string | string[]) => {
            if(typeof category !== 'string') category = category[0];
           
            return iconState.icons.filter((icon: StateIcon) => {
                return findIt(category, icon.category);
            });
        },
        totalIcons: computed(() => iconState.icons.length),
        allIcons: computed(() => iconState.icons),
    }

}