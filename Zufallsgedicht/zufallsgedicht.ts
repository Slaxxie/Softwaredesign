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
            let randomSubjectsIndex: number = getRandomInt(subjects.length);
            let randomVerbsIndex: number = getRandomInt(subjects.length);
            let randomObjectsIndex: number = getRandomInt(subjects.length);

            console.log(subjects[randomSubjectsIndex] + " " + verbs[randomVerbsIndex] + " " + objects[randomObjectsIndex]);
            subjects = subjects.splice(randomSubjectsIndex, 1);
            verbs = verbs.splice(randomVerbsIndex, 1);
            objects = objects.splice(randomObjectsIndex, 1);
        }
    }
}