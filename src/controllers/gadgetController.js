const { Gadget } = require('../models');

// Get gadgets with an optional status filter
exports.getGadgets = async (req, res) => {
  const { status } = req.query;

  try {
    const gadgets = status
      ? await Gadget.findAll({ where: { status } })
      : await Gadget.findAll();
    res.json(gadgets);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving gadgets' });
  }
};

// Create a new gadget
exports.createGadget = async (req, res) => {
  const { name, status } = req.body;

  try {
    const gadget = await Gadget.create({ name, status });
    res.status(201).json(gadget);
  } catch (error) {
    res.status(500).json({ message: 'Error creating gadget' });
  }
};

// Update an existing gadget
exports.updateGadget = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;

  try {
    const gadget = await Gadget.findByPk(id);
    if (!gadget) {
      return res.status(404).json({ message: 'Gadget not found' });
    }

    gadget.name = name || gadget.name;
    gadget.status = status || gadget.status;

    await gadget.save();
    res.json(gadget);
  } catch (error) {
    res.status(500).json({ message: 'Error updating gadget' });
  }
};

// Decommission a gadget (soft delete)
exports.deleteGadget = async (req, res) => {
  const { id } = req.params;

  try {
    const gadget = await Gadget.findByPk(id);
    if (!gadget) {
      return res.status(404).json({ message: 'Gadget not found' });
    }

    gadget.status = 'Decommissioned';
    gadget.decommissionedAt = new Date();

    await gadget.save();
    res.json(gadget);
  } catch (error) {
    res.status(500).json({ message: 'Error decommissioning gadget' });
  }
};

// Trigger the self-destruct sequence for a gadget
exports.selfDestruct = async (req, res) => {
  const { id } = req.params;
  const { confirmationCode } = req.body;

  // Simulating a confirmation code for simplicity
  const validCode = '1234'; // In a real application, this would be more secure.

  if (confirmationCode !== validCode) {
    return res.status(400).json({ message: 'Invalid confirmation code' });
  }

  try {
    const gadget = await Gadget.findByPk(id);
    if (!gadget) {
      return res.status(404).json({ message: 'Gadget not found' });
    }

    gadget.status = 'Destroyed';
    await gadget.save();

    res.json({ message: 'Gadget has been destroyed' });
  } catch (error) {
    res.status(500).json({ message: 'Error triggering self-destruct' });
  }
};
