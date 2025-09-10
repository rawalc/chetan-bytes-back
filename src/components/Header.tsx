import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b border-border/20 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <img 
          src={profileImage} 
          alt="Chetan Rawal Profile"
          className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
        />
        <div>
          <h1 className="text-lg font-semibold text-foreground">
            Chetan Rawal
          </h1>
          <p className="text-sm text-muted-foreground">
            Your Next Product Manager
          </p>
        </div>
      </div>
      
      <nav className="flex items-center gap-4">
        <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
          Home
        </Button>
        <Button variant="cta">
          Book A Meeting
        </Button>
      </nav>
    </header>
  );
};

export default Header;