import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedSection, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { FAQSection } from "../components/FAQSection";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { buildMeta, jsonLdScript, faqJsonLd, breadcrumbJsonLd, PLAY_URL } from "../lib/seo";

const registerFaqs = [
  { question: "How do I complete the 13lgame register process?", answer: "Visit 13l.video, tap the Register button, enter a valid Indian mobile number, set a strong password, type the OTP that arrives by SMS, and submit. The 13lgame register flow finishes in under 30 seconds and your wallet is created instantly with the welcome bonus credited where eligible." },
  { question: "Is 13lgame signup free?", answer: "Yes — 13lgame signup is completely free. There are no registration fees, no subscription charges, and no compulsory deposits at the moment of signing up. You can explore the platform, claim a 13lgame free giftcode, and only deposit when you are ready to play for real money." },
  { question: "What documents do I need to 13lgame register?", answer: "Nothing more than a working Indian mobile number is required to complete 13lgame register. Identity documents may be requested only later if your withdrawal volume crosses certain anti-fraud thresholds, and even then the upload is in-app and takes under a minute." },
  { question: "Can I 13lgame register on a phone?", answer: "Absolutely. The 13lgame register flow is mobile-first. Open 13l.video in any browser on your Android or iPhone, tap Register, fill in the three fields, and you are done. There is no app to install — the web platform performs identically to a native app." },
  { question: "Do I get a bonus when I 13lgame signup?", answer: "Most new accounts that complete 13lgame signup are eligible for an automatic welcome bonus credited to the wallet on the first successful login. The exact bonus amount can vary by promotion period, and additional 13lgame free giftcode drops shared in the official Telegram group can be stacked on top for an even larger starting balance." },
  { question: "What age do I need to be to 13lgame register?", answer: "You must be at least 18 years old, or the legal age of majority in your jurisdiction, to complete 13lgame register. By signing up you confirm you meet this age requirement. Underage accounts are immediately closed and any balance forfeited if discovered." },
];

export const Route = createFileRoute("/13lgame-register")({
  head: () => {
    const seo = buildMeta({
      title: "13lgame Register & Signup — Create Your 13L Game Account in 30 Seconds",
      description:
        "Complete 13lgame register guide. Learn how to signup for 13L Game, claim your welcome bonus and start playing in under 30 seconds. No app download required.",
      path: "/13lgame-register",
      keywords:
        "13lgame register, 13lgame signup, 13l game register, 13l game signup, create 13lgame account",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript(faqJsonLd(registerFaqs)),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "13lgame Register", path: "/13lgame-register" },
          ]),
        ),
      ],
    };
  },
  component: RegisterPage,
});

const steps = [
  { n: "01", title: "Open 13l.video in Any Browser", desc: "There is nothing to download. Open Chrome, Safari, Firefox or Edge on phone or desktop and type 13l.video into the address bar. The site loads in under two seconds even on a 4G mobile connection." },
  { n: "02", title: "Tap the Register Button", desc: "The Register button sits prominently in the top right of the header on desktop and inside the menu drawer on mobile. Tapping it opens the 13lgame signup modal without a page reload, keeping the flow fast and seamless." },
  { n: "03", title: "Enter a Valid Mobile Number", desc: "Type the mobile number you intend to use long-term. Country code +91 is preselected for India. Double-check digits because this number becomes your primary identifier and your password recovery channel." },
  { n: "04", title: "Set a Strong Password", desc: "Choose a unique password that is at least eight characters long, ideally mixing upper case, lower case, numbers and one symbol. Never reuse a password from another site — your wallet sits behind this single credential." },
  { n: "05", title: "Verify with OTP", desc: "An SMS with a six-digit one-time password reaches your handset within seconds. Type or paste it into the OTP box. This step proves the number is yours and locks the account to your SIM." },
  { n: "06", title: "Welcome to 13L Game", desc: "The moment OTP verifies, your wallet is created and you are logged in. Welcome bonuses, if available for the current promotion, land in the wallet immediately. Head to the games library or redeem a 13lgame free giftcode and start playing." },
];

