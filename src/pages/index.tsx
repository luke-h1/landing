/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[#E8DCFF] text-5xl font-bold text-center anim-1">
        The title
      </h1>

      <div className="pt-12 md:pt-6" />
      <code
        id="command"
        className="px-3 py-1.5 text-base text-blue-300 rounded-md cursor-pointer bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 anim-2"
        onClick={() => {
          navigator.clipboard.writeText('npx my-package@latest');

          toast.success('Copied', {
            style: {
              background: '#262626',
              color: '#E8DCFF',
            },
            iconTheme: {
              primary: '#E8DCFF',
              secondary: '#262626',
            },
          });
        }}
      >
        npx my-package@latest
      </code>

      <div className="mt-4" />
      <div className="flex gap-4 font-medium text-neutral-300 anim-2">
        <a
          href="https://github.com/luke-h1"
          rel="noreferrer noopener"
          target="_blank"
          className="px-3 py-1 transition-all duration-200 rounded-md hover:bg-neutral-800"
        >
          GitHub
        </a>
      </div>

      <Toaster />
    </div>
  );
};
export default Home;
