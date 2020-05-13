"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subjects = ["Klaus", "Dieter", "Hans", "Jürgen", "Ralf"];
    let verbs = ["mag", "isst", "hasst", "liebt", "will"];
    let objects = ["Pommes", "Burger", "Lasagne", "Pizza", "Eis"];
    createVerses(subjects, verbs, objects);
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    function createVerses(subjects, verbs, objects) {
        for (let i = subjects.length; i > 0; i--) {
            let randomSubjectIndex = getRandomInt(subjects.length);
            let randomVerbsIndex = getRandomInt(subjects.length);
            let randomObjectsIndex = getRandomInt(subjects.length);
            //Log random sentence to console
            console.log(subjects[randomSubjectIndex] + " " + verbs[randomVerbsIndex] + " " + objects[randomObjectsIndex]);
            //Remove the used words from the arrays
            subjects = subjects.splice(randomSubjectIndex, 1);
            verbs = verbs.splice(randomVerbsIndex, 1);
            objects = objects.splice(randomObjectsIndex, 1);
        }
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=zufallsgedicht.js.map