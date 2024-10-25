import { LoaderCircle } from 'lucide-react';

const Loader = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-[999] flex items-center justify-center flex-col gap-4'>
      <div className="loader">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <p className='text-white font-semibold '>Wait for a second, Our AI is thinking...</p>
    </div>
  );
};

export default Loader;
