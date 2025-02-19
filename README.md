# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  vi har en mappe til fonte, og én til billeder. Andre ressorucer ligger i mappen "generel". Vi har valgt en mappestruktur, da det giver et organiseret overblik over vores filer.
- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  dem placerer vi i "generel"-mappen.
- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  dem placerer vi i de individuelle mapper der passer til siden.

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
  alle filnavne er angivet med små bogstaver. Når der er mellemrum bruger vi underscore.
- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  Ved at bruge vores mappestruktur, hvor vi samler filer.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  vi har refereret i <head> med defer attribute. Vi har lavet en kommentar ovenover så det er tydeligt hvor henne i vores HTML at der bliver refereret.

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  vi skriver følgende: feature-(navn på feature)-(navn på person)

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  vi kommunikerer og kigger i vores Trello. Vi laver logbog efter hver arbejdsdag, hvor vi opsummerer og uddeligerer opgaver, så alle har noget de kan arbejde på individuelt. Går man hen og bliver i tvivl kan man altid bare skrive i messenger eller på teams - for her i gruppen har vi hinandens ryg.
- Hvordan sikrer I, at commit-beskeder er beskrivende?
  vi gentager branchnavnet(hvad man har lavet)efterfulgt af "done".
- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  vi ændrer ikke i main.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  vi har planer om at bruge arrow functions
- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  til vores sektioner bruger vi id'er
  til vores div'er bruger vi klasser
- Skal filer have korte forklaringer som kommentarer?
  ve4d javascript har vi større fokus på at kommentere, da det er et mere komplekst sprog og vi dermed gør det lettere for os selv at forstå. Vi kommenterer ikke det hele, men det mest essentielle.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Vi har udviklet vores website med fokus på dynamisk datahåndtering og interaktive funktioner for brugeren. Vores primære datakilde er et API kaldt DummyJSON, hvor vi har valgt at arbejde med kategorien recipes. Dette API indeholder en række opskrifter med forskellige spændende data, som vi har brugt til at opbygge vores side. For at hente og vise data har vi implementeret en fetch-funktion i vores JavaScript, der henter opskrifterne fra API’et og indsætter dem i en CSS-stylet HTML-struktur. Indholdet på siden opdateres dynamisk, hvilket betyder, at når API’et ændrer sig, vil vores website automatisk afspejle disse ændringer uden behov for manuel opdatering.

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- Her er eksempler på hvordan vores endpoint efter .html afgør, hvad der vises på skærmen. Eksempelvis, mealType=breakfast viser morgenmad opskrifter, id=15 viser opskrift nummer 15 og search=Pizza viser alle opskrifter med pizza.
  http://127.0.0.1:5500/pages/page_c/c.html?mealType=breakfast
  http://127.0.0.1:5500/pages/page_b/b.html?id=15
  http://127.0.0.1:5500/pages/page_d/d.html?search=Pizza

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
  Funktionen opdaterer dynamisk et link's URL med en søgeparameter baseret på brugerens input, når der klikkes på linket. Hvis input feltet er tomt, forhindres navigationen
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
  Hvis brugeren f.eks. skriver "hello world" i feltet, bliver URL’en opdateret til ...?search=hello%20world.
  Hvis brugeren ikke indtaster noget, forhindrer koden, at linket åbnes (event.preventDefault();), så brugeren ikke navigerer til en ugyldig side.
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
  I vores søgefunktion returnerer den en værdi, da den går ind og indhenter den data, som brugeren skriver i feltet.
- Nedenfor ses vores funktion. Funktionen kaldes automatisk, når brugeren klikker på linket med id="searchLink", fordi den er tilknyttet en eventlistener for klik.

```javascript
// Eventlistener lytter på klik af searchLink
document.getElementById("searchLink").addEventListener("click", function (event) {
  // Finder input-elementet med id="searchInput"
  // Henter .value, som er teksten fra brugeren og sletter mellemrum før og efter med trim
  var searchValue = document.getElementById("searchInput").value.trim();

  if (searchValue) {
    // Find den aktuelle href (uden domæne)
    var baseHref = new URL(this.getAttribute("href"), window.location.origin).pathname;

    // Opdater href dynamisk med søgeparameteren
    this.href = baseHref + "?search=" + encodeURIComponent(searchValue);
  } else {
    event.preventDefault(); // Stop navigation hvis input er tomt
  }
});
```
