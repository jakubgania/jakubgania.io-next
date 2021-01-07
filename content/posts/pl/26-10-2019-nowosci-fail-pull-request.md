---
title: Nowości, fail, pull request
creationDate: '26-10-2019 23:51'
description: Nowości, fail, pull request
keywords: fail, pull request, zmiany, nowości
thumbnail: 'https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/26-10-2019-nowosci-fail-pull-request/thumbnail.png'
topImageSrc: 'https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/26-10-2019-nowosci-fail-pull-request/top-image.png'
topImageAlt: ''
imageDescription: Zdjęcie - wykonanie własne
index: 3
---

Kolejny post po dłuższej przerwie. Pomimo tego, że ostatnio jestem dosyć sporo w
domu, nie umiałem się zebrać i napisać następnych przemyśleń ale dzisiaj już
nastąpił ten dzień. Właściwie od samego rana nie włączyłem laptopa aż do teraz,
tzn. godzina około 23:20 jak zaczynam to pisać. Dzisiaj niewiele programowałem,
a to za sprawą rozmowy rekrutacyjnej w okolicach godziny 11, która w sumie nie
trwała bardzo długo, ale jakoś przez to nie spędziłem dzisiaj całego dnia przed
monitorami. Właściwie przez całe popołudnie i wieczór czytałem jedną z najnowszych
książek, które kupiłem, czyli
["Ekstrackja danych z językiem Python"](https://helion.pl/ksiazki/ekstrakcja-danych-z-jezykiem-python-pozyskiwanie-danych-z-internetu-wydanie-ii-ryan-mitchell,ekspy2.htm#format/d) 
bardzo ciekawa książka o tworzeniu botów/robotów/pająków indeksujących i
zbierających dane
z witryn internetowych ale o tym temacie jeszcze napiszę, kiedy dokończę książkę,
ponieważ chcę z tym poeksperymentować. 

Jeśli chodzi o stronę to cały czas wprowadzam poprawki oraz nowe implementacje
różnych komponentów - realizuję wszystko stopniowo. Teraz implemetuję galerię ze
zdjęciami. Jest jeszcze do zrobienia klika rzeczy, ale przynajmniej nie są już
wyświetlane zdjęcia zastępcze tylko pierwsze fotografie mojego autorstwa.
W znacznym stopniu również zaimplemetowałem tryb ciemny tzn. "dark mode", ale
jest on jeszcze nieaktywny, ponieważ nie do końca działa stabilnie
(tak, tak prosta z pozoru funkcjonalność też może działań niestabilnie).
Doszło sporo w sekcji ze skrótami klawiaturowymi ale to jest cały czas rozbudowywane.
Dodałem jeszcze do projektu moduł odpowiedzielny za wyświetlanie i kolorowanie
składni (markdown-it-highlightjs) kodu, który definiuje się/dodaje z plikach markdown.
Początkowo działało źle i niepoprawnie, ale po dłuższej analizie problemu okazało
się, że wbudowane klasy Vuetify nadpisują bloki <code></code> swoimi stylami.
Dlatego od teraz będę mógł dodawać bloki kodu w postach ale na pewno jeszcze
trochę modułów trzeba będzie dodać do samego silnika renderującego markdowna.
Z tego co widziałem, wiele funkcjonalności jest podzielonych na osobne moduły i
każdy moduł za coś odpowiada.

JavaScript

```javascript

console.log("example text from javascript")
```

Python

```python

print("example text from python")
```

Oczywiście nie obyło się bez faila, mianowicie ostatnio wygasł certyfikat SSL
dla domeny... to z kolei zatrzymało stronę na dwa dni, ale po tej sytuacji
również postanowiłem opracować skrypt, który będzie automatycznie generował
certyfikaty dla podanych domen. Muszę go jeszcze dopracować i na pewno pojawi
się u mnie na [githubie](https://github.com/jakubgania).
Dodatkowo dodam automatyczne odnawiania za pomocą CRONa.

W analityce zauważyłem, że zaczyna się jakiś znikomy ruch na stronie, ale są to
jakieś pojedyncze wejścia, a o dziwo część z nich pochodzi np. z Ameryki, Kanady,
Niemiec, Kolumbii, Indonezji, Chin, Ukrainy czy Rosji. Najwięcej wejść jest na
stronę główną, stronę z menu, stronę z postami i ze skrótami klawiaturowymi.
Oczywiście największy ruch obecnie pochodzi z urządzeń mobilnych.

Ostatnio miała miejsce jeszcze jedna ciekawa sytuacja, mianowicie zauważyłem,
że ktoś na githubie zrobił forka mojego repozytorium z projektem tej strony.
Początkowo się zdziwiłem, ponieważ pomyślałem, że właściwie po co .. No ale jak
wiemy projekty na githubie można kopiować bez najmniejszego problemu. Jest część
osób, które chyba kopiują wszystko na zapas (przynajmniej ja mam takie wrażenie :O).
Natomiast wszedłem na profil osoby, która to skopiowała i zobaczyłem, że jest to
zaawansowana osoba i jeszcze bardziej mnie to zaskoczyło, ponieważ ta osoba miała
już swoją stronę oraz wyglądała na wiele bardziej doświadczoną ode mnie i tak
też było .. Nie od razu to zauważyłem, miałem w ramach tego projektu zgłoszonego
pull requesta z sugestią usunięcia jednej linijki konfiguracyjnej z modułu
@nuxtjs/sitemap. Dopiero potem zobaczyłem, że osoba, która zgłosiła tego pull
requesta, to nikt inny jak sam twórca owego modułu - Nicolas Pennec
([GitHub](https://github.com/NicoPennec), [pennec.io](https://pennec.io/)) ,
Następnie wywnioskowałem, że cała sytuacja nabrała sensu :D, pull requesta dodałem
i byłem zaskoczony, że trafił na mój projekt i dojrzał coś co ma status deprecated.
