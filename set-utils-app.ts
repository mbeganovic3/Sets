/**
 * Author: Meris Beganovic 
 *
 * ONYEN: merisb
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */

import { print, csvToList } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

export let main = async () => {
    let numbers: List<number> = listify(1, 2, 3);
    print(includes(numbers, 2)); // true
    let letters: List<string> = listify("a", "b", "c");
    print(includes(letters, "d")); // false

    print("SETTTTTTTTTTTTTTTTTTTTT");
    print(isSet(null)); // true, because a set can be empty
    print(isSet(listify("a", "b"))); // true, because there are no duplicates
    print(isSet(listify(1, 2))); // true, because there are no duplicates
    print(isSet(listify("a", "b", "a"))); // false, because "a" appears twice
    print(isSet(listify(2, 2, 3))); // false, because 2 appears twice

    print("SUBSETTTTTTTTTTTTTTT");
    let x: List<number> = listify(1, 2, 3);
    let y: List<number> = listify(2, 3, 4);
    let z: List<number> = listify(0, 3, 2, 1, 4);
    print(isSubset(x, y)); // false, because y does not contain 1
    print(isSubset(z, x)); // false, because x does not contain 0 or 4
    print(isSubset(x, null)); // false, empty set does not contain 1, 2, or 3
    print(isSubset(null, null)); // true
    print(isSubset(null, x)); // true
    print(isSubset(x, x)); // true
    print(isSubset(x, z)); // true

    print("SUPERSETTTTTTTTTTTTTTT");
    print(isSuperset(y, x)); // false, because y does not contain 1
    print(isSuperset(x, z)); // false, because x does not contain 0 or 4
    print(isSuperset(null, x)); // false, empty set does not contain 1, 2, or 3
    print(isSuperset(null, null)); // true
    print(isSuperset(x, null)); // true
    print(isSuperset(x, x)); // true
    print(isSuperset(z, x)); // true

    print("STRICTSUBSETTTTTTTTT");
    print(isStrictSubset(null, null)); // false
    print(isStrictSubset(x, x)); // false
    print(isStrictSubset(null, x)); // true
    print(isStrictSubset(x, z)); // true
    print(isStrictSubset(y, z)); // true

    print("SET EQUALLLLLLLLLL");
    let xx: List<number> = listify(2, 3, 1);
    print(isSetEqual(x, null)); // false
    print(isSetEqual(x, y)); // false
    print(isSetEqual(null, null)); // true
    print(isSetEqual(x, x)); // true
    print(isSetEqual(x, xx)); // true, note: order of set elements!

    print("UNIONNNNNNNNN");
    x = listify(3, 1, 2);
    y = listify(2, 3, 4);
    print(union(x, y)); // A set with 1, 2, 3, 4 (in any order)

    print("INTERSECTTTTTTTTTTTTT");
    x = listify(3, 1, 2);
    y = listify(2, 3, 4);
    print(intersect(x, y)); // A set with 2, 3 (in any order)

    print("SUBTRACTTTTTT");
    let d: List<string> = listify("c", "a", "b");
    let e: List<string> = listify("b", "c", "d");
    let f: List<string> = listify("a");
    print(subtract(d, e)); // A set with "a" as the only value
    print(subtract(e, d)); // A set with "d" as the only value
    print(subtract(d, f)); // A set with "b", "c" (in any order)
    print(subtract(f, d)); // empty set
};

export let includes = <T>(list: List<T>, item: T): boolean => {
    if (list === null) {
        return false;
    } else if (first(list) === item) {
        return true;
    } else {
        return includes(rest(list), item);
    } 
};

export let isSet = <T>(list: List<T>): boolean => {
    if (list === null) {
        return true;
    } else if (includes(rest(list), first(list)) === true) {
        return false; 
    } else {
        return true;
    }
};

export let isSubset = <T>(a: List<T>, b: List<T>): boolean => {
    if (a === null) {
        return true;
    } else if (includes(b, first(a)) === true) {
        return isSubset(rest(a), b);
    } else {
        return false;
    }
};

export let isSuperset = <T>(a: List<T>, b: List<T>): boolean => {
    if (b === null) {
        return true;
    } else if (isSubset(b, a) === true) {
        return true;
    } else {
        return false;
    }
};

export let isStrictSubset = <T>(a: List<T>, b: List<T>): boolean => {
    if (a === null && b !== null) {
        return true;
    } else if (isSubset(a, b) === true && isSubset(b, a) === false) {
        return true;
    } else {
        return false;
    }
};

export let isSetEqual = <T>(a: List<T>, b: List<T>): boolean => {
    if (a === null && b === null) {
        return true;
    } else if (isSubset(a, b) === true && isSubset(b, a) === true) {
        return true;
    } else {
        return false;
    }
};

export let union = <T>(a: List<T>, b: List<T>): List<T> => {
    if (a === null) {
        return b;
    } else if (includes(b, first(a))) {
        return union(rest(a), b);
    } else {
        return cons(first(a), union(rest(a), b));
    }
};

export let intersect = <T>(a: List<T>, b: List<T>): List<T> => {
    if (a === null) {
        return null;
    } else if (includes(b, first(a))) {
        return cons(first(a), intersect(rest(a), b));
    } else {
        return intersect(rest(a), b);
    }
};

export let subtract = <T>(a: List<T>, b: List<T>): List<T> => {
    if (a === null) {
        return null;
    } else if (includes(b, first(a))) {
        return (subtract(rest(a), b));
    } else {
        return cons(first(a), subtract(rest(a), b));
    }
};




main();