
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
    categories: string[],
    tags: string[],
    filter: {
        search: string,
        category: string;
        tag: [string]
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

        if (iconState.loaded || Object.keys(Icons).length == iconState.icons.length) return;

        const allCategories: string[] = [];
        const allTags: string[] = [];

        iconState.icons = Object.keys(Icons).map((key) => {

            const metaData = meta[key as keyof typeof Icons];

            if (metaData !== undefined) {
                const { category, tags } = metaData as IconMeta;

                const categoryArray = Array.isArray(category) ? category : [category];
                const tagsArray = Array.isArray(tags) ? tags : [tags];


                categoryArray.forEach((cat: string) => {
                    if (!allCategories.includes(cat)) allCategories.push(cat)
                });

                tagsArray.forEach((tag: string) => {
                    if (!allTags.includes(tag)) allTags.push(tag)
                });

            }

            return {
                key: key,
                value: Icons[key as keyof typeof Icons],
                ...metaData as IconMeta
            } as StateIcon;
        })

        const cleanedCategories = Object.values(allCategories).filter((category: string) => category);
        const cleanedTags = Object.values(allTags).filter((tag: string) => tag);

        if (cleanedCategories.length > 0) iconState.categories = cleanedCategories;
        if (cleanedTags.length > 0) iconState.tags = cleanedTags;
    }

    const hasFilters = computed(() => {
        return iconState.filter.search || iconState.filter.category || iconState.filter.tag.length > 0;
    })


    const findIt = (needle: string, haystack: string | string[]) => {
        const haystackString = typeof haystack == 'string' ? haystack : Object.values(haystack || []).join(' ');
        return haystackString.toLowerCase().includes(needle.toLowerCase());
    }

    const icons = computed(() => {

        if (!hasFilters.value) {
            return iconState.icons;
        }

        let allIcons = iconState.icons;

        if (iconState.filter.category) allIcons = allIcons.filter((icon: StateIcon) => {
            const categoryString: string = typeof icon.category == 'string' ? icon.category : Object.values(icon.category || []).join(' ');
            return categoryString.toLowerCase().includes(iconState.filter.category.toLowerCase());
        });

        if (iconState.filter.tag.length > 0) allIcons = allIcons.filter((icon: StateIcon) => {
            const tagsString: string = typeof icon.tags == 'string' ? icon.tags : Object.values(icon.tags || []).join(' ');
            return iconState.filter.tag.every((tag: string) => tagsString.toLowerCase().includes(tag.toLowerCase()));
        });

        if (iconState.filter.search) {
            allIcons = allIcons.filter((icon: StateIcon) => {
                const search = iconState.filter.search;
                return findIt(search, icon.title) || findIt(search, icon.description) || findIt(search, icon.key) || findIt(search, icon.value) || findIt(search, icon.category) || findIt(search, icon.tags);
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
                return iconState.filter.search;
            },
            set(value) {
                iconState.filter.search = value;
            }
        }),
        filterCategory: computed({
            get() {
                return iconState.filter.search;
            },
            set(value) {
                iconState.filter.category = value;
            }
        }),
        getIcon: (key: Icons) => {
            return iconState.icons.find((icon: StateIcon) => icon.key === key);
        },
        getIconsByCategory: (category: string | string[]) => {

            console.log(category); 
            return []
            // if(typeof category !== 'string') category = category[0];
            // return icons.value.filter((icon: StateIcon) => {
            //     const categoryString: string = typeof icon.category == 'string' ? icon.category : Object.values(icon.category || []).join(' ');
            //     return categoryString.toLowerCase().includes(category.toLowerCase());
            // });
        }
    }

}