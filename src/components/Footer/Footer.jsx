const Footer = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center flex-col py-4 w-full px-4 mt-auto">
      <p className="text-gray-700">
        DEV Community — A constructive and inclusive social network for software
        developers. With you every step of your journey.
      </p>
      <p className="text-gray-700">
        Built on Forem — the open source software that powers DEV and other
        inclusive communities.s
      </p>
      <p className="text-gray-700">Made with love and Ruby on Rails. DEV Community © 2016 - 2022.</p>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          role="img"
          aria-labelledby="ago6ca98ygie5axh2dxo3phclzu460yp"
          class="crayons-icon crayons-icon--default c-link__icon"
        >
          <title id="ago6ca98ygie5axh2dxo3phclzu460yp">Forem logo</title>
          <g clip-path="url(#clip0)" fill="#1AB3A6">
            <path d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z"></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Footer;
