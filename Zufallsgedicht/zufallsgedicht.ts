
let subjects: string[] = ["Klaus", "Dieter", "Hans", "Jürgen", "Ralf"];
let verbs: string[] = ["mag", "isst", "hasst", "liebt", "will"];
let objects: string[] = ["Pommes", "Burger", "Lasagne", "Pizza", "Eis"];

createVerses(subjects , verbs, objects);

function createVerses(subjects: string[], verbs: string[], objects: string[]): void {
    
    for (let i: number = subjects.length; i > 0 ; i--) {
        let rndS: number = Math.random[subjects.length];
        let rndV: number = Math.random[subjects.length];
        let rndO: number = Math.random[subjects.length];

        console.log(subjects[rndS] + " " + verbs[rndV] + " " + objects[rndO]);
        subjects = subjects.splice(rndS, 1);
        verbs = verbs.splice(rndV, 1);
        objects = objects.splice(rndO, 1);
    }

}


