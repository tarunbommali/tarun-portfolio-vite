import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  const currentTheme = 'dark'; // Set this dynamically based on your theme logic

  // Define colors for the text and cursor based on the currentTheme
  const textColor = currentTheme === 'dark' ? 'text-white' : 'text-black';
  const cursorColor = currentTheme === 'dark' ? 'text-white' : 'text-black';

  return (
    <div className='flex'>
    <Typewriter
      options={{
        strings: ['Software Developer', 'Frontend Developer', 'Open Source Contributor', 'React Developer', 'Debuggable'],
        autoStart: true,
        loop: true,
        wrapperClassName: `text-[28px] md:text-[32px] ${textColor}`,  // Apply dynamic text color
        cursorClassName: `text-[28px] md:text-[28px] ${cursorColor}`, // Apply dynamic cursor color
        delay: 250,
      }}
      
    />
    </div>
  );
};

export default TypewriterComponent;
