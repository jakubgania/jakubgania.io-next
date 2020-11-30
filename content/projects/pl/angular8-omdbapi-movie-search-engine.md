---
title: angular8-omdbapi-movie-search-engine
description: ''
githubIdRepository: 'angular8-omdbapi-movie-search-engine'
githubRepositoryUrl: 'https://github.com/jakubgania/angular8-omdbapi-movie-search-engine'
---

Projekt został wykonany pewien czas temu jako zadanie rekrutacyjne. Wymaganiami było m.in. wykorzystanie
technologii Angular. Jako źródło danych wykorzystać należało - [OMDb API](http://www.omdbapi.com/).

Celem zaimplementowanej aplikacji było wyszukiwanie oraz prezentacja danych o filmach.

Podgląd projektu [https://jakubgania.github.io/angular8-omdbapi-movie-search-engine/](https://jakubgania.github.io/angular8-omdbapi-movie-search-engine/)

Po załadaniu apliakcji wyświetla się strona główna na której dostępny jest formularz w którym można
zdefiniować różne parametry wyszukiwania.

Są to takie parametry jak:

- tytuł
- rok
- typ filmu (film, seria, epizod)
- krótkometrażowy, długometrażowy

Pod formularzem wyświetlają się wyniki wyszukiwania. Po załadowaniu aplikacji wyświetlany są ogólne wyniki
bez zdefiniowanych parametrów. Natomiast po użyciu formularza zwracane są konkretnie wyszukiwane rezultaty.

Wyniki można wyświetlać w dwóch widokach. W widoku o nazwie Kafelki oraz w widoku o nazwie Lista.
Tak jak nazwy wskazują pierwszy widok wyświetla wyniki w formie dużych kafli jako grid natomiast
widok listy to podłużne prostokąty w formie listy.

Pomiędzy widokami można przełączać się bez ponownego pobierania danych.

Dodatkowo pod przyciskami do przełączenia się umieszczona jest informacja z liczbą wszystkich wyników
wyszukiwania.

W widoku kafelek każdy wyświetlony film zawiera zdjęcie oraz tytuł, który po kliknięciu przenosi do
podstrony z większą ilością informacj o danym filmie. Po najechaniu kursorem na dany kafelek ten ulega
niewielkiemu powiększeniu.

W przypadku widoku listy również wyświetlane jest zdjęcie oraz tytuł ale dodatkowo również rok produkcji
i typ filmu. Kafelek po najechaniu kursorem również ulega niewielkiemu powiększeniu i po kliknięciu
przenosi do podstrony z informacjami.

Każdy widok czyli widok kafelek i listy posiada zaimplementowany mechanizm - infinity scroll który
pobiera dane automatycznie wraz z przewijaniem strony w dół.

Po kliknięciu w dany film, użytkownik zotaje przeniesiony do podstrony z większą ilością informacji.
Są to takie informacje jak:

- tytuł
- opis
- rok
- czas trwania
- typ
- język
- kraj
- wydanie
- gatunek
- strona
- reżyser
- obsada
- oceny

Po kliknieciu w zdjęcie z okładką filmu wyświetla się zdjęcie w duży formacie na całym erkanie.

Z wykorzystywanego API nie wszystkie dane są dostępne dlatego zmiast zdjęć aktorów czy reżysera
wyświetla się grafika zastępcza.

Poniżej znajduje się lista wykorzystanych komponentów i modułów w projekcie.
Dane pochodzą z pliku [package.json](https://github.com/jakubgania/angular8-omdbapi-movie-search-engine/blob/master/package.json)

dependencies:

- @angular/animations
- @angular/cdk
- @angular/common
- @angular/compiler
- @angular/core
- @angular/forms
- @angular/material
- @angular/platform-browser
- @angular/platform-browser-dynamic
- @angular/router
- ngx-infinite-scroll
- node-sass
- rxjs
- tslib
- zone.js

devDependencies:

- @angular-devkit/build-angular
- @angular/cli
- @angular/compiler-cli
- @angular/language-service
- @types/jasmine
- @types/jasminew2
- @types/node
- codelyzer
- jasmine-core
- jasmine-spec-reporter
- karma
- karma-chrome-luncher
- karma-coverage-istanbul-reporter
- karma-jasmine
- karma-jasmine-html-reporter
- protractor
- ts-node
- tslint
- typescript

#### Uruchomienie projektu

- sklonować projekt z repozytorium
- przed uruchomieniem projektu dodać plik environment.ts na wzór pliku environment.example.ts i podstawić właściwie dane
- wydać polecenie - ng serve i następnie otworzyć przeglądarkę i następujące adres - http://localhost:4200