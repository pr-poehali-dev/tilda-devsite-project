
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="h-10 w-10 rounded-full bg-purple hover:bg-purple/90 shadow-lg"
          aria-label="Прокрутить наверх"
        >
          <Icon name="ChevronUp" size={24} />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
