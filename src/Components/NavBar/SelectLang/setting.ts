import ua from "../../../img/lang/UA.jpg";
import en from "../../../img/lang/EN.jpg";
interface Language {
    name: string;
    code: string;
    flag: string;
  }
  
  export const languages: Language[] = [
    {
      name: "Language.en",
      code: "en",
      flag: en,
    },
    {
      name: "Language.ua",
      code: "ua",
      flag: ua,
    },
  ];