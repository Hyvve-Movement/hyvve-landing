const CompanyLogos = ({ className }) => {
  const partnerLogos = [
    {
      name: 'Celestia',
      logo: 'https://celestia.org/images/celestia-logo.svg',
    },
    {
      name: 'Movement Labs',
      logo: 'https://movementlabs.xyz/wp-content/themes/movement-labs/assets/images/logo.svg',
    },
  ];

  return (
    <div className={`${className} `}>
      <h5 className="tagline mb-6 text-center text-n-1/50">Built On:</h5>
      <ul className="flex justify-center gap-12 -mt-10">
        {partnerLogos.map((partner, index) => (
          <li className="flex items-center h-[8.5rem]" key={index}>
            <img
              src={partner.logo}
              width={134}
              height={28}
              alt={partner.name}
              className="filter brightness-0 invert"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
