class Model {
  constructor() {
    if (!this.execute) throw new Error("You have to implement execute method");
    if (!this.getSchema)
      throw new Error("You have to implement getSchema method");
  }
}

module.exports = Model;
