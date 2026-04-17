import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem, ScaleIn } from "../components/AnimatedSection";
import { FAQSection } from "../components/FAQSection";
import { buildMeta, jsonLdScript, faqJsonLd, breadcrumbJsonLd } from "../lib/seo";

export const Route = createFileRoute("/gift-codes")({
  head: () => {
    const seo = buildMeta({
      title: "13L Game Gift Codes — Daily 13lgame Free Giftcode Drops",
      description:
        "Get 13L Game free gift codes daily. How to claim, redeem and stack 13lgame giftcode bonuses for free wallet balance on WinGo, Aviator and more.",
      path: "/gift-codes",
      keywords: "13lgame gift code, 13lgame free giftcode, 13l code game free gift code, 13l game bonus",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript(faqJsonLd(giftFaqs)),
        jsonLdScript(breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gift Codes", path: "/gift-codes" },
        ])),
      ],
    };
  },
  component: GiftCodesPage,
});

const giftCodeTips = [
  { icon: "📢", title: "Join Official Telegram Group", desc: "The primary source for 13L Game free gift codes is our official Telegram prediction group at t.me/officiall13lgames. Codes are shared daily by the admin team, often multiple times a day. This is the fastest and most reliable way to get 13lgame gift codes before they expire." },
  { icon: "📅", title: "Check Daily for New Codes", desc: "13L Game releases new free gift codes every single day. The best strategy is to check the Telegram group first thing in the morning and again in the evening. Regular checkers catch the most codes and build up the biggest bonus balances over time." },
  { icon: "⏰", title: "Redeem Codes Quickly", desc: "13L Game gift codes have limited usage — each code can only be redeemed a certain number of times. When a new 13lgame gift code is shared, act fast! The most popular codes can reach their limit within hours. Speed is your friend when it comes to free gift codes." },
  { icon: "🎉", title: "Special Event Codes", desc: "During festivals like Diwali, Holi, New Year, and Eid, 13L Game releases premium gift codes with significantly higher bonus amounts. These special 13L code game free gift codes can be worth multiple times the regular codes. Stay active in the community to never miss these rare opportunities." },
  { icon: "🔄", title: "Share & Earn Codes", desc: "The 13L Game referral program is a fantastic source of bonus codes. When you invite friends using your unique referral link and they register on 13L Game, you earn referral rewards and sometimes exclusive gift codes. The more friends you bring, the more bonuses you unlock." },
  { icon: "👑", title: "VIP Exclusive Codes", desc: "Higher VIP levels on 13L Game unlock access to exclusive gift codes that are not available to regular players. These premium 13lgame gift codes offer larger bonuses and better terms. Level up your VIP status by playing regularly and you'll receive these exclusive codes directly." },
];

const howToRedeem = [
  { step: "1", title: "Get a Gift Code", desc: "Join the 13L Game Telegram group at t.me/officiall13lgames. Watch for new gift code announcements from the admin team. Codes are clearly labeled and easy to copy. You can also get codes from referral rewards and VIP benefits." },
  { step: "2", title: "Login to 13L Game", desc: "Open your browser and navigate to 13l.video. Login to your 13L Game account using your registered mobile number and password. If you're new, the 13L Game signup takes just 30 seconds — register first to start claiming codes." },
  { step: "3", title: "Go to Gift Code Section", desc: "Once logged in to 13L Game, navigate to the promotions or gift code redemption section in your account dashboard. This section is easily accessible from the main menu on both mobile and desktop versions." },
  { step: "4", title: "Enter & Redeem", desc: "Paste or type your 13lgame gift code exactly as shown and click the redeem button. Your bonus balance will be credited to your wallet instantly — no waiting period, no approval needed. Start playing with your bonus immediately!" },
];

