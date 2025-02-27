import { benefits } from '../constants';
import Heading from './Heading';
import Section from './Section';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';

// Import all card backgrounds directly as modules
import card1 from '../assets/benefits/card-1.svg?url';
import card2 from '../assets/benefits/card-2.svg?url';
import card3 from '../assets/benefits/card-3.svg?url';
import card4 from '../assets/benefits/card-4.svg?url';
import card5 from '../assets/benefits/card-5.svg?url';
import card6 from '../assets/benefits/card-6.svg?url';

// Map background class names to imported SVGs
const backgroundMap = {
  'bg-benefit-1': card1,
  'bg-benefit-2': card2,
  'bg-benefit-3': card3,
  'bg-benefit-4': card4,
  'bg-benefit-5': card5,
  'bg-benefit-6': card6,
};

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Participate in the AI data economy"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => {
            // Get the background image URL from the map
            const backgroundImage = backgroundMap[item.backgroundClassName];
            
            return (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                }}
                key={item.id}
              >
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
          })}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
