import { useEffect, useRef } from "react";

/***
 *  USECASE
 * ----------------
 * const [popupRef] = useCloseOnClickOutside(setShowPopup);
 *
 * use ref={popupRef} on any component
 * */

const useClickOutside = (setShowPopup) => {
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                // Clicked outside the dropdown, so close it
                // Your code to close the dropdown here
                setShowPopup(false);
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popupRef]);

    return [popupRef];
};

export default useClickOutside;
