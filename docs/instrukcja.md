# Instrukcja uruchomienia

System ŁapGo został zaprojektowany w sposób umożliwiający szybkie uruchomienie w izolowanym środowisku konteneryzowanym, co zapewnia spójność działania niezależnie od systemu operacyjnego hosta.

## 3.1. Wymagania wstępne

Przed przystąpieniem do instalacji należy upewnić się, że na maszynie zainstalowane są następujące narzędzia:
- **Git** – do pobrania kodu źródłowego.
- **Docker oraz Docker Compose** – do konteneryzacji usług.
- **Make** – do obsługi zautomatyzowanych komend (opcjonalnie, aczkolwiek zalecane).

## 3.2. Uruchomienie środowiska deweloperskiego (Lokalne)

Proces uruchamiania aplikacji w trybie deweloperskim został zautomatyzowany za pomocą pliku Makefile. Należy wykonać następujące kroki:

1. **Pobranie repozytorium**:
   ```bash
   git clone https://github.com/blumilksoftware/interns2025c.git lapgo
   cd lapgo
   ```

2. **Konfiguracja środowiska**: Należy skopiować przykładowy plik konfiguracyjny.
   ```bash
   cp .env.example .env
   ```
   *Uwaga: W przypadku korzystania z Traefik, należy upewnić się, że domena lapgo.blumilk.localhost jest poprawnie mapowana w pliku /etc/hosts.*

3. **Budowa i uruchomienie kontenerów**: Wykorzystując przygotowane komendy make, budujemy obrazy i uruchamiamy usługi w tle.
   ```bash
   make build
   make up
   ```

4. **Inicjalizacja aplikacji**: Komenda init automatycznie instaluje zależności backendowe (Composer), frontendowe (NPM), wykonuje migracje bazy danych oraz seeduje ją przykładowymi danymi.
   ```bash
   make init
   ```

5. **Uruchomienie serwera frontendowego**: W celu uruchomienia serwera Vite (HMR) dla warstwy wizualnej:
   ```bash
   make dev
   ```

Po wykonaniu powyższych kroków aplikacja dostępna jest pod adresem zdefiniowanym w konfiguracji Traefik (domyślnie: `https://lapgo.blumilk.localhost`), a narzędzie do podglądu maili Mailpit pod dedykowanym portem/domeną.
