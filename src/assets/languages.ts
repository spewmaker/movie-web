import ar from "@/assets/locales/ar.json";
import bg from "@/assets/locales/bg.json";
import bn from "@/assets/locales/bn.json";
import cs from "@/assets/locales/cs.json";
import de from "@/assets/locales/de.json";
import el from "@/assets/locales/el.json";
import en from "@/assets/locales/en.json";
import es from "@/assets/locales/es.json";
import et from "@/assets/locales/et.json";
import fa from "@/assets/locales/fa.json";
import fr from "@/assets/locales/fr.json";
import gu from "@/assets/locales/gu.json";
import he from "@/assets/locales/he.json";
import hi from "@/assets/locales/hi.json";
import id from "@/assets/locales/id.json";
import it from "@/assets/locales/it.json";
import ja from "@/assets/locales/ja.json";
import ko from "@/assets/locales/ko.json";
import lv from "@/assets/locales/lv.json";
import minion from "@/assets/locales/minion.json";
import ne from "@/assets/locales/ne.json";
import nl from "@/assets/locales/nl.json";
import pirate from "@/assets/locales/pirate.json";
import pl from "@/assets/locales/pl.json";
import ptbr from "@/assets/locales/pt-BR.json";
import ru from "@/assets/locales/ru.json";
import sl from "@/assets/locales/sl.json";
import sv from "@/assets/locales/sv.json";
import ta from "@/assets/locales/ta.json";
import th from "@/assets/locales/th.json";
import tok from "@/assets/locales/tok.json";
import tr from "@/assets/locales/tr.json";
import uk from "@/assets/locales/uk.json";
import vi from "@/assets/locales/vi.json";
import zhhant from "@/assets/locales/zh-Hant.json";
import zh from "@/assets/locales/zh.json";

export const locales = {
  en,
  cs,
  de,
  fr,
  it,
  nl,
  pl,
  tr,
  vi,
  zh,
  he,
  sv,
  pirate,
  minion,
  lv,
  th,
  ne,
  ar,
  es,
  et,
  tok,
  hi,
  "pt-BR": ptbr,
  uk,
  bg,
  bn,
  el,
  fa,
  gu,
  id,
  ja,
  ko,
  sl,
  ta,
  "zh-HANT": zhhant,
  ru,
};
export type Locales = keyof typeof locales;
