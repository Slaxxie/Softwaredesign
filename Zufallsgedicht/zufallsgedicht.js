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
            let rndS = getRandomInt(subjects.length);
            let rndV = getRandomInt(subjects.length);
            let rndO = getRandomInt(subjects.length);
            console.log(subjects[rndS] + " " + verbs[rndV] + " " + objects[rndO]);
            subjects = subjects.splice(rndS, 1);
            verbs = verbs.splice(rndV, 1);
            objects = objects.splice(rndO, 1);
        }
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=zufallsgedicht.js.map