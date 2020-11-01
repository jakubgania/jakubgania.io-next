---
title: Timeline, Dark Theme
creationDate: '12-11-2019 00:12'
description: Timeline i Dark Theme
topImageSrc: 'https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/12-11-2019-timeline-dark-theme/top-image.jpg'
topImageAlt: ''
keywords: dark, theme, dark theme, ciemny motyw, oś czasu, timeline
index: 6
---

## timeline

Tak jak w tytule, to dwie główne nowości na stronie. Pierwsza z nich to podstrona
o nazwie [timeline](https://jakubgania.io/timeline). Zawiera ona graficzną
reprezentację osi czasu, czyli osi na której są dodane i opisane kolejno według
dat wystąpień różne wydarzenia z mojego życia. Nie bądą tam tylko sprawy pokroju
narodziny, etapy edukacji itp. tylko również luźniejsze tematy, które po prostu
uznam za słuszne żeby nawet dla siebie zaznaczyć tam z datą i opisem co i jak.

Na etapie szkoły podstawowej, gimnazjum i liceum fascynowałem się kosmosem i
astronomią dlatego stąd różne konkursy fizneczno-astronomiczne.

Zaś na przełomie gimnazjum i liceum bardzo dużo jeździłem na rowerze dlatego też
byłem kilka razy na drobnych zawodach rowerowych w okolicy Lublińca gdzie ówcześnie
mieszkałem.

Myślę że takie kwestie z przeszłości jeszcze kiedyś rozwinę w jakiś wpisach.

## dark theme

Drugą z nowości jest w końcu działający tryb ciemny czyli z ang. dark theme.
Ponieważ moja strona również domyślnie jest właściwie cała biała na pewno ten tryb
przyda się w godzinach wieczorno-nocnych. Musiałem to po prostu zaimplementować
już z samego faktu, że poza obecnymi trendami w stronach webowych i aplikacjach
po prostu zrobienie czegoś na stronie wieczorem było boląco-męczące gdy nagle na
monitorze pojawiała się tafla śnieżnej rażącej bieli.

Oczywiście przy samym procesie implementacji znowu zgłębiłem kilka tajników samego
Vuetify odnośnie cimnego motywu, który niejako jest dostępny domyślnie lecz jak to
bywa, trzeba było jeszcze obsłużyć inne niestandardowe potrzeby.

Myślę, że sam mechanizm jest po prostu ok, nie jestem pewien czy jest to poprawna
implementacja według wszelkich najlepszych praktyk jednak staram się cały czas
obserwować kody źródłowe innych aplikacji oraz działanie i na bazie tego też
albo coś poprawiam, albo definijuę od nowa, albo po prostu jakoś krok po kroku
odkrywam i dochodzę do nowych wniosków.

Cały ten mechanizm wykorzystuje również cache przeglądarki więc po ponownym
włączeniu strony wybranych schemat kolorystyczny będzie zapamiętany.

Ciemny motyw obecnie można włączyć albo z poziomu menu bocznego

![dark theme menu switch](https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/12-11-2019-timeline-dark-theme/dark-theme-menu-switch.PNG)

albo z poziomu stopki

![dark theme footer switch](https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/12-11-2019-timeline-dark-theme/dark-theme-footer-switch.PNG)
