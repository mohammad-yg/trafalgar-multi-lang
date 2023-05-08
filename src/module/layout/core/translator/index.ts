import { AppLang } from "../_model";
import { AppDictionary } from "./_models";

const appTranslate = (
  dictionary: AppDictionary,
  paths: string[],
  key: string
) => {
  try {
    var obj = dictionary as any;

    for (let i = 0; i < paths.length; i++) {
      if (obj[paths[i]]) obj = obj[paths[i]];
      else return "";
    }

    return obj[key];
  } catch {
    return "";
  }
};

const rltLangs: AppLang[] = ["fa"];

export default appTranslate;
export {rltLangs}
