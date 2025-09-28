interface HeroSectionProps {
  title: string;
  description: string;
}

export function HeroSection({ title, description}: HeroSectionProps) {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-blue-50 py-20 px-4 md:px-8 lg:px-16 gap-10 min-h-[450px]">
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center relative w-full md:w-auto">
        <div className="relative w-48 h-48 md:w-64 md:h-64 bg-blue-200 rounded-full flex justify-center items-center shadow-xl">
          <svg className="w-3/4 h-3/4 text-blue-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"/>
            <path d="M12 8L16 4M12 8L8 4M12 8V16M16 12H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <img src="src/assets/person1.png" alt="Person 1" className="absolute top-8 left-8 w-8 h-8 rounded-full shadow-md bg-white p-1" />
          <img src="src/assets/person2.jpg" alt="Person 2" className="absolute bottom-8 right-8 w-8 h-8 rounded-full shadow-md bg-white p-1" />
          <img src="src/assets/computer.png" alt="Computer" className="absolute bottom-10 left-16 w-10 h-8 rounded-md shadow-md bg-white p-1" />
        </div>
      </div>
    </section>
  );
}