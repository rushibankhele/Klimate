import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router-dom";

const Header = () => {
  const {theme, setTheme} = useTheme()
  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img src={isDark ? "/logo.png" : "/logo2.png" } alt="klimate_logo" className="h-14" />
        </Link>

        <div>
          {/* search */}
          <div className="cursor-pointer" onClick={()=> setTheme(isDark ? "light" : "dark")}>
            toggle
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
