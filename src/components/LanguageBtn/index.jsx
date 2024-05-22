import { useTranslation } from 'react-i18next';
import "./Language.css";

const LanguageBtn = () => {
  const { i18n } = useTranslation();

  const languageOptions = [
    { value: "ptBR", label: "Português(BR)" }, 
    { value: "en", label: "English" },
  ];

  const handleLanguageChange = (selectedValue) => {
    i18n.changeLanguage(selectedValue);
  };

  return (
    <div className="language-dropdown">
      <select className="select-language" onChange={(e) => handleLanguageChange(e.target.value)}>
        {languageOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageBtn;
