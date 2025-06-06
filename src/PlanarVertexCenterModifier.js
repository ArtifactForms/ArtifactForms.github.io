import { Face } from './Face.js';
import { Vector3 } from './Vector3.js';

export class PlanarVertexCenterModifier {
    modify(mesh) {
        return this.modifyFaces(mesh, mesh.faces);
    }

    modifyFace(mesh, face) {
        return this.modifyFaces(mesh, [face]);
    }

    modifyFaces(mesh, facesToSubdivide) {
        const newFaces = [];
        const facesCopy = [...facesToSubdivide];
        const facesToRemove = [];

        for (const face of facesCopy) {
            const indices = face.indices;
            const center = this.calculateFaceCenter(mesh, face);
            const centerIndex = this.addVertex(mesh, center);

            const vertexCount = indices.length;
            for (let i = 0; i < vertexCount; i++) {
                const a = indices[i];
                const b = indices[(i + 1) % vertexCount];
                newFaces.push(new Face(a, b, centerIndex)); // real face instance!
            }

            facesToRemove.push(face);
        }

        this.removeFaces(mesh, facesToRemove);
        this.addFaces(mesh, newFaces);

        return mesh;
    }

    addVertex(mesh, vertex) {
        mesh.vertices.push(new Vector3(vertex.x, vertex.y, vertex.z)); // defencive copy
        return mesh.vertices.length - 1;
    }

    removeFaces(mesh, faces) {
        for (const face of faces) {
            const index = mesh.faces.indexOf(face);
            if (index !== -1) {
                mesh.faces.splice(index, 1);
            }
        }
    }

    addFaces(mesh, faces) {
        mesh.faces.push(...faces);
    }

    calculateFaceCenter(mesh, face) {
        const indices = face.indices;
        let center = new Vector3(0, 0, 0);

        for (const index of indices) {
            const v = mesh.vertices[index];
            center = center.add(v);
        }

        return center.divideScalar(indices.length);
    }
}
