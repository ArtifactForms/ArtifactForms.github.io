/**
 * Class responsible for rendering 3D meshes using p5.js.
 */
export class MeshRenderer {
    /**
     * Draws the given mesh by iterating over its faces and rendering
     * each as a shape (triangles, quads, or polygons).
     *
     * @param {Object} mesh - The mesh object to draw.
     * @param {Array} mesh.faces - Array of face objects, each containing an array of vertex indices.
     * @param {Array} mesh.vertices - Array of vertex objects with x, y, z coordinates.
     *
     * Each face's indices specify which vertices compose the face.
     * Faces with 3 vertices are drawn as TRIANGLES, 4 as QUADS, others as generic polygons.
     */
    drawMesh(mesh) {
        push();
        for (let face of mesh.faces) {
            switch (face.indices.length) {
                case 3:
                    beginShape(TRIANGLES);
                    break;
                case 4:
                    beginShape(QUADS);
                    break;
                default:
                    beginShape();
            }

            for (let i = 0; i < face.indices.length; i++) {
                const v = mesh.vertices[face.indices[i]];
                vertex(v.x, v.y, v.z);
            }

            endShape(CLOSE);
        }
        pop();
    }
}
