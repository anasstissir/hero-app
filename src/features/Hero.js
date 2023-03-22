import React from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Colors } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { FaMars } from 'react-icons/fa';
import { IoFemale } from 'react-icons/io5';
ChartJS.register(Colors, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Hero = ({ hero }) => {
  const {
    name,
    images: { lg, sm },
    biography: { fullName, aliases, publisher },
    work: { occupation },
    appearance: { gender },
    powerstats,
  } = hero;

  const data = {
    type: 'radar',
    labels: ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'],
    datasets: [
      {
        data: [powerstats.intelligence, powerstats.strength, powerstats.speed, powerstats.durability, powerstats.power, powerstats.combat],
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
        },
        angleLines: {
          color: 'rgba(240, 240, 240,0.5)',
        },

        grid: {
          color: 'lightgreen',
        },
        pointLabels: {
          color: 'white',
          font: {
            size: 20,
            style: 'italic',
          },
        },
      },
    },
  };

  return (
    <div className="relative mt-10">
      <img src={lg} alt={name} className="w-full hidden md:block md:h-[60vh] object-cover blur-xl" />
      <div className="md:absolute md:inset-x-0 md:bottom-0 bg-gradient-to-t from-black to-transparent pb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">{name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div>
              <img src={sm} alt={name} className="w-auto" />
              <p className="text-white mb-2">
                <strong>Full Name:</strong> {fullName}
              </p>
              <p className="text-white mb-2 flex items-center">
                <strong>Gender:</strong>{' '}
                {gender === 'Male' ? <FaMars className="ml-2" /> : gender === 'Female' ? <IoFemale className="ml-2" /> : 'Unknown'}
              </p>
              <p className="text-white mb-2">
                <strong>Aliases:</strong> {aliases.join(', ')}
              </p>
              <p className="text-white mb-2">
                <strong>Publisher:</strong> {publisher}
              </p>

              <p className="text-white mb-2">
                <strong>Occupation:</strong> {occupation}
              </p>
            </div>
            <div className="w-auto md:absolute right-0 text-white">
              <Radar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
