
// This is basically the normal way constructors are handled, name = name; sound = sound
// function skier(name, sound) {
//     return {
//         name: name,
//         sound: sound,
//         powderYell: function() {
//             let yell = this.sound.toUpperCase();
//             console.log(`${yell}! ${yell}!`);
//         }
//     };
// }

function skier(name, sound) {
    return {
        name,
        sound,
        powderYell: function() {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    };
}
skier("Bro", "woot").powderYell();

