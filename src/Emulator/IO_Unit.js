class IOUnit {
    constructor(buffer) {
    this.buffer = buffer;
    }
    getBuffer() {
    return this.buffer;
    }
    setBuffer(buffer) {
    this.buffer = buffer;
    }
    write() {
    console.log(this.buffer);
    }
}
export default IOUnit;