import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem, ScaleIn } from "../components/AnimatedSection";
import { FAQSection } from "../components/FAQSection";
import { buildMeta, jsonLdScript, breadcrumbJsonLd } from "../lib/seo";

export const Route = createFileRoute("/games")({
  head: () => {
    const seo = buildMeta({
      title: "13L Game Games — WinGo, Aviator, Mines & 100+ Online Titles",
      description:
        "Browse 100+ games on 13L Game including WinGo, Aviator, Mines, Limbo, K3 Lottery, 5D and slots. Login to 13L Game and play to win real money instantly.",
      path: "/games",
      keywords: "13l game games, wingo game, aviator game, mines game, 13lgame login, 13lgame register",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript(breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Games", path: "/games" },
        ])),
      ],
    };
  },
  component: GamesPage,
});

const gameCategories = [
  {
    category: "🎯 Color Prediction Games",
    desc: "Color prediction is the most popular game category on 13L Game. Players predict which color will appear in the next round — green, red, or violet — and win up to 9x their bet. With rounds as fast as 30 seconds, WinGo delivers non-stop action and excitement.",
    games: [
      { name: "WinGo 30s", desc: "The fastest color prediction game on 13L Game. Every 30 seconds, a new round begins. Pick green, red, or violet and see instant results. Perfect for players who love rapid-fire action and quick decisions.", img: "https://13l.video/img/0/gamelogo/ARLottery/053549548-30085-file_20260407053549438.webp" },
      { name: "WinGo 1min", desc: "One-minute rounds give you a bit more time to analyze patterns and strategize your picks. Popular among players who prefer a balanced pace between speed and strategy on 13L Game.", img: "https://13l.video/img/0/gamelogo/ARLottery/053549548-30085-file_20260407053549438.webp" },
      { name: "WinGo 3min", desc: "Three-minute rounds for the patient strategist. Analyze historical results, follow community predictions, and make calculated bets. The go-to WinGo variant for thoughtful players on 13L Game.", img: "https://13l.video/img/0/gamelogo/ARLottery/053549548-30085-file_20260407053549438.webp" },
    ],
  },
  {
    category: "✈️ Crash Games",
    desc: "Crash games are all about timing and nerve. Watch a multiplier climb higher and higher — but it could crash at any moment. Cash out at the right time to lock in your winnings, or hold on too long and lose everything. It's the ultimate test of instinct.",
    games: [
      { name: "Aviator", desc: "The legendary crash game that took the gaming world by storm. Watch the plane soar higher while the multiplier grows. Cash out before it flies away to secure your winnings. Aviator on 13L Game features smooth animations, real-time statistics, and auto-cashout options.", img: "https://13l.video/img/0/gamelogo/SPRIBE/aviator.png" },
      { name: "Limbo", desc: "Set your target multiplier before the round begins. If the randomly generated result meets or exceeds your target, you win. The higher you aim, the bigger the payout — but the lower the odds. Limbo on 13L Game is pure mathematical thrill.", img: "https://13l.video/img/0/gamelogo/TB_Chess/043257976-22891-file_20260114043257939.webp" },
    ],
  },
  {
    category: "💎 Instant Win Games",
    desc: "Instant win games deliver immediate results and heart-pumping excitement. No waiting for draws or rounds — every action brings instant feedback. These games test your strategy, risk tolerance, and quick thinking.",
    games: [
      { name: "Mines", desc: "The grid is filled with hidden gems and mines. Click to reveal — find gems to multiply your bet, but hit a mine and it's game over. Each successful click increases your multiplier. How deep will you dig on 13L Game?", img: "https://13l.video/img/0/gamelogo/JILI/121851930-9361-229.png" },
      { name: "Wheel of Fortune", desc: "Spin the golden wheel and land on amazing prizes — cash bonuses, multipliers, and special rewards. The Wheel of Fortune on 13L Game is the perfect mix of luck and excitement. Spin daily for guaranteed fun!", img: "https://13l.video/assets/darkRed/home/homeicon_bet-6515b5c7.webp" },
    ],
  },
  {
    category: "🎰 Lottery & Slots",
    desc: "Classic lottery formats meet modern slot mechanics on 13L Game. Whether you love picking numbers or spinning reels, these games offer massive jackpot potential and endless entertainment.",
    games: [
      { name: "K3 Lottery", desc: "Three dice are rolled, and you bet on the outcomes — big or small, odd or even, specific combinations, or exact numbers. K3 Lottery on 13L Game offers multiple betting options and impressive payouts for strategic players.", img: "https://13l.video/img/0/gamelogo/JDB/8023.png" },
      { name: "5D Lottery", desc: "A five-digit number is drawn each round. Bet on individual digits, combinations, or the sum for varying payout levels. 5D Lottery on 13L Game brings the classic lottery experience online with bigger prizes and more frequent draws.", img: "https://13l.video/img/0/gamelogo/JDB/8023.png" },
    ],
  },
];

