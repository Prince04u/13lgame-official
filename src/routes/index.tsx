import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection, SlideInLeft, SlideInRight, ScaleIn, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { FAQSection } from "../components/FAQSection";
import logoImg from "../assets/13l-game-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "13L Game — Play & Win Exciting Online Games | Login & Register" },
      { name: "description", content: "13L Game is a top online gaming platform. Play WinGo, Aviator, Mines & more. 13L Game login, signup, register & claim free gift codes. Start winning today!" },
      { property: "og:title", content: "13L Game — Play & Win Exciting Online Games" },
      { property: "og:description", content: "Join 13L Game for thrilling casino games, free gift codes, and massive bonuses. Login or register now!" },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "13l game, 13l game login, 13l game signup, 13l game register, 13lgame gift code, 13l code game free gift code" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "13L Game — Play & Win Online" },
      { name: "twitter:description", content: "Play exciting games on 13L Game. Login, register & claim free gift codes!" },
    ],
  }),
  component: HomePage,
});

const popularGames = [
  { name: "WinGo 30s", desc: "Fast-paced color prediction game with 30-second rounds. Pick your color, place your bet, and watch as the result reveals in real time. WinGo on 13L Game delivers instant thrills with every round.", img: "https://13l.video/img/0/gamelogo/ARLottery/053549548-30085-file_20260407053549438.webp" },
  { name: "Aviator", desc: "Watch the plane fly higher and higher while the multiplier grows. Cash out before it crashes to lock in your winnings. Aviator on 13L Game is pure adrenaline.", img: "https://13l.video/img/0/gamelogo/SPRIBE/aviator.png" },
  { name: "Mines", desc: "Navigate a grid full of hidden mines to uncover gems. Each safe click multiplies your bet. One wrong move ends it all. Strategic and thrilling on 13L Game.", img: "https://13l.video/img/0/gamelogo/JILI/121851930-9361-229.png" },
  { name: "Limbo", desc: "Set your target multiplier and test your luck. If the random result beats your target, you win big. Simple mechanics, massive potential on 13L Game.", img: "https://13l.video/img/0/gamelogo/TB_Chess/043257976-22891-file_20260114043257939.webp" },
];

const features = [
  { icon: "🎮", title: "100+ Exciting Games", desc: "From color prediction to crash games, slots to lottery — 13L Game has something for everyone. Our library includes titles from top-tier game providers like JILI, SPRIBE, JDB, and more." },
  { icon: "⚡", title: "Instant Deposits & Withdrawals", desc: "Deposit and withdraw your earnings instantly. No delays, no hidden fees. 13L Game supports UPI, bank transfer, and multiple digital payment methods for seamless transactions." },
  { icon: "🎁", title: "Free Gift Codes Daily", desc: "Claim 13L Game free gift codes every single day through our Telegram community. Get bonus balance to play more, win more, and enjoy the platform without spending a rupee." },
  { icon: "👑", title: "VIP Rewards Program", desc: "Rise through exclusive VIP tiers on 13L Game. Each level unlocks bigger bonuses, higher withdrawal limits, priority support, and special event invitations reserved for elite players." },
  { icon: "🔒", title: "Safe & Secure Platform", desc: "Your data and funds are protected by 256-bit SSL encryption, secure payment gateways, and strict privacy policies. 13L Game meets the highest industry standards for player security." },
  { icon: "📱", title: "Play Anywhere, Anytime", desc: "13L Game is fully optimized for mobile, tablet, and desktop. No downloads needed — just open your browser, login to 13L Game, and start playing your favorite games on the go." },
];

const stats = [
  { value: "1M+", label: "Active Players" },
  { value: "100+", label: "Games Available" },
  { value: "₹50Cr+", label: "Winnings Paid" },
  { value: "24/7", label: "Customer Support" },
];

const testimonials = [
  { name: "Rahul S.", text: "I started playing WinGo on 13L Game last month and already won over ₹15,000. The instant withdrawal feature is amazing — money hits my bank in minutes!", rating: 5 },
  { name: "Priya M.", text: "13L Game is the best platform I've found. The free gift codes on Telegram give me extra balance every day. Aviator is my favorite — so thrilling!", rating: 5 },
  { name: "Amit K.", text: "Registered on 13L Game in 30 seconds and started playing immediately. The variety of games is incredible. Mines is addictive and the payouts are real.", rating: 5 },
  { name: "Sneha D.", text: "What I love about 13L Game is the transparency. Every game feels fair, withdrawals are fast, and the VIP program gives amazing bonuses. Highly recommended!", rating: 5 },
];

