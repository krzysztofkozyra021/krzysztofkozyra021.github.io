# Sesja Event Storming / User Stories

## 4.1. Event Storming

Sesja Event Storming została przeprowadzona online za pomocą narzędzia Miro. Celem sesji było zidentyfikowanie kluczowych zdarzeń biznesowych (Events), komend wyzwalających akcje (Commands), reguł biznesowych (Policies) oraz granic agregatów w domenie systemu *ŁapGo*.

![Legenda notacji wykorzystanej podczas sesji Event Storming.](/images/legenda-event-storming.png)
*Rysunek 1: Legenda notacji wykorzystanej podczas sesji Event Storming.*

### Kluczowe Procesy Biznesowe

Na podstawie przeprowadzonych prac wyróżniono następujące procesy:

#### 1. Rejestracja i Autoryzacja
Proces obejmuje dwa główne flow: dla standardowego Użytkownika oraz dla Schroniska. W obu przypadkach kluczowa jest weryfikacja adresu e-mail oraz obsługa błędnego logowania.

![Flow rejestracji i logowania użytkownika z uwzględnieniem przywracania sesji.](/images/rejestracja-logowanie-uzytkownik.png)
*Rysunek 2: Flow rejestracji i logowania użytkownika z uwzględnieniem przywracania sesji.*

W przypadku Schroniska proces jest rozszerzony o dedykowany krok weryfikacji placówki, co ma na celu zapewnienie bezpieczeństwa zwierząt.

![Proces rejestracji schroniska wymagający dodatkowej weryfikacji danych przez system.](/images/rejestracja-logowanie-schronisko.png)
*Rysunek 3: Proces rejestracji schroniska wymagający dodatkowej weryfikacji danych przez system.*

#### 2. Zarządzanie Profilem i Preferencjami
Użytkownicy mogą aktualizować swoje dane oraz definiować preferencje adopcyjne (gatunek, wiek, wielkość). Zmiana preferencji automatycznie wpływa na widok dopasowanych zwierząt.

![Procesy aktualizacji profilu oraz konfiguracji filtrów dopasowań.](/images/aktualizacja-profilu-użytkownika.png)
![Procesy aktualizacji profilu oraz konfiguracji filtrów dopasowań.](/images/konfiguracja-preferencji-adopcyjnych.png)
*Rysunek 4: Procesy aktualizacji profilu oraz konfiguracji filtrów dopasowań.*

#### 3. Import i Agregacja Danych
System automatycznie pobiera dane z zewnętrznych witryn schronisk. Proces ten obejmuje analizę strony, mapowanie pól na model wewnętrzny oraz pobieranie i zapisywanie zdjęć do magazynu (Storage/CDN).

![Automatyczny proces importu zwierząt z zewnętrznych źródeł (Crawlery).](/images/import_crawling.png)
*Rysunek 5: Automatyczny proces importu zwierząt z zewnętrznych źródeł (Crawlery).*

![Szczegółowy proces przetwarzania i zapisu multimediów.](/images/zapisywanie_zdjec_storage.png)
*Rysunek 6: Szczegółowy proces przetwarzania i zapisu multimediów.*

### Kluczowe Zdarzenia Domenowe (Events)
Zidentyfikowane zdarzenia o największym znaczeniu dla logiki aplikacji:
- **Zwierzak Wykryty i Zmapowany**: Moment poprawnego sparsowania danych przez crawler.
- **Zdjęcia Zwierzaka Pobrane i Zapisane**: Potwierdzenie dostępności zasobów multimedialnych.
- **Preferencje Zaaktualizowane**: Wyzwalacz dla algorytmu dopasowującego ogłoszenia.
- **Schronisko Zweryfikowane**: Decyzja administracyjna dopuszczająca schronisko do publikacji własnych ofert.

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
