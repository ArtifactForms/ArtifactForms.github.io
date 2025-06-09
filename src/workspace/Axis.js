/**
 * Class representing a 3D coordinate axis system for drawing in p5.js.
 * Supports toggling visibility of X, Y, and Z axes and customizing stroke weight.
 */
export class Axis {
    /** @type {boolean} Whether the X axis is visible */
    #xAxisVisible = true;

    /** @type {boolean} Whether the Y axis is visible */
    #yAxisVisible = true;

    /** @type {boolean} Whether the Z axis is visible */
    #zAxisVisible = true;

    /** @type {number} Length of each axis line */
    #size = 1000;

    /** @type {number} Thickness of the axis lines */
    #strokeWeight = 1;

    /**
     * Offsets to draw axes slightly above and below the grid to avoid z-fighting.
     * @type {number[]}
     * @private
     */
    #zOffsets = [-0.0001, 0.0001];

    /**
     * Draws the visible axes.
     */
    draw() {
        if (this.#xAxisVisible) {
            this.#drawDualAxis([246, 54, 82], 0, 0, [-1, 0, 1, 0]);
        }
        if (this.#yAxisVisible) {
            this.#drawSingleAxis([112, 164, 28], -90, 0, [-1, 0, 1, 0], 0);
        }
        if (this.#zAxisVisible) {
            this.#drawDualAxis([47, 132, 227], 0, 0, [0, -1, 0, 1]);
        }
    }

    /**
     * Draws a single axis line with specified color, rotations, coordinates, and z-offset.
     * @param {number[]} color - RGB color array for the stroke (e.g. [255, 0, 0])
     * @param {number} [rotYDeg=0] - Rotation around Y-axis in degrees
     * @param {number} [rotXDeg=0] - Rotation around X-axis in degrees
     * @param {number[]} lineCoords - Array of 4 numbers representing line endpoints [x1, y1, x2, y2]
     * @param {number} [zOffset=0] - Offset along the Z-axis to prevent overlap with grid
     * @private
     */
    #drawSingleAxis(color, rotYDeg = 0, rotXDeg = 0, lineCoords, zOffset = 0) {
        push();
        stroke(...color);
        strokeWeight(this.#strokeWeight);
        rotateX(radians(-90));
        if (rotYDeg !== 0) rotateY(radians(rotYDeg));
        if (rotXDeg !== 0) rotateX(radians(rotXDeg));
        if (zOffset !== 0) translate(0, 0, zOffset);
        line(...lineCoords.map(v => v * this.#size));
        pop();
    }

    /**
     * Draws an axis twice, with a small offset above and below the grid.
     * Used to avoid z-fighting artifacts.
     * @param {number[]} color - RGB color array for the stroke
     * @param {number} rotYDeg - Rotation around Y-axis in degrees
     * @param {number} rotXDeg - Rotation around X-axis in degrees
     * @param {number[]} lineCoords - Array of 4 numbers representing line endpoints [x1, y1, x2, y2]
     * @private
     */
    #drawDualAxis(color, rotYDeg, rotXDeg, lineCoords) {
        for (const offset of this.#zOffsets) {
            this.#drawSingleAxis(color, rotYDeg, rotXDeg, lineCoords, offset);
        }
    }

    /**
     * Sets the stroke weight for drawing axes.
     * @param {number} weight - The thickness of the axis lines
     */
    setStrokeWeight(weight) {
        this.#strokeWeight = weight;
    }

    /**
     * Gets the current stroke weight for axis lines.
     * @returns {number} The stroke weight
     */
    getStrokeWeight() {
        return this.#strokeWeight;
    }

    /**
     * Checks if the X axis is visible.
     * @returns {boolean} True if visible, false otherwise
     */
    isXAxisVisible() {
        return this.#xAxisVisible;
    }

    /**
     * Sets the visibility of the X axis.
     * @param {boolean} visible - True to show, false to hide
     */
    setXAxisVisible(visible) {
        this.#xAxisVisible = visible;
    }

    /**
     * Checks if the Y axis is visible.
     * @returns {boolean} True if visible, false otherwise
     */
    isYAxisVisible() {
        return this.#yAxisVisible;
    }

    /**
     * Sets the visibility of the Y axis.
     * @param {boolean} visible - True to show, false to hide
     */
    setYAxisVisible(visible) {
        this.#yAxisVisible = visible;
    }

    /**
     * Checks if the Z axis is visible.
     * @returns {boolean} True if visible, false otherwise
     */
    isZAxisVisible() {
        return this.#zAxisVisible;
    }

    /**
     * Sets the visibility of the Z axis.
     * @param {boolean} visible - True to show, false to hide
     */
    setZAxisVisible(visible) {
        this.#zAxisVisible = visible;
    }
}
