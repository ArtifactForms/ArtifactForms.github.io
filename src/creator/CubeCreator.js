import { Mesh } from '../Mesh.js';

export class CubeCreator {
  constructor(radius = 1) {
    this.radius = radius;
    this.mesh = null;
  }

  create() {
    this.initializeMesh();
    this.createVertices();
    this.createFaces();
    return this.mesh;
  }

  initializeMesh() {
    this.mesh = new Mesh();
  }

  createVertices() {
    const r = this.radius;
    this.addVertex(+r, -r, -r);
    this.addVertex(+r, -r, +r);
    this.addVertex(-r, -r, +r);
    this.addVertex(-r, -r, -r);
    this.addVertex(+r, +r, -r);
    this.addVertex(+r, +r, +r);
    this.addVertex(-r, +r, +r);
    this.addVertex(-r, +r, -r);
  }

  createFaces() {
    this.addFace(3, 0, 1, 2); // bottom
    this.addFace(6, 5, 4, 7); // top
    this.addFace(1, 0, 4, 5); // front
    this.addFace(1, 5, 6, 2); // right
    this.addFace(6, 7, 3, 2); // back
    this.addFace(3, 7, 4, 0); // left
  }

  addVertex(x, y, z) {
    this.mesh.addVertex(x, y, z);
  }

  addFace(...indices) {
    this.mesh.addFace(...indices);
  }

  getRadius() {
    return this.radius;
  }

  setRadius(r) {
    this.radius = r;
  }
}