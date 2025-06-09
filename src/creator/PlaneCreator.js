import { Mesh } from '../Mesh.js';

/**
 * PlaneCreator generates a flat quad mesh (plane) centered at the origin.
 * The plane lies in the XZ plane and has configurable size.
 */
export class PlaneCreator {
    /** @type {number} */
    #radius = 1.0;

    /** @type {Mesh|null} */
    #mesh = null;

    /**
     * Creates a new mesh representing the plane.
     * @returns {Mesh} The generated plane mesh.
     */
    create() {
        this.#initializeMesh();
        this.#createVertices();
        this.#createFace();
        return this.#mesh;
    }

    /**
     * Initializes the internal Mesh instance.
     * @private
     */
    #initializeMesh() {
        this.#mesh = new Mesh();
    }

    /**
     * Adds the 4 corner vertices of the plane.
     * The plane is centered at the origin and lies in the XZ plane.
     * @private
     */
    #createVertices() {
        const r = this.#radius;
        this.#addVertex(+r, 0, -r);
        this.#addVertex(+r, 0, +r);
        this.#addVertex(-r, 0, +r);
        this.#addVertex(-r, 0, -r);
    }

    /**
     * Adds a single vertex to the mesh.
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} z - Z coordinate.
     * @private
     */
    #addVertex(x, y, z) {
        this.#mesh.addVertex(x, y, z);
    }

    /**
     * Creates the single quad face for the plane using its 4 vertices.
     * @private
     */
    #createFace() {
        this.#mesh.addFace(0, 1, 2, 3);
    }

    /**
     * Gets the current radius (half the side length) of the plane.
     * @returns {number} The radius.
     */
    getRadius() {
        return this.#radius;
    }

    /**
     * Sets a new radius for the plane.
     * @param {number} radius - Half of the desired side length.
     */
    setRadius(radius) {
        this.#radius = radius;
    }

    /**
     * Returns the full size (side length) of the plane.
     * @returns {number} The full width/length of the plane.
     */
    getSize() {
        return this.#radius * 2.0;
    }

    /**
     * Sets the plane's size (side length) and updates the radius accordingly.
     * @param {number} size - The desired full side length of the plane.
     */
    setSize(size) {
        this.setRadius(size * 0.5);
    }
}
