import express from 'express'
import classController from '../../../../controllers/classController'
import classRepositoryMongo from '../../../database/mongoDB/repositories/classRepository'
import classRepo from '../../../../application/repositories/classRepo'

const router = express.Router()

const classContrlr= classController(classRepo,classRepositoryMongo)



router.post('/create',classContrlr.addNewClass)
// router.delete('/delete',classContrlr)



export default router