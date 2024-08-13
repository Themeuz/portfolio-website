import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-transparent bg-opacity-30 text-[#025a4e] px-12 mt-40">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-12 mb-10">
          <a href="https://github.com/Themeuz" className="icon-link">
            <img
              src="https://cdn.discordapp.com/attachments/899049208324161548/1255647822578188328/github.png?ex=66867669&is=668524e9&hm=2525aff7188974158dd81acdef3ea7d1ac1c83f4b8339104e91261c9fe8f5178&"
              alt="GitHub"
              className="icon"
            />
          </a>
          <a href="https://x.com/thameusis" className="icon-link">
            <img
              src="https://cdn.discordapp.com/attachments/899049208324161548/1255647822804680754/twitter.png?ex=66867669&is=668524e9&hm=e3b76aeab9844f2e23c05df63f5a225feb00d8b71ee942d9d3b0f56a5ab16941&"
              alt="Twitter"
              className="icon"
            />
          </a>
          <a href="https://br.linkedin.com/in/matheus-bicego-tech/pt" className="icon-link">
            <img
              src="https://cdn.discordapp.com/attachments/899049208324161548/1255647823928754246/linkedin.png?ex=6686766a&is=668524ea&hm=08ed19c3a2d462985ad46ee2aa6088129a70e28e2d4dc8f9af2130ed70cbaa7f&"
              alt="LinkedIn"
              className="icon"
            />
          </a>
          <a href="mailto:matheusbicegodata@gmail.com" className="icon-link">
            <img
              src="https://cdn.discordapp.com/attachments/899049208324161548/1255647823458730056/mail.png?ex=66867669&is=668524e9&hm=76f3d8795ffeb1ce637e64e7bcbc130400af94103f11a9737e60a070c7285ef8&"
              alt="Email"
              className="icon"
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
            <a href="mailto:matheusbicegodata@gmail.com">matheusbicegodata@gmail.com</a>
          </p>
          <p className="copyright text-[#5c6965] text-base sm:text-sm font-extralight">
          &copy; 2024 Matheus Bicego. All rights reserved.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
