/**
 * Represents a 2D grid rendered on the XZ plane, often used as a ground guide.
 * Internally uses private fields for encapsulation and hides rendering logic.
 */
export class Grid {
    /** @type {number} Number of rows in the grid. */
    #rows = 30;

    /** @type {number} Number of columns in the grid. */
    #cols = 30;

    /** @type {number} Size of each cell in the grid (usually in world units). */
    #size = 1;

    /** @type {number} Stroke color of the grid lines (grayscale: 0–255). */
    #color = 74;

    /** @type {boolean} Visibility flag for the grid. */
    #visible = true;

    /**
     * Renders the grid.
     */
    draw() {
        if (!this.#visible) return;

        stroke(this.#color);
        noFill();

        push();
        this.#orientOnGroundPlane();
        this.#translateToCenter();
        this.#drawCells();
        pop();
    }

    /**
     * Rotates the scene to align the grid with the XZ plane (ground).
     * @private
     */
    #orientOnGroundPlane() {
        rotateX(radians(-90));
    }

    /**
     * Translates the grid to center it around the origin.
     * @private
     */
    #translateToCenter() {
        const offsetX = -(this.#cols * this.#size) / 2;
        const offsetY = -(this.#rows * this.#size) / 2;
        translate(offsetX, offsetY);
    }

    /**
     * Draws all cells of the grid.
     * @private
     */
    #drawCells() {
        for (let row = 0; row < this.#rows; row++) {
            for (let col = 0; col < this.#cols; col++) {
                const x = col * this.#size;
                const y = row * this.#size;
                rect(x, y, this.#size, this.#size);
            }
        }
    }

    /**
     * Sets whether the grid should be visible.
     * @param {boolean} isVisible - True to show the grid, false to hide it.
     */
    setVisible(isVisible) {
        this.#visible = isVisible;
    }

    /**
     * Checks if the grid is currently visible.
     * @returns {boolean} True if visible, false otherwise.
     */
    isVisible() {
        return this.#visible;
    }
}