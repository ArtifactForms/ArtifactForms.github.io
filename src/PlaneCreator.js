import { Mesh } from './Mesh.js';

export class PlaneCreator {
    constructor() {
        this.radius = 1.0;
        this.mesh = null;
    }

    create() {
        this.initializeMesh();
        this.createVertices();
        this.createFace();
        return this.mesh;
    }

    initializeMesh() {
        this.mesh = new Mesh();
    }

    createVertices() {
        const r = this.radius;
        this.addVertex(+r, 0, -r);
        this.addVertex(+r, 0, +r);
        this.addVertex(-r, 0, +r);
        this.addVertex(-r, 0, -r);
    }

    addVertex(x, y, z) {
        this.mesh.addVertex(x, y, z);
    }

    createFace() {
        this.mesh.addFace(0, 1, 2, 3);
    }

    getRadius() {
        return this.r;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getSize() {
        return this.radius * 2.0;
    }

    setSize(size) {
        this.setRadius(size * 0.5);
    }
}
