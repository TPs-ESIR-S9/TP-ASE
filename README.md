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

# Présentation du Projet

Le projet RoboML est un projet de langage de programmation permettant de définir le déploiement d'un robot. Le langage permet de controler les déplacements du robot ainsi que de gérer des variables et des fonctions. Ce langage inspiré du Python est compilé en Arduino C.
### Usefull links :

- [Subject](https://github.com/selabs-ur1/dsl)

- [Languium_Git](https://github.com/eclipse-langium/langium)

- [Languium_WebSite](https://langium.org/docs/getting-started/)

- [Xtext_to_langium](https://github.com/TypeFox/xtext2langium)

- [Arduino](https://create.arduino.cc/editor/)

<h2>Modèle et Quelques Concepts du Langage</h2>
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

<h2>Interpréteur</h2>

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

<h2>Compilateur</h2>

<h2>Exemples de codes</h2>

```
let void square(){
    var RMLInt val1 = 30
    var RMLInt val2 = 16
    var RMLInt val3 = 15
    var RMLInt val4 = 50
    var RMLInt rot = 2
    var RMLBoolean condition = 5 < 6
    if(condition) {
        Clock rot
        Forward val4 mm
        Forward val4 mm
        Forward val4 mm
        Forward val4 mm
    } else {
        doSomething()
    }
}

let void doSomething() {

    var RMLInt a = 60
    var RMLInt b = a / 2
    loop b < a {
        Forward a mm
        b = b + 2
    }

}

let RMLInt variables(RMLInt test){
    variables(4)
    var RMLBoolean test = true < true + true
    if ( true ) {
        setRotation(90)
    }
    return 1
}


let void main() {
    setSpeed(150 dm)
    var RMLInt count = 0
    var RMLInt test = count
    loop count < 50
    {    
        count = count + 1
        square()
    }
}

```
