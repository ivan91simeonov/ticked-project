const asyncHandler = require('express-async-handler');

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')


//@desc Get user tickets 
// @route Get /api/tickets
// @access Private

const getTickets = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'getTickets'}) 
  })

  //@desc Create new  ticket
// @route Post /api/ticket
// @access Private

const createTicket = asyncHandler(async (req, res) => {
    res.status(201).json({message: 'createTicket'}) 
  })
  

  module.exports = {
    getTickets,
    createTicket
  }