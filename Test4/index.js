class Figure {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    setX(newX) {
        this.#x = newX;
    }

    setY(newY) {
        this.#y = newY;
    }

    square() {
        return undefined;
    }
}

class Circle extends Figure {
    #r;

    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }

    getR() {
        return this.#r;
    }

    setR(newR) {
        this.#r = newR;
    }

    square() {
        return Math.PI * this.#r ** 2;
    }
}

class Rectangle extends Figure {
    #h;
    #w;

    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w;
    }

    getH() {
        return this.#h;
    }

    getW() {
        return this.#w;
    }

    setH(newH) {
        this.#h = newH;
    }

    setW(newW) {
        this.#w = newW;
    }

    square() {
        return this.#h * this.#w;
    }
}
