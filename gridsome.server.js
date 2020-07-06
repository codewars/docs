// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const YAML = require("yaml");

module.exports = function (api) {
  api.loadSource(({ addCollection, addMetadata }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata("settings", require("./gridsome.config").settings);
  });

  // TODO Add references from docs to languages
  api.loadSource(async ({ addCollection }) => {
    const collection = addCollection("Language");
    const dir = path.join(__dirname, "data/languages");
    const files = await readdir(dir);

    for (const file of files) {
      if (!file.endsWith(".yml")) continue;

      const id = file.replace(/\.yml$/, "");
      const contents = await readFile(path.join(dir, file), {
        encoding: "utf-8",
      });
      const data = YAML.parse(contents);
      collection.addNode({
        id,
        name: data.name,
        timeout: data.timeout,
        status: data.status,
        versions: data.versions,
        testFrameworks: data.testFrameworks,
      });
    }
  });

  const addNodesFromFile = async (collection, file) => {
    const contents = await readFile(file, { encoding: "utf-8" });
    const items = YAML.parse(contents);
    for (const item of items) collection.addNode(item);
  };

  api.loadSource(async ({ addCollection }) => {
    await addNodesFromFile(
      addCollection("Category"),
      path.join(__dirname, "data/categories.yml")
    );
    await addNodesFromFile(
      addCollection("Tag"),
      path.join(__dirname, "data/tags.yml")
    );
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
