const Submission = require('../model/Submission');

const getAllSubmissions = async (req, res) => {
    const submissions = await Submission.find();
    if(!submissions) return res.status(204).json({'message': 'No submissions found'});
    res.json(submissions);
}

module.exports = {
    getAllSubmissions
}