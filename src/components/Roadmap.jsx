import Button from './Button';
import Heading from './Heading';
import Section from './Section';
import { grid } from '../assets';
import { Gradient } from './design/Roadmap';
import { useState } from 'react';

const faqItems = [
  {
    id: 1,
    question: 'How does Hyvve protect my data privacy?',
    answer:
      "Your data privacy is our top priority. Data you contribute is stored in encrypted form and on decentralized infrastructure, so no centralized party can misuse it. Only authorized campaign owners (the ones who requested the data) can decrypt and access your contributions. You also choose what data to share—personal identifying information is not required unless it's part of the campaign, and you can remain as anonymous as you wish on the platform.",
  },
  {
    id: 2,
    question: 'How is data verified on Hyvve?',
    answer:
      'Hyvve uses AI-driven verification algorithms to check each submission. This includes validating text data for accuracy and using our Vision model to read and verify text within images. The system can detect spam or irrelevant content automatically, ensuring that the data buyers receive high-quality, relevant data. In some cases, additional community review or checks might be in place for critical campaigns, but the goal is to minimize manual oversight with smart automation.',
  },
  {
    id: 3,
    question: 'How do token rewards work for contributors?',
    answer:
      "When you contribute data that meets the campaign requirements, you earn MOVE tokens as a reward. Rewards might be fixed per piece of data or based on quality metrics set by the campaign. The tokens you earn accumulate in your connected wallet – you can use them within the Hyvve ecosystem, trade them, or hold them as they gain value. It's a win-win: contributors get compensated for their efforts, and requesters get the data they need.",
  },
  {
    id: 4,
    question: 'Is Hyvve secure?',
    answer:
      "Absolutely. Hyvve implements strong security at multiple levels. All transactions and data uploads are encrypted (using a hybrid RSA+AES approach), safeguarding your data in transit and at rest. We utilize decentralized storage (IPFS) to avoid single points of failure, meaning there's no central server that hackers can target to steal data. Additionally, Hyvve uses blockchain smart contracts on the Movement chain for handling rewards, those are transparent and auditable on-chain. In short, whether you're contributing or consuming data, you can trust that security and privacy are built into Hyvve's core.",
  },
];

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`md:flex p-0.25 rounded-[2.5rem] ${
        isOpen ? 'bg-conic-gradient' : 'bg-n-6'
      }`}
    >
      <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15 w-full">
        <div className="absolute top-0 left-0 max-w-full">
          <img
            className="w-full"
            src={grid}
            width={550}
            height={550}
            alt="Grid"
          />
        </div>
        <div className="relative z-1">
          <div
            className="flex items-center justify-between mb-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h4 className="h4">{item.question}</h4>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-n-6 transition-transform ${
                isOpen ? 'rotate-45' : ''
              }`}
            >
              <div className="w-5 h-0.5 bg-n-1"></div>
              <div
                className={`w-0.5 h-5 bg-n-1 absolute transition-opacity ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
            </div>
          </div>

          <div
            className={`body-2 text-n-4 transition-all duration-300 overflow-hidden ${
              isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Roadmap = () => (
  <Section className="overflow-hidden" id="faq">
    <div className="container md:pb-10">
      <Heading
        tag="Frequently Asked Questions"
        title="Everything you need to know"
      />

      <div className="relative grid gap-6 md:gap-4 md:pb-[7rem]">
        {faqItems.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button>More questions</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
