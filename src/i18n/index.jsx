import  i18n from 'i18next';
import { initReactI18next} from 'react-i18next';

import enJson from "./translations/en.json";
import ptBrJson from "./translations/ptBR.json";
import espJson from "./translations/esp.json";
import frJson from "./translations/fr.json";

i18n.use(initReactI18next).init({
    lng: 'ptBR',
    fallbackLng:"pt-br",
    interpolation:{
        escapeValue: false
    },
    
    resources: {
        en: enJson,
        ptBR:ptBrJson,
        esp: espJson,
        fr: frJson
    },
})

export default i18n;