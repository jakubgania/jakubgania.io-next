---
title: Grudzień - podsumowanie
creationDate: 30-12-2019 02:10
description: Grudzień podsumowanie
keywords: post, grudzień, podsumowanie
topImageSrc: https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/30-12-2019-grudzien-podsumowanie/top-image.jpg
topImageAlt: Wschód słońca z samolotu
index: 16
---

Ostatni miesiąc tego roku. Grudzień to czas, kiedy przychodzi do nas
Święty Mikołaj :santa:, 24 grudnia obchodzimy Wigilię i Boże Narodzenie :christmas_tree:,
a potem już tylko odliczamy dni do Sylwestra :champagne:, który kończy rok. To wiele zadań, obowiązków i przygotowań. To różne wyjazdy - bliższe lub dalsze, do rodziny i najbliższych. Jest to czas, w którym nie ma już (zazwyczaj) aż tak dużej intensyfikacji jeśli chodzi o pracę i projekty.

![Christmas tree - Dortmund 2019](https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/30-12-2019-grudzien-podsumowanie/xtree.jpg)

Pomimo różnych okoliczności, każdego dnia starałem się rozwijać
i ulepszać swoją stronę. Bardzo dużych zmian nie ma, jednak jak zawsze są dziesiątki modyfikacji i drobne poprawki.

## Open graph i meta tagi

Jedną z większych spraw jaką wziąłem na warsztat, to były meta tagi [Open Graph](https://ogp.me/).
Jest to o tyle ciekawe, że wcześniej nie zauważyłem problemu jaki ostatnio wystąpił. Chodzi mianowicie o wyświetlanie strony po dodaniu jako link np. na Linkedinie czy Twitterze.
Co się wtedy dzieje z każdą stroną, którą dodamy ?
Tworzy się pewnego rodzaju miniaturka strony z widokiem jakiejś grafiki lub loga strony i tytułem danej strony, która jest linkowana wraz z jej opisem.

![Twitter screen](https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/30-12-2019-grudzien-podsumowanie/twitter-1.PNG)

Czyli tworzy się podgląd strony z podstawowymi informacjami.

Do momentu, zanim zacząłem dodawać posty na Linked'ina i Twitter'a, nie widziałem, że przez brak pewnych meta tagów nie tworzy się ten widok po wklejeniu linka. Na początku zaskoczyło mnie to, ponieważ pewne meta tagi są już dodane i skonfigurowane po rozpoczęciu projektu w Nuxt oraz po dodaniu modułu PWA.  

Jak się okazało - nie wszystkie i niektórych brakowało. Zanim postawiłem tą diagnozę - minęło kilka dni.
Początkowo w ogóle nie wiedziałem i nie myślałem, że to może być kwestia brakujących meta tagów, ani nie do końca byłem
świadomy przeznaczenia tagów Open Graph.

Natomiast po dogłębnym analizowaniu problemu, udało się go rozwiązać.

[Twitter](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup) posiada swoje meta tagi, które można dodać zamiast tych z Open Graphu. Jednak kiedy nie zostaną wykryte, pod uwagę zostają wzięte te z Open Graphu i poprawnie przetworzone. Tak samo będzie działało to również w przypadku Facebooka.

Dlatego rozwiązanie problemu z błędnie wyświetlającym się podglądem strony (może nie tyle błędnie co po prostu z niedostateczną ilością informacji) sprowadziło się do dodania meta tagów dla danych podstron, a właściwie wszystkich podstron (w chwili pisania tego posta, jeszcze nie na wszystkich to dodałem). Oczywiście należało tutaj zaimplementować dynamiczne meta tagi, ponieważ w przypadku  postów - każdy to inny tytuł, zdjęcie, link i opis.

Po implementacji i wdrożeniu na serwer wszystko zaczęło dobrze działać - o czym można się przekonać, np. w validatorze Twitter'a :

Przykład podstrony bez meta tagów Open Graph
![Twitter validator - bad](https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/30-12-2019-grudzien-podsumowanie/twitter-validator-bad.PNG)

Przykład podstrony z zastosowanymi meta tagami Open Graph
![Twitter validator - good](https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/30-12-2019-grudzien-podsumowanie/twitter-validator-good.PNG)

Cóż, z powyższego opisu dałoby radę stworzyć cały artykuł o tym zagadnieniu. Natomiast spotkałem się z tego typu problemem i przedstawiłem to skrótowo - w kilku zdaniach.

## Linkedin i Twitter

Tak, w końcu zacząłem 'atakować' Twitter'a i Linkedin'a. Atakować w pojęciu takim, że zacząłem (nieśmiało) udostępniać swoje posty, które tworzę w ramach bloga. Samego Twitter'a nie miałem nigdy wcześniej, ale w końcu założyłem konto po niedawnym [meetup'ie](/post/30-11-2019-itcorner-tech-meetup-5-jak-zostac-dobrym-seniorem-w-it). Mam różne wrażenia i spostrzeżenia co do tego działania. Jest to "temat rzeka", dlatego możliwe, że stworzę o tym post w niedalekiej przyszłości. 