function RegisterPage() {
  return (
    <div className="overflow-hidden">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "13lgame Register", path: "/13lgame-register" }]} />

      <section className="py-12 px-4" style={{ background: "var(--gradient-hero)" }}>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            <span className="text-gradient-crimson">13lgame Register</span> & Signup Guide
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Create your 13L Game account in less than 30 seconds. No documents, no app download, no fees. The complete official 13lgame register and signup walkthrough — plus tips on welcome bonuses, free gift codes, and getting your first deposit working instantly.
          </p>
          <div className="section-divider mt-6" />
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">🎮 Register on 13L Game</a>
            <Link to="/13lgame-login" className="btn-outline-light text-sm">Already have an account? 13lgame Login</Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold">Why 13lgame Register Is the Fastest Signup in the Category</h2>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Most online gaming platforms turn signup into a chore. They ask for an email, send a confirmation link, demand a password reset, then push you through a KYC questionnaire before you can even see the lobby. 13lgame register flips that model on its head. The entire signup needs three pieces of information — your mobile number, a password you choose, and the OTP we send to verify the number is really yours. From start to finish the 13lgame signup takes under thirty seconds, and you arrive in the lobby with a fully functional wallet ready to receive deposits or a welcome bonus.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              The reason the 13lgame register flow is so short is that the platform deliberately keeps friction at the door at zero. There is no email verification because no email is collected. There is no front-line KYC because anti-fraud monitoring runs in the background and only escalates when patterns warrant it. There is no app download because the entire platform runs in a modern browser. The result is a 13lgame signup experience that respects your time and lets you focus on what you came for: playing games and winning real money.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <SlideInLeft>
              <h2 className="text-2xl font-bold mb-3">What You Need Before You 13lgame Register</h2>
              <p className="text-muted-foreground leading-relaxed">
                The required input list for 13lgame register is short. You need a working Indian mobile number that can receive SMS, and a password idea you can remember. Optional but recommended: a password manager (Bitwarden, 1Password, Apple Keychain, Google Password Manager) so you can store a strong unique password without effort, and a stable internet connection so the OTP reaches you on the first try.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                You do not need an Aadhaar card, PAN card, address proof, or bank statement to complete 13lgame signup. Those documents may be requested much later if your withdrawal volume reaches the platform's anti-money-laundering threshold, but for the vast majority of casual players the question never comes up. The signup desk is intentionally low-friction so new players can get to the games quickly.
              </p>
            </SlideInLeft>
            <SlideInRight>
              <h2 className="text-2xl font-bold mb-3">After 13lgame Signup — Welcome Bonus & First Deposit</h2>
              <p className="text-muted-foreground leading-relaxed">
                The instant 13lgame register confirms your number, the platform credits the active welcome bonus to your wallet (where applicable for the current promotion period). This bonus may be a flat amount or a deposit-match — the exact mechanics are shown on the dashboard banner. On top of that, the official Telegram <Link to="/13lgame-giftcode" className="text-primary hover:underline">13lgame prediction group</Link> drops fresh 13lgame free giftcode entries throughout the day, and they can be stacked on the welcome bonus for an even bigger starting balance.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                When you are ready to play with real money, the deposit panel supports UPI (Google Pay, PhonePe, Paytm), bank transfer and major digital wallets. UPI is instant — the wallet balance updates within seconds of the transaction confirming. There is no minimum lock-in, no hidden fee on standard deposits, and no waiting period before you can start playing.
              </p>
            </SlideInRight>
          </div>

          <AnimatedSection className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Step-by-Step 13lgame Register Guide</h2>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps.map((s) => (
                <StaggerItem key={s.n}>
                  <div className="gaming-card h-full">
                    <span className="text-3xl font-black text-primary/30">{s.n}</span>
                    <h3 className="text-lg font-semibold mt-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          <AnimatedSection className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold">Common 13lgame Signup Issues and How to Fix Them</h2>
            <p className="text-muted-foreground leading-relaxed">
              Almost every 13lgame register attempt succeeds on the first try, but if something goes wrong the cause is usually one of three known issues. The first is a mistyped mobile number, which means the OTP never arrives — re-check the digits and country code, then request a fresh OTP. The second is OTP delay caused by mobile network congestion; the resend timer becomes available after 60 seconds and a fresh OTP almost always arrives. The third is a weak password rejected by the strength meter; mix in upper case, numbers and a symbol and the validation passes immediately. None of these issues require contacting support — they resolve themselves the moment the input is corrected.
            </p>
            <h2 className="text-2xl font-bold">Choosing a Strong Password During 13lgame Signup</h2>
            <p className="text-muted-foreground leading-relaxed">
              The single biggest mistake new players make during 13lgame signup is choosing a weak or reused password. Your password is the only thing standing between the world and your wallet. The recommended pattern is at least ten characters, mixing upper case, lower case, numbers and at least one symbol, and unique to 13L Game (not reused from any other site). A password manager makes this trivial — it generates and remembers a random string for you, so the strongest password is also the easiest to use. Players who follow this single rule have effectively zero risk of account compromise.
            </p>
            <h2 className="text-2xl font-bold">One Account Per Player</h2>
            <p className="text-muted-foreground leading-relaxed">
              The 13L Game terms allow each individual exactly one account. Creating a second account through a second mobile number to claim the welcome bonus twice is a violation that can lead to permanent termination of every linked account and forfeiture of all balances. The 13lgame register flow includes background fraud signals that detect duplicate-account attempts. If you genuinely lose access to an old account, recover it through the password reset flow rather than creating a new one. If recovery fails, message the official Telegram support — they can verify ownership and restore access without forcing a duplicate-account violation.
            </p>
            <h2 className="text-2xl font-bold">After Register — Your First Five Minutes</h2>
            <p className="text-muted-foreground leading-relaxed">
              Once 13lgame register is complete, the recommended first five minutes are: tour the dashboard so you know where the wallet, history, gift code box and games library live; claim any pending welcome bonus from the banner; check the Telegram <a href="https://t.me/officiall13lgames" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">13lgame prediction group</a> for an active 13lgame free giftcode and redeem it; open WinGo 30s (the easiest game to learn) and play one tiny round at the minimum bet to see the flow; and finally bookmark 13l.video on your home screen for one-tap access in the future. Doing this tour up front means every later session begins with you already at full speed. For the deeper game-by-game tutorial, head to <Link to="/how-to-play" className="text-primary hover:underline">How to Play</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Already finished signing up? Jump straight into <Link to="/13lgame-login" className="text-primary hover:underline">13lgame login</Link>, then explore the full <Link to="/games" className="text-primary hover:underline">games catalogue</Link> to pick your first title. New players who follow the recommended five-minute onboarding stay engaged longer and report higher session enjoyment than those who skip it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <FAQSection title="13lgame Register & Signup FAQs" faqs={registerFaqs} />
    </div>
  );
}
