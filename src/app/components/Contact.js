export default function ContactForm({ onSubmit, tooltip }) {
  return (
    <div class=" mt-40 justify-center min-h-screen sm:items-center sm:pt-0 mx-6">
      <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 ">
        <div class=" overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 mr-2 dark:bg-gray-800 rounded-lg md:my-10">
              <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold break-all ">
                  Calgary, Alberta
                </div>
              </div>

              <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold ">
                  403-862-5525
                </div>
              </div>

              <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold break-all w-full sm:w-auto">
                  ckoivuneva43@gmail.com
                </div>
              </div>
            </div>

            <form
              className="p-6 flex flex-col justify-center"
              onSubmit={onSubmit}
            >
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-primary font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="hidden">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-primary font-semibold focus:border-indigo-500 focus:outline-none"
                ></textarea>
              </div>

              {tooltip.visible && (
                <div
                  id="tooltip"
                  className={`tooltip tooltip-open ${
                    tooltip.type === "error"
                      ? "tooltip-error"
                      : "tooltip-success"
                  } mt-2`}
                  data-tip={tooltip.message}
                >
                  <button
                    id="tooltip-button"
                    className={`btn ${
                      tooltip.type === "error" ? "btn-error" : "btn-success"
                    }`}
                  >
                    {tooltip.type === "error" ? "Fail" : "Success"}
                  </button>
                </div>
              )}

              <div className="flex justify-center mt-3">
                <button
                  type="submit"
                  className={`md:w-32 text-center ${
                    tooltip.type === "success" ? "bg-green-500" : "bg-primary"
                  } hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-500 transition ease-in-out duration-300`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
