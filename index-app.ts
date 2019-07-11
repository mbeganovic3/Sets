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

import { print, promptNumber } from "introcs";
import { List, cons, first, rest } from "introcs/list";

export let main = async () => {
    // TODO: Your function calls go inside of this block
    let p0: List<number> = point(3, 4);
    print(p0);
    
    let x: number = getX(p0);
    print(x);
 
    print(getY(p0));

    let s: string = pointToString(p0);
    print(s);

    let p0Inverse: List<number> = inverse(p0);
    print(pointToString(p0Inverse));

    let result: number = slope(point(0, 0), point(1, 1));
    print(result);

    let answer: List<number> = add(point(1, 2), point(4, 1));
    print(pointToString(answer)); 

    let answerToDistance: number = distance(point(1, 2), point(3, 4));
    print(answerToDistance);

    print(isPoint(null)); // false
    print(isPoint(cons(1, null))); // false
    print(isPoint(point(1, 2))); // true
    print(isPoint(cons(0, point(1, 2)))); // false
    
    print(pointToString(point(1, 2))); // Prints "(1, 2)"
    print(pointToString(null)); // Prints "Error! Not a point."

    print(inverse(point(1, 2))); // Prints: 2 → 1 → null
    print(inverse(cons(1, null))); // Prints: null

    print(slope(null, null)); // Prints NaN

    print(add(point(1, 2), null)); // Prints null

    print(distance(cons(1, null), point(2, 3))); // Prints NaN

 };

 // TODO: Define your functions here
export let point = (x: number, y: number): List<number> => {
    return cons(x, cons(y));
};

export let getX = (x: List<number>): number => {
    return first(x);
 };

export let getY = (y: List<number>): number => {
    return first(rest(y));
 };

export let pointToString = (s: List<number>): string => {
    if (isPoint(s) === false) {
        return "Error! Not a point.";
    } else {
    return "(" + first(s) + ", " + first(rest(s)) + ")";
    }
 };

export let inverse = (i: List<number>): List<number> => {
    if (isPoint(i) === false) {
        return null;
    } else {
    return cons(first(rest(i)), cons(first(i)));
    }
 };

export let slope = (p0: List<number>, p1: List<number>): number => {
    if (isPoint(p0) === false || isPoint(p1) === false) {
        return NaN;
    } else {
    return (first(rest(p1)) - first(rest(p0))) / ((first(p1) - first(p0)));
    }
 };

export let add = (p0: List<number>, p1: List<number>): List<number> => {
    if (isPoint(p0) === false || isPoint(p1) === false) {
        return null;
    } else {
    return (cons(first(p0) + first(p1), cons(first(rest(p0)) + first(rest(p1)))));
    }
 };

export let distance = (p0: List<number>, p1: List<number>): number => {
    if (isPoint(p0) === false || isPoint(p1) === false) {
        return NaN;
    } else {
    let beforeSqrt: number = (first(p0) - first(p1)) ** 2 + (first(rest(p0)) - first(rest(p1))) ** 2;
    return Math.sqrt(beforeSqrt); }
};    

export let isPoint = (points: List<number>): boolean => {
    if (points === null) {
        return false;
    } else { 
        if ((rest(points)) === null) {
            return false;
        } else {
            if (rest(rest(points)) === null) {
                return true;
            } else {
            return false;
            }
        }
    }
}; 

main();