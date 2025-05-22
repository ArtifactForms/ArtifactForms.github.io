# Simon Dietz
Interdisziplinärer Entwickler & Kreativtechniker

# Über mich – Eine kreative Sandbox

Dieses Portfolio ist kein klassischer Lebenslauf und auch keine Bewerbung im herkömmlichen Sinne. Vielmehr ist es eine spielerische Reflexion meiner Reise – eine kreative Sandbox, in der ich meine Erfahrungen, Interessen und Entwicklungen sichtbar mache. Hier geht es um meine Leidenschaft für Style-Writing, digitale Kunst und Softwareentwicklung, um meinen Weg durch verschiedene Lebensstationen und um die Erkenntnisse, die mich geprägt haben. Ohne feste Grenzen, aber mit viel Raum für Ausdruck.

## Die Theorie U als Rahmen für meinen kreativen Prozess

Dieses Portfolio ist mehr als eine Sammlung von Arbeiten – es ist eine Reise. Eine Reise durch Erfahrungen, Veränderungen und kreative Entfaltung. Inspiriert von Otto Scharmers **Theorie U** möchte ich meinen Schaffensprozess nicht als statische Darstellung, sondern als lebendige Bewegung begreifen: ein Prozess des **Loslassens, Erspürens und Neugestaltens.**

Die Theorie U hilft mir, meine eigene Entwicklung bewusst zu reflektieren. **Was hat mich geprägt?** Welche Muster durfte ich hinter mir lassen? **Welche Möglichkeiten eröffnen sich im Hier und Jetzt?** Und vor allem: **Wohin führt mich mein kreativer Weg?**

In diesem Portfolio spiegelt sich genau dieser Prozess wider. Ich lasse Vergangenes Revue passieren, entdecke neue Perspektiven und entwerfe eine Zukunft, die mich inspiriert. Es ist ein Raum zum Experimentieren, zum Ausprobieren und zum Wachsen – eine Sandbox, in der ich meine Ideen und meine Persönlichkeit sichtbar mache.

## Kreativität trifft Ausdruck: Meine Erfahrung mit Style-Writing & Jugendprojekten

Im Jahr 2024 hatte ich die einmalige Gelegenheit, dem Künstler **Carlos Lorente** – Gründer und Geschäftsführer der **Style Scouts** Akademie Nürnberg – zu hospitieren. Diese Erfahrung war für mich in vielerlei Hinsicht bereichernd: Sie ermöglichte es mir nicht nur, meine eigene kreative Ader wiederzuentdecken und den Alltag neu zu erproben, sondern auch positive Impulse zu erleben.

Ich konnte mich aktiv einbringen, aber auch wertvolle Erkenntnisse aus der Situation gewinnen. Besonders faszinierend war es, mein Interesse für Style-Writing – die Kunst, nicht nur zu schreiben, sondern mit Stil zu gestalten – auszuleben. Meine Ausbildung als Jugendleiter sowie meine pädagogischen Qualifikationen kamen mir dabei zugute, insbesondere in der Arbeit mit Jugendlichen aus unterschiedlichsten sozialen Hintergründen.

Ein Höhepunkt dieser Zeit war ein mehrtägiger Workshop in Zusammenarbeit mit der N-ERGIE Nürnberg, in dessen Rahmen eine Trafostation in Petersaurach kreativ gestaltet wurde. Dieses beeindruckende Projekt fand nicht nur großen Anklang bei den Teilnehmenden, sondern wurde auch von der Presse gewürdigt.

