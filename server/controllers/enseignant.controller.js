const Enseingnant = require('../models/enseignant');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");



class EnseignantController {

  register(req, res) {
    const enseignant = new Enseingnant(req.body);
    enseignant
      .save()
      .then(() => {
        res
          .cookie("usertoken", jwt.sign({ _id: enseignant._id }, secret), {
            httpOnly: true,
          })
          .json({ msg: "success", enseignant: enseignant });
      })
      .catch((err) => res.json(err));
  }

  login(req, res) {
    Enseingnant.findOne({ email: req.body.email })
      .then((enseignant) => {
        if (enseignant == null) {
          res.json({ msg: "Invalid login attempt" }); //email is not found
        } else {
          bcrypt
            .compare(req.body.password, enseignant.password)
            .then((passwordIsValid) => {
              if (passwordIsValid) {
                res
                  .cookie("usertoken", jwt.sign({ _id: enseignant._id }, secret), {
                    httpOnly: true,
                  })
                  .json({ msg: "success!" });
              } else {
                res.json({ msg: "Invalid login attempt" }); //incorrect password
              }
            })
            .catch((err) => res.json({ msg: "Invalid login attempt", err }));
        }
      })
      .catch((err) => res.json(err));
  }

  getLoggedInUser(req, res) {
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    Enseingnant.findById(decodedJWT.payload._id)
      .then((enseignant) => res.json(enseignant))
      .catch((err) => res.json(err));
  }

  logout(req, res) {
    res.clearCookie("usertoken");
    res.sendStatus(200);
  }
  getEnseignant(req, res ){
    Enseingnant.findOne({_id:req.params.id})
    .then(enseignant => res.status(201).json(enseignant))
    .catch(error => res.status(400).json({error}));
  }
  getAllenseignant  (req, res, next) {
    Enseignant.find()
    .then(enseignants => res.status(200).json(enseignants ))
    .catch(error => res.status(400).json({ error }));
}

 
 deleteEnseignant = (req, res, next) => {
    Enseignant.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
}
}

module.exports = new EnseignantController();
