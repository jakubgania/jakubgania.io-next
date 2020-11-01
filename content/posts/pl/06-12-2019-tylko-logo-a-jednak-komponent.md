---
title: Tylko logo a jednak komponent
creationDate: 06-12-2019 11:50
description: Tylko logo a jednak komponent
keywords: logo, komponent, zmiana, kod, koncpecja
topImageSrc: 'https://s3.eu-central-1.amazonaws.com/jakubgania.io-blog-data/06-12-2019-tylko-logo-a-jednak-komponent/top-image.PNG'
topImageAlt: 'Visual Studio Code - Logo component code'
index: 12
---

Ostatnio poczyniłem pewne zmiany związane z logo no mojej stronie. Samo logo
nie jest jakąś wyrafinowaną, specjalnie zaprojektowaną grafiką a jedynie zwykłym
tekstem wyrenderowanym z wykorzystaniem danej czcionki.

Od dwóch miesięcy z kawałkiem, czyli od czasu kiedy działa nowa odsłona mojej strony,
logo było właściwie niezmieniane w żaden sposób. Jedynie zostało dodane w footerze.

Jednak gdy ostatnio wziąłem się za zmianę fontu od logo, to pierwszy problem jaki
chciałem rozwiązać był taki, że logo znajdowało się w trzech różnych miejscach i w
każdym było wpisane na sztywno. Czyli sytuacja karygodna, nie mająca racji bytu
z punktu widzenia dobrych praktyk programistycznych. Hasło klucz - nowy
komponent.

Tak też zrobiłem. Utworzyłem sobie w folderze z komponentami plik o nazwie logo.vue .
W ramach tego komponentu chciałem mieć oczywiście wszystko co odpowiada za
działnie i wygląd tego elementu. Czyli na to składa się HTML, CSS i JS - ot
standardowy komponent vue, nic szczególnego.

Dodałem HTMLa, wpisałem nazwę, czyli 'Jakub Gania Software', zaraz potem w sekcji
ze stylem zdeklarowałem czcionkę i dodałem też do projektu nową czcionkę.

Było ok.

Ale następną kwestią była sprawa związana z ciemnym motywem. Ponieważ, logo
zachowuje się różnie w zależności od wybranej wersji kolorystycznej, to
komponent musi być świadom zmian i je rejestrować i odczytywać. I tu właściwie
też nie było większej filozofii, ponieważ flagę z wartością sterującą logiką
w zależności od motywu przekazałem standardowym mechanizmem, czyli propsem z
rodzica do komponentu dziecka. Zmiana wartości była wykrywana poprawnie, wszystko
działało.

Jednak pojawiło się następne zagadnienie. Mianowicie logo w różnych miejscach
ma różne parametry związane z wyglądem, chodzi o właściwości cssa takie jak
wielkość fontu. I to jest zagadnienie przy którym doszedłem do ciekawych wniosków.

Pierwszą z myśli jaka się pojawiła to przekazanie za pomocą kolejnego propsa,
wartości liczbowej, która byłaby bindowana do deklaracji stylu inline w divie.
Takie podejście już kilkukrotnie robiłem dlatego jako pierwsze przyszło mi to do
głowy. Wiedziałem że tak można zrobić, i że zadziała. Jednak pojawiło się pytanie,
no dobra, dam wartość np. 40px ale przecież co jeśli strona będzie wyświetlana
dla breakpointu mobilnego ?

No właśnie, wtedy pojawiła się druga myśl taka, żeby w komponencie nadrzędnym
czyli komponencie rodzica w sekcji compute utworzyć właściwość której wartość
byłaby ustalana w switchu na bazie aktualnego breakpointa i w rezultacie
można by tak sterować wielkością fonta, która następnie byłaby zwracana do
komponentu dziecka.

Czyli chodzi o sytuację jak poniżej, gdzie właściwość fontSize jest bindowana do
komponentu.

```javascript

computed: {
  fontSize() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return '24';
      case 'sm': return '26';
      case 'md': return '28';
      case 'lg': return '40';
      case 'xl': return '60';
      default: return '24';
    }
  }
},
```

