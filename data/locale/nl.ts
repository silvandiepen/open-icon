import { Languages} from "./languages"

const copy = {
    hello: "Hallo"   , locales: {
        auto: "Auto",
        [Languages.EN]: "Engels",
        [Languages.NL]: "Nederlands",
        [Languages.RU]: "Russisch",
        [Languages.HY]: "Armeens",
        [Languages.ES]: "Spaans",
        [Languages.FR]: "Frans",
    },
    navigation: {
      collection: "Collectie",
      contribute: "Help me",
      about: "Over OIF",
      guidelines: "Guidelines",
      usage: "Gebruik",
    },
    colormode: {
      dark: "Donker",
      light: "Licht",
    },
    terms: {
      search: "Zoeken",
      icons: "Iconen",
    },
};
export default copy;