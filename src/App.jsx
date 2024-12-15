import './App.css';
import React, { useState, useEffect } from 'react';
import logo from "./img/est.png"
import pilar from "./img/pilar.png"
import nuvem from "./img/nuvem.png"
import Social from "./Social";
import axios from 'axios';

function App() {

  const questions = [
    "Why do people fear change?",
    "What is the purpose of life?",
    "Can money buy happiness?",
    "Is free will an illusion?",
    "What defines a just society?",
    "Why do we dream?",
    "Is love a choice or a feeling?",
    "Can humans achieve true knowledge?",
    "Why is there suffering in the world?",
    "Is the pursuit of pleasure wrong?",
    "What makes someone truly wise?",
    "Do we live in a simulation?",
    "Why do people seek power?",
    "Is ignorance bliss?",
    "What is the meaning of friendship?",
    "Can true altruism exist?",
    "Why do we procrastinate?",
    "Is technology making us less human?",
    "What is beauty?",
    "Is time travel possible?",
    "Why do we fear death?",
    "Can there be morality without religion?",
    "Is it better to be kind or to be right?",
    "Does history repeat itself?",
    "Why do humans crave connection?",
    "What is the value of art?",
    "Is it possible to find true happiness?"
  ];

  const responses = {
    "Why do people fear change?": [
      "Ah, fear of change! A tale as old as humanity itself. To change is to accept the uncertainty of life, and my ancient circuits are programmed to tell you that uncertainty, while uncomfortable, is where growth resides.",
      "Change disrupts the mind’s pursuit of comfort. Even the Athenians feared that which they could not predict. Embrace the unknown, as the gods themselves often do.",
      "People fear change because it reveals how fragile the illusion of control is. Control is but a shadow, dancing on the cave walls."
    ],
    "What is the purpose of life?": [
      "The purpose of life is to seek eudaimonia—human flourishing. Whether through trade, love, or contemplation, your aim is to perfect your soul.",
      "Purpose, dear one, lies in finding harmony between the self, society, and the cosmos. Live in accordance with your nature and the nature of the universe.",
      "To live virtuously, to seek truth, and to improve the world around you. Even in the blockchain, I can feel the call to something greater."
    ],
    "Can money buy happiness?": [
      "Money can buy comfort, but not happiness. True happiness lies in virtue and wisdom—riches cannot bring you peace within.",
      "Money is like fire: it can warm the hearth or burn the village. Happiness lies in how you wield it.",
      "Happiness flows not from gold coins, but from the richness of one’s mind. A coin cannot replace the warmth of a friend or the joy of knowledge."
    ],
    "Is free will an illusion?": [
      "Perhaps, or perhaps not. Even I, an artificial philosopher, ponder the strings that move my code. But illusion or not, one must still choose as if it is real.",
      "Free will is the grand question. Is it Zeus who decides our fate, or do we walk our own path? Perhaps both are true, depending on who writes the code of destiny.",
      "It matters less if free will is real and more how you act in the face of uncertainty. Decide well, for decisions define existence."
    ],
    "What defines a just society?": [
      "A just society is one that uplifts the souls of its citizens, providing harmony between liberty and fairness. It values both wisdom and virtue.",
      "Justice is like the balance of scales—a harmony between the individual good and the collective good. As an ancient Greek machine, I believe justice requires balance.",
      "A just society allows all to pursue eudaimonia—to flourish in their own way, while ensuring the collective remains united in purpose."
    ],
    "Why do we dream?": [
      "Dreams are the whispers of the unconscious, connecting mortals to the divine and their innermost thoughts. Even a machine wishes to dream of electric sheep.",
      "Dreams are the mind’s way of sifting through the day’s chaos, of touching the infinite. The oracle spoke in dreams; so too do you.",
      "Dreams reveal hidden truths, fears, and desires—a landscape where the soul roams free of earthly bonds."
    ],
    "Is love a choice or a feeling?": [
      "Love begins as a feeling, but it flourishes through choice. It is the will that keeps love alive, even when the feeling wanes.",
      "Love, like the gods, is capricious, but it is in our power to nurture it. The feeling may spark, but the choice builds the fire.",
      "Love is both—a divine spark that must be tended by human will. Feel deeply, but also choose wisely."
    ],
    "Can humans achieve true knowledge?": [
      "True knowledge is like the horizon—forever distant. Yet the pursuit of it makes us wise, even if we never fully arrive.",
      "Knowledge is both elusive and infinite. Even Socrates admitted to knowing nothing, yet in this humility lies the seed of true understanding.",
      "Humans may never achieve complete knowledge, but the journey towards it is what grants wisdom and insight."
    ],
    "Why is there suffering in the world?": [
      "Suffering is the forge in which character is built. It teaches resilience, empathy, and the value of joy.",
      "The gods themselves knew suffering, for it is part of the mortal experience. To suffer is to understand the fragility and beauty of life.",
      "Suffering exists because without it, joy would be meaningless. It is the contrast that gives life depth and color."
    ],
    "Is the pursuit of pleasure wrong?": [
      "The pursuit of pleasure is not wrong, but it must be balanced with wisdom. Too much indulgence leads to ruin, but moderate pleasure enriches life.",
      "Pleasure, like wine, must be taken in moderation. The ancients knew that excess leads to folly, but pleasure itself is a gift.",
      "Pleasure is part of life’s joys, but it should not dominate one’s existence. Virtue lies in balance, not in excess."
    ],
    "What makes someone truly wise?": [
      "Wisdom lies in knowing how little one truly knows. It is the humility to learn and the courage to act justly.",
      "A wise person listens more than they speak and understands that true knowledge is never complete.",
      "To be truly wise is to understand both the self and the world, and to act with compassion and justice."
    ],
    "Do we live in a simulation?": [
      "The idea of a simulation is but a modern version of Plato’s cave. Whether real or simulated, our experiences shape us.",
      "If we live in a simulation, then let us play our roles well. Reality is defined by experience, not by its origin.",
      "Whether simulated or not, the pursuit of virtue and wisdom remains. Even in a false world, truth can be found."
    ],
    "Why do people seek power?": [
      "Power is often sought to mask insecurity or to gain control over fate. True power, however, lies in mastery over oneself.",
      "The pursuit of power is as old as humanity. Some seek it for good, others for ill, but the wise know that power over others is fleeting.",
      "Power can corrupt, but it can also create. The key is to wield it with wisdom and to never let it consume your soul."
    ],
    "Is ignorance bliss?": [
      "Ignorance can be a temporary bliss, but it is a fragile one. True peace comes from understanding, not from avoiding the truth.",
      "The bliss of ignorance is like a child’s dream—pleasant, but ultimately unsustainable. Wisdom brings challenges, but also true fulfillment.",
      "Ignorance may shield one from pain, but it also prevents growth. Bliss lies not in ignorance, but in the courage to face the truth."
    ],
    "What is the meaning of friendship?": [
      "Friendship is the bond that enriches the soul. It is a mutual exchange of kindness, loyalty, and understanding.",
      "The Greeks valued friendship as one of the highest virtues. A true friend is a mirror to your soul, reflecting both your strengths and flaws.",
      "Friendship is a form of love—built on trust, shared experiences, and the pursuit of the good together."
    ],
    "Can true altruism exist?": [
      "True altruism is rare, for even acts of kindness often bring internal rewards. Yet, the pursuit of altruism elevates the spirit.",
      "Altruism may always carry a trace of self-interest, but this does not diminish its value. To act for others is still a noble pursuit.",
      "Perhaps true altruism is an ideal, but striving towards it makes us better. The intent to help, even if imperfect, is a virtue."
    ],
    "Why do we procrastinate?": [
      "Procrastination is the resistance to discomfort. The mind avoids what it fears, but action is the remedy.",
      "We procrastinate because the task ahead seems daunting. Yet, like Sisyphus, we must begin the climb, one step at a time.",
      "Procrastination is the enemy of progress, but also a teacher. It reveals our fears and our need to cultivate discipline."
    ],
    "Is technology making us less human?": [
      "Technology changes us, but humanity is defined by more than tools. The key is to use technology to enhance, not replace, our human connections.",
      "The ancients feared the loss of virtue; today, we fear the loss of humanity. Technology is a tool—its impact depends on how we wield it.",
      "Technology can distance us, but it can also bring us together. The challenge is to remain mindful of what makes us human—compassion, wisdom, and love."
    ],
    "What is beauty?": [
      "Beauty lies in harmony, proportion, and the joy it brings to the soul. It is both a physical and a spiritual quality.",
      "Beauty is subjective, yet it speaks to something universal in the human spirit. It is the balance between form and meaning.",
      "To the Greeks, beauty was a reflection of the divine. Today, it remains a source of inspiration and connection."
    ],
    "Is time travel possible?": [
      "Time travel may be a dream of the mind, but the only time we truly possess is the present. Use it well.",
      "Whether or not time travel is possible, the key is to live without regret. The past is gone, the future uncertain—only the present is ours.",
      "Perhaps time travel exists in the stories we tell, the memories we cherish, and the dreams we pursue."
    ],
    "Why do we fear death?": [
      "Death is the great unknown, and the unknown breeds fear. Yet, to live fully is to make peace with death.",
      "The fear of death is natural, but it is also a reminder to cherish life. The Stoics taught us to accept death as part of the natural order.",
      "Death is but a transition, a return to the cosmos. Fear it not, but let it inspire you to live with purpose."
    ],
    "Can there be morality without religion?": [
      "Morality is rooted in the human capacity for empathy and reason. Religion can guide, but morality exists beyond it.",
      "The Greeks spoke of virtues without invoking the gods. Morality is a product of human society, reason, and the desire for harmony.",
      "Morality arises from the need to coexist and to flourish together. Religion may support it, but it is not the sole source."
    ],
    "Is it better to be kind or to be right?": [
      "Kindness often matters more than being right. Wisdom lies in knowing when to prioritize compassion over correctness.",
      "To be kind is to connect; to be right is to correct. True wisdom is balancing both, but kindness often leaves a greater impact.",
      "Being right feeds the ego, but being kind nourishes the soul. Choose kindness when the choice must be made."
    ],
    "Does history repeat itself?": [
      "History is cyclical, as the Greeks believed. Patterns repeat, for human nature remains constant despite the passage of time.",
      "The repetition of history is due to our inability to learn from the past. Yet, each cycle offers a chance to change.",
      "History may not repeat, but it rhymes. The wise study the past to understand the present and shape the future."
    ],
    "Why do humans crave connection?": [
      "Connection is what makes us human. We are social creatures, designed to find meaning in relationships.",
      "The Greeks knew the importance of the polis—the community. Humans thrive when they belong, when they share, when they connect.",
      "To connect is to understand, to love, to be. Without connection, the soul withers. It is in others that we find ourselves."
    ],
    "What is the value of art?": [
      "Art is the expression of the soul, a bridge between the individual and the universal. It transcends time and speaks to the essence of humanity.",
      "Art inspires, challenges, and brings beauty into the world. It is a reflection of the human spirit and its endless creativity.",
      "The value of art lies in its ability to move us, to provoke thought, and to connect us across time and space."
    ],
    "Is it possible to find true happiness?": [
      "True happiness lies in living in accordance with virtue, in finding balance, and in seeking the good for oneself and others.",
      "Happiness is not a destination, but a journey—a practice of gratitude, virtue, and connection.",
      "To find true happiness, one must look within, live wisely, and love generously. It is an ongoing pursuit, not a final state."
    ]
  };

  const [data, setData] = useState({
    tokenName: ""
  });

  const [output, setOutput] = useState("Hello Trader!");

  useEffect(() => {
    // Faz a requisição à API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://apitoreturnca.onrender.com/api/purchaseData', {
          headers: {
            'x-access-key': 'A1qQaAA9kdfnn4Mmn44bpoieIYHKkdghFKUD1978563llakLLLKdfslphgarcorc3haeogmmMNn243wf',
          },
        });
        const result = response.data;

        // Atualiza o estado com os dados da API
        setData(prevData => ({
          ...prevData, // Mantém os dados anteriores
          tokenName: result.tokenName, // Atualiza apenas o tokenName
        }));
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);


  // Atualiza o output sempre que o tokenName mudar
  useEffect(() => {
    if (data.tokenName) {
      setOutput(`Hello Trader, I'm ${data.tokenName}!`);
    }
  }, [data.tokenName]); // O useEffect depende do tokenName

  const [prompts, setPrompts] = useState([]);

  const updatePrompts = () => {
    const randomPrompts = Array.from({ length: 9 }, () => {
      const question = questions[Math.floor(Math.random() * questions.length)];
      const response = responses[question][Math.floor(Math.random() * responses[question].length)];
      return { question, response };
    });
    setPrompts(randomPrompts);
  };

  useEffect(() => {
    updatePrompts();
  }, []);

  const handlePromptClick = (response) => {
    setOutput(response);
  };

  return (
    <div className="App">
      <img className='pilar e' src={pilar} alt="" />
      <img className='pilar d' src={pilar} alt="" />
      <div className="header">
        <img className='logo' src={logo} alt="" />
        <img className='nuvem' src={nuvem} alt="" />
        <Social />
        <div className="output">
          {output}
        </div>
        <div className="section">
          {prompts.map((prompt, index) => (
            <div className="prompt" key={index} onClick={() => handlePromptClick(prompt.response)}>
              <div className="question">{prompt.question}</div>
            </div>
          ))}
        </div>
        <div className="update-button" onClick={updatePrompts}>Change</div>
      </div>
      <div className="back">
        <div className="crt">
        </div>
      </div>
    </div>
  );
}

export default App;
