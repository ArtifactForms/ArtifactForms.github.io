import { Mesh } from '../Mesh.js';

/**
 * TriakisTetrahedronCreator generates a triakis tetrahedron mesh.
 * The shape is formed by augmenting a regular tetrahedron with pyramid-like structures on each face.
 */
export class TriakisTetrahedronCreator {
    /**
     * Scalar multiplier for the base tetrahedron size.
     * @type {number}
     * @private
     */
    #a = 5.0 / 3.0;

    /**
     * The mesh instance being created.
     * @type {Mesh|null}
     * @private
     */
    #mesh = null;

    /**
     * Creates and returns a mesh representing a triakis tetrahedron.
     * @returns {Mesh} The generated mesh.
     */
    create() {
        this.#initializeMesh();
        this.#createVertices();
        this.#createFaces();
        return this.#mesh;
    }

    /**
     * Initializes the Mesh instance.
     * @private
     */
    #initializeMesh() {
        this.#mesh = new Mesh();
    }

    /**
     * Adds all vertices needed for the triakis tetrahedron.
     * @private
     */
    #createVertices() {
        this.#createTetrahedronVertices();
        this.#createMidEdgeVertices();
    }

    /**
     * Adds the 4 base vertices of a regular tetrahedron.
     * @private
     */
    #createTetrahedronVertices() {
        const a = this.#a;
        this.#addVertex(a, a, a);
        this.#addVertex(a, -a, -a);
        this.#addVertex(-a, -a, a);
        this.#addVertex(-a, a, -a);
    }

    /**
     * Adds 4 additional vertices located in the center of each face (or edge-midpoints).
     * These are used to create the pyramid-like augmentations.
     * @private
     */
    #createMidEdgeVertices() {
        this.#addVertex(1, -1, 1);
        this.#addVertex(-1, 1, 1);
        this.#addVertex(1, 1, -1);
        this.#addVertex(-1, -1, -1);
    }

    /**
     * Defines all triangular faces of the triakis tetrahedron by connecting base and mid-edge vertices.
     * @private
     */
    #createFaces() {
        this.#addFace(4, 0, 5);
        this.#addFace(6, 1, 7);
        this.#addFace(2, 4, 5);
        this.#addFace(3, 6, 7);
        this.#addFace(5, 0, 6);
        this.#addFace(1, 4, 7);
        this.#addFace(4, 2, 7);
        this.#addFace(3, 5, 6);
        this.#addFace(0, 4, 6);
        this.#addFace(4, 1, 6);
        this.#addFace(2, 5, 7);
        this.#addFace(5, 3, 7);
    }

    /**
     * Adds a vertex to the mesh at the given coordinates.
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} z - Z coordinate.
     * @private
     */
    #addVertex(x, y, z) {
        this.#mesh.addVertex(x, y, z);
    }

    /**
     * Adds a triangular face to the mesh using the given vertex indices.
     * @param {...number} indices - Indices of the vertices forming the face.
     * @private
     */
    #addFace(...indices) {
        this.#mesh.addFace(...indices);
    }
}
