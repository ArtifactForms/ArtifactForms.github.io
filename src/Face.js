export class Face {
  constructor(...indices) {
    this.indices = indices;
  }

  getVertexCount() {
    return this.indices.length;
  }

  getIndexAt(i) {
    return this.indices[i];
  }
}