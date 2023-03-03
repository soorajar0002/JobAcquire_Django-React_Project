import React from "react"

function Modal({  errorMessage,setErrorMessage }) {
    console.log(errorMessage)
  return (
    
    <div className="flex justify-center">
      
        <div class=" w-full  max-w-md fixed">
          <div class="relative bg-white shadow-xl  rounded-lg border border-gray-100 ">
            <button
               onClick={() => {
                setErrorMessage("")
              }}
              type="button"
              class="absolute top-3 right-2.5 text-gray-100  bg-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="sr-only"
             
              >
                Close modal
              </span>
            </button>
            <div class="p-6 text-center">
              <svg
                aria-hidden="true"
                class="mx-auto mb-4 text-gray-600 w-14 h-14 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 class="mb-5 text-md font-semibold text-black gray-500 ">
                {" "}
                {errorMessage} 
              </h3>
            </div>
          </div>
</div>
    </div>
  )
}

export default Modal