## Preloader

Dodałem również preloader, który jest widoczny, kiedy w przeglądarce wywołamy jakąś z podstron mojej strony. Nie zawsze jest on wyświetlany. Zależy to od pamięci cache i szybkości połączenia internetowego. Już kiedyś to rozważałem, ale nie dodałem. W końcu przyszedł jakiś impuls i stworzyłem komponent z preloaderm.

Preloader jest animowany - tutaj jest tylko poglądowy screen
![Preloader](https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/30-12-2019-grudzien-podsumowanie/preloader.png)

## Emoji :D

Zainstalowałem także moduł z emoji. Pełną listę można zobaczyć [tutaj](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json). Jest to bardzo ciekawy dodatek, ponieważ zamiast znaków interpunkcyjnych z literami, które były widoczne dotychczas, teraz będzie już dodany moduł do markdowna, który renderuje emoji.

Kilka przykładów :
:blush: :smiley: :smirk: :grin: :fearful: :neutral_face: :alien: :astonished: :waning_crescent_moon: :earth_africa: :computer: :twisted_rightwards_arrows: 

## Poprawki && optymalizacje

Doszło też do sporej ilości poprawek i refaktoryzacji. Takie drobne elementy zawsze gdzieś znajdą się do poprawy. Kiedy tylko coś zauważę, staram się to jak najszybciej poprawić. I ważniejszą poprawką w ostatnim czasie była poprawka związana z lokalizacją plików w projekcie. Otóż jakiś czas temu w kilku folderach rozłożyłem główne pliki z rozszerzeniem .vue np. example-name.vue na pliki składowe a w pliku głównym dodawałem plik ze stylem i plik z javascriptem. Chciałem to podzielić i też ogaraniczyć wielkość kodu w pliku. Chciałem dobrze - wyszło jak zawsze ... :D Przez to w jaki sposób działa Nuxt, doszło do sytuacji w której Google poza tym, że zaindeksowało stronę np. /blog i to jest ok, to zaindeksowało również ścieżkę o takiej samej nazwie jak drugi plik, który był w tym samym katalogu czyli - /other-posts-component, który już nie jest kompletną stroną lecz tylko niewielkim komponentem. Nuxt w swojej strukturze projektu ma dedykowany katalog na komponenty, ale nie wziąłem początkowo tego pod uwagę. Myślałem, że to wina konfiguracji Nginx'a ale w końcu zorientowałem się, że ta sytuacja spowodowana jest umieszczeniem innych plików w nieodpowiedniej lokalizacji.

Zawsze po takich odkryciach przychodzi mi na myśl tylko to :D
@[youtube](https://www.youtube.com/watch?v=2-TboIuqKDY)

Część rzeczy już naprostowałem, ale przez ostatnie kilka dni nie miałem za bardzo czasu, żeby wgrać nową wersję na serwer a potem puścić nowe indeksowanie. Większy pakiet zmian wgram dopiero jak skończę przygotowania pod nową podstronę. Muszę zacząć sobie notować też co robię, w tym małe poprawki i dodatki, aby mieć świadomość swojej pracy oraz dokonanych zmian, ponieważ z biegiem czasu ciężko jest sobie przypomnieć nad czym dokładnie pracowałem.

## Podstrona - artykuły

Ostatnio również zacząłem implementować nową podstronę pod ścieżką /docs - jednak nie jest to jeszcze skończone. Technicznie będzie to bardzo podobne do rozwiązania zastosowanego na podstronie z blogiem, dlatego tworzę wydzielony komponent, który będzie realizował logikę i następnie będzie użyty z trochę innymi parametrami w artykułach i na blogu.

## Windows 10 Pro

![Windows 10 Pro](https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/30-12-2019-grudzien-podsumowanie/windows-10-pro.PNG)

Jedną ze znaczących zmian w ostatnim czasie jest dla mnie migracja z Windowsa w wersji Home na wersję Pro. Poza kilkoma szczegółami, które różnią te wersje, oczywiście najważniejszą dla mnie z punktu widzenia programisty jest wsparcie dla Hyper-V w wersji Pro a co za tym idzie możliwość zainstalowania i uruchomienia oprogramowania [Docker Desktop](https://docs.docker.com/docker-for-windows/install/).

![Docker Desktop](https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/30-12-2019-grudzien-podsumowanie/docker-desktop.PNG)