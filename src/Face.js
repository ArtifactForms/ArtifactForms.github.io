export class Face {

  #normal;

  constructor(...indices) {
    this.indices = indices;
  }

  getVertexCount() {
    return this.indices.length;
  }

  getIndexAt(i) {
    return this.indices[i];
  }

  getNormal() {
    return this.#normal;
  }

  setNormal(normal) {
    this.#normal = normal;
  }
}