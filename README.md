<h1 align="center">TP PROJET ASE - ROBOML </h1>
<p align="center">
   <img src="https://img.shields.io/badge/v5.3.3-Typescript-blue">
   <img src="https://img.shields.io/badge/v2.1.3-Langium-orange" alt="Langium">
   <img src="https://img.shields.io/badge/v3.6.0-Monaco-red" alt="Langium">
</p>
<h3 align="left">
    <b>Autors : </b> <a href="https://github.com/Thomega35/">Thomas DELAPART</a> & <a href="https://github.com/Xacone">Yazid BENJAMAA</a>
</h4>

> Le projet est accessible sur le site : [RoboML](https://cv.thomega.fr/) 
>
> Notre majeure est l'interpreteur et notre mineure est le compilateur.

# Présentation du Projet 🤖

Le projet RoboML est un projet de langage de programmation permettant de définir le déploiement d'un robot. Le langage permet de controler les déplacements du robot ainsi que de gérer des variables et des fonctions. Ce langage inspiré du Python est compilé en Arduino C.
### Usefull links :

- [Subject](https://github.com/selabs-ur1/dsl)

- [Languium_Git](https://github.com/eclipse-langium/langium)

- [Languium_WebSite](https://langium.org/docs/getting-started/)

- [Xtext_to_langium](https://github.com/TypeFox/xtext2langium)

- [Arduino](https://create.arduino.cc/editor/)

<h2>Modèle et Quelques Concepts du Langage 📖 </h2>

### Voci notre shèma tel qu'il a été implémenté dans Langium :

```mermaid

classDiagram
    class RoboMLProgram {
        +functions: FunctionDec[]
    }

    class FunctionDec {
        +functionName: string
        +parameters: VariableFunDef[]
        +body: Statement[]
        +returnType: RMLObject
    }

    class Statement {
    }


    class Entry {
    }

    class UnitMeasure {
    }


    RoboMLProgram --> FunctionDec
    FunctionDec --> Statement
    Statement <|-- Assignement
    Statement <|-- Condition
    Statement <|-- Deplacement
    Statement <|-- Loop
    Statement <|-- Rotation
    Statement <|-- SetSpeed
    Statement <|-- SetRotation
    Entry <|-- EntrySimple
    Entry <|-- GetRotation
    Entry <|-- GetSpeed
    Entry <|-- FunctionCall
    Entry <|-- VariableRef
    Entry <|-- VariableDef
    Entry <|-- Expression
    Assignement <|-- Entry
    Deplacement <|-- Entry
    SetSpeed <|-- Entry
    Rotation <|-- Entry
    SetRotation <|-- Entry
    Condition <|-- Entry
    Loop <|-- Entry
    Deplacement <|-- UnitMeasure
    SetSpeed <|-- UnitMeasure
    UnitMeasure <|-- UnitMeasure_cm
    UnitMeasure <|-- UnitMeasure_dm
    UnitMeasure <|-- UnitMeasure_m
    UnitMeasure <|-- UnitMeasure_mm

```

### Voici notre shèma tel qu'il a été pensé sur Eclipse Ecore :

<img src="assets/roboML_class_diagram.svg">

<ul>
    <li><b>ArithmeticOperators</b> : Opérateurs arithmétiques (+, -, *, **, %, ...)</li>
    <li><b>Assignement</b> : Représente une assignation d'une valeur à une variable</li>
    <li><b>BooleanExpression</b> : Représente une expression logique, avec des opérateurs logiques</li>
    <li><b>BooleanOperators</b> : Opérateurs booléens supportés par le langage (==, <, >, <=, ...)</li>
    <li><b>Condition</b> : Représente une condition logique, comme une comparaison.</li>
    <li><b>Entity</b> : Représente une entité, avec un type spécifié.</li>
    <li><b>RMLObject</b> : Objets propres au langage RoboML (RMLInt, RMLString, RMLFloat, RMLDouble, RMLBoolean)</li>
    <li><b>RoboMLProgram</b> : Point d'entrée du langage, englobe l'ensemble du programme RoboML</li>
    <li><b>Sensor</b> : Représente un capteur, avec la possibilité d'obtenir la valeur du capteur.</li>
    <li><b>Speed</b> : Spécifie la vitesse de déplacement.</li>
    <li><b>Statement</b> : Représente une instruction comme une assignation, une condition ou encore une boucle.</li>
    <li><b>UnitMeasure</b> : Unité de mesure des distances (m, dm, cm, mm)</li>
    <li><b>Variable</b> : Représente une variable identifiée par son nom et sa valeur associée</li>
    <li><b>VariableRef</b> : Référence une variable existante dans le programme.</li>
</ul>

<h2>Interpréteur 🔍</h2>

L'interpréteur du langage RoboML permet de lancer des simulations à travers une interface web. 
Ces simulations facilitent le processus de débogage et de détection des anomalies.

Le langage RoboML est supporté et traduis par l'interpréteur vers une suite d'instruction qui sont ensuite représentées sous forme d'animations représentatives de la trajectoire du robot. 
Ce support est géré par le biais de visiteurs (patron de conception) en Typescript qui facilient le parcours et les opérations sur les structures d'objets.

Le visiteur `RoboMLVisitor` est défini dans `visitor.ts` <i>(/src/language/visitor.ts)</i>
C'est le fichier `main-browser.ts` <i>(/src/language/visitor.ts)</i> qui instancie le visiteur et qui effecture les parcours associés à chaque structure/concept.

Un exemple de visiteur simple est celui des noeuds correspondants à `Condition`, le visiteur vérifie le résultat retourné par l'expression booléenne qu'il évalue avant de décider vers quel branchement rediriger le programme au moment de l'interprétation :

```javascript
visitCondition(node: Condition) {
        let condStatus:boolean = node.booleanExpression.accept(this);
        if(condStatus) {
            node.statementIf.forEach(statement => {
                statement.accept(this);
            });
        } else {
            node.statementElse.forEach(statement => {
                statement.accept(this);
            });
        }
    }
```

Le visiteur a permis également de faciliter l'implémentation de bon nombre de concepts du langage comme l'assignation de la valeur d'une variable à une autre variable, exemple :

```
let void main() {
    var RMLInt val1 = 30 / 2                  val1 = 6
    var RMLInt val2 = val1 - 5                val2 = 1
    var RMLInt val2 = val2 + 10               val2 = 11
    var RMLInt val3 = val2 + val1             val3 = 17
}
```

Ces méthodes d'assignation sont gérées grâce au visiteur de `Assignement` qui vérifie également qu'une variable a bien été déclarée avant d'être appellée :

```javascript
visitAssignement(node: Assignement) {
        const vToAssing = node.assignableVariable;
        if (vToAssing !== undefined) {
            if (this.variables.has(vToAssing)) {
                this.variables.set(vToAssing, (node.entry as Entry).accept(this));
            } else {       
                throw new Error(`Variable ${vToAssing} not found`);
            }
        }
    }
```

<h2>Compilateur ⭐</h2>

Le compilateur du langage RoboML permet de générer un code Arduino C à partir d'un programme RoboML.

Pour ce second projet, nous utilisons aussi la classe `visitor.ts` pour parcourir les noeuds du programme et appeller la méthode de `compilerVisitor.ts` associée, qui va générer le code Arduino C et le concaténer dans une variable `codeProgram` qui sera retournée à la fin de l'interprétation.

Le compileur ne s'utilise qu'en ligne de commande malheuresement, il prend en paramètre le chemin relatif vers le fichier RoboML à compiler depuis le dossier `Robot_ML` et génère un fichier `output.ino` dans le dossier `output` du projet.

### Exemple de compilation :

```bash
cd .\langium\Robot_ML\
node ./bin/cli.js compile .\files\test.rml
```
ou sinon le fichier `compile.bat` permet de compiler le fichier `test.rml` par défaut sur windows.
```bash
cd .\langium\Robot_ML\
.\compile.bat
```

### Détails techniques :

Les 4 déplacements possible ont été implémentés dans le compilateur  avec leur code Arduino C associé : 
- `Forward` : Avancer  `Omni.setCarAdvance`
- `Backward` : Reculer `Omni.setCarBackoff`
- `SideLeft` : Aller à gauche `Omni.setCarLeft`
- `SideRight` : Aller à droite `Omni.setCarRight`

Les 2 rotations possibles ont été implémentés dans le compilateur avec leur code Arduino C associé :
- `Clock` : Rotation horraire `Omni.setCarRotateRight`
- `AntiClock` : Rotation antihorraire `Omni.setCarRotateLeft`

Un delay et un stop sont ajoutés après chaque déplacement pour permettre au robot de s'arrêter et de ne pas enchaîner les déplacements trop rapidement.

Les unités de mesure des distances sont gérées dans le compilateur :
- `mm` : Millimètres ``
- `cm` : Centimètres `* 10`
- `dm` : Décimètres `* 100`
- `m` : Mètres `* 1000`



<h2>spécificités du langage ​🐱</h2>

<ul>
   <li>Les fonctions doivent être déclarées avant la fonction `main()`.</li>
   <li>Une variable doit être déclarée pour pouvoir être utilisée</li>
   <li>La logique du langage est "python-like", c à d toutes les variables ont un scope global par défaut.</li>
</ul>

<h2>Exemples de codes .rml : Interpretation & Compilation ​📝</h2>

Voici une liste d'exemples de codes RoboML illustrant les diverses fonctionnalités de notre langage. Ces exemples sont disponibles dans le dossier `files` du projet dans les fichiers `.rml` et `.ino` associés.

<h3>Trajectoire triangulaire 📐:</h3>

```
let void triangle() {
    var RMLInt sideLength = 100
    var RMLInt rotationAngle = 120
    var RMLInt count = 0

    loop count < 3 {
        Clock rotationAngle

        Forward sideLength cm
        Forward sideLength cm
        Forward sideLength cm

        count = count + 1
    }
}

let void main() {
    setSpeed(150 dm)
    Clock 60
    var RMLInt count = 0

    loop count < 1 {
        count = count + 1
        triangle()
    }
}
```
```arduino
void triangle() {
int sideLength = 100;
int rotationAngle = 120;
int count = 0;
while (count < 3) {
Omni.setCarRotateRight(rotationAngle/ 180 * 3.1415926545 * global_rotation);
Omni.delayMS(3000);
Omni.setCarStop();
Omni.setCarAdvance(sideLength * 10 * global_speed);
Omni.delayMS(1000);
Omni.setCarStop();
Omni.setCarAdvance(sideLength * 10 * global_speed);
Omni.delayMS(1000);
Omni.setCarStop();
Omni.setCarAdvance(sideLength * 10 * global_speed);
Omni.delayMS(1000);
Omni.setCarStop();
count = count + 1;
}
}

void main() {
global_speed = 150;
Omni.setCarRotateRight(60/ 180 * 3.1415926545 * global_rotation);
Omni.delayMS(3000);
Omni.setCarStop();
int count = 0;
while (count < 1) {
count = count + 1;
triangle()
}
}
```
<img src="assets/triangle.gif"> 

<h3>Trajectoire de carré en marche arrière ​⏹️​​:</h3>

```
let void square() {
    var RMLInt sideLength = 60
    var RMLInt rotationAngle = 90
    var RMLInt count = 0

    loop count < 4 {
        Clock rotationAngle

        Backward sideLength cm
        Backward sideLength cm
        Backward sideLength cm
        Backward sideLength cm

        count = count + 1
    }
}

let void main() {
    setSpeed(250 dm)
    var RMLInt count = 0

    loop count < 1 {
        count = count + 1
        square()
    }
}
```
```arduino
void square() {
int sideLength = 60;
int rotationAngle = 90;
int count = 0;
while (count < 4) {
Omni.setCarRotateRight(rotationAngle/ 180 * 3.1415926545 * global_rotation);
Omni.delayMS(3000);
Omni.setCarStop();
Omni.setCarBackoff(sideLength * 10 * global_speed);
Omni.delayMS(1000);
Omni.setCarStop();
Omni.setCarBackoff(sideLength * 10 * global_speed);
Omni.delayMS(1000);
Omni.setCarStop();
Omni.setCarBackoff(sideLength * 10 * global_speed);
Omni.delayMS(1000);
Omni.setCarStop();
Omni.setCarBackoff(sideLength * 10 * global_speed);
Omni.delayMS(1000);
Omni.setCarStop();
count = count + 1;
}
}

void main() {
global_speed = 250;
int count = 0;
while (count < 1) {
count = count + 1;
square()
}
}
```
<img src="assets/square.gif"> 

<h3>Trajectoire de spirale SideLeft en antihorraire ​🌀​​:</h3>

```
let void spiral() {
    var RMLInt sideLength = 10
    var RMLInt rotationAngle = 20
    var RMLInt count = 0

    loop count < 100 {
        AntiClock rotationAngle

        SideLeft sideLength mm
        SideLeft sideLength mm
        SideLeft sideLength mm
        SideLeft sideLength mm

        count = count + 1
        sideLength = sideLength + 2
    }
}

let void main() {
    setSpeed(250 dm)
    var RMLInt count = 0

    loop count < 1 {
        count = count + 1
        spiral()
    }
}
```
```arduino
void spiral() {
int sideLength = 10;
int rotationAngle = 20;
int count = 0;
while (count < 100) {
Omni.setCarRotateLeft(rotationAngle/ 180 * 3.1415926545 * global_rotation);
Omni.delayMS(3000);
Omni.setCarStop();
Omni.setCarLeft(sideLength * global_speed);
Omni.delayMS(1000);
Omni.setCarStop();
Omni.setCarLeft(sideLength * global_speed);
Omni.delayMS(1000);
Omni.setCarStop();
Omni.setCarLeft(sideLength * global_speed);
Omni.delayMS(1000);
Omni.setCarStop();
Omni.setCarLeft(sideLength * global_speed);
Omni.delayMS(1000);
Omni.setCarStop();
count = count + 1;
sideLength = sideLength + 2;
}
}

void main() {
global_speed = 250;
int count = 0;
while (count < 1) {
count = count + 1;
spiral()
}
}
```
<img src="assets/spiral.gif">

<h2> Perspectives d'améliorations 📈</h2>

- Ajout du capteur de distance
- Ajout de la possibilité de lancer le compilateur depuis l'interface web
- Validation des programmes RoboML
- Interpréteur en ligne plus agréable visuellement