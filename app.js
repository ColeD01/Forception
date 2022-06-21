var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]

var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    let result = []
    for (i = 0; i < people.length; i++) {
        // people[i].
        result.push(people[i] + ':')

        for (j = 0; j < alphabet.length; j++) {
            var newAlphabet = alphabet.split("")
            let upperAlpha = newAlphabet.map(element => {
                return element.toUpperCase();
            });
            result.push(upperAlpha[j])
        }
    }
    return result
}
console.log(forception(people, alphabet))
