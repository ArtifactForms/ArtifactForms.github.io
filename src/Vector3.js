export class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(other) {
    return new Vector3(
      this.x + other.x,
      this.y + other.y,
      this.z + other.z
    );
  }

  subtract(other) {
    return new Vector3(
      this.x - other.x,
      this.y - other.y,
      this.z - other.z
    );
  }

  multiplyScalar(scalar) {
    return new Vector3(
      this.x * scalar,
      this.y * scalar,
      this.z * scalar
    );
  }

  divideScalar(scalar) {
    return new Vector3(
      this.x / scalar,
      this.y / scalar,
      this.z / scalar
    );
  }

  cross(other) {
    return new Vector3(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x
    );
  }

  length() {
    return Math.hypot(this.x, this.y, this.z);
  }

  normalize() {
    const len = this.length();
    return len === 0
      ? new Vector3(0, 0, 0)
      : this.divideScalar(len);
  }

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }
}
