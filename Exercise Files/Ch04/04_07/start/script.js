let attendance = {
    _list: [],
    // New get and set methods for syntactic sugar
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(", ");
    },
    // Normal way
    setter: function(value) {
        this._list.push(value)
    },
    getter: function() { return this._list.join((", ")); }
};

attendance.addName = "Guy Man";
console.log(attendance.list);

attendance.addName = "Person";
attendance.addName = "hello";
console.log(attendance.list);

// Normal way I'm used to
attendance.setter("dough");
console.log(attendance.getter());

class Hike {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace;
    }
    set setPace(pace) {
        this.pace = pace;
    }
    get lengthInHours() {
        return `${this.calcLength()} hours`;
    }
    calcLength() {
        return this.distance / this.pace;
    }
}

const mtTallac = new Hike(10, 2);
console.log(mtTallac.lengthInHours); // 5 hours
mtTallac.setPace = 5;
console.log(mtTallac.lengthInHours); // 2 hours