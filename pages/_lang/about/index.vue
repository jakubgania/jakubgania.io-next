<template>
  <div>
    <div style="max-width: 1000px; margin-left: auto; margin-right: auto;">
      <BreadcrumbsComponent
        parent-page-path=""
        parent-page-title="Home"
        child-page-title="O mnie"
      />
    </div>
    <div class="about-top-section">
      <div class="about-me-text-section">
        <div class="top-experience-text">
          <div class="experience-text">
            O mnie
          </div>
        </div>
        <div class="about-name-section">
          <div class="about-name">
            Jakub Gania
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="section-title">
          Kim jestem
        </h2>
      </div>
      <div class="description">
        {{ text1 }}
      </div>
    </div>
    <div class="image-section">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/setup.jpg"
        :alt="description1"
        class="img-sect"
      />
      <div class="text-left">
        <p class="image-description">
          {{ description1 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="section-title">
          Dlaczego programuję
        </h2>
      </div>
      <div class="description">
        {{ text2 }}
      </div>
    </div>
    <div class="image-section image-position-right">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/code-1.jpg"
        :alt="description2"
        class="img-sect"
      />
      <div class="text-right">
        <p class="image-description">
          {{ description2 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="section-title">
          Technologie
        </h2>
      </div>
      <div class="description">
        {{ text3 }}
      </div>
    </div>
    <div class="image-section image-position-left">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/rst-meet.jpg"
        :alt="description3"
        class="img-sect"
      />
      <div class="text-left">
        <p class="image-description">
          {{ description3 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="section-title">
          Edukacja i wykształcenie
        </h2>
      </div>
      <div class="description">
        {{ text4 }}
      </div>
    </div>
    <div class="image-section image-position-right">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/php-meet.jpg"
        :alt="description4"
        class="img-sect"
      />
      <div class="text-right">
        <p class="image-description">
          {{ description4 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="section-title">
          Doświadczenie
        </h2>
      </div>
      <div class="description">
        {{ text5 }}
      </div>
    </div>
    <div class="image-section image-position-left">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/code-2.jpg"
        :alt="description5"
        class="img-sect"
      />
      <div class="text-left">
        <p class="image-description">
          {{ description5 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="section-title">
          Rozwój
        </h2>
      </div>
      <div class="description">
        {{ text6 }}
      </div>
    </div>
    <div class="image-section image-position-right">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/books.jpg"
        :alt="description6"
        class="img-sect"
      />
      <div class="text-right">
        <p class="image-description">
          {{ description6 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div class="description">
        {{ text61 }}
      </div>
    </div>
    <div class="image-section image-position-right">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/rst-img.jpg"
        :alt="description7"
        class="img-sect"
      />
      <div class="text-right">
        <p class="image-description">
          {{ description7 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="section-title">
          Strona i blog
        </h2>
      </div>
      <div class="description">
        {{ text7 }}
      </div>
    </div>
    <div class="image-section image-position-left">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/ovh-meet.jpg"
        :alt="description8"
        class="img-sect"
      />
      <div class="text-left">
        <p class="image-description">
          {{ description8 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="section-title">
          Własne projekty
        </h2>
      </div>
      <div class="description">
        {{ text8 }}
      </div>
    </div>
    <div class="image-section image-position-right">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/pgs-meet.jpg"
        :alt="description9"
        class="img-sect"
      />
      <div class="text-right">
        <p class="image-description">
          {{ description9 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="section-title">
          Zainteresowania
        </h2>
      </div>
      <div class="description">
        {{ text9 }}
      </div>
    </div>
    <div class="image-section image-position-left">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/oculus-test-min.jpg"
        :alt="description10"
        class="img-sect"
      />
      <div class="text-left">
        <p class="image-description">
          {{ description10 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div class="description">
        {{ text49 }}
      </div>
    </div>
    <div class="image-section image-position-left">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/scan.jpg"
        :alt="description18"
        class="img-sect"
      />
      <div class="text-left">
        <p class="image-description">
          {{ description18 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div class="description">
        {{ text52 }}
      </div>
    </div>
    <div class="image-section image-position-right">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/wcss-min.jpg"
        :alt="description11"
        class="img-sect"
      />
      <div class="text-right">
        <p class="image-description">
          {{ description11 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="section-title">
          Ciekawostki / przeszłość
        </h2>
      </div>
      <div class="description">
        {{ text10 }}
      </div>
    </div>
    <div class="image-section image-position-right">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/telescope-min.jpg"
        :alt="description12"
        class="img-sect"
      />
      <div class="text-right">
        <p class="image-description">
          {{ description12 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div class="description">
        {{ text12 }}
      </div>
    </div>
    <div class="image-section image-position-right">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/telescope-2-min.jpg"
        :alt="description12"
        class="img-sect"
      />
      <div class="text-right">
        <p class="image-description">
          {{ description12 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div class="description">
        {{ text13 }}
      </div>
    </div>
    <div class="image-section image-position-left">
      <img
        src="https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/about-me/arduino-min.jpg"
        :alt="description13"
        class="img-sect"
      />
      <div class="text-left">
        <p class="image-description">
          {{ description13 }}
        </p>
      </div>
    </div>
    <div class="container">
      <div class="description">
        {{ text14 }}
      </div>
    </div>
  </div>
  <!-- <div class="content-container">
    <BreadcrumbsComponent
      parent-page-path=""
      parent-page-title="Home"
      child-page-title="O mnie"
    />
    <div class="grid grid-rows-1 title-text">
      {{ aboutText }}
    </div>
    <div class="section-bottom-title">
      <div class="grid grid-cols-2 grid-flow-col">
        <div class="image-section">
          <img :src="profileImage" alt="" class="profile-image" />
        </div>
        <div class="information-section">
          <div>
            <h1 class="full-name">
              {{ fullname }}
            </h1>
            <div class="vertical-section">
              <span>
                about
              </span>
            </div>
            <div style="padding-left: 50px;">
              <div class="description">
                <p>
                  {{ description }}
                </p>
              </div>
              <div>
                icons section
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import profileImage from '../../../assets/images/profile.jpg'
import BreadcrumbsComponent from '../../../components/Breadcrumbs'

export default {
  components: {
    BreadcrumbsComponent,
  },
  data() {
    return {
      profileImage,
      aboutText: 'About',
      fullname: 'Jakub Gania',
      description:
        'Nazywam się Jakub Gania. Mieszkam we Wrocławiu. W 2018 roku uzyskałem tytuł inżyniera informatyki z specjalizacją inżyniera systemów informatycznych. Specjalizuję sie w technologiach webowych. Cały czas się uczę i poszerzam swoją wiedzę w różnych obszarach powiązanych z programowaniem. Moje projekty udostępniam na platformie GitHub. Rozwijam się w kierunku Full Stack Web Developer.',
      text1:
        'Cześć, nazywam się Jakub Gania. Jestem programistą. Szeroko pojętym IT interesuję się od wielu lat. Około roku 2015 moje zainteresowanie ukierunkowało się na programowanie. Początkowo poznawałem technologie i języki programowania, które były wykładane w ramach studiów informatycznych. Dopiero wraz z biegiem czasu zacząłem specjalizować się w technologiach webowych zarówno od strony frontendu, jak i backendu. Z czystej ciekawości czasami analizuję i czytam również o innych technologiach niż te, które służą do tworzenia aplikacji webowych.',
      description1: 'Moje stanowisko',
      text2:
        'W ogólnie pojętym programowaniu fascynuje mnie nieskończona możliwość tworzenia. Za pomocą programowania i co za tym idzie oprogramowania, rozwiązuje się najróżniejsze problemy. Czasami niesamowicie skomplikowane a czasami mniej. Każda osoba, która tworzy trochę bardziej założony kod niż prosty skrypt, robi to w jakiś swój indywidualny sposób. Jednak to jak dana osoba lub grupa osób rozwiązuje jakiś programistyczny problem to wypadkowa umiejętności programistów oraz ich wizji i postrzegania danego problemu i języka programowania, oraz zbioru technologii. Powszechnie wiadomo, że istnieją pewne standardy oraz wytyczne przy tworzeniu oprogramowania jednak nigdy nie ma idealnej receptury do stworzenia nowego złożonego oprogramowania, czy to jakiejś platformy obliczeniowej, czy może portalu internetowego, który znacząco różni się od obecnych rozwiązań. Naturalnie programowanie nie zawsze dla mnie jest czymś łatwym i jasnym. Programowanie to wiele abstrakcji oraz mechanizmów, które poznaje się właściwie cały czas. Powiedzieć, że programowanie, tworzenie softu daje duże możliwości to jak powiedzieć nic. Za niezwykle interesujące uznaję również to, że za pomocą nawet niewielkich prostych skryptów można osiągać ciekawe efekty w postaci obliczeń, automatyzacji różnego rodzaju operacji, można badać zbiory danych, można integrować różne usługi sieciowe lub API. Możliwości jest po prostu bez końca. I to jest fascynujące w mojej opinii.',
      description2:
        'Wycinek pliku markdown z opisem moich skryptów w języku Python',
      text3:
        'Od dłuższego czasu specjalizuję się w stosie technologii webowych. Pierwsze bardzo proste strony internetowe zacząłem robić w połowie studiów inżynierskich, kiedy to przez chęć stworzenia aplikacji na telefony zacząłem z dnia na dzień zagłębiać się w podstawy HTML i SQL. I tak od tego czasu uczę się tego, co związane z szeroko pojętym webem. Obecnie technologia, którą najczęściej miałem okazję wykorzystać to Vue.js wraz z frameworkiem Nuxt.js. Ta strona również powstała na podstawie tej technologii. Poza własnymi projektami technologię Vue wykorzystywałem również w pracy zawodowej. Poza Vue miałem również styczność z innymi frontendowymi frameworkami oraz bibliotekami. Oczywiście wszystkie pochodzą z wielkiej trójki, czyli Angular oraz React. Z Angularem pierwszy raz się spotkałem, gdy istniał jeszcze projekt pod nazwą AngularJS oraz miałem okazję zawodowo współpracować przy projekcie bazującym na AngularJS. Natomiast w przypadku nowszych wydań Angulara to miałem styczność z wersją 6 oraz 8. W wersji 8 zrobiłem interesujący projekt w ramach zadania rekrutacyjnego. Z technologią Facebooka miałem niewielką styczność przy projekcie komercyjnym, jednak głównie poznaję Reacta przez projekty własne/domowe oraz zadanie rekrutacyjne również. Pracowałem również w oparciu o framewroki bazujące na PHP takie jak Laravel czy Symfony, również Presta, ale na szczęście przez niedługi czas. Wiadomo, aplikacje webowe to również HTML, CSS, JavaScript, Node.js, SCSS czy SASS, Webpack, RWD, PWA ... Tymi technologiami i pojęciami operuje się chyba zawsze, więc naturalnie również one są w obszerze moich zainteresowań oraz nauki. Jeśli interesuje Cię ten temat bardziej, możesz zobaczyć na podstronę Doświadczenie oraz Projekty.',
      description3:
        'Meetup - RST CodeMeetings #12 Technologie Przyszłości - 29.05.2019 Wrocław, Polska',
      text4:
        'Po gimnazjum uczęszczałem do liceum, w którym miałem rozszerzone przedmioty takie jak matematyka, fizyka czy informatyka. Wtedy jeszcze nie programowałem, ale już interesowały mnie komputery, co następnie skłoniło mnie do podjęcia studiów informatycznych. Z wykształcenia jestem inżynierem magistrem informatyki. Studia zrobiłem we Wrocławiu. Równolegle z ostatnim rokiem studiów magisterskich zrealizowałem studia podyplomowe z zakresu Cloud. Więcej szczegółowych informacji odnośnie do wykształcenia oraz certyfikatów można zobaczyć na podstronie Doświadczenie.',
      description4: 'Meetup - Wrocław PHP #2 - 23.07.2019 Wrocław, Polska',
      text5:
        'Posiadam już pewne doświadczenie zawodowe. Również ze względów zawodowych miałem okazję prowadzić działalność gospodarczą. Obecnie zdecydowana większość moich umiejętności oraz wiedzy bazuje na własnej nauce i własnych projektach, które nieustannie realizuję. Więcej o moim doświadczeniu można dowiedzieć się na podstronie Doświadczenie.',
      description5:
        'Narzędzie Google DevTools oraz Visual Studio Code podczas pracy nad projektem',
      text6:
        'Stały rozwój to nieodłączny aspekt w branży IT. Staram się cały czas poszerzać i swoją wiedzę techniczną, ale i również ogólną. Oczywiście każdy człowiek nie jest w stanie pojąć niekończących się ilości informacji oraz nowych technologii ukazujących się właściwie każdego dnia. Jednak pogłębianie wiedzy za zakresu swojej specjalizacji jest jak najbardziej możliwe (mając oczywiście na uwadze, że są dziedziny czy tematy bardziej i mniej rozległe). Często zadaję sobie pytanie, co mogę zrobić lepiej ? Co mogę zrobić optymalnej ? A może co mógłbym zrobić szybciej niż dotychczas ? Staram się nieustannie udoskonalać, to co robię, analizuję różne podejście oraz koncepcje oczywiście głównie w kontekście tworzenia oprogramowania webowego, ale i nie tylko.',
      description6: 'Część zbioru moich ksiażek o IT',
      text61:
        'Rozwój to dla mnie takie rzeczy jak: tworzenie różnych projektów, wykorzystywanie różnych technologii, chodzenie na meetupy, uczęszczanie w webinarach, czytanie zasobów w sieci, tworzenie bloga, prowadzenie kanału na platformie YouTube, prowadzenie profilu na platformie GitHub, czytanie i analizowanie wypowiedzi ludzi na platformie Twitter, którzy są twórcami różnych technologii i frameworków, czytanie książek, prowadzenie merytorycznych dyskusji (niekoniecznie technicznych), uczestniczenie w szkoleniach, uzyskiwanie certyfikatów, analizowanie repozytoriów opensource na platformie GitHub, stworzenie i prowadzenie swojej strony - to dla mnie jest rozwój.',
      text7:
        'Własna prywatna strona internetowa to nie jest nic niezwykłego - wiadomo. Ja jednak prowadzę swoją już od kilku lat i jestem z tego działania zadowolony. Widzę, jak moje myślenie wraz z biegiem czasu zmienia się odnośnie designu, kodu i całego wykonania, chociaż jest to tylko zwykła strona. Kiedyś postanowiłem, ponieważ też tak poczułem, że chcę prowadzić bloga, by dzielić się swoimi przemyśleniami lub po prostu doświadczeniem. Tak też się następnie stało, że zaimplementowałem bardzo prosty moduł bloga i od czasu do czasu napiszę jakiś post. To daje niesamowitą satysfakcję, kiedy ludzie ze środowiska IT z wieloletnim doświadczeniem w branży, pochwalą wykonanie, wygląd czy treść posta i to również bardzo motywuje mnie do działania. Dlatego też staram się, by to, co tworzę w ramach tej strony, było dopracowane. Poświęcam temu czas i energię. Jest to ważny aspekt dla mnie. To też świetne miejsce, by móc stosować koncepcje (design, kolory, nietypowe elementy), których normalnie nie szłoby zastosować w innych projektach typowo komercyjnych. Własna strona to przede wszystkim miejsce, gdzie można zaprezentować siebie, swoje umiejętności oraz wszystkie ważniejsze informacje, oraz wykonane projekty.',
      description7:
        'Zdjęcie wykonane na konkurs organizowany przez firmę RST #TwojaDroga',
      text8:
        'To jedna z najlepszych metod na naukę i eksperymentowanie z różnymi technologiami oraz koncepcjami. Ja swoje projekty tworzę właściwie na okrągło. Jedne są mniej inne bardziej zaawansowane. Są to nie tylko aplikacje webowe, ale również inne programy czy po prostu skrypty. Niektóre projekty tworzę, by zaznajomić się z daną technologią a niektóre po to, by zrealizować jakieś konkretne postanowienie, rozwiązać jakiś problem. Poza pełnoprawnymi projektami tworzę również bardziej rozbudowane pojedyncze skrypty w takich językach jak Bash, Python, JavaScript i PHP. Więcej o moich projektach można dowiedzieć się na podstronie Projekty oraz na moim profilu na platformie GitHub.',
      description8:
        'Meetup organizowany przez firmę OVH - SysOps/DevOps #8 - 28.03.2019, Wrocław, Polska',
      text9:
        'Poza wiedzą typowo z zakresu IT i programowania interesują mnie kwestie ogólnie technologiczne. Zawsze z zainteresowaniem obserwuję nowości na rynku sprzętu komputerowego. Mam tutaj na myśli takie rzeczy jak nowe generacje procesorów oraz kart graficznych, nowe dyski, komponenty do budowy komputerów stacjonarnych, nowe laptopy, kamery czy to klasyczne, czy też te w smartfonach. Ogólnie takie technologiczne zagadnienia. Często również oglądam kanały o takiej tematyce na YouTube. Jednak poza wszystkimi technologiami oraz sprzętem jestem również ciekaw świata. Dlatego też chętnie czytam informacje związane z tym, co dzieje się na świecie, czy to jakieś artykuły klimatyczno-przyrodnicze czy z jakimiś ciekawostkami. Czytam również artykuły o firmach, o ich planach rozwoju, o strategiach, ale i również problemach, które napotkały. Lubię czytać wypowiedzi fachowców w danym temacie czy dziedzinie. Bardzo lubię robić zdjęcia i fotografować. Nie posiadam profesjonalnego sprzętu a jedynie smartfon i to nim zawsze robię niezliczoną ilość zdjęć. Co fotografuję ? Właściwie wszystko, co zwróci w jakimś stopniu moją uwagę. Wszystkie zdjęcia na tej stronie i wszystkich innych podstronach łącznie z blogiem poza jakimiś logotypami są mojego wykonania. Kiedy tylko coś robię przy komputerze lub gdzieś idę i jest taka możliwość, to słucham muzyki.',
      description9:
        'Meetup organizowany przez firmę PGS Software - ng-wroclaw #33, 05.03.2020, Wrocław, Polska',
      text10:
        'Na koniec kilka ciekawostek z mojego życia. Gdy byłem jeszcze w gimnazjum i liceum bardzo interesowałem się astronomią, fizyką i chemią, ale astronomią najbardziej. Czytałem o tym dużo książek i artykułów. Przez pewien czas prowadziłem również obserwacje nieba z wykorzystaniem 3 różnych teleskopów. W związku z dużym zainteresowaniem tą dziedziną brałem również udział w konkursach fizyczno-astronomicznych, ale i również chemicznych oczywiście na przełomie gimnazjum i liceum.',
      description10:
        'Test zestawu gogli wirtualnej rzeczywistości - Oculus Rift Development Kit 1 - Politechnika Wrocławska',
      text49:
        'Od roku 2010 nieustannie obserwuję rozwój krypto walut, a co za tym idzie technologii Blockchain, która obecnie wykorzystywana jest już w wielu rozwiązaniach. Interesowałem się również kiedyś dosyć mocno zagadnieniem bezpieczeństwa komputerowego oraz testami penetracyjnymi i narzędziami do tego przeznaczonymi (Kali Linux, Wireshark, Metasploit). Obecnie wiedza z zakresu zabezpieczania aplikacji webowych dla webdevelopwera jest również bardzo ważna tzn. rozumienie zagrożeń i stosowanie, chociażby najbardziej elementarnych praktyk mających na celu przeciwdziałać próbom ataku.',
      description18:
        'Warsztaty - "Praktyczne sposoby wykrywania podatności w aplikacjach webowych", 21.07.2019, Warszawa, Polska',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lectus pharetra, iaculis felis ut, congue augue. Donec ligula leo, aliquam id nisl sed, fermentum cursus ex. Proin eu elit eget lacus faucibus feugiat. Nulla mi tortor, blandit vel vestibulum vitae, bibendum vel velit. Phasellus sed ex metus. Aliquam molestie elit nec arcu eleifend gravida. Donec ultrices at enim ac dignissim. Vestibulum at nisl sagittis, tempor libero et, congue justo. Curabitur a orci ac orci luctus aliquam sit amet eu ante. Morbi quam odio, interdum eu aliquet in, lacinia a neque. Integer lacinia mi condimentum, porta diam vel, condimentum metus. Nam fringilla tortor quis est vulputate, in consectetur libero placerat. Cras malesuada, velit nec egestas fringilla, sapien lectus eleifend nisl, blandit condimentum tortor nulla viverra enim.',
      description11:
        'Pomieszczenie serwerowni - Klaster BEM, Wrocławskie Centrum Sieciowo-Superkomputerowe, Wrocław, Polska',
      description12: 'Teleskop SkyWatcher 254/1200 DOB 10"',
      description13:
        'Porównanie czujników ultradzwiękowych w zależności od parametrów otoczenia. Wykorzystane komponenty to czujnik HC-SR04 oraz czujnik przemysłowy mic+130/D/TC firmy microsonic oraz płytka Arduino',
      text12:
        'Zdjęcie powyżej oraz poniżej pokazuje jeden z moich teleskopów, który służył do wizualnej obserwacji nieba. Temat na tyle mnie interesował, że nieustannie przyswajałem wszelkie książki oraz wiadomości związane z kosmosem. Jednymi z moich większych osiągnięć było zajęcie pierwszego miejsca w grupie gimnazjalnej w finale VII międzypowiatowego Konkursu Astronomicznego URANIA w Częstochowie. Konkurs był zorganizowany przez Częstochowski Oddział PTMA we współpracy z Instytutem Fizyki AJD. Następnym większym osiągnięciem było zakwalifikowanie do zawodów II stopnia (okręgowych) w Katowicach w ramach LIV Olimpiady Astronomicznej. W jednym z kilku konkursów powiatowych z fizyki i astronomii udało mi się również zająć pierwsze miejsce za stworzenie prezentacji na bazie kilkutygodniowych badań powierzchni słońca za pomocą zdjęć i danych pochodzących z satelity SOHO. Przynależałem również do koła astronomicznego, gdzie były prowadzone głównie obserwacje za pomocą teleskopu w układzie Schmidta-Cassegraina. Podczas obserwacji była również praktykowana astrofotografia, bywały organizowane wyjazdy do planetarium, oraz były również organizowane większe pokazy w przypadku zaćmień słońca, księżyca lub tranzytów planet na tle tarczy słonecznej. Zainteresowanie tą dziedziną sprawiało mi naprawdę dużo przyjemności i znacząco poszerzyło wiedzę zarówno ogólną, jak i tą ścisłą.',
      text13:
        'Miałem również okazję kilkukrotnie poeksperymentować z elektroniką za pomocą płytki Arduino. Nie były to jakieś zaawansowane projekty, lecz bardzo proste jednak również pozwoliło mi to szerzej zainteresować się łączeniem hardweru z softwarem i realizowaniem prostych pomiarów za pomocą dostępnych czujników. Swego czasu interesowałem się trochę robotyką i automatyką, dlatego też poznawałem zagadnienia związane z tą dziedziną. Widok na żywo pracującej grupy robotów przemysłowych robi niesamowite wrażenie !. W ramach studiów inżynierskich miałem okazję zrealizować kilka prostych elektronicznych projektów w tym jeden widoczny na zdjęciu poniżej. Miałem okazję poznać trochę bliżej takie zagadnienia, jak VHDL, Verilog, układy FPGA itp. jednak z czasem nie zagłębiałem się dalej w to, lecz ukierunkowałem się z biegiem czasu na programowanie webowe.',
      text52:
        'Będąc na wielu meetupach, cały czas słyszałem i widziałem implementacje różnych projektów w oparciu o usługi chmurowe. W pewnym momencie bardzo zaciekawił mnie ten temat i od końcówki roku 2019 nieustannie interesuję się usługami oraz całą ideą `Cloud`. Poznaję różne usługi i eksperymentuję z własnymi projektami, wykorzystując różne elementy i usługi, głównie z wykorzystaniem AWS. Zrobiłem studia podyplomowe z zakresu chmury - `Multi Cloud Architect`. Na tych studiach poznałem przede wszystkim ideę chmury, jak to działa, po co to jest, jakie daje możliwości. Następnie zaznajomiłem się z głównymi dostawcami usług chmurowych na rynku takimi jak AWS, AZURE, GCP, IBM. Studia te również poruszały zagadnienia sztucznej inteligencji, Big Data oraz IoT. Wszystko oczywiście w oparciu o usługi chmurowe.',
      text14:
        'Tak jak napisałem wyżej, bardzo lubię robić zdjęcia, dlatego też na tej stronie przedstawiam tyle fotografii. Dziedziną IT oraz różnymi jej dziedzinami interesują się już od wielu lat i nieustannie mnie zaskakują rzeczy, które poznaję i których się uczę. To jest niesamowite, co za pomocą współczesnych technologii można zrealizować. Świat nie stoi w miejscu i wszystko ewoluuje w tym rozwój aplikacji i sposób, w jaki korzystamy z tych możliwości. Jeżeli zainteresowała cię jakaś kwestia po przeczytaniu tej strony, możesz się ze mną skontaktować lub zapoznać się z innymi podstronami takimi jak projekty, blog czy doświadczenie. Staram się być również aktywny na platformie Twitter, GitHub czy YouTube.',
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale,
      },
      title: 'Jakub Gania Software | O mnie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kilka zdań o mnie',
        },
        {
          name: 'keywords',
          content: 'o mnie, opis',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Jakub Gania Software | O mnie',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Kilka zdań o mnie',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  clear: both;
  max-width: 1000px;
  height: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
}
.section-title {
  font-size: 40px;
  font-weight: 700;
  color: #000;
  letter-spacing: 1px;
  margin-bottom: 80px;
}
.image-section {
  width: 100%;
  max-width: calc(((100% - 1000px) / 2) + 1000px);
  // background-color: red;
  height: auto;
  position: relative;
}
.image-position-left {
  float: left;
}
.image-position-right {
  float: right;
}
.img-sect {
  width: 100%;
  height: auto;
}
.description {
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 2;
  color: #b4b4b4;
}
.about-top-section {
  margin-bottom: 140px;
}
.about-me-text-section {
  // padding-top: 60px;
  // padding-bottom: 120px;
  background-color: #fdfdfd;
}
.about-name-section {
  text-align: center;
  background-color: #eceff1;
  padding-top: 6px;
  padding-bottom: 6px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 24px;
}
.about-name {
  font-size: 24px;
  letter-spacing: 4px;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
}
.top-experience-text {
  text-align: center;
  position: relative;
  z-index: 0;
  font-size: 10vw;
  font-weight: 700;
  letter-spacing: 6px;
}
.experience-text {
  width: 100%;
  padding: 14px;
  background: url(../../../assets/images/code-background-black.JPG) no-repeat;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: center;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
}
.image-description {
  font-size: 12px;
  color: #b4b4b4;
  padding-left: 10px;
  padding-right: 10px;
  letter-spacing: 1px;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}

@media only screen and (max-width: 1040px) {
  .description {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media only screen and (max-width: 600px) {
  .section-title {
    font-size: 24px;
    line-height: 1;
    padding-left: 10px;
    padding-right: 10px;
  }
  .description {
    line-height: 1.6;
  }
}
// .content-container {
//   max-width: 1200px;
//   width: 100%;
//   margin: auto;
//   position: relative;
//   z-index: 0;
//   min-height: 100vh;
// }
// .section-bottom-title {
//   margin-top: -180px;
// }
// .title-text {
//   text-align: center;
//   position: relative;
//   z-index: -10;
//   font-size: 280px;
//   font-weight: 500;
//   letter-spacing: 10px;
//   color: #f2f2f2;
// }
// .title-text-dark-theme {
//   color: #404040;
// }
// .image-section {
//   text-align: center;
// }
// .profile-image {
//   max-width: 80%;
//   position: relative;
//   z-index: 0;
// }
// .vertical-section {
//   transform: translateX(-48%) rotate(90deg);
//   max-width: 220px;
//   width: 100%;
//   letter-spacing: 10px;
//   font-size: 12px;
//   font-weight: 800;
//   border-bottom: 2px solid #000;
//   line-height: 0.01em;
//   margin: 10px 0 20px;
//   position: absolute;
//   top: 525px;
// }
// .vertical-section span {
//   background-color: #fff;
//   padding: 0 10px;
//   text-transform: uppercase;
// }
// .vertical-section-dark-theme {
//   border-bottom: 2px solid #fff;
// }
// .vertical-section-dark-theme span {
//   background-color: #1a1a1a;
// }
// .full-name {
//   font-size: 60px;
//   font-weight: 800;
//   letter-spacing: 4px;
// }
// .full-name-dark-theme {
//   color: #fff;
// }
// .description {
//   font-size: 16px;
//   line-height: 2;
//   letter-spacing: 0.6px;
// }
// .description-dark-theme {
//   color: #fff;
// }
// .icons-section {
//   margin-top: 20px;
// }
// .link-button {
//   float: left;
// }

// @media only screen and (max-width: 960px) {
//   .section-bottom-title {
//     margin-top: -160px;
//   }
//   .content-container {
//     .title-text {
//       font-size: 26vw;
//     }
//   }
//   .profile-image {
//     width: 100%;
//   }
//   .information-section {
//     padding-left: 28px;
//     padding-right: 28px;
//   }
//   .full-name {
//     font-size: 44px;
//   }
//   .description {
//     padding-top: 20px;
//   }
// }

// @media only screen and (max-width: 600px) {
//   .content-container {
//     width: auto;
//     padding-left: 10px;
//     padding-right: 10px;
//   }
//   .title-text {
//     font-size: 100px;
//     margin-top: 60px;
//   }
//   .section-bottom-title {
//     margin-top: -90px;
//   }
//   .profile-image {
//     max-width: 100%;
//   }
//   .full-name {
//     font-size: 40px;
//   }
//   .vertical-section {
//     top: 170px;
//   }
// }
</style>
