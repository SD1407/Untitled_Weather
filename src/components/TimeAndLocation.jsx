import React from 'react'

function TimeAndLocation() {
    return (
        <div>
          <div className="flex items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
              {/* {formatToLocalTime(dt, timezone)} */}
              halum2
            </p>
          </div>
    
          <div className="flex itemss-center justify-center my-3">
            <p className="text-white text-3xl font-medium">
                {/* {`${name}, ${country}`} */}
                halum
                </p>
          </div>
        </div>
      );
}

export default TimeAndLocation;