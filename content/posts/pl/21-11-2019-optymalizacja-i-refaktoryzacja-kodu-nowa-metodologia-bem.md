---
title: Optymalizacja i refaktoryzacja kodu, nowa podstrona, metodologia BEM
creationDate: '21-11-2019 00:40'
description: Optymalizacja i refaktoryzacja kodu, nowa podstrona, metodologia BEM
thumbnail: 'https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/21-11-2019-optymalizacja-i-refaktoryzacja-kodu-nowa-podstrona-metodologia-bem/thumbnail.png'
topImageSrc: 'https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/21-11-2019-optymalizacja-i-refaktoryzacja-kodu-nowa-podstrona-metodologia-bem/top-image.PNG'
topImageAlt: ''
keywords: optymalizacja, refaktoryzacja, kod, nowa podstrona, metodologia, bem
imageDescription: Zdjęcie - wykonanie własne
index: 8
---

### Optymalizacja i refaktoryzacja

Tak jak w tytule cały czas przeprowadzam zmiany związane z kodem.
Jest tego dość sporo biorąc pod uwagę całą stronę, ale wiadomo wszystko
trzeba realizować stopniowo.


### Metodologia BEM

Jedną z kolejnych rzeczy jaką zacząłem robić to stosowanie metodologii
[BEM](https://en.bem.info/methodology/).
Wcześniej właściwie nie robiłem tego w żadnym ze swoich projektów.
Ogólnie o tym słyszałem, trochę czytałem, jednak tego nie stsowałem.
Jest to więc moje pierwsze podejście do metodologii BEM, dlatego na pewno nie
będzie ona wzorcowo zastosowana do wszystkiego. Jednak od czegoś trzeba zacząć,
a z biegiem czasu przy stosowaniu danego rozwiązania człowiek zaczyna je
lepiej rozumieć i odpowiednio sotsować. Czytałem też już wiele artykułów o tym
i pewnie jeszcze będę nie raz czytał, żeby dobrze zrozumieć jak stosować te
rozwiązanie.


### Experince

Nowa podstrona - [experience](https://jakubgania.io/experience), czyli doświadczenie,
to strona gdzie zrobiłem coś na wzór CV. Zebrałem informacje o swoim doświadczeniu,
edukacji, certyfikatach, technologiach itp. Na pewno z czasem będzie również
modyfikowana mniej lub bardziej.


### Optymalizacja

Na tej samej podstronie o której mowa wyżej, dokonałem optymalizacji związanej
z wyodrębnieniem części kodu do osobnego komponentu o nazwie top-section-container.
W samym komponencie usunąłem dyrektywę only-client w której były dwa bloki div.
Te divy natomiast sprawdzały w przeglądarce, jaki jest aktualny breakpoint i w
zależności czy był to mobile czy desktop wyświetlały odpowiednią część kodu.

Rozwiązanie ma taki minus, że podczas renderownia i wyświetlania strony, widoczne
jest opóźnienie z jakim renderowany jest blok kodu w dyrektywie only-client, ponieważ
jak sama nazwa wskazuje, jest to część bloku wykonywana właśnie po stronie klienckiej,
co za tym idzie, muszą zostać dokonane pewne dodatkowe obliczenia.

W tym przypadku, dało się to zastąpić kodem CSS, co działa o wiele szybciej, i nie
ma praktycznie opóźnienia przy renderowaniu danego elementu.


### O mnie

W tej sekcji, dodano przycisk z linkiem do strony z doświadczeniem. Na samej
podstronie poczyniłem wiele drobnych poprawek związanych z formatowaniem tekstu tzn.
opisu o mnie oraz dodane zostały poprawki związane z ciemnym motywem.


### Subpage-title-section

W tym komponencie dodałem większy padding dolny żeby odsunąć napis od lini dolnej.


### sitemap.xml

Aktualizacja pliku sitemap.xml o nową stronę czyli - [experience](https://jakubgania.io/experience)


### System blogowy

Tutaj właściwie nie doszło do zmiany jednak rozważam opcję zmiany formatownia formatu
ścieżek do postów z :

/blog/day-month-year-title

na

/blog/year/month/day/title

ale jeszcze nie wiem czy tak zrobię. Po prostu widziałem kilka blogów, które
właśnie w taki sposób odwołują się do postów, i muszę przemyśleć lub w ogóle
doczytać coś na ten temat.