const giftFaqs = [
  { question: "Where can I find 13L Game free gift codes?", answer: "The best and most reliable source for 13L Game free gift codes is our official Telegram prediction group at t.me/officiall13lgames. The admin team shares new codes daily, often multiple times per day. You can also find 13lgame gift codes during special platform events, festivals, and promotional campaigns. VIP members receive exclusive codes not available to the general community. Additionally, the referral program sometimes awards unique gift codes for successful invitations." },
  { question: "How do I redeem a 13L Game gift code?", answer: "Redeeming a 13L code game free gift code is simple. First, login to your 13L Game account at 13l.video. Navigate to the promotions or gift code section in your dashboard. Enter the gift code exactly as provided — codes are case-sensitive. Click the redeem button, and your bonus balance will be credited to your wallet instantly. You can start using the bonus to play any game on 13L Game immediately." },
  { question: "Do 13L Game gift codes expire?", answer: "Yes, most 13lgame gift codes have either an expiration date or a maximum number of redemptions, whichever comes first. Regular daily codes typically remain active for 24-48 hours or until they reach their redemption limit. Special event codes may have longer validity periods. We always recommend redeeming your 13L Game free gift code as soon as you receive it to avoid missing out." },
  { question: "How many gift codes can I use on 13L Game?", answer: "There is no limit to how many different 13L Game gift codes you can redeem over time! Each unique code can be used once per account, but you can redeem as many different codes as you find. This means active community members who check for new 13L code game free gift codes daily can accumulate significant bonus balances over time." },
  { question: "Are 13L Game gift codes free?", answer: "Yes! All gift codes shared in our official Telegram group are completely free of charge. 13L Game regularly releases free gift codes as part of our commitment to rewarding the community. You never have to pay for a code — if someone asks you to buy a gift code, it's not from an official 13L Game channel. Only trust codes from our verified Telegram group." },
  { question: "Can new players use 13L Game gift codes?", answer: "Absolutely! Both new and existing players can redeem 13lgame gift codes. In fact, new players are often the biggest beneficiaries — between the welcome bonus received during 13L Game signup and the daily free gift codes from Telegram, new players can build a substantial starting balance without depositing a single rupee. It's the perfect way to explore the platform risk-free." },
  { question: "What is the average value of a 13L Game gift code?", answer: "The value of 13L Game free gift codes varies depending on the type. Regular daily codes typically provide a modest bonus balance, while special event codes during festivals can be worth significantly more. VIP exclusive codes tend to have the highest values. Regardless of individual code values, the cumulative benefit of claiming codes daily adds up to a substantial bonus over time." },
  { question: "Can I share 13L Game gift codes with friends?", answer: "Yes, you can share 13L Game gift codes with friends! However, keep in mind that each code has a limited number of total redemptions. If you want to ensure your friends can redeem a code, share it with them quickly after it's released. Even better — invite your friends to join the Telegram group directly so they can grab codes the moment they're posted." },
];

function GiftCodesPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <section className="py-20 px-4" style={{ background: "var(--gradient-hero)" }}>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            <span className="text-gradient-gold">13L Game</span> Free Gift Codes
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get daily 13L Game free gift codes and bonus balance! Claim the latest 13lgame gift code and 13L code game free gift code to boost your gaming experience. Our Telegram community shares fresh codes every day — never miss a free bonus!
          </p>
          <div className="section-divider mt-6" />
          <div className="mt-8">
            <a href="https://t.me/officiall13lgames" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
              📢 Get Free Gift Codes on Telegram
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Detailed Gift Code Explanation */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Understanding <span className="text-gradient-crimson">13L Game Gift Codes</span></h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <SlideInLeft>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  13L Game gift codes are special promotional codes that give players free bonus balance when redeemed on the platform. Think of them as free money to play with — no deposit required. These 13lgame gift codes are one of the most popular features of the platform, and they're a big reason why our community is so active and engaged.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The concept is simple: 13L Game generates unique codes with specific bonus values and shares them through official channels. When a player redeems a 13L code game free gift code, the bonus amount is instantly added to their wallet. This bonus can be used to play any game on the platform — WinGo, Aviator, Mines, Limbo, K3, slots, and more. It's a risk-free way to enjoy games and potentially win real money.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  New players benefit enormously from this system. By combining the welcome bonus received during 13L Game registration with daily gift codes from our Telegram group, a new player can build up a meaningful balance without spending anything. This allows them to explore the full range of games, find their favorites, and develop winning strategies — all on the house.
                </p>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  For existing players, gift codes provide a daily boost that extends playing time and increases winning opportunities. Many regular 13L Game players have a routine: check the Telegram group each morning, grab the latest code, redeem it, and start their gaming session with extra balance. Over weeks and months, this adds up to a significant amount of free play.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The 13L Game gift code system also creates a vibrant community dynamic. Players actively watch for new code drops, share them with friends, and celebrate when they redeem successfully. The Telegram group buzzes with excitement every time a new 13lgame gift code is released, especially during special events when premium codes with higher values are shared.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  VIP players enjoy an additional layer of gift code benefits. As players level up through the VIP tiers on 13L Game, they gain access to exclusive codes not available to regular members. These premium 13L code game free gift codes feature larger bonus amounts and sometimes come with reduced wagering requirements, making them even more valuable for serious players.
                </p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* How to Redeem */}
      <section className="py-20 px-4" style={{ background: "var(--gradient-surface)" }}>
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">How to Redeem <span className="text-gradient-crimson">13L Game Gift Codes</span></h2>
            <p className="mt-3 text-muted-foreground">Follow these four simple steps to claim your free bonus</p>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToRedeem.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.1}>
                <div className="gaming-card text-center h-full">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">{s.step}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold md:text-4xl">Tips to Get More <span className="text-gradient-gold">13L Game Free Gift Codes</span></h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Maximize your free bonus collection with these proven strategies</p>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftCodeTips.map((t) => (
              <StaggerItem key={t.title}>
                <div className="gaming-card h-full">
                  <span className="text-3xl mb-3 block">{t.icon}</span>
                  <h3 className="font-semibold text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Types of Gift Codes */}
      <section className="py-20 px-4" style={{ background: "var(--gradient-surface)" }}>
        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Types of <span className="text-gradient-crimson">13L Game Gift Codes</span></h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="gaming-card space-y-5">
              <h3 className="text-lg font-bold text-foreground">🎟️ Daily Free Gift Codes</h3>
              <p className="text-muted-foreground leading-relaxed">
                These are the most common 13lgame gift codes, shared every day in our official Telegram group. They provide a modest but valuable bonus balance that players can use on any game. Daily codes are the bread and butter of the gift code system — consistent, reliable, and always free.
              </p>
              <h3 className="text-lg font-bold text-foreground">🎊 Festival & Event Codes</h3>
              <p className="text-muted-foreground leading-relaxed">
                During major festivals (Diwali, Holi, New Year, Eid, Christmas) and special 13L Game events, premium gift codes with significantly higher bonus amounts are released. These 13L code game free gift codes can be worth 3-5x the regular daily codes, making festivals an exciting time for the 13L Game community.
              </p>
              <h3 className="text-lg font-bold text-foreground">👑 VIP Exclusive Codes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Available only to VIP tier players, these exclusive 13L Game gift codes feature the largest bonus amounts and often come with special terms. VIP codes are sent directly to qualifying players and cannot be found in public channels. Level up your VIP status through regular play to access these premium rewards.
              </p>
              <h3 className="text-lg font-bold text-foreground">🤝 Referral Reward Codes</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you successfully refer friends to 13L Game using your unique link, you may receive special referral reward gift codes. These codes serve as a thank-you for helping the 13L Game community grow. The more active referrals you have, the better the reward codes you'll receive.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: "var(--gradient-hero)" }}>
        <ScaleIn className="text-center">
          <h2 className="text-2xl font-bold mb-4">Don't Miss Out on Free Gift Codes!</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Join our Telegram group for daily 13L Game free gift codes, predictions, and winning strategies. Thousands of active members are already benefiting!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/officiall13lgames" target="_blank" rel="noopener noreferrer" className="btn-gold">Join Telegram for Gift Codes</a>
            <a href="https://13l.video/" target="_blank" rel="noopener noreferrer" className="btn-primary">Register on 13L Game</a>
          </div>
        </ScaleIn>
      </section>

      <FAQSection title="13L Game Gift Codes — Frequently Asked Questions" subtitle="Comprehensive answers to all your questions about 13lgame gift codes, 13L code game free gift codes, and bonus rewards." faqs={giftFaqs} />
    </div>
  );
}
