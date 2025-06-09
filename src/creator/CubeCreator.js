import { Mesh } from '../Mesh.js';

/**
 * CubeCreator generates a cubic Mesh with a specified half-edge length (radius).
 * It constructs the mesh by creating 8 corner vertices and 6 quad faces.
 */
export class CubeCreator {
  /** @type {number} Half the length of the cube's edges. */
  #radius = 1;

  /** @type {Mesh|null} Internal Mesh instance being constructed. */
  #mesh = null;

  /**
   * Builds and returns a new cube mesh.
   * @returns {Mesh} The generated cube mesh.
   */
  create() {
    this.#initializeMesh();
    this.#createVertices();
    this.#createFaces();
    return this.#mesh;
  }

  /**
   * Instantiates a fresh Mesh object.
   * @private
   */
  #initializeMesh() {
    this.#mesh = new Mesh();
  }

  /**
   * Adds the 8 vertices at all ±radius combinations.
   * @private
   */
  #createVertices() {
    const r = this.#radius;
    this.#addVertex(+r, -r, -r);
    this.#addVertex(+r, -r, +r);
    this.#addVertex(-r, -r, +r);
    this.#addVertex(-r, -r, -r);
    this.#addVertex(+r, +r, -r);
    this.#addVertex(+r, +r, +r);
    this.#addVertex(-r, +r, +r);
    this.#addVertex(-r, +r, -r);
  }

  /**
   * Defines the 6 faces of the cube using vertex indices.
   * Each face is a quad specified by four vertex indices.
   * @private
   */
  #createFaces() {
    this.#addFace(3, 0, 1, 2); // bottom
    this.#addFace(6, 5, 4, 7); // top
    this.#addFace(1, 0, 4, 5); // front
    this.#addFace(1, 5, 6, 2); // right
    this.#addFace(6, 7, 3, 2); // back
    this.#addFace(3, 7, 4, 0); // left
  }

  /**
   * Delegates adding a single vertex to the internal mesh.
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   * @param {number} z - Z coordinate.
   * @private
   */
  #addVertex(x, y, z) {
    this.#mesh.addVertex(x, y, z);
  }

  /**
   * Delegates adding a face to the internal mesh.
   * @param {...number} indices - Indices of the vertices forming the face.
   * @private
   */
  #addFace(...indices) {
    this.#mesh.addFace(...indices);
  }

  /**
   * Returns the configured cube radius.
   * @returns {number} The current half-edge length of the cube.
   */
  getRadius() {
    return this.#radius;
  }

  /**
   * Sets a new radius for the cube. Does not affect previously created meshes.
   * @param {number} r - New half-edge length for future mesh creation.
   */
  setRadius(radius) {
    this.#radius = radius;
  }
}
