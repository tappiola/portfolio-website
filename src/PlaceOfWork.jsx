import Zoom from 'react-reveal/Zoom';

export function PlaceOfWork({
  work: {
    dates, company, title, description, location,
  },
}) {
  return (
    <Zoom>
      <li>

        <div className="flex flex-start items-center pt-3">
          <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3" />
          <p className="text-gray-400 text-sm">{dates}</p>
        </div>
        <div className="mt-0.5 ml-4 mb-6">
          <h4 className="text-teal-600 font-semibold text-xl mb-1.5">{title}</h4>
          <p className="text-gray-400 text-md">{company}</p>
          <p className="text-gray-500 text-xs mb-2 flex">
            <svg className="w-2 mr-1 inline-block inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path fill="currentColor" d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
            </svg>
            {location}
          </p>
          {description.map((p, i) => <p key={i} className="text-stone-400 mb-2 last:mb-0">{p}</p>)}
        </div>
      </li>
    </Zoom>
  );
}
