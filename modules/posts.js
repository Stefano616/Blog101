const postsInfoArray = [
    {
        id: 1,
        image: "../images/buggy1740x1245.jpg",
        title: "Buggy gym",
        description: "",
        tags: ["#all", "#activities", "#slideshow"]
    },
    {
        id: 2,
        image: "../images/treningpersonalny1740x1245.jpg",
        title: "Personal trainer",
        description: "",
        tags: ["#all", "#fitness", "#slideshow"]
    },
    {
        id: 3,
        image: "../images/BuggyGymCanva1350x1065.png",
        title: "Buggy gym event",
        description: "",
        tags: ["#all", "#events"]
    },
    {
        id: 4,
        image: "../images/dance1740x1245.jpg",
        title: "Taniec jako forma uwalniająca napięcia",
        description: "",
        tags: ["#all", "#freetime", "#events", "#slideshow"]
    },
    {
        id: 5,
        image: "../images/dance1740x1245.jpg",
        title: "Dancing in pregnancy",
        description: "",
        tags: ["#all", "#activities"]
    }
]

const postContentArray = [
    {
        id: 1,
        content: `Mieszkając jakiś czas w Edynburgu, miałam okazję obserwować, ale też doświadczyć odmiennego podejścia do ruchu. 
        Choć przyznaję, że i na naszym podwórku zauważam pozytywną tendencję do zmiany. 
        Na początku w szkockim żyćku zadziwiał mnie widok ludzi, którzy przerwę w pracy wykorzystują na zapełnienie parków i trawników, w celu wykonania ćwiczeń albo ruszali w swoją 20 minutową trasę biegową. Byłam zaskoczona, kiedy mijałam w parkach, czy innych miejscach grupy studentów grających w przeróżne integracyjne zabawy ruchowe, grupy ćwiczące jogę, tai - chi albo też zajęcia indywidualne z trenerem personalnym.
        Ciekawą obserwacją było też, podejście do ruchu na świeżym powietrzu już od najmłodszych lat. Pracując w przedszkolach byłam początkowo bardzo zdziwiona, jak sporą część swojego życia, dzieci spędzają na zewnątrz (mimo trudnych warunków pogodowych). Pogoda więc nie stanowi przeszkody, co dało mi do myślenia, że to w naszym podejściu jest klucz do tego, jak reagujemy na deszcz, czy wiatr i decyzję o wyjściu na zewnątrz w taką, a nie inną pogodę. 
        Tam też po raz pierwszy, zobaczyłam grupy ćwiczących seniorów oraz kobiet ćwiczących z wózkami. 
        Sama nie pamiętam co pomyślałam, muszę jednak przyznać, że moje podejście do ruchu było wówczas bardzo dalekie od obecnego. 
        Żeby Wam to lepiej przedstawić, to myślenie było takie: do jedzenia są -  restauracje, dom stołówki, do tańczenia  - dyskoteka, dom, lekcje tańca, do ćwiczenia - sala fitness, dom. 
        To szybko się jednak zmieniło na jedz, tańcz, ćwicz gdzie tylko pragniesz :). Oczywiście z zachowaniem przestrzeni innych osób itd. 
        Dlaczego o tym piszę i jak się to ma do zajęć fitness z wózkami w parkach? Piszę o tym bo wcześniejsze podejście, które miałam było spowodowane raz wstydliwością, dwa bezpodstawnymi utartymi schematami, trzy kompleksami w ciele i porównywaniem się. Widzę ogromną wartość w uwalnianiu ruchu. Wartość tak dużą, że nazwałabym to terapią i to bardzo skuteczną. Uwalnia od opinii innych, uwalnia nas od bycia zbyt skupionymi na sobie i od tego, że sami się nieustannie kontrolujemy i pozwalamy w ten sposób innym kontrolować nas.
        Z moim mężem zdarzyło nam się tańczyć czekając na pociąg, na przystankach, w parkach. Podróżując pociągiem w czasie ciąży, czy też nie, większość czasu spędziłam na ćwiczeniach korytarzowych…tam niedaleko toalet :) Często w trakcie ciąży podczas długich spacerów przystawałam i nagle robiłam stretching przy ławce albo na przystanku. :D Czy miałam myśl, że ktoś może to widzieć jako dziwne? - TAK. Czy się tym przejęłam - NIE! :D Uśmiecham się w tych momentach do siebie, mając świadomość, że robię coś dobrego dla siebie i swojego ciała. Czasem pieszczotliwie nazwę siebie dziwakiem.
        Jeśli więc z jakiś powodów masz obawy przed wyjściem do innych, aby się poruszać, chciałam Cię gorąco zachęcić do przełamania się i spróbowania takiej aktywności. Jestem pewna, że dając sobie szansę może spotkać Cię tylko dużo dobrego.  
        Jako młode mamy, bardzo wiele czasu spędzamy sam na sam z naszymi maleństwami. Nierzadko podczas ich drzemek na spacerze marnujemy czas, przeglądając portale społecznościowe i zamykając się w smartfonach. Buggy Gym jest idealną okazją do zdrowej aktywności ruchowej, która:
        - pozwoli pod okiem specjalisty na zatroszczenie się o ciało po porodzie,
        - stworzy okazję do spędzenia czasu na świeżym powietrzu z innymi mamami, 
        - może otworzyć Cię na nowe relacje,
        - umożliwi ćwiczenia bez konieczności znajdywania opieki nad dzieckiem.`
    },
    {
        id: 2,
        content: `Sint ipsa voluptas dolorum, vero quis autem aspernatur aperiam hic.
        Ex dolorum vitae, numquam earum modi qui consectetur facilis asperiores quam totam mollitia perspiciatis sunt! 
        Ullam neque cupiditate quae in? Vel cupiditate sit deleniti quas dignissimos quos, itaque fuga et?`
    },
    {
        id: 3,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis, magnam a! Recusandae magnam voluptate minima nesciunt delectus, inventore atque et? 
        Sint ipsa voluptas dolorum, vero quis autem aspernatur aperiam hic.`
    },
    {
        id: 4,
        content: `Tego, że ruch potrafi uwalniać występujące w nas napięcia mam nadzieję że nie muszę Ci udowadniać :). Jeśli już ktoś odkrył co daje aktywność ruchowa na przykład po ciężkim dniu pracy lub moment jogi czy strechingu na koniec dnia ma pragnienie żeby do tego wracać. Jest to takie catarsis zarówno dla ciała, jak i ducha, ale też naszego umysłu. 
        Stres czy napięcia kumulujemy oczywiście w naszych ciałach. Szczękościski, zrotowane do wewnątrz i uniesione ramiona, wszelakie bóle - to między innymi oznaki tego że zagnieździło się w nas to czego najchętniej w ogóle byśmy chcieli uniknąć. 
        Fizjoterapeuci i masażyści dzielą się niekiedy swoimi spostrzeżeniami jak podczas sesji z pacjentem czy klientem, wychodzą z nich skryte emocję i skumulowane napięcia. Oznacza to że możemy się ich również pozbywać pracą pracą manualną.
        A jak te niechciane napięcia z nas wychodzą? A no najczęściej przez łzy, oddech, czasem dźwięki. Jest to cudowne i oczyszczające doświadczenie, które przynosi piękną ulgę.
        W tym wpisie chciałabym się jednak zatrzymać nad tym jak w szczególności taniec potrafi uwalniać z nas te wszytkie nazwijmy te napięcia niechciajkami.`
    },
    {
        id: 5,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis, magnam a! Recusandae magnam voluptate minima nesciunt delectus, inventore atque et? 
        Sint ipsa voluptas dolorum, vero quis autem aspernatur aperiam hic.
        Ex dolorum vitae, numquam earum modi qui consectetur facilis asperiores quam totam mollitia perspiciatis sunt! 
        Ullam neque cupiditate quae in? Vel cupiditate sit deleniti quas dignissimos quos, itaque fuga et?`
    }
]
export { postsInfoArray, postContentArray };