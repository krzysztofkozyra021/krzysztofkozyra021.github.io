# Sesja Event Storming / User Stories

## 4.1. Event Storming

Sesja Event Storming została przeprowadzona online za pomocą narzędzia Miro, aby zidentyfikować kluczowe zdarzenia (Events), polecenia (Commands) i systemy (System boundaries) w domenie adopcji zwierząt. Sesja pomogła w walidacji założeń projektowych oraz wyznaczeniu wstępnych granic kontekstów (Bounded Contexts) dla Backendu.

### Kluczowe Zdarzenia (Events)

Zdarzenia, które mają znaczenie dla aplikacji ŁapGo:

- **Ogłoszenie Zostało Zaggregowane**: Nowe ogłoszenie zwierzęcia zostało pomyślnie pobrane i sparsowane przez scraper.
- **Ogłoszenie Zostało Zweryfikowane**: Administrator potwierdził poprawność i aktualność danych ogłoszenia.
- **Zwierzę Zostało Dodane Do Ulubionych**: Użytkownik dodał zwierzę do listy obserwowanych.
- **Preferencje Zostały Zaktualizowane**: Użytkownik zmienił kryteria wyszukiwania wymarzonego zwierzaka.
- **Zwierzę Zostało Adoptowane**: Status zwierzęcia zmienił się na "Adoptowane", co wymaga usunięcia/zarchiwizowania ogłoszenia.

### Granice Kontekstów (Bounded Contexts)

Podczas sesji wstępnie zdefiniowano następujące granice:

- **Agregacja Ogłoszeń**: Odpowiedzialny za pobieranie, scrapowanie, walidację danych i zasilanie bazy.
- **Zarządzanie Użytkownikiem**: Autoryzacja, zarządzanie profilem i preferencjami.
- **Wyszukiwanie i Dopasowywanie**: Algorytm dopasowujący zwierzęta do preferencji, filtrowanie, geolokalizacja.
- **Panel Administracyjny**: Weryfikacja ogłoszeń, zarządzanie tagami i schroniskami.

## 4.2. User Stories

Poniżej przedstawiono kluczowe historyjki użytkownika, które stanowią podstawę do tworzenia i priorytetyzacji backlogu projektu ŁapGo.

### Kluczowe Historyjki Adopcyjne

- Jako Użytkownik, chcę ustawić szczegółowe preferencje (gatunek, wiek, wielkość, płeć), aby system mógł dopasować ogłoszenia spełniające moje oczekiwania.
- Jako Użytkownik, chcę zobaczyć listę zwierząt dopasowanych do moich preferencji, aby łatwo znaleźć potencjalnego nowego pupila.
- Jako Użytkownik, chcę filtrować i sortować wyniki wyszukiwania (np. po lokalizacji, dacie dodania), aby zawęzić opcje i znaleźć ogłoszenia z najbliższych schronisk.
- Jako Użytkownik, chcę dodać zwierzę do listy ulubionych, aby szybko wrócić do interesujących mnie ogłoszeń i je porównać.
- Jako Użytkownik, chcę wyświetlić dane kontaktowe schroniska na stronie zwierzęcia, aby szybko nawiązać bezpośredni kontakt w sprawie adopcji.

### Historyjki Panelu Użytkownika i Administracji

- Jako Użytkownik, chcę zarejestrować się i zalogować do aplikacji, aby móc zapisywać preferencje i ulubione zwierzęta.
- Jako Schronisko (zweryfikowany użytkownik), chcę dodać własne zwierzęta do adopcji, aby moje ogłoszenia były widoczne w centralnej bazie.
- Jako Administrator, chcę ręcznie weryfikować ogłoszenia z agregatora, aby zapewnić wysoką jakość i aktualność prezentowanych danych.
- Jako Administrator, chcę zmienić status adopcyjny zwierzęcia (np. na "Adoptowany"), aby ogłoszenie przestało być aktywnie wyświetlane użytkownikom.

### Historyjki Techniczne (Scraping/AI)

- Jako System, chcę używać scrapera opartego na AI (API Gemini) do inteligentnego pobierania i strukturyzowania danych ze stron schronisk.
- Jako System, chcę używać geolokalizacji i map do wyświetlania schronisk na mapie i dopasowywania zwierząt na podstawie odległości.
