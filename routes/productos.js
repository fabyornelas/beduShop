// primera en minuscula y en plural
const router = require('express').Router()
//crud
const {
    crearProducto,
    obtenerProductos,
    modificarProducto,
    elminiarProducto,
    eliminarProducto
} = require('../controllers/producto');

router.get('/', obtenerProductos);
router.post('/', crearProducto);
router.put('/:id', modificarProducto);
router.delete('/:id', eliminarProducto);

module.exports = router;