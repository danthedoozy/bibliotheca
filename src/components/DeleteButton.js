import React from 'react'

function DeleteButton(props) {
  return (
    <div title='Delete'>
      <svg
        viewBox='0 0 512 512'
        fill='#282c34'
        className='delete-button'
        {...props}
      >
        <path d='M446.906 299.769c-5.865-76.359-41.417-124.21-72.781-166.436C345.083 94.241 320 60.483 320 10.685c0-4-2.24-7.656-5.792-9.489-3.563-1.844-7.844-1.542-11.083.812-47.104 33.706-86.406 90.515-100.135 144.719-9.531 37.737-10.792 80.161-10.969 108.18-43.5-9.291-53.354-74.359-53.458-75.068a10.72 10.72 0 00-5.552-7.916c-3.031-1.583-6.594-1.698-9.667-.177-2.281 1.104-55.99 28.394-59.115 137.355-.219 3.625-.229 7.261-.229 10.896 0 105.857 86.135 191.987 192 191.987.146.01.302.031.427 0h.135C362.167 511.681 448 425.667 448 319.997c0-5.323-1.094-20.228-1.094-20.228zM256 490.652c-35.292 0-64-30.581-64-68.172 0-1.281-.01-2.573.083-4.156.427-15.853 3.438-26.675 6.74-33.873 6.188 13.291 17.25 25.509 35.219 25.509a10.66 10.66 0 0010.667-10.666c0-15.186.313-32.706 4.094-48.518 3.365-14.02 11.406-28.936 21.594-40.893 4.531 15.52 13.365 28.081 21.99 40.341 12.344 17.54 25.104 35.675 27.344 66.6.135 1.833.271 3.677.271 5.656-.002 37.59-28.71 68.172-64.002 68.172z' />
      </svg>
    </div>
  )
}

export default DeleteButton