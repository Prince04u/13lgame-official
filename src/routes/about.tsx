import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem, ScaleIn } from "../components/AnimatedSection";
import { FAQSection } from "../components/FAQSection";
import logoImg from "../assets/13l-game-logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About 13L Game — Trusted Online Gaming Platform | 13L Game Login & Register" },
      { name: "description", content: "Learn about 13L Game, the trusted online gaming platform. Discover our mission, values, and why millions choose 13L Game for login, signup, and gaming." },
      { property: "og:title", content: "About 13L Game — Trusted Online Gaming Platform" },
      { property: "og:description", content: "Learn about 13L Game — trusted by millions for exciting online gaming." },
      { name: "keywords", content: "13l game, about 13l game, 13l game login, 13l game register, 13l game signup" },
    ],
  }),
  component: AboutPage,
});

const aboutFaqs = [
  { question: "When was 13L Game launched?", answer: "13L Game has been serving players with a world-class gaming experience since its inception. The platform has grown rapidly to become one of the most trusted online gaming destinations, with over one million active users who enjoy daily gaming sessions. Our growth story is a testament to the quality of service, fair gameplay, and rewarding experience that 13L Game provides to every registered player." },
  { question: "Is 13L Game a legitimate platform?", answer: "Yes, 13L Game is a fully legitimate and trusted online gaming platform. We use 256-bit SSL encryption for all data transmission, secure payment gateways for financial transactions, and certified Random Number Generators (RNG) for provably fair game outcomes. Our platform has processed millions of successful transactions and maintains a spotless track record of timely payouts. Thousands of positive reviews from real players confirm our legitimacy." },
  { question: "How many games does 13L Game offer?", answer: "13L Game offers over 100 exciting games across multiple categories including color prediction (WinGo 30s, 1min, 3min), crash games (Aviator, Limbo), instant win games (Mines, Wheel of Fortune), lottery (K3, 5D), and dozens of slot games from premium providers like JILI, SPRIBE, JDB, and TB Chess. New games are added regularly, ensuring the library stays fresh and exciting for both new and returning players." },
  { question: "Can I play 13L Game on my mobile phone?", answer: "Absolutely! 13L Game is fully optimized for mobile devices. The platform runs seamlessly on any smartphone browser — Android or iOS — without requiring any app download. The responsive design ensures games look and perform beautifully on screens of all sizes. Simply open your mobile browser, visit 13l.video, login to your 13L Game account, and start playing wherever you are." },
  { question: "How does 13L Game ensure fair play?", answer: "13L Game uses provably fair algorithms and certified Random Number Generators (RNG) to ensure every game result is completely fair, random, and unbiased. We partner with reputable game providers who undergo regular third-party audits. Transparency is a core value at 13L Game — players can trust that every outcome is genuine and not manipulated in any way." },
  { question: "How do I contact 13L Game support?", answer: "13L Game offers 24/7 customer support through multiple channels. You can reach our team via the in-app live chat for instant help, or join our official Telegram community where admins and experienced players are always ready to assist. For account-specific issues, the in-app support system ensures quick resolution. We pride ourselves on fast response times and thorough problem-solving." },
  { question: "What makes 13L Game different from other platforms?", answer: "13L Game stands out through its combination of instant withdrawals, daily free gift codes, provably fair games, a thriving community prediction group, and a generous VIP rewards program. Unlike many platforms that delay payouts or hide behind complicated terms, 13L Game is transparent, fast, and player-focused. Our Telegram community with thousands of active members creates a supportive environment for sharing strategies and gift codes." },
  { question: "Does 13L Game have a VIP program?", answer: "Yes! 13L Game features a multi-tier VIP rewards program. As you play and level up, you unlock exclusive benefits including higher withdrawal limits, priority customer support, exclusive gift codes, special event invitations, and enhanced bonuses. The VIP program is designed to reward loyal players who make 13L Game their gaming home." },
];

