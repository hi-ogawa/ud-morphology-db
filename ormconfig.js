module.exports = [
  {
    name: "default",
    type: "sqlite",
    database:
      process.env.NODE_ENV === "test"
        ? ":memory:"
        : "data/ud-morphology.sqlite3",
    entities: ["build/entities.js"],
  },
];
