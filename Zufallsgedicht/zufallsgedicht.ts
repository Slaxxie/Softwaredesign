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
            let randomSubjectIndex: number = getRandomInt(subjects.length);
            let randomVerbsIndex: number = getRandomInt(subjects.length);
            let randomObjectsIndex: number = getRandomInt(subjects.length);

            //Log random sentence to console
            console.log(subjects[randomSubjectIndex] + " " + verbs[randomVerbsIndex] + " " + objects[randomObjectsIndex]);

            //Remove the used words from the arrays
            subjects = subjects.splice(randomSubjectIndex, 1);
            verbs = verbs.splice(randomVerbsIndex, 1);
            objects = objects.splice(randomObjectsIndex, 1);
        }
    }
}

