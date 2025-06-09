import { CubeCreator } from '../../creator/CubeCreator.js';
import { TriakisTetrahedronCreator } from '../../creator/TriakisTetrahedronCreator.js'
import { Workspace } from '../../workspace/Workspace.js';

let canvas;
let mesh;
let workspace = new Workspace();

window.setup = function () {
  smooth(8);
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('sketch-container');
  createMesh();
};

window.createMesh = function () {
  const creator = new CubeCreator();
  mesh = creator.create();

  mesh = new TriakisTetrahedronCreator().create();
  mesh.updateFaceNormals();
};

window.draw = function () {
  lights();
  workspace.draw();
  stroke(0);
  fill(255);
  workspace.drawMesh(mesh);
};

window.mouseDragged = function () {
  if (mouseButton !== LEFT) return;
  workspace.onMouseDragged(mouseX - pmouseX, mouseY - pmouseY);
};

window.mouseWheel = function (event) {
  workspace.onMouseWheel(event.delta);
};

window.keyTyped =  function () {
  workspace.onKeyTyped(key);
};

