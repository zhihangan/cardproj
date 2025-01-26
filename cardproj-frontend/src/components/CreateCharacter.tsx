import React, { useState } from "react";

// Define TypeScript types
type Score = {
    elegance: number;
    bravery: number;
    cleverness: number;
    loyalty: number;
    mystical: number;
    };

    type Answer = {
    text: string;
    score: Partial<Score>;
    };

    type Question = {
    question: string;
    answers: Answer[];
    };

    function CreateCharacter() {
        const questions: Question[] = [
            {
                question: "What type of environment feels like home to you?",
                answers: [
                    { text: "A lively hall filled with music, laughter, and friendly conversation.", score: { elegance: 5, loyalty: 2 } },
                    { text: "The wide-open plains or dense forests, where every step brings new challenges to overcome.", score: { bravery: 5, mystical: 2 } },
                    { text: "A cluttered workshop or library, surrounded by books, tools, and untapped potential.", score: { cleverness: 5, bravery: 2 } },
                    { text: "A small village where everyone knows your name, and the bonds run deep.", score: { loyalty: 5, mystical: 2 } },
                    { text: "A quiet mountaintop or secluded grove, where the world feels calm yet full of mysteries.", score: { mystical: 5, elegance: 2 } },
                ],
            },
            {
                question: "When faced with a challenge, how do you respond?",
                answers: [
                    { text: "Stay calm, rely on your wit, and look for an unexpected way out.", score: { cleverness: 5, elegance: 2 } },
                    { text: "Take decisive action, even if it means taking risks. You trust your instincts to guide you.", score: { bravery: 5, mystical: 2 } },
                    { text: "Work alongside others to pool your strengths and find a collective solution.", score: { loyalty: 5, bravery: 2 } },
                    { text: "Present yourself with confidence and composure, showing others you’re in control.", score: { elegance: 5, cleverness: 2 } },
                    { text: "Pause, listen to your intuition, and follow the subtle signs around you.", score: { mystical: 5, loyalty: 2 } },
                ],
            },
            {
                question: "What is your preferred weapon or tool?",
                answers: [
                    { text: "A sleek and polished tool, carefully crafted for precision and style.", score: { elegance: 5, cleverness: 2 } },
                    { text: "A sturdy and reliable weapon, ready for the toughest of battles.", score: { bravery: 5, loyalty: 2 } },
                    { text: "A compact and versatile gadget or a finely honed instrument.", score: { cleverness: 5, mystical: 2 } },
                    { text: "A shield or charm that protects you and those around you.", score: { loyalty: 5, elegance: 2 } },
                    { text: "An ancient artifact or heirloom with an aura of mystery.", score: { mystical: 5, bravery: 2 } },
                ],
            },
            {
                question: "How do you spend your free time?",
                answers: [
                    { text: "Practicing a craft, learning something new, or perfecting your skills.", score: { cleverness: 5, elegance: 2 } },
                    { text: "Exploring new territories or testing your limits in exciting ways.", score: { bravery: 5, mystical: 2 } },
                    { text: "Spending quality time with others, whether through shared meals or meaningful conversations.", score: { loyalty: 5, cleverness: 2 } },
                    { text: "Attending a lively event or making something ordinary feel extraordinary.", score: { elegance: 5, bravery: 2 } },
                    { text: "Reflecting quietly, journaling, or meditating in a peaceful spot.", score: { mystical: 5, loyalty: 2 } },
                ],
            },
            {
                question: "What motivates you the most?",
                answers: [
                    { text: "Building something timeless that will inspire others for generations.", score: { elegance: 5, mystical: 2 } },
                    { text: "Protecting the people and places that mean the most to you.", score: { loyalty: 5, bravery: 2 } },
                    { text: "Discovering answers to questions no one else has dared to ask.", score: { cleverness: 5, mystical: 2 } },
                    { text: "Proving your strength and determination through action and results.", score: { bravery: 5, cleverness: 2 } },
                    { text: "Understanding the deeper connections that weave the world together.", score: { mystical: 5, elegance: 2 } },
                ],
            },
            {
                question: "How would your closest friends describe you?",
                answers: [
                    { text: "Poised and confident, with an effortless ability to make others feel at ease.", score: { elegance: 5, loyalty: 2 } },
                    { text: "Determined and bold, never hesitating to stand up for what you believe in.", score: { bravery: 5, mystical: 2 } },
                    { text: "Resourceful and quick-thinking, always ready with a clever solution.", score: { cleverness: 5, elegance: 2 } },
                    { text: "Dependable and kind, someone who puts others before yourself.", score: { loyalty: 5, bravery: 2 } },
                    { text: "Thoughtful and intuitive, with a knack for noticing what others overlook.", score: { mystical: 5, cleverness: 2 } },
                ],
            },
            {
                question: "What kind of legacy do you want to leave behind?",
                answers: [
                    { text: "A reputation for beauty and excellence that leaves people in awe.", score: { elegance: 5, mystical: 2 } },
                    { text: "Tales of daring adventures and heroism that inspire others to be brave.", score: { bravery: 5, loyalty: 2 } },
                    { text: "Discoveries and ideas that shape the future and leave a mark on history.", score: { cleverness: 5, bravery: 2 } },
                    { text: "A world improved through kindness, collaboration, and trust.", score: { loyalty: 5, elegance: 2 } },
                    { text: "A deeper understanding of life’s mysteries that guides others toward clarity.", score: { mystical: 5, cleverness: 2 } },
                ],
            },
        ];
        

    const archetypes: { [key in keyof Score]: string } = {
        elegance: "The Refined Aristocrat",
        bravery: "The Fearless Adventurer",
        cleverness: "The Ingenious Inventor",
        loyalty: "The Devoted Protector",
        mystical: "The Visionary Oracle",
    };

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState<Score>({
        elegance: 0,
        bravery: 0,
        cleverness: 0,
        loyalty: 0,
        mystical: 0,
    });
    const [transitioning, setTransitioning] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (score: Partial<Score>) => {
        const updatedScores = { ...scores };
        for (const trait in score) {
        updatedScores[trait as keyof Score] += score[trait as keyof Score] || 0;
        }
        setScores(updatedScores);

        setTransitioning(true);
        setTimeout(() => {
        setTransitioning(false);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
        }, 500);
    };

    const getResult = () => {
        const highestTrait = Object.keys(scores).reduce((a, b) =>
        scores[a as keyof Score] > scores[b as keyof Score] ? a : b
        );
        return archetypes[highestTrait as keyof Score];
    };


    if (currentQuestionIndex >= questions.length) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
                <h1 className="text-3xl font-bold">Quiz Complete!</h1>
                <p className="mt-4">Your scores:</p>
                <ul className="mt-2">
                    {Object.entries(scores).map(([trait, score]) => (
                        <li key={trait} className="capitalize">{trait}: {score}</li>
                    ))}
                </ul>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    // return (
    //     <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
    //         <div className="max-w-2xl text-center">
    //             <h1 className="text-2xl font-bold mb-6">{currentQuestion.question}</h1>
    //             <div className="grid grid-cols-3 gap-4">
    //                 {currentQuestion.answers.map((answer, index) => (
    //                     <button
    //                         key={index}
    //                         onClick={() => handleAnswer(answer.score)}
    //                         className="bg-white text-blue-900 font-semibold h-14 w-64 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all "
    //                     >
    //                         {answer.text}
    //                     </button>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );



    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
    {!showResults ? (
        <div
            className={`w-full max-w-md p-6 bg-gray-300 text-black rounded-lg shadow-md transform transition-opacity duration-500 ${
                transitioning ? "opacity-0" : "opacity-100"
            }`}
        >
            <h2 className="text-2xl font-bold mb-6 text-center">
                {questions[currentQuestionIndex].question}
            </h2>
            <div className="grid grid-cols-1 gap-6">
                {questions[currentQuestionIndex].answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(answer.score)}
                        className="bg-gray-50 text-amber-900 font-semibold h-14 w-full rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all hover:scale-110"
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
        </div>
    ) : (
        <div className="w-full max-w-md p-6 bg-white text-black rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-900">Your Character:</h2>
            <p className="text-xl text-gray-700">{getResult()}</p>
        </div>
    )}
</div>

    );
}

export default CreateCharacter;
