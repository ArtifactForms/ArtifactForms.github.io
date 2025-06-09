import { PlaneCreator } from './creator/PlaneCreator.js';
import { PlanarVertexCenterModifier } from './modifier/PlanarVertexCenterModifier.js';

let divisions;
let canvas;
let mesh;
let decayFaces = [];
let decayIndex = 0;
let decayStarted = false;
let decayDone = false;
let decayWaitCounter = 0;
let waitFramesAfterDecay = 60;

window.setup = function () {
    smooth(8);

    const container = document.getElementById("p5-container-zerfall");
    const w = 800;
    const h = 800;

    canvas = createCanvas(w, h, WEBGL, { antialias: true });
    canvas.parent("p5-container-zerfall");
    
    createMesh();
};

window.draw = function () {
    background(255);
	noLights();
    rotateX(PI * 0.5);
    rotateY((PI * 2.0) / 8.0);

    noStroke();
    scale(200);

    drawFaces(mesh);

    if (decayStarted && !decayDone) {
        updateDecay();
    }

    if (decayDone) {
        decayWaitCounter++;
        if (decayWaitCounter >= waitFramesAfterDecay) {
            createMesh();
        }
    }
};

function createMesh() {
    const creator = new PlaneCreator();
    mesh = creator.create();

    let subdivisions = floor(random(2, 6));
	divisions = subdivisions;
    for (let i = 0; i < subdivisions; i++) {
        new PlanarVertexCenterModifier().modify(mesh);
    }

    // Reset decay state
    decayStarted = false;
    decayDone = false;
    decayWaitCounter = 0;
    decayFaces = [];
    decayIndex = 0;

    // Init face alpha
    for (let face of mesh.faces) {
        face.alpha = 255;
    }

    // Prepare decay faces (shuffle random subset)
    let numToDecay = floor(random(5, mesh.faces.length / 2));
    let indices = Array.from({ length: mesh.faces.length }, (_, i) => i);
    shuffle(indices, true);
    decayFaces = indices.slice(0, numToDecay).map(i => mesh.faces[i]);

    decayStarted = true;
}

function updateDecay() {
    if (decayIndex >= decayFaces.length) {
        decayDone = true;
        return;
    }

    let currentFace = decayFaces[decayIndex];
    currentFace.alpha -= (20 * divisions);

    if (currentFace.alpha <= 0) {
        currentFace.alpha = 0;
        decayIndex++;
    }
}

function drawFaces(mesh) {
    push();
    for (let face of mesh.faces) {
        let alpha = face.alpha;
        if (alpha === 0) continue;

        fill(0, alpha);

        if (face.indices.length === 3) {
            beginShape(TRIANGLES);
        } else if (face.indices.length === 4) {
            beginShape(QUADS);
        } else {
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
