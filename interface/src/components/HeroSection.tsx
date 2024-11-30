import React, { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const HeroSection = ({ title, description, children }: HeroSectionProps) => {
  return (
    <section className="flex flex-col items-center justify-center text-center p-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h2 className="text-5xl font-extrabold mb-6">
        {title}
      </h2>
      <p className="text-xl mb-10 max-w-3xl">
        {description}
      </p>
      {children}
    </section>
  );
};

export default HeroSection;