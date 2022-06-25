const router = require('express').Router()
const { getReservationData, postReservationData } = require('../controllers/reservation')

router.post('/api/reservations', postReservationData)
router.get('/', getReservationData)

module.exports = router