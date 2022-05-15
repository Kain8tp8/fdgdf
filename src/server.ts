import express from "express";
import cors from 'cors'
import userRouter from './router/user.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', userRouter)

app.listen(2587, () => {
    console.log('Server is runnig...http://localhost:2587');
})