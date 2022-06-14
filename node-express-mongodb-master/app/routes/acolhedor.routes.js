module.exports = app => {
  const acolhedores = require("../controllers/acolhedor.controller.js");

  var router = require("express").Router();

  // Cria um novo Acolhedor
  router.post("/", acolhedores.create);

  // Retorna todos os Acolhedores
  router.get("/", acolhedores.findAll);

  // Retorna todos os Acolhedores publicados
  router.get("/published", acolhedores.findAllPublished);

  // Retorna um único Acolhedor pelo id
  router.get("/:id", acolhedores.findOne);

  // Atualiza(Update) um Acolhedor pelo id
  router.put("/:id", acolhedores.update);

  // Deleta um Acolhedor pelo id
  router.delete("/:id", acolhedores.delete);

  // Cria um novo Acolhedor
  router.delete("/", acolhedores.deleteAll);

  app.use("/api/acolhedores", router);
};
