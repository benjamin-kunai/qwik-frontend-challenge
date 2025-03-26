import {
  component$,
  createContextId,
  useOnDocument,
  $,
  useStore,
  useContextProvider,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { isDev } from "@builder.io/qwik";

import "./global.css";
import {
  THEME_LOCAL_STORAGE_KEY,
  THEME_OPTIONS,
  Theme,
  ThemeContext,
  ThemeContextType,
} from "./context/theme-context";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */


  /**
   * There are simplers ways to go about this, but this provided good experience leveraging store and context in Qwik
   * 
   */
  const themeState = useStore<ThemeContextType>({
    theme: 'light' as Theme,
    setTheme: $(function (this: ThemeContextType, theme: Theme) {
      this.theme = theme;
      localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
      document.documentElement.classList.toggle('dark', theme === THEME_OPTIONS.DARK);
    }),
    toggleTheme: $(function (this: ThemeContextType) {
      const currentTheme = this.theme;
      const newTheme = currentTheme === THEME_OPTIONS.DARK ? THEME_OPTIONS.LIGHT : THEME_OPTIONS.DARK;
      this.theme = newTheme as Theme;
      localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
      document.documentElement.classList.toggle('dark', newTheme === THEME_OPTIONS.DARK);
      }),
  });
  useContextProvider(ThemeContext, themeState);

  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      try {
        const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)!;
        themeState.theme = theme as Theme;
      } catch (e) {
        console.error('Error accessing localStorage:', e);
      }
    }),
  );

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <script
          dangerouslySetInnerHTML={`
          (function() {
            try {
              const theme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              if (theme === 'dark' || (!theme && prefersDark)) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
              } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
              }
            } catch (e) {
              console.error('Error accessing localStorage:', e);
            }
          })();
        `}
        />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body
        class="bg-custom-gradient text-custom-neutral-900 dark:text-custom-neutral-200 min-h-screen"
        lang="en"
      >
        <RouterOutlet />
        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
