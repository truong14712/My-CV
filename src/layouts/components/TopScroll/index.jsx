import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentColor } from "../../../providers/features/colorSlice";
const TopScroll = () => {
  const currentColor = useSelector(selectCurrentColor);
  const [showButton, setShowButton] = useState(false);
  // Kiểm tra vị trí scroll khi component được mount
  useEffect(() => {
    const handleScroll = () => {
      // Khoảng cách từ đỉnh trang đến vị trí scroll hiện tại
      const scrollY = window.scrollY;

      // Điều kiện để hiển thị button
      if (scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Thêm sự kiện scroll listener khi component được mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // [] đảm bảo rằng useEffect chỉ chạy một lần khi component được mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="relative z-50">
        {showButton && (
          <button
            className="fixed bottom-[24px] right-[34px]  rounded-[50%] sm:bottom-[12%] sm:right-0 md:bottom-[10%] md:right-0"
            onClick={scrollToTop}
            style={{
              background: currentColor,
              transition: "background 2s ease",
              color: "#ffff",
            }}
          >
            <i className="w-full p-2 fa-solid fa-angle-up"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default TopScroll;
