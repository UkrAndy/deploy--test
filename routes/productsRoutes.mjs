import { Router } from 'express'
import productController from '../controllers/productsController.mjs'

const router = Router()

router.get('/', productController.getAllProducts)
router.get('/create', productController.getCreateProductForm)
router.post('/create', productController.createProduct)
router.get('/edit/:id', productController.getEditProductForm)
router.post('/edit/:id', productController.updateProduct)
router.get('/:id', productController.getProductById)
router.delete('/', productController.deleteProduct)

export default router
