import Image from 'next/image';
import React from 'react'; 

export default function Home() {
  return (
    <div className="bg-sky-600 text-white min-h-screen p-6">
      <h1 className="text-6xl font-extrabold text-center mt-16 mb-4">
        Erling Haaland: The Norwegian Machine
      </h1>
      <p className="text-xl text-center mb-8">
        Manchester City's Goal-Scoring Beast
      </p>

      
      <div className="flex justify-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Norway_Italy_-_June_2025_E_07.jpg"
          alt="Erling Haaland"
          width={300}
          height={350}
          className="rounded-lg shadow-lg"
        />
        <div className="flex flex-col justify-center ml-6">
          <h2 className="text-2xl font-bold mb-2">About Erling Haaland</h2>
          <p className="text-lg">
            Erling Haaland is a professional footballer from Norway who plays as a striker for Manchester City and the Norway national team. Known for his incredible speed, strength, and goal-scoring ability, Haaland is considered one of the best young talents in football.
          </p>
          <p className="text-lg mt-4">
            Born on July 21, 2000, in Leeds, England, Haaland began his career at Bryne FK before moving to Molde FK. He gained international fame during his time at Red Bull Salzburg and Borussia Dortmund, where he consistently scored goals and broke records.
          </p>
          <p className="text-lg mt-4">
            In 2022, Haaland signed with Manchester City, where he has continued to impress with his performances in the Premier League and UEFA Champions League. His physical attributes, combined with his technical skills, make him a nightmare for defenders and a fan favorite worldwide.
          </p>
          <p className="text-lg mt-4">
            <li>height: 194 cm</li>
            <li>weight: 87 kg</li>
            <li>position: Striker</li>
            <li>current club: Manchester City</li>
            <li>national team: Norway</li>
          </p>
        </div>
        <div className='justify-center'>
          <Image
            src="https://fifpro.org/media/1i0cxvm4/haaland_ucl.jpg"
            alt="Erling Haaland"
            width={450}
            height={300}
            className="rounded-lg shadow-lg mt-6"
          />
          <p className="text-lg text-center mt-2">
            Haaland has broken numerous records and is a key player for both his club and country.
          </p>
          <footer className="text-center mt-8">
            <p className="text-sm">
              built by Davi_city with ❤️ using Next.js and Tailwind CSS.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
