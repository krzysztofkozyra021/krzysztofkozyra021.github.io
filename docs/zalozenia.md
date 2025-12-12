# Założenia funkcjonalne i technikalia

## 2.1. Założenia funkcjonalne

Projekt ŁapGo to aplikacja webowa, której głównym celem jest ułatwienie procesu adopcji zwierząt. Kluczowe założenia funkcjonalne projektu to:

- **Centralna baza zwierząt**: Aplikacja ma na celu indeksowanie (zbieranie i katalogowanie) informacji o zwierzętach przebywających w schroniskach na terenie całej Polski.
- **Wyszukiwanie i dopasowywanie**: Użytkownicy mogą wyszukiwać zwierzęta do adopcji. System ma dopasowywać i wyświetlać zwierzęta na podstawie określonych preferencji użytkownika (np. gatunek, wielkość, wiek, lokalizacja).
- **Pośrednictwo w kontakcie**: Aplikacja pełni rolę pośrednika, dostarczając użytkownikom niezbędnych informacji kontaktowych do schroniska, w którym przebywa wybrane zwierzę.
- **Ułatwienie adopcji**: Celem nadrzędnym jest pomoc użytkownikom w znalezieniu i adopcji wymarzonego zwierzęcia, poprzez dostarczenie im wszystkich kluczowych informacji w jednym miejscu.

## 2.2. Technikalia

### 2.2.1. Architektura i Środowisko

- **Docker (docker-compose.yaml)**:
  - *Opis*: Platforma do konteneryzacji aplikacji.
  - *Uzasadnienie*: Pozwala na stworzenie spójnego, przenośnego i izolowanego środowiska deweloperskiego. Każdy programista może uruchomić projekt lokalnie, mając pewność, że wszystkie usługi (aplikacja, baza danych, Redis) działają w tej samej konfiguracji. Znacząco upraszcza to proces wdrożenia i eliminuje problemy typu "u mnie działało".

- **Make (Makefile)**:
  - *Opis*: Narzędzie do automatyzacji zadań.
  - *Uzasadnienie*: Działa jako "nakładka" na skomplikowane komendy Dockera i Composera. Upraszcza codzienne zadania (np. make init, make shell), czyniąc je łatwiejszymi do zapamiętania i wykonania.

- **Traefik**:
  - *Opis*: Nowoczesny reverse proxy i load balancer.
  - *Uzasadnienie*: Zintegrowany ze środowiskiem "Blumilk traefik", pozwala na łatwe zarządzanie ruchem sieciowym i udostępnianie wielu lokalnych projektów pod przyjaznymi adresami URL (np. lapgo.blumilk.localhost).

### 2.2.2. Backend (Warstwa Aplikacji)

- **PHP**:
  - *Opis*: Język skryptowy po stronie serwera.
  - *Uzasadnienie*: Dojrzały i popularny wybór do tworzenia aplikacji webowych, stanowiący fundament dla frameworka Laravel.

- **Laravel**:
  - *Opis*: Wiodący framework PHP oparty na wzorcu MVC.
  - *Uzasadnienie*: Drastycznie przyspiesza proces tworzenia aplikacji. Oferuje gotowe rozwiązania dla typowych zadań, takich jak routing, zarządzanie bazą danych (ORM Eloquent), uwierzytelnianie czy systemy kolejek.

- **Composer**:
  - *Opis*: Menedżer zależności dla PHP.
  - *Uzasadnienie*: Niezbędne narzędzie w nowoczesnym programowaniu w PHP. Pozwala na łatwe zarządzanie bibliotekami firm trzecich oraz automatyczne ładowanie klas.

- **PostgreSQL**:
  - *Opis*: Zaawansowana, obiektowo-relacyjna baza danych SQL typu open-source.
  - *Uzasadnienie*: Niezbędna do przechowywania danych o zwierzętach, schroniskach i preferencjach. Wybrany ze względu na swoją niezawodność, bogaty zestaw funkcji (np. lepsze wsparcie dla typów złożonych, JSONB) i ścisłe przestrzeganie standardów SQL.

- **Redis**:
  - *Opis*: Magazyn danych typu klucz-wartość, działający w pamięci.
  - *Uzasadnienie*: Używany do buforowania (cache) często odpytywanych danych, zarządzania sesjami lub kolejkami (queues). Znacząco poprawia to wydajność aplikacji poprzez odciążenie głównej bazy danych.

### 2.2.3. Frontend (Warstwa Prezentacji)

- **Vue.js**:
  - *Opis*: Progresywny framework JavaScript do budowania interfejsów użytkownika.
  - *Uzasadnienie*: Znane z niskiego progu wejścia i elastyczności. Umożliwia tworzenie reaktywnych i dynamicznych komponentów interfejsu (np. filtrowanie listy zwierząt "na żywo"), co znacząco poprawia doświadczenie użytkownika (UX).

