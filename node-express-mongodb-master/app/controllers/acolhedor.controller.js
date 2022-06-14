const db = require("../models");
const Acolhedor = db.acolhedores;

// Create and Save a new Acolhedor
exports.create = (req, res) => {
  // Validate request
  if (!req.body.pais) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Acolhedor
  const acolhedor = new Acolhedor({
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email,
    pais: req.body.pais,
    pessoas: req.body.pessoas,
    animais: req.body.animais,
    idiomas: req.body.idiomas,
  });

  // Save Acolhedor in the database
  acolhedor
    .save(acolhedor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Acolhedores from the database.
exports.findAll = (req, res) => {
  const pais = req.query.pais;
  var condition = pais ? { pais: { $regex: new RegExp(pais), $options: "i" } } : {};

  Acolhedor.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Acolhedor with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Acolhedor.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Acolhedor não encontrado pelo id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Erro buscando o acolhedor pelo id=" + id });
    });
};

// Update Acolhedor by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Acolhedor.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Não foi possível atualizar acolhedor com id=${id}. Talvez o acolhedor não tenha sido encontrado!`
        });
      } else res.send({ message: "Acolhedor atualizado com sucesso." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro atualizando acolhedor com id=" + id
      });
    });
};

// Delete a Acolhedor with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Acolhedor.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Não foi possível remover acolhedor com id=${id}. Talvez o acolhedor não tenha sido encontrado!`
        });
      } else {
        res.send({
          message: "Acolhedor removido com sucesso!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possível remover acolhedor com id=" + id
      });
    });
};

// Delete all Acolhedores from the database.
exports.deleteAll = (req, res) => {
  Acolhedor.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Acolhedores removidos com sucesso!!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao remover acolhedores."
      });
    });
};

// Find all published Acolhedores
exports.findAllPublished = (req, res) => {
  Acolhedor.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao obter acolhedores."
      });
    });
};
