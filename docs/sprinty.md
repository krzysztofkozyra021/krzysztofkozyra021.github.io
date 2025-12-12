# Zarządzanie projektem / Podział zadań w sprintach

Zadania projektowe zostały podzielone na cztery sprinty, realizowane w metodyce Scrum. Poniżej przedstawiono plan sprintów oraz szczegółową dokumentację ich realizacji, włącznie z Retrospektywami.

## 7.1. SPRINT 1

**Planowane Zadania:**
- Inicjalizacja i konfiguracja projektu
- Implementacja widoku strony lądowania (Landing Page)
- Implementacja systemu autoryzacji
- Stworzenie logiki panelu administracyjnego
- Implementacja pełnego cyklu CRUD dla Zwierząt

**Realizacja i Postęp**
SPRINT 1 skupił się na fundamentach technicznych i bazowych modelach danych.
- **Inicjalizacja i konfiguracja**: Pomyślnie wdrożono kontenerowe środowisko deweloperskie Docker-compose (Laravel, PostgreSQL, Redis, Mailpit). Skonfigurowano Vite dla frontendu i podstawowe skrypty automatyzacji (Makefile).
- **Backend**: Zaimplementowano modele User i Animal, ich migracje oraz pełny cykl CRUD dla zwierząt (API endpoints).
- **Frontend**: Stworzono pierwszą wersję responsywnego Landing Page oraz bazowy layout aplikacji.
- **Autoryzacja i Admin**: Zainicjowano strukturę autoryzacji (tylko backendowe trasy logowania/rejestracji) i rozpoczęto tworzenie logiki dla panelu administracyjnego.
- **Status**: Wszystkie zaplanowane zadania zostały zrealizowane (100 procent ukończenia).

**Dokumentacja Postępu (Trello)**
Postęp prac w SPRINT 1 został udokumentowany na tablicy projektowej.

![Tablica projektu - SPRINT 1](/images/sprint1.png)
*Rysunek 5: Tablica projektu - SPRINT 1*

**Retrospektywa SPRINT 1**
Uczestnicy: Krzysztof Kozyra (Project Manager, Backend), Tomasz Rebizant (Frontend).

- **Co poszło dobrze (Keep)**: Szybka inicjalizacja środowiska deweloperskiego (Docker) i efektywna praca Krzysztofa w warstwie Backend. Tomasz szybko dostarczył bazowy layout (Landing Page).
- **Co wymaga poprawy (Less)**: Wystąpiły drobne nieporozumienia w komunikacji między Backendem a Frontendem, co do nazw endpointów API dla CRUD zwierząt. Zauważono brak ujednoliconego formatu danych.
- **Nowe pomysły (More)**: Konieczność wdrożenia narzędzia do wizualizacji API (np. Swagger/OpenAPI) w celu szybszej integracji warstw.
- **Działania korygujące (Action Items do SPRINT 2)**: Krzysztof dodaje zadanie "Implementacja bazowej dokumentacji OpenAPI" do Backlogu SPRINTU 2. Tomasz sprawdza czytelność i jednolitość stylów Vue.js po pierwszym sprincie.

## 7.2. SPRINT 2

**Planowane Zadania:**
- Implementacja pełnego cyklu CRUD dla Tagów i Schronisk
- Konfiguracja i refaktoryzacja routingu
- Implementacja głównego panelu użytkownika (Dashboard)
- Implementacja pełnego cyklu CRUD dla Administratorów i Użytkowników
- Stworzenie mechanizmów crawlera i scrapera
- Częściowa praca nad systemem obsługi obrazów (Spatie, Scrap images, links, conversion)
- Implementacja widoku szczegółów wybranego zwierzaka

