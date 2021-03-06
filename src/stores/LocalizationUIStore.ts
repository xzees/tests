import _ from "lodash";
import LocalizationStore from "stores/LocalizationStore";
import { computed, action } from "mobx";
import LanguageCodeEnum, {
  getIconImage
} from "common/enumerations/LanguageCodeEnum";
import ListItemData from "common/interfaces/ListItemData";
import NavigationManager from "common/Manager/NavigationManager";

type LangaugeViewMetadata = ListItemData & {
  code: LanguageCodeEnum;
  icon: string;
  text: string;
};

class LocalizationUIStore {
  store: LocalizationStore;
  selectedLanguage?: ListItemData;

  constructor(store: LocalizationStore) {
    this.store = store;
    try {
      this.selectedLanguage = {
        itemKey: getIconImage(this.store.lang).code,
        displayValue: getIconImage(this.store.lang).text
      };
    } catch (error) {
      this.selectedLanguage = {
        itemKey: getIconImage(this.store.DEFAULT_LANG).code,
        displayValue: getIconImage(this.store.DEFAULT_LANG).text
      };
    }
  }

  @computed
  get selectedLanguageMetadata(): LangaugeViewMetadata {
    return {
      code: this.store.lang,
      icon: getIconImage(this.store.lang).icon,
      text: getIconImage(this.store.lang).text,
      displayValue: getIconImage(this.store.lang).text,
      itemKey: this.store.lang
    };
  }

  @computed
  get availableLanguagesMetadata(): LangaugeViewMetadata[] {
    return this.store.availableLanguages.map((lang) => ({
      code: lang.code,
      icon: lang.icon,
      text: lang.text,
      displayValue: lang.text,
      itemKey: lang.code
    }));
  }

  @action.bound
  onLanguageSelect(metadata: ListItemData) {
    this.selectedLanguage = metadata;
    const lang = metadata as LangaugeViewMetadata;
    this.store.setLanguage(lang.code);
    NavigationManager.refresh();
  }
}

export default LocalizationUIStore;