const whyPlayers = [
  { icon: "💰", title: "Real Money Winnings", desc: "Every game on 13L Game gives you a genuine chance to win real money. No fake rewards, no gimmicks — just real payouts deposited directly to your bank account." },
  { icon: "🎲", title: "Provably Fair Games", desc: "13L Game uses certified Random Number Generators (RNG) and provably fair algorithms. Every outcome is transparent, verifiable, and completely unbiased." },
  { icon: "🏆", title: "Daily Tournaments", desc: "Compete against other players in daily leaderboard challenges on 13L Game. Top performers earn bonus rewards, free spins, and exclusive gift codes." },
  { icon: "🤝", title: "Referral Bonuses", desc: "Invite friends to join 13L Game and earn commission on their activity. The more friends you refer, the more you earn — it's a win-win for everyone." },
];

const homeFaqs = [
  { question: "What is 13L Game?", answer: "13L Game is a premier online gaming platform where players can enjoy exciting games like WinGo, Aviator, Mines, Limbo, K3 Lottery, 5D Lottery, and many more. With instant deposits, fast withdrawals, daily free gift codes, and a thriving community of over one million players, 13L Game offers the best online gaming experience available today. The platform is accessible on all devices — mobile, tablet, and desktop — without requiring any app download." },
  { question: "How do I login to 13L Game?", answer: "To login to 13L Game, visit the official website at 13l.video and click the Login button in the top-right corner. Enter your registered mobile number and the password you created during signup. If you've forgotten your password, use the 'Forgot Password' link to reset it via OTP verification. Once logged in, you'll have full access to all 100+ games, your wallet balance, deposit and withdrawal options, and your VIP rewards dashboard on 13L Game." },
  { question: "How do I signup for 13L Game?", answer: "The 13L Game signup process is fast and straightforward. Visit 13l.video, tap the Register button, enter your mobile number, create a strong password, and verify your account with the OTP sent to your phone. The entire 13L Game registration takes less than 30 seconds. Once registered, you can immediately deposit funds, claim your welcome bonus, and start playing any of the 100+ games available on the platform." },
  { question: "How to get free gift codes for 13L Game?", answer: "13L Game free gift codes are shared daily on our official Telegram prediction group. Simply join the group at t.me/officiall13lgames and watch for new codes posted by the admin team. These 13lgame gift codes give you bonus balance that can be used to play any game on the platform. Codes are also released during special events, festivals, and promotional campaigns. VIP members receive exclusive gift codes with higher bonus amounts." },
  { question: "Is 13L Game safe and secure?", answer: "Absolutely! 13L Game employs industry-leading security measures including 256-bit SSL encryption for all data transmission, encrypted password storage, secure payment gateways for transactions, and regular third-party security audits. Your personal information and financial data are fully protected. The platform also uses provably fair algorithms in all games, ensuring complete transparency and fairness in every result." },
  { question: "What games are available on 13L Game?", answer: "13L Game offers a diverse library of 100+ games across multiple categories. Popular titles include WinGo (30s, 1min, 3min color prediction rounds), Aviator (crash game), Mines (grid-based strategy game), Limbo (target multiplier game), K3 Lottery, 5D Lottery, Wheel of Fortune, and dozens of slot games from providers like JILI, SPRIBE, JDB, and TB Chess. New games are added regularly to keep the experience fresh and exciting." },
  { question: "How fast are withdrawals on 13L Game?", answer: "13L Game is known for its lightning-fast withdrawals. Most withdrawal requests are processed within minutes, and the funds are transferred directly to your linked bank account or preferred payment method. There are no hidden fees or unnecessary delays. For first-time withdrawals, a one-time identity verification may be required to ensure account security." },
  { question: "Does 13L Game have a referral program?", answer: "Yes! 13L Game offers a generous referral program. When you invite friends to register on 13L Game using your unique referral link, you earn commission on their gaming activity. The more active referrals you have, the higher your earnings. It's a fantastic way to earn passive income while sharing the excitement of 13L Game with people you know." },
];

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20" style={{ background: "var(--gradient-hero)" }}>
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 10, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-gold/5 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={logoImg}
              alt="13L Game Logo — Play & Win Online Games"
              className="mx-auto h-28 md:h-36 mb-6 rounded-2xl"
              style={{ animation: "float 4s ease-in-out infinite" }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
          >
            Play, Win & Earn on{" "}
            <span className="text-gradient-crimson">13L Game</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed"
          >
            The ultimate online gaming platform with 100+ exciting games. Login to 13L Game, register for free,
            and start winning today. Claim daily free gift codes, unlock VIP rewards, and join a community of over one million active players!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://13l.video/" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              🎮 Register on 13L Game
            </a>
            <a href="https://13l.video/" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
              🔑 Login to 13L Game
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6"
          >
            <a href="https://t.me/officiall13lgames" target="_blank" rel="noopener noreferrer" className="btn-outline-light text-xs">
              📢 Join 13L Game Prediction Group on Telegram
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-border" style={{ background: "var(--gradient-surface)" }}>
        <StaggerContainer className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-gradient-gold">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* What is 13L Game - Detailed Intro */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">What is <span className="text-gradient-crimson">13L Game</span>?</h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <SlideInLeft>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  13L Game is one of the fastest-growing online gaming platforms in India, trusted by millions of players who enjoy a wide variety of exciting games every day. Whether you are a fan of color prediction games like WinGo, adrenaline-pumping crash games like Aviator, strategic grid games like Mines, or classic lottery formats like K3 and 5D — 13L Game has it all under one roof.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The platform was built with a simple vision: to make online gaming accessible, fair, and rewarding for everyone. From the moment you complete your 13L Game signup, you are welcomed with bonuses, free gift codes, and access to over 100 games powered by industry-leading providers like JILI, SPRIBE, JDB, and TB Chess.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What sets 13L Game apart from other platforms is our commitment to instant payouts, provably fair algorithms, and a vibrant community that supports each other through prediction groups, strategy sharing, and daily gift code drops. Players who login to 13L Game don't just play — they become part of a thriving ecosystem of gaming enthusiasts.
                </p>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Registering on 13L Game takes less than 30 seconds. All you need is a mobile number and you are ready to explore a world of entertainment. The platform works flawlessly on mobile browsers — no app download required. Whether you are on Android, iOS, or desktop, the 13L Game experience is smooth, fast, and visually stunning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Security is at the core of everything we do. 13L Game uses 256-bit SSL encryption, secure payment gateways, and strict data protection policies to ensure your personal information and funds are always safe. Our games run on certified Random Number Generators (RNG), guaranteeing that every result is completely fair and unbiased.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a growing VIP program, daily tournaments, referral bonuses, and an ever-expanding game library, 13L Game is not just a platform — it's a complete gaming destination. Join the million-strong community today and discover why 13L Game is the number one choice for online gamers across India.
                </p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" style={{ background: "var(--gradient-surface)" }}>
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">Why Choose <span className="text-gradient-crimson">13L Game</span>?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Discover why millions of players trust 13L Game for the best online gaming experience. From instant payouts to daily gift codes, we've got it all.
            </p>
            <div className="section-divider mt-4" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="gaming-card h-full">
                  <span className="text-4xl mb-4 block">{f.icon}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">Popular Games on <span className="text-gradient-gold">13L Game</span></h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Explore the most popular games played by millions on 13L Game. Each game offers unique thrills and massive winning potential.
            </p>
            <div className="section-divider mt-4" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGames.map((game) => (
              <StaggerItem key={game.name}>
                <motion.div whileHover={{ y: -8, scale: 1.02 }} className="gaming-card text-center cursor-pointer h-full flex flex-col">
                  <img src={game.img} alt={`${game.name} — Play on 13L Game`} className="mx-auto h-24 w-24 object-contain mb-4 rounded-xl" />
                  <h3 className="font-bold text-foreground mb-2">{game.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{game.desc}</p>
                  <a href="https://13l.video/" target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 text-xs !px-4 !py-2 w-full">
                    Play Now
                  </a>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Players Love 13L Game */}
      <section className="py-20 px-4" style={{ background: "var(--gradient-surface)" }}>
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">Why Players Love <span className="text-gradient-crimson">13L Game</span></h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              From real money payouts to fair gameplay, here's what makes 13L Game the preferred platform for online gamers across India.
            </p>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPlayers.map((item) => (
              <StaggerItem key={item.title}>
                <div className="gaming-card h-full">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">How to Get Started on <span className="text-gradient-crimson">13L Game</span></h2>
            <p className="mt-3 text-muted-foreground">Follow these simple steps to start playing and winning on 13L Game</p>
            <div className="section-divider mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Register on 13L Game", desc: "Visit 13l.video and create your free account. 13L Game signup takes less than 30 seconds with just your mobile number. You'll receive an OTP for verification and your account will be ready instantly." },
              { step: "02", title: "Deposit & Claim Bonus", desc: "Make your first deposit on 13L Game using UPI, bank transfer, or other supported methods. Claim your welcome bonus automatically and redeem any available 13L Game free gift codes for extra balance." },
              { step: "03", title: "Play & Win Big", desc: "Choose from 100+ games on 13L Game. Play WinGo, Aviator, Mines, Limbo, K3, and more. Win real money and withdraw your earnings instantly to your bank account — no delays, no hassles!" },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="gaming-card text-center relative overflow-hidden h-full">
                  <span className="text-6xl font-black text-primary/10 absolute top-2 right-4">{item.step}</span>
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4" style={{ background: "var(--gradient-surface)" }}>
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">What Players Say About <span className="text-gradient-gold">13L Game</span></h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Real reviews from real players who love 13L Game. Join the community and experience the thrill yourself.
            </p>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="gaming-card h-full">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-accent text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic mb-4">"{t.text}"</p>
                  <p className="text-sm font-semibold text-foreground">— {t.name}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Detailed content section for SEO */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Everything You Need to Know About <span className="text-gradient-crimson">13L Game</span></h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="gaming-card space-y-5">
              <h3 className="text-xl font-bold text-foreground">13L Game Login — Access Your Account Anytime</h3>
              <p className="text-muted-foreground leading-relaxed">
                The 13L Game login process is designed to be quick and secure. Whether you are accessing the platform from your smartphone during a commute or from your desktop at home, logging into 13L Game is seamless. Simply visit 13l.video, enter your registered mobile number and password, and you'll be taken directly to your dashboard. From there, you can check your wallet balance, browse games, claim bonuses, and start playing within seconds. If you ever forget your password, 13L Game offers instant recovery through OTP verification sent to your registered mobile number.
              </p>
              <h3 className="text-xl font-bold text-foreground">13L Game Signup & Registration — Join in 30 Seconds</h3>
              <p className="text-muted-foreground leading-relaxed">
                Signing up for 13L Game is one of the easiest registration processes you'll find on any gaming platform. No lengthy forms, no email verification chains — just enter your mobile number, create a password, verify with OTP, and you're in. The 13L Game registration process respects your time and gets you to the action fast. New players are immediately eligible for welcome bonuses and can start redeeming 13L Game free gift codes from day one. Whether you're a seasoned online gamer or completely new to the world of prediction games, 13L Game makes the onboarding experience welcoming and intuitive.
              </p>
              <h3 className="text-xl font-bold text-foreground">13L Game Gift Codes — Free Bonuses Every Day</h3>
              <p className="text-muted-foreground leading-relaxed">
                One of the most loved features of 13L Game is the daily distribution of free gift codes. These 13lgame gift codes are shared exclusively through our official Telegram prediction group, giving players bonus balance they can use across any game on the platform. Whether you're looking for a 13L code game free gift code to try a new game risk-free or want to boost your existing balance, our gift code system ensures there's always something extra for you. During festivals and special events, premium gift codes with higher bonus amounts are released, making it even more rewarding to be part of the 13L Game community.
              </p>
              <h3 className="text-xl font-bold text-foreground">13L Game Prediction Group — Tips, Strategies & Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our official Telegram prediction group is the heartbeat of the 13L Game community. Thousands of active members share game strategies, winning tips, and real-time predictions for games like WinGo and Aviator. It's also the primary channel for receiving 13L Game free gift codes, event announcements, and platform updates. Whether you're looking to learn from experienced players or want to share your own winning strategies, the prediction group is the place to be. Join at t.me/officiall13lgames and connect with fellow 13L Game enthusiasts today.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ background: "var(--gradient-hero)" }}>
        <ScaleIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Ready to Start Winning on <span className="text-gradient-gold">13L Game</span>?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join millions of players who are already winning big on 13L Game. Register now and claim your free bonus! Your next big win is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://13l.video/" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              Register on 13L Game
            </a>
            <Link to="/gift-codes" className="btn-gold text-base px-8 py-4">
              Get Free Gift Codes
            </Link>
          </div>
        </ScaleIn>
      </section>

      {/* FAQ */}
      <FAQSection
        title="13L Game — Frequently Asked Questions"
        subtitle="Find answers to the most common questions about 13L Game login, signup, registration, free gift codes, and more."
        faqs={homeFaqs}
      />
    </div>
  );
}