const gamesFaqs = [
  { question: "Which games are most popular on 13L Game?", answer: "WinGo 30s, Aviator, and Mines consistently rank as the three most popular games on 13L Game. WinGo attracts players with its fast 30-second color prediction rounds and potential 9x payouts. Aviator draws in adrenaline seekers who love watching multipliers climb. Mines appeals to strategic thinkers who enjoy calculated risk-taking. Together, these games account for a significant portion of daily gaming activity on the platform." },
  { question: "Can I play 13L Game games for free?", answer: "Yes! 13L Game offers multiple ways to play without depositing your own money. Daily free gift codes shared in our Telegram prediction group give you bonus balance. New players receive welcome bonuses upon registration. Referral rewards give you credits for inviting friends. These 13lgame gift codes and bonuses allow you to explore the full game library risk-free." },
  { question: "What is the minimum bet on 13L Game?", answer: "13L Game is designed to be accessible to players of all budgets. Most games start with very low minimum bets — as low as ₹1 for some titles. This means you can enjoy extended gaming sessions even with a small balance. Higher-stakes options are also available for VIP players and those looking for bigger thrills." },
  { question: "How do I win on WinGo 13L Game?", answer: "WinGo is a color prediction game where you choose a color (green, red, or violet) or a specific number. If the result matches your prediction, you win. Payouts vary: green and red offer 2x returns, while violet offers up to 4.5x. Many successful players use pattern analysis, community predictions from our Telegram group, and bankroll management strategies to maximize their winnings on 13L Game." },
  { question: "Are 13L Game games fair?", answer: "Absolutely! All games on 13L Game use provably fair algorithms and certified Random Number Generators (RNG). Every game result is generated independently and cannot be influenced or predicted by the platform. Our game providers undergo regular third-party audits to verify fairness. You can trust that every spin, every draw, and every outcome on 13L Game is 100% genuine." },
  { question: "Can I play multiple games at once on 13L Game?", answer: "Yes, 13L Game allows seamless switching between games. Your wallet balance is shared across all games, so you can play WinGo in one tab, switch to Aviator, and then try Mines — all without any balance transfer hassles. The platform is designed for variety and flexibility." },
  { question: "What game providers does 13L Game use?", answer: "13L Game partners with industry-leading game providers including JILI, SPRIBE, JDB, TB Chess, AR Lottery, and more. These providers are renowned globally for their high-quality game mechanics, stunning visuals, certified fairness, and reliable performance. Each provider brings unique game styles and mechanics to the 13L Game library." },
  { question: "Are new games added regularly to 13L Game?", answer: "Yes! The 13L Game team continuously works to expand the game library. New titles from various providers are added regularly, covering new game mechanics and themes. Players are notified about new game launches through the platform and our Telegram community. This ensures the gaming experience on 13L Game always feels fresh and exciting." },
];

function GamesPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <section className="py-20 px-4" style={{ background: "var(--gradient-hero)" }}>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Explore 100+ Games on <span className="text-gradient-gold">13L Game</span></h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From color prediction to crash games, mines to lottery — 13L Game has the most exciting collection of online games. Every game runs on provably fair algorithms with instant results. Login to 13L Game and start playing today!
          </p>
          <div className="section-divider mt-6" />
        </AnimatedSection>
      </section>

      {/* Detailed game intro */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">A World-Class <span className="text-gradient-crimson">Game Library</span></h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <SlideInLeft>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The 13L Game library is one of the most comprehensive and diverse collections of online games available on any platform. With over 100 titles spanning color prediction, crash games, instant win, lottery, and slots, there is something for every type of player. Whether you enjoy fast-paced action or prefer slow, strategic gameplay, 13L Game has the perfect game waiting for you.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every game on 13L Game is powered by industry-leading providers who are known globally for their quality, fairness, and innovation. JILI brings creative game mechanics with stunning visuals. SPRIBE delivers the world-famous Aviator crash game. JDB provides classic lottery formats with modern twists. TB Chess offers unique prediction-style games. Together, these providers ensure that the 13L Game experience is second to none.
                </p>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  What makes the 13L Game library special is not just the quantity — it's the quality. Every game has been tested for fairness using certified Random Number Generators. Results are instant and transparent. Payouts are calculated accurately and credited to your wallet in real time. The gaming interface is smooth, responsive, and optimized for both mobile and desktop play.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  New games are added to 13L Game regularly, keeping the library fresh and exciting. When you login to 13L Game, you'll often discover new titles that weren't there last time. Our team carefully curates every addition to ensure it meets the high standards our players expect. From the most casual player to the most dedicated VIP, the 13L Game library caters to all.
                </p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {gameCategories.map((cat, ci) => (
        <section key={cat.category} className="py-16 px-4" style={ci % 2 === 0 ? { background: "var(--gradient-surface)" } : undefined}>
          <div className="mx-auto max-w-6xl">
            <AnimatedSection className="mb-10">
              <h2 className="text-2xl font-bold md:text-3xl">{cat.category}</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl leading-relaxed">{cat.desc}</p>
              <div className="section-divider mt-3 !mx-0" />
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.games.map((g) => (
                <StaggerItem key={g.name}>
                  <motion.div whileHover={{ y: -6 }} className="gaming-card h-full flex flex-col">
                    <img src={g.img} alt={`${g.name} on 13L Game`} className="h-20 w-20 object-contain mx-auto mb-4 rounded-xl" />
                    <h3 className="font-bold text-foreground text-center mb-2">{g.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 text-center">{g.desc}</p>
                    <a href="https://13l.video/" target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 text-xs w-full">Play {g.name}</a>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}

      {/* Game Tips */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Pro Tips for <span className="text-gradient-gold">13L Game</span> Players</h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="gaming-card space-y-5">
              <h3 className="text-lg font-bold text-foreground">🎯 Start Small, Learn Big</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you're new to 13L Game, start with small bets to understand game mechanics before increasing your stakes. Each game has its own rhythm and strategy. WinGo rewards pattern recognition, Aviator rewards timing, and Mines rewards risk management. Take your time learning each game — the profits will follow naturally.
              </p>
              <h3 className="text-lg font-bold text-foreground">📊 Use the Prediction Group</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our Telegram prediction group is a goldmine of strategies and real-time tips. Experienced players share their analysis of WinGo color patterns, Aviator cashout strategies, and Mines grid approaches. Join at t.me/officiall13lgames and learn from the community. Many successful 13L Game players credit the prediction group for boosting their win rate significantly.
              </p>
              <h3 className="text-lg font-bold text-foreground">💰 Manage Your Bankroll</h3>
              <p className="text-muted-foreground leading-relaxed">
                The most successful 13L Game players have disciplined bankroll management. Set a daily budget, stick to it, and never chase losses. Use the daily free gift codes to extend your playing time. Withdraw your winnings regularly to lock in profits. Smart money management is the difference between a good player and a great one.
              </p>
              <h3 className="text-lg font-bold text-foreground">🎁 Maximize Gift Codes & Bonuses</h3>
              <p className="text-muted-foreground leading-relaxed">
                Take full advantage of every 13L Game free gift code, welcome bonus, referral reward, and VIP perk. These bonuses give you extra playing power without additional deposits. Check the Telegram group daily for new 13lgame gift codes and redeem them promptly — popular codes reach their redemption limits quickly.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: "var(--gradient-hero)" }}>
        <ScaleIn className="text-center">
          <h2 className="text-2xl font-bold mb-4">Start Playing on 13L Game Now</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Register in 30 seconds and explore 100+ exciting games with instant payouts.</p>
          <a href="https://13l.video/" target="_blank" rel="noopener noreferrer" className="btn-primary">Register & Play</a>
        </ScaleIn>
      </section>

      <FAQSection title="13L Game Games — Frequently Asked Questions" subtitle="Everything you need to know about the games available on 13L Game." faqs={gamesFaqs} />
    </div>
  );
}