Takie podejście też już miałem okazję zastosować w swoich
projektach. Jednak analizując takie roziązanie, na myśl przychodzi to, że
trochę bez sensu tworzyć w javascripcie switcha do wyliczania wielkości fonta,
i następnie jeszcze przekazywać do komponentu. Przecież najlepiej jakby
odpowiadał za to css, który zrobi to zdecydowanie szybciej.

Wiadomo, pewnie znajdą się jakieś sytuacje, w których takie rozwiązanie się
przy czymś sprawdzi, jednak myślę że w tym przypadku to nie jest najlepsze
rozwiązanie.

No ale to w czym problem jeśli można również bindować klasy ?

No można, i robię to praktycznie w każdym komponencie sterując w ten sposób
ciemnym motywem. Jednak do tej pory nie zdałem sobie sprawy z tego, że zamiast
jednej klasy, można zbindować ich **kilka**. I to właśnie było rozwiązaniem mojego
problemu i potrzeby. Czyli osiągnięcie stanu w którym w komponencie dzieje się
wszystko co trzeba, i do tego jest w nim css pod takie breakpointy pod jakie trzeba,
i to css steruje wyglądem a nie javascript.

Jedynie w deklaracji komponentu, przekazuję sobie takie właściwości jak
darkTheme, bigFontSzie, normalFontSize. Propsy w komponencie domyślnie są ustawione
na false, każda jest typu Boolean. Dzięki temu załączą się tylko takie klasy
jakie będą wymagane. I w ten sposób na stronie głównej logo jest duże a w
top barze czy footerze mniejsze.

Całe rozwiązanie jest bardzo proste i nie ma tutaj rewolucji. Jednak dla mnie
jest to o tyle ciekawe, że widzę jak z upływem czasu zaczynam inaczej myśleć o
kodzie i jego projektowaniu. Nawet w takiej mikroskali czyli w obrębie pliku
czy dwóch. Z czasem zaczyna się takie smaczki dostrzegać i rozwiązaywać w sposób
bardziej 'wyrafinowany' i przemyślany. W tym przypadku było sukcesem odwócenie
sterowania javascriptem na rzecz cssa. Czyli zmienna logiczna determinuje
dołączenie danej klasy, która to już ma zdefiniowany wygląd i zachowanie w
zależności od brekapointu.

Gdy jest to możliwe warto korzystać z możliwości jakie daje css a nie sterować
javascriptem. Podobną sytuację opisałem w tym [poście](https://jakubgania.io/blog/21-11-2019-optymalizacja-i-refaktoryzacja-kodu-nowa-podstrona-metodologia-bem)
- sekcja optymalizacja.

Odpowiednio projektowane komponenty niosą ze sobą wiele korzysći. Można ich
używać w wielu miejscach i odpowiednio dostosować do wymagań minimalizując
przy tym ilość miejsc, w których tworzy się nadmiarowy kod i dodatkowa logika.

Cały komponent obecnie wygląda tak:

```html
<template>
  <div
    :class="{
      'logo--big-font': bigFontSize,
      'logo--normal-font': normalFontSize,
      'logo--dark-theme': darkTheme
    }"
    class="logo"
  >
    {{ logo }}
  </div>
</template>

<script>
export default {
  props: {
    darkTheme: {
      type: Boolean,
      default: false
    },
    bigFontSize: {
      type: Boolean,
      default: false
    },
    normalFontSize: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo: 'Jakub Gania Software'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  font-family: 'MaisonNeueExtended';
  letter-spacing: 0.4px;

  &--big-font {
    font-size: 60px;
  }

  &--normal-font {
    font-size: 24px;
  }

  &--dark-theme {
    color: #fff;
  }
}

@media only screen and (max-width: 600px) {
  .logo {
    &--big-font {
      font-size: 36px;
    }

    &--normal-font {
      font-size: 12px;
    }
  }
}
</style>

```

PS. Kolorowanie składni w snippetach chyba nie za bardzo działa tak jak bym chciał
i coś będę musiał w tej kwestii zmienić.