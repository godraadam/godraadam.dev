
export default function About() {

  return (
    <div className="xl:overflow-y-scroll">
      <div
        className="py-20 px-20 max-w-2xl xl:max-w-3xl mx-auto space-y-4 leading-loose"
      >
        <h1 className="text-center text-3xl font-bold pb-8">About me</h1>
        <p>
          <b>Hi!</b>
          <br /> My name is Godra Adam and I am a 23 years old software engineer
          based in Romania. I have a keen interest in problem solving. I am a
          privacy advocate. I believe in a free and democratic internet. I
          believe in the individual's right to full control of their private
          data.
        </p>
        <h2 className="text-xl font-bold py-2">Education</h2>
        <p>
          I went to high School at the Tamási Áron high school between 2014-2018
          where I studied computer programming and mathematics. I graduated high
          school in 2018.{" "}
        </p>
        <p>
          {" "}
          Between 2018 and 2022 I studied Automation and Computer Science at the{" "}
          <a className="underline text-sky-500" href="//www.utcluj.ro/en/">
            Technical University of Cluj-Napoca
          </a>.{" "}
          I received my Bachelors' Degree as Software Engineer in 2022.
        </p>
        <h2 className="text-xl font-bold py-2">Projects</h2>
        <p>
          I currently work at{" "}
          <a className="underline text-sky-500" href="//minyma-tech.com/">
            Minyma Technologies
          </a>{" "}
          as a backend and blockchain developer. We work on decentralized
          solutions for the Web3. I am currently working on the{" "}
          <a className="underline text-sky-500" href="//galaxis.xyz/#/">
            Galaxis Community Space{" "}
          </a>{" "}
          project, a decentralized NFT trading and community building platform
          based on the Ethereum blockchain.
        </p>
        <p>
          As my bachelor's thesis project I created{" "}
          <a className="underline text-sky-500" href="//privy-web.netlify.app/">
            Privy Messenger
          </a>
          , a fully distributed, end-to-end encrypted, peer-to-peer instant
          messaging application. The Privy messaging system involves no servers,
          user data is hosted only on devices selected as trusted by the user.
          It is built on{" "}
          <a className="underline text-sky-500" href="//ipfs.io">
            IPFS
          </a>{" "}
          and <a className="underline text-sky-500" href="//orbitdb.org/">OrbitDb</a>.
        </p>
        <h2 className="text-xl font-bold py-4">Hobbies</h2>
        <p>
          Besides programming I like to get out into nature, I like to go hiking
          whenever I get the opportunity. At an early age I fell in love with
          skiing, with mountains, with snow. I am a craft beer enthusiast. I also like basketball, bouldering and cooking!
        </p>
      </div>
    </div>
  );
}
