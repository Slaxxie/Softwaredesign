namespace Zufallsgedicht {
    let subjects: string[] = ["Klaus", "Dieter", "Hans", "Jürgen", "Ralf"];
    let verbs: string[] = ["mag", "isst", "hasst", "liebt", "will"];
    let objects: string[] = ["Pommes", "Burger", "Lasagne", "Pizza", "Eis"];

    createVerses(subjects, verbs, objects);

    function getRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function createVerses(subjects: string[], verbs: string[], objects: string[]): void {

        for (let i: number = subjects.length; i > 0; i--) {
            let rndS: number = getRandomInt(subjects.length);
            let rndV: number = getRandomInt(subjects.length);
            let rndO: number = getRandomInt(subjects.length);

            console.log(subjects[rndS] + " " + verbs[rndV] + " " + objects[rndO]);
            subjects = subjects.splice(rndS, 1);
            verbs = verbs.splice(rndV, 1);
            objects = objects.splice(rndO, 1);
        }

    }

}