[Artikel N-ERGIE Magazin](https://magazin.n-ergie.de/artikel/graffiti-aktion-aus-trafostationen-werden-kunstwerke/)

[Artikel Radio 8](https://www.radio8.de/petersaurach-jugendliche-verwandeln-trafostation-in-kunstwerk-346867/)

![grafik](https://github.com/user-attachments/assets/a45832b7-3352-45e7-81fc-42f7ce0ae4de)

##### Foto: Jugendliche aus Petersaurach präsentierten ihr Kunstwerk (von links unten) Markus Prokopczuk, kommunaler Kundenbetreuer bei der N-ERGIE, Rektorin Christiane Nebert und Petersaurachs Bürgermeister Herbert Albrecht. Angeleitet wurde das Projekt von Graffiti-Künstler Carlos Lorente (unten rechts). Daneben Claudia Jordan von der N-ERGIE Schulinformation

## Artifact Forms

![banner-1](https://github.com/user-attachments/assets/70fdba68-3177-4bb8-b19f-f5bf92840ee8)

Persönliches 3D-Projekt – Open-Source-Java-Bibliothek zur Erkundung von 3D-Geometrie

Dieses Projekt ist aus meiner Faszination für 3D-Programmierung entstanden. Die Java-Bibliothek habe ich ursprünglich 2015/2016 als persönliches Lernprojekt gestartet, mit dem Ziel, ein tieferes Verständnis für den Aufbau und die Verarbeitung von 3D-Geometrie zu entwickeln.

Der Impuls dazu kam während eines Praktikums im Umfeld von Produktdesign-Studierenden, wo ich erstmals mit der kreativen Programmierumgebung Processing in Kontakt kam. Die visuelle, zugängliche Art von Processing hat mich sofort begeistert – insbesondere die Möglichkeit, Ideen schnell grafisch umzusetzen.

Technischer Fokus

Die Bibliothek ist von Grund auf in Java geschrieben und unabhängig von externen Frameworks konzipiert. Sie ermöglicht das Erstellen, Transformieren und Visualisieren von 3D-Meshes auf Basis einfacher geometrischer Prinzipien. Obwohl sie nicht auf Processing angewiesen ist, lässt sich diese Umgebung hervorragend zur Visualisierung nutzen – insbesondere durch deren Unterstützung für JAVA2D und OpenGL.

[MeshLib on Github](https://github.com/ArtifactForms/MeshLibCore)

## Conway Explorer – Eine spielerische Reise durch geometrische Transformationen

![0617](https://github.com/user-attachments/assets/69ef820f-ebcf-4eff-ad07-0ad145a03391)

### Einleitung: Was sind Conway-Operatoren?

Conway-Operatoren sind ein System von grundlegenden Transformationen, die auf polyedrische Strukturen angewendet werden können, um neue, oft komplexere Formen zu erzeugen. Entwickelt von John Horton Conway, bieten sie eine elegante Möglichkeit, aus einfachen Geometrien detaillierte und facettenreiche Strukturen abzuleiten.

Zu den bekanntesten Operatoren zählen:

- **Dual (D)** – Vertauscht Kanten und Flächen eines Polyeders, wodurch das duale Polyeder entsteht.
- **Amo (Ambo, A)** – Fügt an jeder Kante eine neue Fläche hinzu und erzeugt eine abgerundete Variante der ursprünglichen Form.
- **Kis (K)** – Ersetzt jede Fläche durch eine Pyramide, wodurch ein stacheliges oder kristallartiges Aussehen entsteht.

Diese Operatoren lassen sich auch kombinieren, wodurch eine nahezu unendliche Vielfalt an Formen entsteht.

### Der Conway Explorer

Der **Conway Explorer** nutzt diese Prinzipien, um auf spielerische Weise neue Formen zu generieren. Er nimmt eine zufällige Reihenfolge der Grundoperationen **Dual (D), Amo (A) und Kis (K)** und wendet sie auf eine gewählte Ausgangsform – etwa einen simplen Würfel – an. Durch diese zufallsgesteuerte Transformation entstehen immer wieder neue, oft überraschende Geometrien.

Diese explorative Herangehensweise erlaubt es, Formwelten zu erkunden, ohne jede Modifikation manuell planen zu müssen. Der **Conway Explorer** ist somit nicht nur ein Werkzeug zur Geometrie-Generierung, sondern auch eine Inspirationsquelle für experimentelles Design und algorithmisch erzeugte Strukturen.

[![grafik](https://github.com/user-attachments/assets/8a9a26c7-dbc9-472f-9e29-f974ec3d0ea9)
](https://www.youtube.com/watch?v=X1IraXU6gkk])

Durch die Abbildung der prozentualen Anteile von Kis, Ambo und Dual – also wie häufig sie in der zufälligen Reihenfolge vorkommen – auf die RGB-Farbkomponenten kann ein zusätzlicher visueller Faktor integriert werden. So wird die strukturelle Zusammensetzung einer Form nicht nur geometrisch, sondern auch farblich erfahrbar gemacht.

![grafik](https://github.com/user-attachments/assets/71a495b2-0ada-4e2f-a847-f249b28a2d09)

![conway-2](https://github.com/user-attachments/assets/bc6f694a-88a6-40f8-a1b4-670d856af355)

## Mesh Modifikatoren  

Im Laufe der Jahre habe ich eine Vielzahl an Mesh-Modifikatoren implementiert. Diese ermöglichen es, Grundformen durch gezielte Transformationen zu verändern und zu komplexen, oft unerwarteten Strukturen weiterzuentwickeln.  

Durch die Kombination verschiedener Modifikatoren entsteht eine nahezu unendliche Vielfalt an Formen. Die spielerische Aneinanderreihung und Variation der einzelnen Operationen erlaubt es, neue Formwelten zu erkunden, ohne dabei händisch modellieren zu müssen. Dieser experimentelle Ansatz macht es möglich, kreative und algorithmisch generierte Geometrien zu erschaffen.  

### Modifikator-Sequenz  

Das folgende Beispiel zeigt einen möglichen Ablauf der Formgenerierung anhand einer Sequenz von Modifikatoren:  

1. **Icosahedron** als Ausgangsform  
2. **Bevel Vertices** (Abrunden der Ecken)  
3. **Tessellierung der Flächen** durch Planar Vertex Center  
4. **Weitere Tessellierung** mittels MidEdge Center  
5. **Spherify** zur Annäherung an eine Kugelform  
6. **Holes Modifier** für Durchbrüche in der Geometrie  
7. **Solidify** zur Verdickung der Struktur  

![grafik](https://github.com/user-attachments/assets/429dcf6c-209f-4d5b-abb9-053cf9475600)

![grafik](https://github.com/user-attachments/assets/98942d7f-9837-4d84-9830-409ba21059d1)

### Code-Beispiel zur Transformation  

```java
public void createMesh() {
    mesh = new IcosahedronCreator().create();
    new BevelVerticesModifier(0.2f).modify(mesh);
    new PlanarVertexCenterModifier().modify(mesh);
    new PlanarMidEdgeCenterModifier().modify(mesh);
    new SpherifyModifier().modify(mesh);
    new HolesModifier(0.8f).modify(mesh);
    new SolidifyModifier(0.02f).modify(mesh);
    new ScaleModifier(350).modify(mesh);
}
```

## HeroQuest Fan Art – Eine Hommage an klassische Fantasy-Illustrationen

Anfang der 90er Jahre – es muss etwa 1992 gewesen sein – wurde ich durch einen Freund auf das Spiel HeroQuest aufmerksam. Schon damals faszinierte mich die Welt dieses Klassikers, insbesondere die Old-School-Fantasy-Illustrationen der Spielkarten. Die düsteren, detailreichen Zeichnungen weckten meine Begeisterung für visuelles Storytelling und die Ästhetik klassischer Fantasy-Kunst.

Viele Jahre später, vermutlich Anfang der 2010er Jahre (2014), begann ich damit, eigene Kartenillustrationen anzufertigen – in einer Zeit, in der künstliche Intelligenz noch keine Rolle in der kreativen Gestaltung spielte. Jedes Motiv entstand in Handarbeit, inspiriert von den ikonischen Werken, die mich einst in meiner Kindheit in ihren Bann zogen.

![grafik](https://github.com/user-attachments/assets/68d71ff6-f6d3-4e2f-99b9-3c7e5435cd4c)

![grafik](https://github.com/user-attachments/assets/26e36643-2d54-4caa-8299-8c935e6bebf9)

## Zerfall

"Zerfall" ist eine visuelle Studie zur Vergänglichkeit von Strukturen. Eine geometrische Fläche beginnt als klar definierte Form und durchläuft einen unvorhersehbaren Prozess der Auflösung. Der Zerfall erfolgt schnell und unaufhaltsam, ohne dass der Betrachter eingreifen oder ihn steuern kann.

Dieses Projekt reflektiert über Vergänglichkeit und den Verlust von Struktur. Inspiriert von natürlichen Erosionsprozessen in der Natur, bringt "Zerfall" die Fragilität digitaler Geometrien zum Ausdruck.

"Zerfall" ("decay") is a visual study on the transience of structures. A geometric surface begins as a clearly defined shape and undergoes an unpredictable process of dissolution. The decay happens rapidly and inexorably, beyond the viewer's control or influence.

This project reflects on impermanence and the loss of structure. Inspired by natural erosion processes, Zerfall (decay) expresses the fragility of digital geometries.

![zerfall3](https://github.com/user-attachments/assets/995c870e-f86a-48f3-b15a-1a6820b73c64)

![grafik](https://github.com/user-attachments/assets/5d9b8480-b014-4d6e-a30c-1e5d208a5af6)

![grafik](https://github.com/user-attachments/assets/37d6f802-9e83-4cb4-90f3-eb463eaa13de)

![grafik](https://github.com/user-attachments/assets/793e9977-fb4d-4783-9ed9-3b3464d7cbae)

[Gallery](https://artifactforms.github.io/zerfall-gallery)

## Enter the Gungeon Clone – Ein Lernprojekt mit viel Spaß

Eines der Projekte, das mir besonders viel Freude bereitet hat, ist mein Enter the Gungeon Clone. Inspiriert vom erfolgreichen Indie-Spiel, wollte ich die Spielmechaniken auf meine eigene Weise umsetzen. Während das Original auf 3D-Technik setzt, basiert meine Version vollständig auf einer reinen Java 2D-Umgebung.

Im Laufe der Entwicklung konnte ich viele spannende Konzepte und Techniken vertiefen, darunter:

* **Pixel UI** – Gestaltung einer benutzerfreundlichen Oberfläche im klassischen Pixel-Art-Stil
* **Game States** – Verwaltung von Spielzuständen wie Menü, Gameplay und Pause
* **Entity-Component-System (ECS)** – Strukturierte Architektur für flexible und modulare Spiellogik
* **Pixel-Sprite-Animationen** – Flüssige Bewegungsabläufe für Charaktere und Objekte
* **Tilemap-System** – Erstellen und Laden von prozeduralen oder handgebauten Leveln
* **Camera-Follow-System** – Dynamische Kamera, die sich flüssig an den Spieler anpasst
* **Twin-Stick-Mechanik** – Steuerung mit Tastatur und Maus für präzises Zielen
* **Item-Pickups** – Sammelbare Gegenstände
* **Minimap** – Übersichtskarte für eine bessere Orientierung im Dungeon
* **Raycasting** – Berechnung von Sichtlinien zur Kollisionserkennung

Auch wenn das Projekt über einen Prototypen-Status nie hinausgekommen ist, war es eine unglaublich lehrreiche Erfahrung. Es hat mir geholfen, verschiedene Aspekte der Spieleentwicklung besser zu verstehen – und vor allem hat es jede Menge Spaß gemacht! 😊

Hier ein Auszug aus den von mir erstellten Waffen-Sprites – darunter auch eine ganz besondere: die Super Soaker, die legendäre Wasserpistole meiner Kindheit. 🚀💦

![grafik](https://github.com/user-attachments/assets/164316fb-c0ba-4165-8e4b-52edbc3c580a)

![grafik](https://github.com/user-attachments/assets/5e568950-26ac-4b2b-8da8-81b396699ac7)

[![grafik](https://github.com/user-attachments/assets/64151fa9-c80d-4068-a0f5-be35a411316b)
](https://www.youtube.com/watch?v=0uQLSrucCc0)

![grafik](https://github.com/user-attachments/assets/36e5d8a9-c73b-4327-80fb-c362358e1d3b)
Dungeon Concept Art (Paint.NET)

## Retro Game Jam – Eine Hommage an die Gameboy-Ära

Als Kind der 80er und 90er, aufgewachsen mit dem Game Boy, schlummert in mir eine tiefe Leidenschaft für die Ästhetik von 8-Bit- und 16-Bit-Grafiken. Die pixelige, reduzierte Optik dieser Ära hat für mich bis heute einen besonderen Charme.

Im Rahmen eines persönlichen Game Jams entstand eine einfache, aber stilvolle Umsetzung des Spieleklassikers Snake – natürlich in authentischer Game Boy-Optik. Ein besonderes Detail war der ikonische Fade-Effekt, den man beispielsweise aus Quirk kennt – übrigens eines meiner All-Time-Favorites.

Das Projekt war bewusst minimalistisch gehalten und konzentrierte sich auf die Erstellung eines klassischen Spritesheets sowie die korrekte Skalierung mithilfe des Nearest-Neighbor-Algorithmus. Ziel war es, die Retro-Ästhetik so originalgetreu wie möglich einzufangen und eine kleine, aber liebevolle Hommage an die Spiele meiner Kindheit zu schaffen.

![grafik](https://github.com/user-attachments/assets/680bfecb-1ac6-4e7b-944e-7074c0af0428)

[![grafik](https://github.com/user-attachments/assets/345063b1-1ebd-4e48-9ad7-cde07435ba60)
](https://www.youtube.com/watch?v=CspzAxke_QY)

## Artifact 2D – Eine Java-2D-Pixel-Library  

**Artifact 2D** ist eine vielseitige **Java-2D-Pixel-Library** mit integriertem **Layout-Management** und einer umfangreichen Auswahl an **Pixel-Borders**. Die Bibliothek bietet eine flexible UI-Struktur, mit der sich **Pixel-artige Benutzeroberflächen** effizient gestalten lassen.  

### Features  
- **Modulares Layout-Management** mit Ankerpunkten (Anchor-Based Layout)  
- **Umfangreiche Auswahl an Pixel-Borders** für klassische Retro-UI-Elemente  
- **Padding- und Border-Management** für UI-Komponenten  
- **Einfache Integration und Erweiterbarkeit**

![grafik](https://github.com/user-attachments/assets/1d8a5806-2f01-4c36-b95a-769621c8ab3b)

![grafik](https://github.com/user-attachments/assets/77ca6a74-9476-4a6e-b67d-3a9881d5c8c9)

![grafik](https://github.com/user-attachments/assets/c558a5e1-2459-472c-abc9-1d25399530c1)

### Nine-Slice Borders  
Nine-Slice Borders sind eine Technik zur **skalierbaren Darstellung von UI-Elementen**, ohne dass dabei die Pixel-Grafik verzerrt wird. Eine Grafik wird in **neun Bereiche** unterteilt: vier Ecken, vier Kanten und eine Mitte. Während die **Ecken unverändert bleiben**, werden die **Kanten nur in eine Richtung** (horizontal oder vertikal) gestreckt, und die **Mitte wird skaliert**, um das Element flexibel an verschiedene Größen anzupassen.  

Diese Methode ist besonders nützlich für **Fenster, Buttons oder Panels**, die sich dynamisch vergrößern oder verkleinern müssen, während ihr **Pixel-artiger Stil** erhalten bleibt.  

![grafik](https://github.com/user-attachments/assets/0e2f2e67-dc4f-4e2c-a8c7-823c05084d94)

## Artifact Block Out – 3D-Modelle in Minecraft übertragen  

**Artifact Block Out** ist ein Tool, das **3D-Modelle im OBJ-Format** direkt in **Minecraft-Welten** überträgt.  
Im Jahr **2021** wurde ich von einem Bauteam gebeten, eine Lösung zu entwickeln, um große 3D-Modelle aus **Blender** effizient in Minecraft zu importieren.  

### Hintergrund  
Zuvor hatte das Team versucht, den Prozess mit dem **Online-Voxelizer von Drububu** zu automatisieren.  
Während dieses Tool die Möglichkeit bietet, **Voxel-Daten als Minecraft-Schematics** zu exportieren, gab es **wesentliche Einschränkungen**:  
- **Maximale Größe & Blockanzahl** führten zu Problemen bei großen Modellen.  
- Das Modell musste manuell in kleinere Teile aufgeteilt und einzeln importiert werden.  
- Dies machte den gesamten Workflow **langsam und mühsam**.  

### Die Lösung  
Um diese Herausforderungen zu umgehen, entwickelte ich ein eigenes Tool, das **OBJ-Modelle direkt in Minecraft-Welten** überträgt.  
Kernstück des Systems ist eine **Raycasting-Methode**, mit der bestimmt wird, ob ein Block **innerhalb oder außerhalb des Meshes** liegt.  

### Code-Ausschnitt: Mesh-Check durch Raycasting  

```java
    /**
     * Casts a ray against the triangles of this chunk. Ray starts a the specified
     * location in world coordinate space.
     * 
     * @param x in world coordinate space
     * @param y in world coordinate space
     * @param z in world coordinate space
     * @return true if the specified block is inside the mesh
     */
    private static boolean insideMesh(float x, float y, float z, Mesh3D mesh, List<Face3D> faces) {
	int intersections = 0;
	Vector3f orig = new Vector3f(x, y, z);
	Vector3f dir = new Vector3f(0.0001f, 1, 0);
	for (Face3D triangle : faces) {
	    Vector3f vertex0 = mesh.getVertexAt(triangle.indices[0]);
	    Vector3f vertex1 = mesh.getVertexAt(triangle.indices[1]);
	    Vector3f vertex2 = mesh.getVertexAt(triangle.indices[2]);
	    boolean intersects = MollerTrumbore.rayIntersectsTriangle(orig, dir, vertex0, vertex1, vertex2,
		    new Vector3f());
	    if (intersects)
		intersections++;
	}
	return intersections % 2 != 0;
    }
```

Durch die Nutzung des Möller-Trumbore-Algorithmus kann das Tool effizient berechnen, ob sich ein Block innerhalb der Mesh-Geometrie befindet.
Dadurch wird eine nahtlose Umwandlung von 3D-Modellen in Minecraft-Strukturen ermöglicht, ohne dass manuelle Anpassungen nötig sind.

## Meine Reise mit Minecraft  

Minecraft hat mich schon immer fasziniert – nicht nur wegen seines einzigartigen Stellenwerts in der Popkultur, sondern auch wegen der frühen Werke seines Entwicklers und seiner Beiträge zum **Ludum Dare Game Jam**. Die Kombination aus **kreativer Freiheit**, **technischer Tiefe** und der **lebendigen Community** hat mich schnell in ihren Bann gezogen.  

Doch mein Bezug zu Minecraft ging bald über das reine Gaming hinaus. Ich begann, **Server-Plugins** zu entwickeln, insbesondere für **Minigames** und **Bau-Tools**, um das Spielerlebnis zu erweitern. Dabei entdeckte ich nicht nur die technischen, sondern auch die kreativen Möglichkeiten des Spiels.  

### Die Faszination des Bauens  

Mit der Zeit tauchte ich tiefer in die **Builder-Szene** ein – eine Community talentierter Architekten, die mit Minecraft beeindruckende Welten erschaffen. Hier lernte ich, **effizient zu bauen**, ohne dabei den künstlerischen Anspruch aus den Augen zu verlieren.  

**Farbpaletten, Harmonielehren und architektonische Konzepte** spielten eine zentrale Rolle in meinem Lernprozess. Ich begann, mich intensiver mit **Baustilen, Komposition und Detailarbeit** auseinanderzusetzen.

### Pixel Biester & mein Trial-Projekt  

![1500x500](https://github.com/user-attachments/assets/13e150ca-f3da-4184-8a87-6fb5edff57dd)

Ich wurde Teil des bekannten **Pixel Biester Bauteams** und bin heute inaktives Mitglied.  
Mein **Trial-Projekt** für das Team stand unter dem Thema **Empire** und umfasste Bauwerke im asiatischen Stil. Dabei habe ich mich intensiv mit **traditionellen asiatischen Architekturprinzipien** befasst, um authentische und atmosphärische Strukturen zu erschaffen.  

In der **Minecraft-Community** bin ich unter dem Pseudonym **Ventzel** bekannt.  
Hier ist ein Video meines **Trial-Projektes**, das einen Einblick in meine Bauweise gibt:  

[![grafik](https://github.com/user-attachments/assets/f0905247-87a5-435e-87f5-7d524d657568)
](https://www.youtube.com/watch?v=Qb6aIGcBJ8Q)

![DwJk6HeWsAEDUIP](https://github.com/user-attachments/assets/ad8d9f05-54fd-4807-8d56-2535c83fc490)
render by @TheMrPinguin_ (2019)

![DwJk7hIWwAIFaQl](https://github.com/user-attachments/assets/34ba9574-a0e9-4a62-bba0-caae67fc6e4a)
render by @Omegafoxxx (2019)

![DwJk985XgAEACS0](https://github.com/user-attachments/assets/4b5fdb61-c436-4115-a586-30c524bcf919)
render by @omardegante11 (2019)

![DwJk_2hW0AA0i3x](https://github.com/user-attachments/assets/7d691d98-7e73-40de-81a5-0b117ebe6072)
render by @Splekh (2019)

## NBT-Bibliothek

Diese Bibliothek bietet Funktionen zum Lesen, Schreiben und Validieren von Named Binary Tag (NBT)-Dateien, die in Minecraft zur Datenspeicherung verwendet werden. Sie unterstützt das Lesen und Schreiben von komprimierten (Gzip) NBT-Dateien sowie das Erstellen von Schematic-Dateien (*.schematic).

**Hintergrund & Intention**

Die NBT-Bibliothek entstand als Nebenprojekt im Rahmen eines größeren Minecraft-Projekts. Im Jahr 2021 wurde ich von einem Bauteam gebeten, ein Tool zu entwickeln, das große 3D-Modelle (im OBJ-Format) aus Blender direkt in Minecraft-Welten importieren kann.

Zuvor hatte das Team versucht, diesen Prozess mit dem Online-Voxelizer von Drububu zu automatisieren. Obwohl dieses Tool die Möglichkeit bietet, Voxel-Daten als Minecraft-Schematics zu exportieren, stößt es bei großen Modellen an Grenzen. Einschränkungen hinsichtlich maximaler Größe und Blockanzahl erforderten es, große Modelle in kleinere Teile aufzuteilen und sie einzeln in Minecraft zu integrieren – ein zeitaufwändiger Prozess.

Um dieses Problem zu lösen, entwickelte ich ein Tool, das OBJ-Modelle direkt in Minecraft-Welten überträgt. Dazu war es notwendig, die Daten in das NBT-Format zu konvertieren, das Minecraft zur Speicherung von Weltdaten verwendet. Die Entwicklung dieses Tools führte schließlich zur Entstehung der NBT-Bibliothek.

[NBT on Github](https://github.com/ArtifactForms/nbt)

![image](images/image391.png)

### Chatbot Project

A simple chat bot.

If you are interested in learning more about chatbots and following the progress of my project, including my learning journey, please feel free to consult my project documentation. It will be updated regularly throughout the project.

[ChatBot Project Documentation](https://artifactforms.github.io/ChatBot/documentation/project.html)

## Languages & Tools
<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" width="64" height="64" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/processing/processing-original.svg" width="64" height="64" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/p5js/p5js-original.svg" width="64" height="64" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg" width="64" height="64"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" width="64" height="64" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" width="64" height="64" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="64" height="64" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="64" height="64" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inkscape/inkscape-original.svg" width="64" height="64" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" width="64" height="64" />
</p>