**Realizacja i Postęp**
SPRINT 2 był najbardziej intensywny pod kątem modelowania danych i kluczowych funkcjonalności.
- **Backend**: Ukończono cykle CRUD dla Shelter i Tag. Rozpoczęto prace nad logiką crawlera/scrapera (wybór bibliotek, struktura pobierania). Ukończono CRUD dla Administratorów i Użytkowników.
- **Frontend**: Ukończono widok Dashboard oraz widok szczegółów zwierzęcia. Przeprowadzono refaktoryzację routingu.
- **Obrazy**: Uruchomiono wstępne pobieranie obrazów za pomocą scrapera, ale bez pełnej implementacji konwersji i przechowywania (Spatie MediaLibrary).
- **Status**: Ze względu na dużą liczbę zadań związanych ze scraperem, nie zrealizowano zadania „Stworzenie mechanizmów crawlera i scrapera” w pełni (ukończono na poziomie 60%). Zadanie to zostało przesunięte do SPRINTU 3.

**Dokumentacja Postępu (Trello)**
Postęp prac w SPRINT 2.

![Tablica projektu - SPRINT 2](/images/sprint2.png)
*Rysunek 6: Tablica projektu - SPRINT 2*

**Retrospektywa SPRINT 2**
Uczestnicy: Krzysztof Kozyra, Tomasz Rebizant.

- **Co poszło dobrze (Keep)**: Szybka implementacja Dashboardu i widoków szczegółów. Modele Shelter i Tag zostały zaimplementowane sprawnie.
- **Co wymaga poprawy (Less)**: Zadanie związane ze scraperem i crawlerem było zbyt obszerne i niedoszacowane (przypominamy: estymacja wynosiła 12 godzin). Przeciążenie Backendu spowodowało, że część pracy nad obsługą obrazów również się opóźniła.
- **Nowe pomysły (More)**: Konieczność rozbicia dużych zadań (Epiców) na mniejsze, bardziej zarządzalne części w przyszłych sprintach.
- **Działania korygujące (Action Items do SPRINT 3)**: Pełna implementacja scrapera i crawlera zostaje podzielona na mniejsze taski i przeniesiona do SPRINTU 3. Wprowadzamy zasadę, że jedno zadanie nie może mieć estymacji wyższej niż 8 roboczogodzin.

## 7.3. Metryki Zwinne (Velocity)

W celu oceny tempa pracy i realności ukończenia projektu w terminie, obliczono wskaźnik Velocity (prędkość zespołu) na podstawie roboczogodzin (średnia z estymacji) dla zadań, które zostały ukończone w 100% w SPRINT 1 i SPRINT 2.

**Obliczenie Velocity**
- Suma godzin SPRINT 1 (Ukończony 100%): 27:30:00
- Suma godzin SPRINT 2 (Zadania ukończone 100%): 53:00:00

- **Średnia Velocity (S1 + S2)**:
  Velocity = (27:30:00 + 53:00:00) / 2 = 40:15:00 roboczogodzin/sprint

**Wnioski**
Średnie Velocity na poziomie 40 godzin i 15 minut będzie używane do planowania i monitorowania SPRINTÓW 3 i 4. Wartość ta pokazuje, że zespół jest w stanie zrealizować około 20 roboczogodzin więcej niż pierwotna estymacja (71 godzin) w cyklu 2 tygodni (na 2 osoby), co sugeruje, że zadania w SPRINTACH 3 i 4 są w zakresie możliwości zespołu.

## 7.4. SPRINT 3

- Implementacja pełnego cyklu CRUD dla Preferencji użytkownika
- Implementacja mechanizmu weryfikacji ogłoszeń przez administratora
- Poprawki wizualne (zmiana logo aplikacji)
- Implementacja algorytmu dopasowywania zwierząt do preferencji
- Implementacja widoków autoryzacji
- Naprawa błędów w logice (panel administracyjny)

## 7.5. SPRINT 4

- Stworzenie systemu obsługi i przechowywania obrazów (Dalszy etap developmentu)
- Użycie API na potrzeby obsługi geolokalizacji
- Implementacja mechanizmu dodawania/usuwania z ulubionych zwierząt
- Przeprowadzenie refaktoryzacji i naprawa błędów
