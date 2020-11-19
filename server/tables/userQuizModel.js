import mongoose from 'mongoose';

const userQuizModelSchema = new mongoose.Schema({
    username: { type: String, required: true },
    answers: [
        {
            questionID: { type: Number, required: true },
            answer: { type: String, required: true }
        }
    ],
    lifestyle: { type: String }
});

export default mongoose.model('quizResults', userQuizModelSchema);