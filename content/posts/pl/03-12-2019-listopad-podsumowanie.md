---
title: Listopad - podsumowanie
datetime: 03-12-2019 01:48
description: 'I kolejny miesiąc minął. Aż niemożliwe że już jest grudzień ... Myślę że co miesiąc postaram się przygotować takie podsumowanie miesiąca poprzedniego. To dla mnie też będzie dobra metoda, żeby z jednej strony dokumentować w ramach bloga swoje postępy a z drugiej będzie po prostu wiadomo co się działo.'
keywords: listopad, podsumowanie, plany, meetup, posty, blog, ulepszenia
thumbnail: 'https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/03-12-2019-listopad-podsumowanie/thumbnail.png'
topImageSrc: 'https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/03-12-2019-listopad-podsumowanie/top-image.png'
topImageAlt: 'Google Analytics - Audience Overview in October'
index: 11
---

I kolejny miesiąc minął. Aż niemożliwe że już jest grudzień ...
Myślę że co miesiąc postaram się przygotować takie podsumowanie miesiąca
poprzedniego. To dla mnie też będzie dobra metoda, żeby z jednej strony
dokumentować w ramach bloga swoje postępy a z drugiej będzie po prostu wiadomo
co się działo.

### Posty

Napisałem i udostępniłem siedem postów. Nawet do momentu jak piszę ten post,
to nie wiedziałem, że aż tyle tego powstało.

Posty z listopada :

