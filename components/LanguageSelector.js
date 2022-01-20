import CustomLink from "./components/CustomLink";

const LanguageSelector = ({ locale, locales, story }) => {
  const slug = story?.slug;
  const full_slug = story?.full_slug;
  const default_full_slug = story?.default_full_slug;
  return (
    <div className="rounded-full border-solid border-2">
      <ul className="flex items-center ">
        {locales.map((loc, index) => (
          <li key={loc}>
            <CustomLink
              href={slug === "home" ? "/" : slug}
              locale={loc}
              className={`px-3 py-0.5 ${
                loc === "en" ? "rounded-l-full" : "rounded-r-full"
              } margin-0.5 font-semibold
            ${locale === loc ? "bg-purple-700 text-white" : "text-purple-700"}
          `}
            >
              {loc.toUpperCase()}
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
