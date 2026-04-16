import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import logoImg from "../assets/13l-game-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border" style={{ background: "var(--gradient-surface)" }}>
      {/* Prediction Group Banner */}
      <AnimatedSection className="py-8 px-4 text-center border-b border-border">
        <p className="text-muted-foreground mb-3 text-sm">Join our official prediction group for free tips & strategies</p>
        <a
          href="https://t.me/officiall13lgames"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-xs"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.94 8.13l-2.01 9.47c-.15.68-.54.85-1.1.53l-3.04-2.24-1.47 1.41c-.16.16-.3.3-.61.3l.22-3.1 5.6-5.06c.24-.22-.05-.34-.38-.13l-6.92 4.36-2.98-.93c-.65-.2-.66-.65.14-.96l11.64-4.49c.54-.2 1.01.13.83.96l.08-.12z"/></svg>
          Join 13L Game Prediction Group
        </a>
      </AnimatedSection>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <AnimatedSection>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="13L Game" className="h-12 w-12 rounded-lg" />
              <span className="text-lg font-bold text-gradient-gold">13L Game</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              13L Game is a premier online gaming platform offering exciting games like WinGo, Aviator, Mines, and more. Play, win, and enjoy the thrill of gaming.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About 13L Game</Link></li>
              <li><Link to="/games" className="text-muted-foreground hover:text-primary transition-colors">Games</Link></li>
              <li><Link to="/how-to-play" className="text-muted-foreground hover:text-primary transition-colors">How to Play</Link></li>
              <li><Link to="/gift-codes" className="text-muted-foreground hover:text-primary transition-colors">Gift Codes</Link></li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex items-center gap-3 mb-4">
              <a href="https://t.me/veeranjan_solutions" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.94 8.13l-2.01 9.47c-.15.68-.54.85-1.1.53l-3.04-2.24-1.47 1.41c-.16.16-.3.3-.61.3l.22-3.1 5.6-5.06c.24-.22-.05-.34-.38-.13l-6.92 4.36-2.98-.93c-.65-.2-.66-.65.14-.96l11.64-4.49c.54-.2 1.01.13.83.96l.08-.12z"/></svg>
              </a>
              <a href="https://t.me/officiall13lgames" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.94 8.13l-2.01 9.47c-.15.68-.54.85-1.1.53l-3.04-2.24-1.47 1.41c-.16.16-.3.3-.61.3l.22-3.1 5.6-5.06c.24-.22-.05-.34-.38-.13l-6.92 4.36-2.98-.93c-.65-.2-.66-.65.14-.96l11.64-4.49c.54-.2 1.01.13.83.96l.08-.12z"/></svg>
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Join our Telegram for latest updates, free gift codes, and game predictions.
            </p>
          </AnimatedSection>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            Made by{" "}
            <a href="https://t.me/veeranjan_solutions" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors font-medium">
              Veeranjan Solution
            </a>
          </p>
          <p className="text-xs text-muted-foreground mt-1">© {new Date().getFullYear()} 13L Game. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
