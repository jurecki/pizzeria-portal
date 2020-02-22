# Dasboard

- '/'
  - statystki zamówien zdalne lokalne
  - lista rezerwacji / eventów na dziś

# Logowanie

- '/login'
  - pola na login i hasło
  - guzik do zalogowania (link do dashboard)

# Widok dostępności stolików

- '/tables'
  - wybór daty i godziny
  - tabla z listą rezerwacji oraz wydarzeń
    - kada kolumna jest stolikiem
    - kazdy wiersz blok 30 minut
    - przypomina widok tygodnia w kalednarzu googla, w kolumnach zmiast dni są rozne stoliki, po kliknięciu rezerwacji lub eventu przechodzimy na strone szczegoly
- '/tables/booking/:id'
  - zawiera wszystie informacje dot. rezeracji
  - umoliwia edycję i zapisanie zmian
- '/tables/booking/new'
  - analogicznie jak poprzednia bez początkowych informacji
- '/tables/events/:id'
  - zawiera wszystie informacje dot. rezeracji
  - umoliwia edycję i zapisanie zmian
- '/tables/events/new'
  - analogicznie jak poprzednia bez początkowych informacji

# Widok kelnera

- '/waiter'
  - tabela
    - w wierszach wyświetla stoliki
    - w kolumach rózne rodzaje informacji
    - w ostastniej kolumnie dostpne akcje dla danego stolika
- '/waiter/order/new'
  - numer stolika (edytowalny)
  - menu produktow dostnych w restaruarcji
  - opcje wybranego produktu
  - zamowienie (zamowione produkty z opcjami i cenę)
  - kwota zamowienia
- '/waiter/order/id'
  - jak wyzej (wprowadzona cześć informacji)

# Widok kuchni

- '/kitchen'
  - wyswietlac liste zamowien w kolejnosci ich zlozenia
  - lista musi zawierac
    - nr stolika lub zamowienia zdalnego oraz
    - pełne informacje dotyczace zamowinionych dań
  - na liscie musi być mozliwosc zaznaczenia zamowienia jako zrealizowane
