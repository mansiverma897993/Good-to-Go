import Program from '../models/Program.js';

export const getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find().sort({ start_date: -1 });
    res.json(programs);
  } catch (error) {
    console.error('Get programs error:', error);
    res.status(500).json({ message: 'Failed to fetch programs' });
  }
};

export const getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.json(program);
  } catch (error) {
    console.error('Get program error:', error);
    res.status(500).json({ message: 'Failed to fetch program' });
  }
};

export const createProgram = async (req, res) => {
  try {
    const programData = req.body;
    const program = new Program(programData);
    await program.save();
    res.status(201).json({ message: 'Program created successfully', program });
  } catch (error) {
    console.error('Create program error:', error);
    res.status(500).json({ message: 'Failed to create program' });
  }
};

export const updateProgram = async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.json({ message: 'Program updated successfully', program });
  } catch (error) {
    console.error('Update program error:', error);
    res.status(500).json({ message: 'Failed to update program' });
  }
};

export const deleteProgram = async (req, res) => {
  try {
    const program = await Program.findByIdAndDelete(req.params.id);

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.json({ message: 'Program deleted successfully' });
  } catch (error) {
    console.error('Delete program error:', error);
    res.status(500).json({ message: 'Failed to delete program' });
  }
};
