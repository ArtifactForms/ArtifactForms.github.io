import { Axis } from './Axis.js';
import { Grid } from './Grid.js';

export class Workspace {
    constructor() {
        this.rotationX = -Math.PI * 0.25;
        this.rotationY = -Math.PI * 0.25;
        this.backgroundColor = 60;
        this.scaleFactor = 100;
        this.smoothFactor = 8;
        this.faceNormalsVisible = false;
        this.wireframe = false;
        this.grid = new Grid();
        this.axis = new Axis();
        this.meshRenderer = new MeshRenderer();
    }

    draw() {
        smooth(this.smoothFactor);
        background(this.backgroundColor);
        this.transform();
        this.grid.draw();
        this.axis.draw();
    }

    transform() {
        scale(this.scaleFactor);
        rotateX(this.rotationX);
        rotateY(this.rotationY);
    }

    drawMesh(mesh) {
        this.drawWireframe();
        this.meshRenderer.drawMesh(mesh);
        this.drawFaceNormals(mesh, 0.5);
    }

    drawWireframe() {
        if (!this.wireframe) return;
        stroke(246, 154, 11);
        noFill();
    }

    drawFaceNormals(mesh, length) {
        if (!this.faceNormalsVisible) return;
        noFill();
        stroke(255);
        push();
        beginShape(LINES);
        for (let f of mesh.faces) {
            console.log(f.indices.length);
            const c = mesh.calculateFaceCenter(f);
            const n = mesh.calculateFaceNormal(f);
            const v = c.add(n.multiplyScalar(length));
            vertex(c.x, c.y, c.z);
            vertex(v.x, v.y, v.z);
        }
        endShape();
        pop();
    }

    onMouseWheel(amount) {
        this.scaleFactor -= amount * 0.1;
        if (this.scaleFactor < 0.01) this.scaleFactor = 0.01;
    }

    onMouseDragged(deltaX, deltaY) {
        this.rotationY += deltaX * 0.01;
        this.rotationX -= deltaY * 0.01;
    }

    onKeyTyped(key) {
        switch (key) {
            case 'f' : 
                this.faceNormalsVisible = !this.faceNormalsVisible;
                break;
            case 'x' :
                this.wireframe = !this.wireframe;
                break;
            case 'g' :
                this.grid.setVisible(!this.grid.isVisible());
                break;
            case '1' :
                this.axis.setXAxisVisible(!this.axis.isXAxisVisible());
                break;
            case '2' :
                this.axis.setYAxisVisible(!this.axis.isYAxisVisible());
                break;
            case '3' :
                this.axis.setZAxisVisible(!this.axis.isZAxisVisible());
                break;
            default:
        }
    }
}

class MeshRenderer {
    constructor() {}
    
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