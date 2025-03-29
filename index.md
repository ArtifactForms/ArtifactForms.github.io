# Simon Dietz
Interdisziplinärer Entwickler & Kreativtechniker

# Portfolio / Projekte

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

Durch die Abbildung der prozentualen Anteile von Kis, Ambo und Dual – also wie häufig sie in der zufälligen Reihenfolge vorkommen – auf die RGB-Farbkomponenten kann ein zusätzlicher visueller Faktor integriert werden. So wird die strukturelle Zusammensetzung einer Form nicht nur geometrisch, sondern auch farblich erfahrbar gemacht.

![grafik](https://github.com/user-attachments/assets/71a495b2-0ada-4e2f-a847-f249b28a2d09)

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

### Artifact Forms

A Personal 3D Project - Explore the world of 3D geometry with this open-source Java library, built as a learning project.

**Background / Intension**

This Java library began as a hobby project in 2015/2016. I started it to deepen my understanding of creating and manipulating 3D geometry. This built upon knowledge I gained from an earlier internship with product design students. During that time, I was introduced to the programming language Processing.

Processing captivated me from the start. Designed for visual learners, Processing is a great tool to get started with programming. You can learn more at processing.org. While Processing isn't strictly necessary, the library's core functionality is independent of the Processing environment. However, Processing offers a convenient way to visualize constructed meshes through its rendering pipeline, which leverages JAVA, JAVA2D, and OPENGL.

[MeshLib on Github](https://github.com/ArtifactForms/MeshLibCore)

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