const values = [
  { icon: "🛡️", title: "Trust & Security", desc: "We prioritize the safety of your data and funds with industry-leading 256-bit SSL encryption, secure payment processing, and regular security audits. Every transaction on 13L Game is protected." },
  { icon: "⚖️", title: "Fair Play Guaranteed", desc: "Every game on 13L Game uses certified Random Number Generators and provably fair algorithms. We believe in complete transparency — no manipulation, no bias, just pure fair gaming." },
  { icon: "🚀", title: "Innovation First", desc: "13L Game continuously pushes boundaries by adding new games, improving features, and introducing creative bonus mechanisms. We listen to player feedback and evolve accordingly." },
  { icon: "💬", title: "Community Driven", desc: "Our active Telegram community of thousands of members, daily prediction groups, and shared strategies make 13L Game more than a platform — it's a family of gaming enthusiasts." },
  { icon: "💎", title: "Player-Centric Rewards", desc: "From daily free gift codes to VIP exclusive bonuses, referral commissions to tournament prizes — 13L Game ensures every player feels valued and rewarded for their loyalty." },
  { icon: "⏱️", title: "Instant Everything", desc: "Instant registration, instant deposits, instant game results, and instant withdrawals. 13L Game respects your time and eliminates unnecessary waiting at every step." },
];

const milestones = [
  { year: "Launch", desc: "13L Game was launched with a vision to create the most accessible, fair, and rewarding online gaming platform in India" },
  { year: "50K+ Users", desc: "Within the first quarter, 13L Game crossed 50,000 registered users — a testament to the platform's quality and word-of-mouth growth" },
  { year: "100+ Games", desc: "The game library expanded to over 100 titles from premium providers including JILI, SPRIBE, JDB, and TB Chess" },
  { year: "1M+ Players", desc: "13L Game crossed the one million active players milestone, becoming one of the largest gaming communities in India" },
  { year: "₹50Cr+ Paid", desc: "Total winnings paid to players exceeded ₹50 crore, with millions of successful instant withdrawals processed" },
  { year: "VIP Launch", desc: "The exclusive VIP rewards program was launched, giving loyal players access to premium bonuses and priority services" },
];

const teamValues = [
  { icon: "🎯", title: "Our Mission", desc: "To provide the most exciting, fair, and secure online gaming experience to every player. 13L Game login gives you access to a world of entertainment where skill meets opportunity. We are committed to making premium gaming accessible to everyone, regardless of their budget or experience level. Every feature we build, every game we add, and every bonus we offer is designed with one goal in mind — making your gaming experience on 13L Game unforgettable." },
  { icon: "🔭", title: "Our Vision", desc: "We envision 13L Game as the world's most trusted and beloved online gaming platform. Our goal is to build a global ecosystem where players enjoy provably fair games, earn real rewards, and connect with like-minded enthusiasts. From 13L Game signup to your hundredth win, we want every moment to feel seamless and exhilarating. We're building a future where online gaming is as trusted and mainstream as any other form of entertainment." },
];

