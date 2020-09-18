---
title: 'Informacje o nadchodzącym frameworku Vue.js 3'
creationDate: 29-03-2020 14:04
description: Trochę informacji o nadchodzącej wersji frameworka Vue.js 3. Opisuję informacje dostępne w repozytorium projektu.
keywords: vue, informacje, post, blog
topImageSrc: 'https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/29-03-2020-informacje-o-nadchodzacym-frameworku-vuejs-3/top-image.PNG'
topImageAlt: 'Vue.js - Logo'
index: 23
---

Już od jakiegoś czasu wiadomo, że wyjdzie kolejna wersja frameworka [Vue.js](https://vuejs.org/).
Będzie ona oznaczona numerem 3. Wersja trzecia wniesie ze sobą sporo zmian. W tym poście opiszę
informacje jakie krążą w sieci na ten temat.

Jakie zmiany przewidziane są w nadchodzącej wersji ? Są to m.in. :

- poprawa/optymalizacja wydajności działania
- przepisany Virtual DOM
- mniejszy rozmiar
- łatwiejszy do utrzymania kod
- lepsze wsparcie dla rozwiązań natywnych
- łatwiejsze użycie
- większa modułowość
- będzie używać TypeScript
- globalny tree-shaking API

Poniżej konferencja na której twórca Vue - Evan You opowiada o nadchodzących zmianach.
@[youtube](https://www.youtube.com/watch?v=WLpLYhnGqPA&t=547s)

Obecna wersja to [v2.6.11](https://github.com/vuejs/vue/releases/tag/v2.6.11).

![Vue.js - v2.6.11](https://jakubgania.io/data/blog/posts/29-03-2020-informacje-o-nadchodzacym-frameworku-vuejs-3/current-release.PNG)

Według wcześniejszych informacji wersja trzecia miała ukazać się w pierwszym kwartale roku 2020. Jednak
tak się nie stało, a sama prezentacja nowej wersji odbędzie się w późniejszym czasie. Dużo informacji
o tym co się dzieje i co jest planowane jest zawarte w Roadmapie umieszczonej w repozytorium projektu,
w zakładce Projects.

![Vue.js - Roadmap](https://jakubgania.io/data/blog/posts/29-03-2020-informacje-o-nadchodzacym-frameworku-vuejs-3/roadmap.PNG)

Na początek **FAQ**

Pojawiają się tutaj odpowiedzi na ciekawe pytania takie jak :

### Kiedy będzie gotowa wersja 3.0 ?

W przypadku tego pytania autorzy piszą, że ich priorytetem jest jakość kodu, a nie dotrzymywanie określonych
terminów. W ich odczuciu kod musi być na tyle dopracowany żeby nadawał się do użycia produkcyjnego.

### Jakie zmiany nadejdą w wersji 3.0 ?

Autorzy zalecją zapozanie z [RFC](https://github.com/vuejs/rfcs/pulls). Jest to lista zaproponowanych
i przesłanych zmian przez członków zespołu.

![vuejs/rfcs](https://jakubgania.io/data/blog/posts/29-03-2020-informacje-o-nadchodzacym-frameworku-vuejs-3/rfcs.PNG)

Dla każdego zgłoszenia w RFC jest opisana m.in. ścieżka migracji.

Dla obecnych użytkowników wersji 2.x są zapewnione:

- przewodnik migracji
- zachowanie kompatybilności z wersją 2.x tam gdzie jest to możliwe + ostrzeżenia dotyczące migracji
- narzędzia do migracji z linii poleceń
- automatyczna aktualizacja kodu
- poszukowanie przypadków, gdzie może być konieczne ręczne uaktualnienie

### Czy warto zaczynać naukę i wykorzystanie wersji 2 czy czekać na wersję 3 ?

Jeśli dopiero zaczyna się naukę frameworka jakim jest Vue, można zacząć naukę od Vue 2, ponieważ Vue 3
nie wymaga dramatycznych przeróbek, a znaczna część wiedzy o Vue 2 będzie nadal aktualna w wersji Vue 3.
Nie ma sensu czekać, jeśli dopiero zaczyna się naukę.

Natomiast jeśli wybiera się stos technologiczny do nadchodzącego projektu produkcyjnego, to twórcy
rozpatrują dwie ścieżki :

- jeśli projekt ma rozpocząć się już teraz: nadal zalecane jest rozpoczęcie od wersji Vue 2 dla
pełnego wsparcia frameworka. Jednak należy wtedy pamiętać o nadchodzącej wersji Vue 3.0, ponieważ
w niej zostanie kilka funkcji usuniętych względem obecnej wersji. To oczywiście może doprowadzić
do zerwania kompatybilności

- jeśli projekt może poczekać do końca drugiego kwartału, to zalecane jest poczekanie do nowej wersji

### Co się stanie z wersją 2.x ?

Względem aktualnej wersji, pojawi się jeszcze wersja oznaczona numerem 2.7. Będzie to ostatnie,
niewielkie wydanie dla wersji 2.x i będzie oferowane jako LTS (czyli długoterminowe wsparcie, z ang. [Long-term support](https://en.wikipedia.org/wiki/Long-term_support))
przez 18 miesięcy. Jednak będzie nadal otrzymywać krytyczne aktualizacje zabezpieczeń, nawet po
okresie LTS.

### Jakie są plany dla Vuex ?

Aktualnie trwają prace nad wersją Vuex(4.0) z dokładnie takim samym API jak obecny Vuex, jednak będzie
tutaj kompatybilność z Vue 3. Duży nacisk jest kładziony na kompatybilność, tak aby użytkownicy
mogli ponownie wykorzystać swój istniejący kod Vuex dla aplikacji napisanych w Vue 3.

Następnie twórcy piszą, że eksperymentują również z nowym projektem, który lepiej będzie wykorzystywać
reaktywność API Vue 3. Twórcy również postarają się zmienić trochę obecny sposób działania interfejsu API
Vuex. Projekt zostanie nazwany jako "vuex-next" i będzie to prawdopodobnie wersja 5.0. To jednak wciąż
bardzo wczesne założenia i prawdopodobnie nie zostaną zrealizowane do Q3 2020.

Z innych informacji udostępnionych w całej rozpisce można zobaczyć, że oficjalne wydanie ma odbyć się
w drugim kwartale. Do tego czasu będą cały czas trwać prace nad rozwojem nowej wersji.

### vue-next

Następna wersja Vue rozwijana jest w tym repozytorium - [vue-next](https://github.com/vuejs/vue-next).

![vuejs/vue-next repository](https://jakubgania.io/data/blog/posts/29-03-2020-informacje-o-nadchodzacym-frameworku-vuejs-3/vue-next-repo.PNG)

Obecna wydanie jest oznaczone jako [v3.0.0-alpha.10](https://github.com/vuejs/vue-next/releases/tag/v3.0.0-alpha.10).

![vuejs/vue-next release](https://jakubgania.io/data/blog/posts/29-03-2020-informacje-o-nadchodzacym-frameworku-vuejs-3/vue-next.PNG)

### Propagacja wiedzy o Vue

Vue to framework, od którego kiedyś rozpocząłem swoją naukę i poznawanie świata aplikacji typu SPA.
Cały czas poznaję cały ekosystem dookoła Vue, który stale się rozrasta i ewoluuje tak jak każde
oprogramowanie i framework. W sieci można znaleźć wiele materiałów na temat Vue oraz różne
tutoriale, kursy, porady. Od kiedy prowadzę swoją stronę wraz z blogiem, mam możliwość
tworzenia różnych postów. Dlatego też, chcę za jakiś czas zacząć kompleksowo poruszać tematykę
związaną z Vue oraz jego ekosystemem. Poprzez swoje posty i artykuły będę chciał propagować wiedzę
o Vue.

### Podsumowanie

Jest to niewielki wpis mający charakter jedynie informacyjny. Nie opisuję tutaj szczegółowo wszystkich
terminologii, które wymieniam, ani nie piszę czym jest Vue i wszystkie pochodne elementy. Obserwuję
cały czas rozwój samego Vue i wszystkich powiązanych komponentów, ale na pewno za jakiś czas zacznę
opisywać szerzej te tematy. Bardzo dużo ciekawych informacji można zawsze uzyskać czytając to, co
znajduje się w repozytorium danego projektu na Githubie. Zazwyczaj większe projekty są zawsze dobrze
opisane przez społeczność, a z samej aktywności commitów, releasów, pull requestów, fixów i bugów,
widać co się dzieje.
