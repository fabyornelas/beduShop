const router = require('express').Router()
//crud
const {
    crearUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario
} = require('../controllers/usuario');

router.get('/', obtenerUsuarios);
router.post('/', crearUsuario);
router.put('/:id', modificarUsuario);
router.delete('/:id', eliminarUsuario);

module.exports = router;