function AboutPage() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="py-20 px-4" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <motion.img
              src={logoImg}
              alt="13L Game Logo"
              className="mx-auto h-24 w-24 rounded-2xl mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <h1 className="text-4xl font-extrabold md:text-5xl">About <span className="text-gradient-crimson">13L Game</span></h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              13L Game is a premier online gaming platform trusted by over one million players across India. We offer an unmatched gaming experience with over 100 exciting games, instant payouts, daily free gift codes, and a vibrant community. Our mission is to make online gaming accessible, fair, and thrilling for everyone — from first-time players to seasoned pros.
            </p>
            <div className="section-divider mt-6" />
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed About Content */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">The <span className="text-gradient-gold">13L Game</span> Story</h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <SlideInLeft>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  13L Game was born out of a simple frustration — the lack of a truly fair, fast, and fun online gaming platform in India. The founders recognized that players deserved better: better game variety, faster payouts, fairer algorithms, and a genuine community. So they set out to build a platform that would redefine what online gaming could be.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From day one, 13L Game prioritized three pillars: transparency, speed, and community. Every game on the platform runs on certified Random Number Generators. Withdrawals are processed in minutes, not days. And our Telegram community has grown into one of the most active gaming groups in India, where players share strategies, predictions, and free gift codes every single day.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The growth of 13L Game has been remarkable. What started as a platform with a handful of games has blossomed into a comprehensive gaming ecosystem with over 100 titles from top providers. The 13L Game signup process was designed to be the fastest in the industry — under 30 seconds — because we believe nothing should stand between a player and the games they love.
                </p>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Today, 13L Game is home to over one million active players who collectively enjoy thousands of gaming sessions daily. The platform has paid out over ₹50 crore in winnings, with every single withdrawal processed promptly and securely. Whether you prefer the rapid excitement of WinGo 30s, the strategic thrill of Mines, or the heart-pounding action of Aviator, 13L Game has a game tailored to your style.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to the community extends beyond the platform itself. The 13L Game prediction group on Telegram is a hub of knowledge sharing, where experienced players help newcomers understand game mechanics, share winning strategies, and distribute exclusive 13lgame gift codes. This sense of belonging is what transforms regular players into lifelong members of the 13L Game family.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Looking ahead, 13L Game is investing in new game categories, enhanced VIP experiences, tournament systems, and mobile app development. Our goal is to make 13L Game the undisputed number one destination for online gaming in India and beyond. Every login, every game, and every withdrawal reinforces our promise: 13L Game is where winners play.
                </p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4" style={{ background: "var(--gradient-surface)" }}>
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamValues.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.15}>
              <div className="gaming-card h-full">
                <h2 className="text-2xl font-bold text-foreground mb-4">{v.icon} {v.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">Our Core <span className="text-gradient-gold">Values</span></h2>
            <p className="mt-3 text-muted-foreground">The principles that guide everything we do at 13L Game</p>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="gaming-card h-full">
                  <span className="text-3xl mb-3 block">{v.icon}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4" style={{ background: "var(--gradient-surface)" }}>
        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">Our <span className="text-gradient-crimson">Journey</span></h2>
            <p className="mt-3 text-muted-foreground">Key milestones in the incredible growth story of 13L Game</p>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1}>
                <div className="gaming-card flex items-start gap-4">
                  <span className="text-xl font-extrabold text-gradient-gold shrink-0 w-32">{m.year}</span>
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Security & Trust on <span className="text-gradient-crimson">13L Game</span></h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="gaming-card space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                At 13L Game, security is not an afterthought — it's the foundation upon which the entire platform is built. We understand that players entrust us with their personal information and hard-earned money, and we take that responsibility seriously. Every aspect of the 13L Game experience is designed with security at its core.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All data transmitted between your device and 13L Game servers is protected by 256-bit SSL encryption — the same level of security used by major banks and financial institutions. Your password is stored using advanced cryptographic hashing algorithms, meaning even our own team cannot access it. Payment transactions are processed through PCI-compliant secure gateways, ensuring your financial information is never exposed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to fair play is equally robust. Every game on 13L Game runs on certified Random Number Generators that have been tested and verified by independent third parties. We use provably fair algorithms that allow players to verify the fairness of any game result. There is no room for manipulation — every outcome on 13L Game is genuinely random and unbiased.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We also maintain strict access controls within our organization. Only authorized personnel have access to user data, and all access is logged and audited regularly. Our security team conducts regular vulnerability assessments and penetration testing to identify and address potential threats before they can impact our players. When you login to 13L Game, you can do so with complete confidence that your account and funds are protected.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4" style={{ background: "var(--gradient-hero)" }}>
        <ScaleIn className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join the 13L Game Community Today</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Register now and become part of the fastest-growing gaming platform in India with over one million active players.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://13l.video/" target="_blank" rel="noopener noreferrer" className="btn-primary">Register on 13L Game</a>
            <a href="https://t.me/officiall13lgames" target="_blank" rel="noopener noreferrer" className="btn-gold">Join Prediction Group</a>
          </div>
        </ScaleIn>
      </section>

      <FAQSection title="About 13L Game — Frequently Asked Questions" subtitle="Find detailed answers to common questions about 13L Game, our platform, security, and gaming experience." faqs={aboutFaqs} />
    </div>
  );
}