- **Vite (vite.config.js)**:
  - *Opis*: Narzędzie do budowania (build tool) i serwer deweloperski frontendu.
  - *Uzasadnienie*: Wybór podyktowany wydajnością. Vite oferuje błyskawiczne przeładowywanie modułów (HMR - Hot Module Replacement) i szybki start serwera deweloperskiego.

- **Tailwind CSS**:
  - *Opis*: Framework CSS typu "utility-first".
  - *Uzasadnienie*: Dostarcza zestaw klas użytkowych, co daje pełną kontrolę nad wyglądem i ułatwia budowanie niestandardowych, responsywnych interfejsów bez pisania własnego CSS od zera.

- **TypeScript**:
  - *Opis*: Nadzbiór JavaScriptu dodający statyczne typowanie.
  - *Uzasadnienie*: Pomaga wyłapywać błędy na wczesnym etapie pisania kodu i poprawia czytelność oraz utrzymanie kodu frontendu w miarę rozrastania się projektu.

### 2.2.4. Jakość Kodu i Testowanie (CI/CD)

- **PHPUnit**:
  - *Opis*: Standardowy framework do testów jednostkowych i funkcjonalnych w PHP.
  - *Uzasadnienie*: Kluczowe narzędzie do zapewnienia jakości kodu backendu. Pozwala na automatyczne weryfikowanie, czy poszczególne funkcje aplikacji działają zgodnie z oczekiwaniami.

- **PHP CS Fixer**:
  - *Opis*: Narzędzie do automatycznego formatowania i poprawiania stylu kodu PHP zgodnie ze standardami (np. PSR-12).
  - *Uzasadnienie*: Ułatwia utrzymanie spójnego stylu kodu, poprawia czytelność i zgodność z wybranymi standardami kodowania.

- **ESLint**:
  - *Opis*: Linter dla kodu JavaScript/TypeScript.
  - *Uzasadnienie*: Zapewnia spójność stylu kodowania w projekcie frontendowym i wyłapuje potencjalne problemy w kodzie.

- **GitHub Actions**:
  - *Opis*: Platforma CI/CD zintegrowana z GitHubem.
  - *Uzasadnienie*: Służy do automatyzacji procesów. Po każdym "pushu" do repozytorium automatycznie uruchamiane są testy (PHPUnit), analiza kodu (PHPStan) i lintowanie (ESLint).

- **Mailpit**:
  - *Opis*: Lokalny serwer SMTP do przechwytywania wysyłanych maili.
  - *Uzasadnienie*: Niezbędne narzędzie deweloperskie. Pozwala na łatwe testowanie funkcjonalności związanych z pocztą e-mail bez wysyłania prawdziwych wiadomości.

### 2.2.5. Zarządzanie projektem i komunikacja

- **Git**:
  - *Opis*: Rozproszony system kontroli wersji.
  - *Uzasadnienie*: Niezbędny do śledzenia zmian w kodzie, pracy zespołowej nad tą samą bazą kodu, tworzenia gałęzi (branching) dla nowych funkcji oraz łatwego przywracania poprzednich wersji.

- **GitHub**:
  - *Opis*: Platforma hostingowa dla repozytoriów Git, oferująca zarządzanie projektem i CI/CD.
  - *Uzasadnienie*: Centralne miejsce do przechowywania kodu. Używany do przeglądów kodu (Pull Requests), zarządzania zadaniami (Issues/Backlog) oraz automatyzacji procesów (GitHub Actions), co łączy cały cykl życia oprogramowania.

- **Slack**:
  - *Opis*: Komunikator biznesowy.
  - *Uzasadnienie*: Wykorzystywany do codziennej, bieżącej komunikacji w zespole, szybkiego rozwiązywania problemów i dyskusji, co eliminuje potrzebę długich wątków mailowych i formalnych spotkań.

## 2.3. Model Danych i Architektura

Dokumentacja techniczna została wzbogacona o Diagram Związków Encji (ERD), który przedstawia relacje między kluczowymi modelami danych, oraz o wysokopoziomowy Diagram Architektury Systemu.

### Diagram Związków Encji (ERD)

Poniższy diagram przedstawia relacyjny model danych dla aplikacji ŁapGo, bazujący na bazie danych PostgreSQL. Wyróżnia on encje główne, takie jak PETS (Zwierzęta), PET_SHELTERS (Schroniska), USERS (Użytkownicy), oraz relacje polimorficzne (np. MEDIA, PET_TAG) dla zapewnienia elastyczności.

![Diagram Związków Encji (ERD)](/images/erd.png)
*Rysunek 1: Diagram Związków Encji (ERD) aplikacji ŁapGo.*

### Diagram Architektury Systemu

Poniższy diagram ilustruje wysokopoziomową architekturę systemu, pokazując, jak różne komponenty (Backend, Frontend, Infrastruktura) komunikują się ze sobą, ze szczególnym uwzględnieniem mechanizmu scrapera AI opartego na API Gemini.

![Diagram Architektury Systemu](/images/architektura.png)
*Rysunek 2: Diagram Architektury Systemu aplikacji ŁapGo.*
