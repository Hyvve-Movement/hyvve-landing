import { benefits } from '../constants';
import Heading from './Heading';
import Section from './Section';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';

// Import SVG files directly
import card1 from '../assets/benefits/card-1.svg';
import card2 from '../assets/benefits/card-2.svg';
import card3 from '../assets/benefits/card-3.svg';
import card4 from '../assets/benefits/card-4.svg';
import card5 from '../assets/benefits/card-5.svg';
import card6 from '../assets/benefits/card-6.svg';

const Benefits = () => {
  // Create a simple component for each benefit card with inline SVG background
  const BenefitCard = ({ item }) => {
    // Determine which SVG to use based on the backgroundClassName
    let backgroundSvg;
    switch (item.backgroundClassName) {
      case 'bg-benefit-1': backgroundSvg = card1; break;
      case 'bg-benefit-2': backgroundSvg = card2; break;
      case 'bg-benefit-3': backgroundSvg = card3; break;
      case 'bg-benefit-4': backgroundSvg = card4; break;
      case 'bg-benefit-5': backgroundSvg = card5; break;
      case 'bg-benefit-6': backgroundSvg = card6; break;
      default: backgroundSvg = null;
    }

    return (
      <div className="block relative p-0.5 md:max-w-[24rem]" key={item.id}>
        {/* Render the SVG as an actual image element in the background */}
        <div className="absolute inset-0 z-0">
          <img src={backgroundSvg} alt="" className="w-full h-full object-fill" />
        </div>
        
        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
          <h5 className="h5 mb-5">{item.title}</h5>
          <p className="body-2 mb-6 text-n-3">{item.text}</p>
          <div className="flex items-center mt-auto">
            <img
              src={item.iconUrl}
              width={48}
              height={48}
              alt={item.title}
            />
          </div>
        </div>

        {item.light && <GradientLight />}

        <div
          className="absolute inset-0.5 bg-n-8"
          style={{ clipPath: 'url(#benefits)' }}
        >
          <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                width={380}
                height={362}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        <ClipPath />
      </div>
    );
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Participate in the AI data economy"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <BenefitCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