- [ITCorner Tech Meetup #5 Jak zostać dobrym seniorem w IT ?](https://jakubgania.io/blog/30-11-2019-itcorner-tech-meetup-5-jak-zostac-dobrym-seniorem-w-it)
- [Nieskończone możliwości eksperymentowania i tworzenia](https://jakubgania.io/blog/25-11-2019-nieskonczone-mozliwosci-eksperymentowania-i-tworzenia)
- [Optymalizacja i refaktoryzacja kodu, nowa podstrona, metodologia BEM](https://jakubgania.io/blog/21-11-2019-optymalizacja-i-refaktoryzacja-kodu-nowa-podstrona-metodologia-bem)
- [Przemyślenia](https://jakubgania.io/blog/13-11-2019-przemyslenia)
- [Timeline, dark theme](https://jakubgania.io/blog/12-11-2019-timeline-dark-theme)
- [Dark theme Github](https://jakubgania.io/blog/11-11-2019-dark-theme-github)
- [Miesiąc](https://jakubgania.io/blog/05-11-2019-miesiac)

Szczególnie ciekawa sprawa tyczy się postu najnowszego o tym jak zostać dobrym
seniorem w IT. Post ten powstał na bazie moich notatek i tego co przekazali
prelegenci na meetupie. Ten post wyszedł dosyć obszerny, jednak to co mnie bardzo
pozytywnie zaskoczyło to to, że wręcz natychmiast po udostępnieniu zyskał sporą
(jak na obecny stan mojego bloga) popularność. Narzędzie analizujące ruch na stronie
właściwie cały czas wskazuje jakieś odwiedziny na podstronie z tym postem.
Również na Linkedinie dostałem odzew dotyczący posta co już w ogóle mnie zaskoczyło
bo w sumie nigdzie nie 'reklamowałem się' jako tako z blogiem ani postami.
Nie przychodziło mi to nawet do głowy no bo jest to bardzo amatorskie podejście
do tematyki blogowania i w ogóle pisania tesktów, które ktoś potem ma przeczytać.
Jednak albo zadziałała magia indeksowania Googla albo narzędzia monitoringu
sieci/treści pokroju [Brand24](https://brand24.pl/). Nie wiem ale bardzo
ciekawa sytuacja dla mnie biorąc pod uwagę, że dotychczas na stronę dużo wejść
było np. z Ameryki, Chin, Indonezji czy w ogóle kompletnie innych krajów niż Polska.
Na pewno też sam temat jest ciekawy dla ludzi z branży IT więc to mogło tak zadziałać.

### Meetupy

Byłem na dwóch, chciałem być na czterech ... :D . No ale niestety w jeden dzień
tak się złożyło, że w tym samym czasie były trzy tematycznie super meetupy i 
oczywiście praktycznie o tych samych godzinach.

No ale meetupy na których byłem to :

- [ng-wroclaw #32](https://www.meetup.com/AngularJS-Wroc%C5%82aw/events/266039347/)
- [ITCorner Tech Meetup #5](https://www.meetup.com/ITCorner-Tech-Meetup/events/266201114/)
  
O meetupie z grupy ng-wroclaw jeszcze planuję zrobić posta w którym omówię i samą
grupę, tematykę i meetupa.

### Kolejne zmiany i ulepszenia

Oczywiście jeśli chodzi o projekt strony to również było sporo zmian.
Zmiany wizualne zaszły głównie na stronie do wyświetlania postów. Zniknął
sidebar po prawej stronie w którym początkowo chciałem umieszczać listę
z najnowszymi postami. Jednak sam kontener z treścią posta jest teraz wycentrowany
i trochę poszerzony - ma on 640px dla tesktu. Jeśli zaś chodzi o tekst i czczionkę,
to został zastosowany nowy font - [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono).

Następna rzecz jaka została zmodyfikowana to komponent odpowiedzialny za podświetlanie składni.
Bardzo mi się taki wygląd podoba, i cały czas starałem się mniej więcej osiągnąć
taki wygląd no i w sumie się udało. Kwestia jaką jeszcze rozważam to
dodanie przycisku do kopiowana ale to jeszcze przemyślę. Cały komponent wychodzi poza
obszar konteneru z tekstem. Dzięki temu jest więcej miejsca na kod, który
często jest bardzo zagnieżdżony i myślę że ten wygląd jest ciekawszy dla oka.

```text
New highlight component design
```

Do podstrony z postami z bloga został dodany również komponent, który znajduje się
zawsze pod całym postem na samym dole i zawiera odnośniki do trzech innych postów.
Natomiast na samej górze w zależności czy zostanie zdefiniowane czy nie, będzie można
wyświetlać zdjęcie na całą szerokość strony.

Tytuł strony również uległ zmianie. Wcześniej był on wyświetlany przez komponent
który wyświetla tytułu na wszystki innych stronach. Jednak teraz pozbyłem się
tego komponentu a sam tekst jest umieszczony w szerszym kontenerze i ma o wiele
większą czciąnkę. Myślę że prezentuje się to całkiem ciekawie.

Od nowa zostałzaprojektowany komponent stopki. Zawiera ona teraz o wiel więcej
informacji i ma inny układ.

Doszło również bardzo dużo poprawek związanych z wyświetalniem strony na
urządzeniach mobilnych.

Wszystkie zmiany można zobaczyć w repo na [githubie](https://github.com/jakubgania/jakubgania.io/commits/development-v2)

### Plany

A w planach jest nowa (kolejna) podstrona, którą chcę stworzyć z myślą
o artykułach. Różnić się będą one od bloga tym, że tam chciałbym omawiać dane
zagadnienie techniczne i tworzyć coś na styl bazy wiedzy. Takie konkretne artykuły.
Nie z takim luźnym podjeściem jak blog gdzie dodaję jeszcze różne swoje przemyślenia.

Strona z projektami. Nadal jest pusta ale jak tylko zaczął się gdzień postanowiłem,
że będę w miarę możliwości jeden projekt dziennie opisywał i aktualizował stronę.
Już jest zrobiony jeden - [python-scripts](/projects/python-scripts)

Taka sama potrzeba też jest w stosunku do strony z poleceniami i skrótami
klawiaturowymi czyli uzupełnienie treści.

Muszę już naprawdę powoli zczacząć robić API czyli cały backend, który będzie mi
dostarczł dane na stronę z bazy danych oraz postarać się część procesów zautomatyzować.
Zaimplementowanie backendu pozwoli m.in. na ulepszenie systemu blogowego na czym
mi też bardzo zależy.

Już raz o tym wspomniałem lecz dalej tego tematu nie ugryzłem - deployment
nowych wersji strony. Tutaj już mam pewną koncepcję ale czy w najbliższym czasie
uda mi się to zrobić, sam nie wiem. Na pewno będzie to wymagało większych działań
na serwerze.

