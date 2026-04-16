import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem, ScaleIn } from "../components/AnimatedSection";
import { FAQSection } from "../components/FAQSection";

export const Route = createFileRoute("/how-to-play")({
  head: () => ({
    meta: [
      { title: "How to Play 13L Game — Login, Signup & Register Guide" },
      { name: "description", content: "Complete guide on how to play 13L Game. Learn 13L Game login, signup, registration process. Step-by-step instructions to start winning on 13L Game." },
      { property: "og:title", content: "How to Play 13L Game — Complete Guide" },
      { property: "og:description", content: "Learn how to login, signup, register and play on 13L Game." },
      { name: "keywords", content: "13l game login, 13l game signup, 13l game register, how to play 13l game" },
    ],
  }),
  component: HowToPlayPage,
});

const steps = [
  {
    step: "01",
    title: "Visit 13L Game Website",
    desc: "Open your preferred browser on mobile or desktop and navigate to 13l.video — the official 13L Game platform. The website is fully optimized for all devices, so whether you're on an Android smartphone, iPhone, tablet, or computer, the experience will be smooth and responsive. Bookmark 13l.video for quick access every time you want to play.",
    tip: "Save 13l.video to your home screen on mobile for app-like instant access to 13L Game."
  },
  {
    step: "02",
    title: "13L Game Registration / Signup",
    desc: "Click the 'Register' button prominently displayed on the 13L Game homepage. Enter your mobile number — this will serve as your unique identifier on the platform. Create a strong, memorable password. You'll receive an OTP (One-Time Password) via SMS for verification. Enter the OTP to confirm your identity, and your 13L Game account is created instantly. The entire 13L Game signup process is designed to take less than 30 seconds.",
    tip: "Use a strong password with a mix of letters, numbers, and symbols. This protects your 13L Game account and your winnings."
  },
  {
    step: "03",
    title: "13L Game Login",
    desc: "After successful registration, you can login to 13L Game anytime. Visit 13l.video, click the 'Login' button, and enter your registered mobile number and password. The 13L Game login page features industry-standard encryption to protect your credentials. You can enable 'Remember Me' for faster access on personal devices. If you ever forget your password, the instant recovery system sends an OTP to reset it.",
    tip: "Enable 'Remember Me' on trusted personal devices for one-tap 13L Game login. Never use this on shared or public computers."
  },
  {
    step: "04",
    title: "Make Your First Deposit",
    desc: "Navigate to the deposit section in your 13L Game dashboard. Choose from multiple payment methods including UPI (Google Pay, PhonePe, Paytm), bank transfer, and other digital wallets. Enter your desired deposit amount and complete the transaction. Deposits on 13L Game are processed instantly — your balance updates within seconds. First-time depositors often qualify for welcome bonuses!",
    tip: "Before depositing, check our Telegram group for active 13L Game gift codes. Redeem a free code first to maximize your starting balance."
  },
  {
    step: "05",
    title: "Choose & Play Your Favorite Game",
    desc: "Browse the extensive 13L Game library of 100+ games. Start with popular titles like WinGo 30s for quick color prediction thrills, Aviator for crash game excitement, or Mines for strategic gameplay. Each game has clear on-screen rules and real-time results. The intuitive interface makes it easy for beginners to understand game mechanics, while the depth of options keeps experienced players engaged.",
    tip: "Start with WinGo 30s — it's the most popular game on 13L Game with simple rules. Join the Telegram prediction group for community strategies."
  },
  {
    step: "06",
    title: "Withdraw Your Winnings Instantly",
    desc: "When you're ready to cash out, head to the withdrawal section in your 13L Game dashboard. Enter the amount you want to withdraw, confirm your bank details, and submit your request. 13L Game processes most withdrawals within minutes — your winnings are transferred directly to your linked bank account. There are no hidden fees or unnecessary delays. First-time withdrawals require a one-time identity verification for security.",
    tip: "Verify your bank details once during your first withdrawal. This speeds up all future withdrawals on 13L Game to near-instant processing."
  },
];

