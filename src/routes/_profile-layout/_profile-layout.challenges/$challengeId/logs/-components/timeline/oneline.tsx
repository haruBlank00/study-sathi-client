import { formateDate } from "@/lib/date";
import { Log } from "../../$logId/-interface";
import { Link } from "@tanstack/react-router";

export const OneLine = ({ log }: { log: Log }) => {
  const date = log.createdAt;
  const formattedDate = formateDate(date);

  const title = "ok where's title?";
  const content = log.content;

  const to = `/dashboard/challenges/${log.challenge}/logs/${log._id}`;
  return (
    <li className="mb-10 ms-4 border-b border-transparent hover:border-b-primary transition">
      <Link to={to}>
        <div className="absolute w-3 h-3 bg-primary border-primary rounded-full mt-1.5 -start-1.5 border"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {formattedDate}
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {content}
        </p>
        {/* <a
      href="#"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      Learn more{" "}
      <svg
        className="w-3 h-3 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a> */}
      </Link>
    </li>
  );
};
