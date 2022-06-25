const mongoose = require('mongoose')
const Reservation = require('../models/Reservations')

exports.getReservationData = (req, res) => {
    Reservation.find({})
        .then(reservations => {
            res.status(200).json({ reservations })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.postReservationData = (req, res) => { 
    const { firstname, lastname, email, phoneNum, date, time } = req.body

    if(!firstname || !lastname || !date || ! email || !phoneNum || !time) {
        return res.status(403).json({success: 'false', error: 'Please Fill in all Fields'})
    }
    Reservation.findOne({ email }, (err, reservation) => {
        // Check for server errors
        if(err) {
            return res.status(500).json({ success: false, error: 'Something went wrong' })
        }

        // Verify if email exists already
        if(reservation) {
            return res.status(401).json({ success: false, error: 'Email alAready Taken!' })
        }
        Reservation.create({
            firstname,
            lastname,
            email,
            phoneNum,
            date,
            time
        })
        .then(reservation => {
            return res.status(201).json({ success: true, msg: `Thank you ${reservation.firstname} ${reservation.lastname}, your submission has been recieved` })
        })
        .catch(err => res.status(500).json({ error:err }))
    })
}

