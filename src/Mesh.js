import { Face } from './Face.js';
import { Vector3 } from './Vector3.js';

export class Mesh {
  constructor() {
    this.vertices = [];
    this.faces = [];
  }

  add(v) {
    if (v instanceof Vector3) {
      this.vertices.push(v);
    } else if (v instanceof Face) {
      this.faces.push(v);
    }
  }

  addVertex(x, y, z) {
    const idx = this.vertices.length;
    this.vertices.push(new Vector3(x, y, z));
    return idx;
  }

  addFace(...indices) {
    this.faces.push(new Face(...indices));
  }

  getVertexCount() {
    return this.vertices.length;
  }

  getFaceCount() {
    return this.faces.length;
  }

  getFaceAt(i) {
    return this.faces[i];
  }

  calculateFaceCenter(face) {
    let sum = new Vector3(0, 0, 0);
    const count = face.getVertexCount();

    for (let i = 0; i < count; i++) {
      const vidx = face.getIndexAt(i);
      const v = this.vertices[vidx];
      sum = sum.add(v);
    }
    return sum.divideScalar(count);
  }

  calculateFaceNormal(face) {
    let faceNormal = new Vector3(0, 0, 0);
    const n = face.getVertexCount();

    if (n < 3) {
      return faceNormal;
    }

    for (let i = 0; i < n; i++) {
      const currIdx = face.getIndexAt(i);
      const nextIdx = face.getIndexAt((i + 1) % n);

      const currV = this.vertices[currIdx];
      const nextV = this.vertices[nextIdx];

      const x = (currV.y - nextV.y) * (currV.z + nextV.z);
      const y = (currV.z - nextV.z) * (currV.x + nextV.x);
      const z = (currV.x - nextV.x) * (currV.y + nextV.y);

      faceNormal = faceNormal.add(new Vector3(x, y, z));
    }

    return faceNormal.normalize();
  }

  removeFace(face) {
    const idx = this.faces.indexOf(face);
    if (idx !== -1) {
      this.faces.splice(idx, 1);
    }
  }

  updateFaceNormals() {
    for (let face of this.faces) {
      face.setNormal(this.calculateFaceNormal(face));
    }
  }
}
