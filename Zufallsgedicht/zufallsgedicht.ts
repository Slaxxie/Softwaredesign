
let sentence: string = prompt("Bitte gebe einen Satz ein.");

let subjects: string[] = ["eins", "eins", "eins", "eins", "eins"];
let verbs: string[] = ["zwei", "zwei", "zwei", "zwei", "zwei"];
let objects: string[] = ["drei", "drei", "drei", "drei", "drei"];


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
createVerses(subjects , verbs, objects);

