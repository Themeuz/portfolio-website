import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer bg-transparent bg-opacity-30 text-[#025a4e] px-12 mt-40">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-8 mb-10">
          <a href="https://github.com/Themeuz" className="icon-link">
            <img
              src="/images/github.svg"
              alt="GitHub"
              className="icon w-8 h-8"
            />
          </a>
          <a href="https://x.com/thameusis" className="icon-link">
            <img
              src="/images/twitter.svg"
              alt="Twitter"
              className="icon w-8 h-8"
            />
          </a>
          <a href="https://br.linkedin.com/in/matheus-bicego-tech/pt" className="icon-link">
            <img
              src="/images/linkedin.svg"
              alt="LinkedIn"
              className="icon w-8 h-8"
            />
          </a>
          <a href="mailto:matheusbicegodata@gmail.com" className="icon-link">
            <img
              src="/images/gmail.svg"
              alt="Email"
              className="icon w-8 h-8"
            />
          </a>
        </div>
        <div className="text-[#6e9285] text-base sm:text-sm mb-7 lg:text-sm font-extralight">
          <p>
            <strong>Endereço:</strong> Rio de Janeiro/RJ - Brasil
          </p>
          <p>
            <strong>Número:</strong> (21) 95919-6951
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:matheusbicegodata@gmail.com" className="underline">
              matheusbicegodata@gmail.com
            </a>
          </p>
          <p className="copyright text-[#5c6965] text-base sm:text-sm font-extralight mt-4">
            &copy; 2024 Matheus Bicego. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
