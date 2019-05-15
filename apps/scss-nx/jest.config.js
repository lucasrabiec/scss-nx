module.exports = {
  name: "scss-nx",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/scss-nx/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