const gameGuides = [
  { icon: "🎯", name: "WinGo Guide", desc: "WinGo is 13L Game's most popular game. Each round, a random number and color are generated. You predict which color (green, red, or violet) or number (0-9) will appear. Green and red pay 2x, violet pays up to 4.5x, and exact numbers pay up to 9x. Rounds are available in 30-second, 1-minute, and 3-minute formats. Many players analyze past results for patterns and share tips in the prediction group." },
  { icon: "✈️", name: "Aviator Guide", desc: "Aviator is a crash game where a virtual plane takes off and the multiplier increases. You place your bet before takeoff and must cash out before the plane flies away (crashes). The longer you wait, the higher the potential payout — but if the plane crashes before you cash out, you lose your bet. Aviator features auto-cashout options and live statistics showing other players' bets and cashouts." },
  { icon: "💣", name: "Mines Guide", desc: "Mines presents a grid with hidden gems and mines. Each safe tile you reveal increases your multiplier. But click a mine and your round ends. The fewer safe tiles in the grid, the higher the risk — and the bigger the rewards. You choose your risk level at the start by selecting the number of mines. Strategic players cash out after a few safe clicks rather than pushing their luck." },
  { icon: "🎲", name: "K3 Lottery Guide", desc: "K3 is a three-dice lottery game. Three dice are rolled, and you can bet on various outcomes: the total sum (big/small, odd/even), specific number combinations, triples, doubles, and individual dice values. Each bet type has different odds and payouts. K3 on 13L Game runs frequent rounds, giving players plenty of opportunities to win throughout the day." },
];

const htpFaqs = [
  { question: "How do I register on 13L Game?", answer: "13L Game registration is incredibly simple and takes less than 30 seconds. Visit 13l.video on any device, click the Register button, enter your mobile number, create a secure password, and verify with the OTP sent to your phone. That's it — your 13L Game account is ready. You can immediately start depositing, claiming gift codes, and playing any of the 100+ games available. No email verification, no lengthy forms." },
  { question: "How do I login to 13L Game?", answer: "To login to 13L Game, visit 13l.video and click the Login button. Enter your registered mobile number and the password you created during signup. If you've enabled 'Remember Me' on a previous visit, your credentials will be pre-filled. If you've forgotten your password, click 'Forgot Password' and follow the OTP-based recovery process — your password will be reset within seconds." },
  { question: "What payment methods does 13L Game support?", answer: "13L Game supports a wide range of payment methods to ensure maximum convenience. UPI (including Google Pay, PhonePe, and Paytm), direct bank transfer, and various digital wallet options are available. All deposits are processed instantly — your 13L Game balance updates within seconds of completing the transaction. The platform uses PCI-compliant secure payment gateways for all financial transactions." },
  { question: "How long do 13L Game withdrawals take?", answer: "13L Game is known for industry-leading withdrawal speeds. Most withdrawal requests are processed within minutes, and funds are transferred directly to your linked bank account. First-time withdrawals may require a brief one-time identity verification process for security purposes. After verification, all subsequent withdrawals are near-instant. There are no hidden fees on withdrawals." },
  { question: "Is there a minimum deposit on 13L Game?", answer: "Yes, 13L Game has very low minimum deposit requirements designed to make gaming accessible for everyone. The exact minimum may vary by payment method, but the platform ensures that even players with small budgets can enjoy the full range of games. Check the deposit section after logging in for the most current minimum amounts." },
  { question: "Can I use 13L Game gift codes during registration?", answer: "Yes! After registering on 13L Game, you can immediately head to the gift code redemption section and apply any available 13lgame gift codes. Join our Telegram group at t.me/officiall13lgames before registering so you have codes ready to redeem right away. New players who combine their welcome bonus with gift codes get the best possible start on the platform." },
  { question: "Which game should I play first on 13L Game?", answer: "For beginners, WinGo 30s is the perfect starting game. The rules are simple — predict a color and win if you're correct. Rounds are just 30 seconds, so you'll get quick results and learn the platform interface rapidly. Once comfortable, try Aviator for excitement or Mines for strategy. The beauty of 13L Game is the variety — there's a perfect game for every player's style." },
  { question: "How do I improve my chances of winning on 13L Game?", answer: "Successful 13L Game players follow a few key practices: start with small bets to learn game mechanics, join the Telegram prediction group for community strategies and tips, practice disciplined bankroll management (never bet more than you can afford to lose), use free gift codes to extend your playing time, and diversify across multiple games rather than putting everything on one. Remember, gaming should always be fun first." },
];

function HowToPlayPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <section className="py-20 px-4" style={{ background: "var(--gradient-hero)" }}>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">How to Play <span className="text-gradient-crimson">13L Game</span></h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your complete step-by-step guide to 13L Game login, signup, registration, and getting started. Whether you're a complete beginner or an experienced gamer looking to join our platform, this guide will walk you through everything you need to know.
          </p>
          <div className="section-divider mt-6" />
        </AnimatedSection>
      </section>

      {/* Overview */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Getting Started is <span className="text-gradient-gold">Easy</span></h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <SlideInLeft>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  13L Game was designed with simplicity in mind. From registration to your first game, the entire process is intuitive and takes just minutes. You don't need to download any app — the platform runs perfectly in your mobile or desktop browser. Whether you're on Android, iOS, Windows, or Mac, 13L Game adapts seamlessly to your device.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The 13L Game signup process is one of the fastest in the industry. With just a mobile number and a password, your account is ready in under 30 seconds. No email verification, no lengthy questionnaires, no waiting periods. We believe nothing should stand between you and the excitement of playing on 13L Game.
                </p>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Once registered, you'll have access to over 100 games, a secure deposit and withdrawal system, daily free gift codes, and a vibrant community of fellow players. The 13L Game dashboard is clean and easy to navigate, putting all features at your fingertips — your wallet balance, game library, active promotions, and VIP status are all visible at a glance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We recommend joining our Telegram prediction group before you start playing. The community shares valuable tips, game strategies, and daily free 13lgame gift codes that will enhance your gaming experience right from the start. With the right approach and the support of our community, your journey on 13L Game will be both exciting and rewarding.
                </p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4" style={{ background: "var(--gradient-surface)" }}>
        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">Step-by-Step <span className="text-gradient-crimson">Guide</span></h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="space-y-8">
            {steps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.08}>
                <div className="gaming-card relative overflow-hidden">
                  <span className="text-8xl font-black text-primary/5 absolute -top-4 -right-2">{s.step}</span>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">{s.step}</span>
                      <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-accent/5 border border-accent/10">
                      <span className="text-accent">💡</span>
                      <p className="text-sm text-accent/80"><strong>Pro Tip:</strong> {s.tip}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Game-Specific Guides */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">Game Guides on <span className="text-gradient-gold">13L Game</span></h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Learn how each popular game works before you start playing</p>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gameGuides.map((g) => (
              <StaggerItem key={g.name}>
                <div className="gaming-card h-full">
                  <span className="text-3xl mb-3 block">{g.icon}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{g.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Responsible Gaming */}
      <section className="py-20 px-4" style={{ background: "var(--gradient-surface)" }}>
        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Responsible Gaming on <span className="text-gradient-crimson">13L Game</span></h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="gaming-card space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                At 13L Game, we believe that gaming should always be a source of entertainment, not stress. We are committed to promoting responsible gaming practices and encourage all our players to maintain healthy gaming habits. Here are our guidelines for responsible play on 13L Game:
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Set a budget:</strong> Before each gaming session, decide how much you're willing to spend. Once you reach that limit, stop playing. This simple practice ensures gaming remains fun and never impacts your financial well-being.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Take breaks:</strong> Don't play for extended periods without rest. Regular breaks help you make better decisions and keep the experience enjoyable. Set a timer if needed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Never chase losses:</strong> If you're having an unlucky session, don't increase your bets to recover losses. Walk away and come back fresh another time. Every session on 13L Game is independent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Gaming is entertainment:</strong> Treat your time on 13L Game as entertainment, not as a primary income source. Wins are wonderful bonuses, but the real value is in the excitement and fun of playing.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: "var(--gradient-hero)" }}>
        <ScaleIn className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start? Register on 13L Game Now!</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Follow the steps above and join over one million players already winning on 13L Game.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://13l.video/" target="_blank" rel="noopener noreferrer" className="btn-primary">Register on 13L Game</a>
            <a href="https://13l.video/" target="_blank" rel="noopener noreferrer" className="btn-gold">Login to 13L Game</a>
          </div>
        </ScaleIn>
      </section>

      <FAQSection title="13L Game Login & Registration — Frequently Asked Questions" subtitle="Detailed answers to all your questions about 13L Game login, signup, registration, and gameplay." faqs={htpFaqs} />
    </div>
  );
}
