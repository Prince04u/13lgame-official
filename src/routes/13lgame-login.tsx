import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedSection, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { FAQSection } from "../components/FAQSection";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { buildMeta, jsonLdScript, faqJsonLd, breadcrumbJsonLd, PLAY_URL } from "../lib/seo";

const loginFaqs = [
  { question: "How do I login to 13lgame?", answer: "To complete your 13lgame login, open the official site at 13l.video, tap the Login button in the top right corner, enter the mobile number you used during 13lgame register, type your password, and tap Submit. You will be inside your wallet dashboard in less than 5 seconds and can immediately deposit, withdraw, or play any game on the platform." },
  { question: "What do I do if I forget my 13lgame login password?", answer: "If you forget your 13lgame login password, click the 'Forgot Password' link on the login screen, enter your registered mobile number, and you will receive a one-time password (OTP) over SMS. Use that OTP to set a new strong password and you can immediately log back in to your 13L Game account." },
  { question: "Can I stay signed in on 13lgame?", answer: "Yes — when you complete the 13lgame login on a personal device, tick the 'Remember me' option and the platform will keep your session alive for repeated quick access. Never enable this on a shared or public computer because anyone with access to that device could open your wallet without your password." },
  { question: "Why is my 13lgame login failing?", answer: "Login failures are almost always one of three things: an incorrect password, a typo in the mobile number, or an old cached session. Clear your browser cache, double-check the country code on your number, and reset the password using the OTP flow. If it still fails, message the official 13lgame prediction group admins on Telegram for help." },
  { question: "Is the 13lgame login page safe?", answer: "Yes. The 13lgame login page is served over HTTPS with 256-bit SSL encryption. Passwords are stored using bcrypt hashing on our servers, and OTPs are time-limited. Always check the URL bar reads exactly 13l.video before you type your password to avoid phishing copies." },
  { question: "Can I use 13lgame login on both phone and desktop?", answer: "Yes. The same 13lgame login credentials work on every device — Android, iOS, tablets, and desktop browsers. Your wallet balance, gift codes, and game history sync in real time, so you can start a session on your phone and continue it on a laptop without any issue." },
];

export const Route = createFileRoute("/13lgame-login")({
  head: () => {
    const seo = buildMeta({
      title: "13lgame Login — Sign In to Your 13L Game Account | Official Guide",
      description:
        "Step-by-step 13lgame login guide. Sign in to 13L Game safely, recover your password, fix login errors and access your wallet on mobile or desktop.",
      path: "/13lgame-login",
      keywords:
        "13lgame login, 13l game login, 13lgame sign in, 13l game account login, 13lgame password reset",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript(faqJsonLd(loginFaqs)),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "13lgame Login", path: "/13lgame-login" },
          ]),
        ),
      ],
    };
  },
  component: LoginPage,
});

const steps = [
  { n: "01", title: "Open the Official 13L Game Site", desc: "Type 13l.video into your browser address bar exactly. Bookmark it so you never land on a phishing copy. The official site loads in under two seconds and works in Chrome, Safari, Firefox, Edge and any mobile browser." },
  { n: "02", title: "Tap the Login Button", desc: "On desktop the 13lgame login button sits in the top right of the header. On mobile it is inside the menu drawer. Tap it once to open the login modal — the page will not reload, so the experience stays fluid." },
  { n: "03", title: "Enter Your Registered Mobile Number", desc: "Use the same number you used during 13lgame register. Country code is selected automatically. Re-check the digits to avoid the most common login failure cause." },
  { n: "04", title: "Enter Your Password", desc: "Type the password you set during 13lgame signup. Tap the eye icon to reveal characters and confirm there are no typos. Strong passwords mix letters, numbers and symbols." },
  { n: "05", title: "Submit & Reach Your Dashboard", desc: "Press the Login button. Within a second you will land on your dashboard, where your wallet balance, recent games, gift code redemption box and VIP tier are all visible." },
  { n: "06", title: "Start Playing or Claim a Bonus", desc: "From the dashboard you can launch any of the 100+ games, redeem a 13lgame free giftcode, or open the deposit panel. Your session stays alive until you log out." },
];

function LoginPage() {
  return (
    <div className="overflow-hidden">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "13lgame Login", path: "/13lgame-login" }]} />

      <section className="py-12 px-4" style={{ background: "var(--gradient-hero)" }}>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            <span className="text-gradient-crimson">13lgame Login</span> — Sign In to Your Account
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The complete official guide to 13lgame login. Learn how to sign in to your 13L Game account in under five seconds, recover a forgotten password, fix common errors, and stay protected from phishing copies.
          </p>
          <div className="section-divider mt-6" />
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">🔑 Login to 13L Game</a>
            <Link to="/13lgame-register" className="btn-outline-light text-sm">New here? 13lgame Register</Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold">What is 13lgame Login?</h2>
            <p className="text-muted-foreground leading-relaxed mt-3">
              13lgame login is the secure authentication step that takes you from the public 13L Game website into your personal player dashboard. Once you are signed in, every game, deposit method, withdrawal channel, gift code redemption box, and VIP perk on the platform is unlocked. The 13lgame login flow uses two pieces of information you control completely — the mobile number you registered with and the password you created during signup — protected on the wire by 256-bit SSL encryption and on disk by bcrypt password hashing. There is no email confirmation step, no waiting period, and no third-party social network involved, so the entire 13lgame login experience stays fast, private, and under your control.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Players coming from older platforms are often surprised by how lightweight the 13lgame login is. There is no app to download, no compulsory KYC at the door, and no captcha gauntlet to clear before you can play. The session that begins the moment your 13lgame login succeeds carries you across every game in the catalogue — WinGo, Aviator, Mines, Limbo, K3, 5D, slots and live tables — without any second-screen handshake. This is part of why the platform has become the preferred destination for new Indian players: the login screen respects your time.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <SlideInLeft>
              <h2 className="text-2xl font-bold mb-3">Why a Reliable 13lgame Login Matters</h2>
              <p className="text-muted-foreground leading-relaxed">
                A reliable 13lgame login is more than a convenience. It is the lock on your wallet. Every rupee you deposit, every gift code you redeem, every winning game session you finish — all of it sits behind that one credential pair. That is why we encourage every player to use a unique strong password they do not reuse on any other site, to confirm the URL is exactly 13l.video before they type, and to log out of shared devices. With those three habits in place, the chance of an unauthorized 13lgame login is effectively zero.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                The 13lgame login system also detects unusual patterns. Logging in from a brand new city, an unrecognised device, or after a long inactive period may trigger an extra OTP challenge. This is intentional — the platform errs on the side of caution to protect your balance. If you ever receive an OTP you did not request, change your password from the dashboard immediately and notify support through the official Telegram channel.
              </p>
            </SlideInLeft>
            <SlideInRight>
              <h2 className="text-2xl font-bold mb-3">13lgame Login on Mobile vs Desktop</h2>
              <p className="text-muted-foreground leading-relaxed">
                The 13lgame login modal is responsive and adapts to the device you are on. On a mobile browser the layout uses large touch targets, an auto-focused number field, and a numeric keyboard so you can complete the login with one thumb. On a desktop the modal sits centered with a wider layout, ideal for keyboard input and password manager autofill. Both layouts hand you back to the same dashboard, with identical functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Players who use both devices love the cross-session sync. You can begin a WinGo round on your phone during a commute and continue tracking your balance from a desktop browser at home — the wallet, history, and gift code list update in real time. Because 13lgame login does not pin you to a single device, you never feel locked out of your own money.
              </p>
            </SlideInRight>
          </div>

          <AnimatedSection className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Step-by-Step 13lgame Login Guide</h2>
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
            <h2 className="text-2xl font-bold">How to Recover a Forgotten 13lgame Login Password</h2>
            <p className="text-muted-foreground leading-relaxed">
              Forgetting a password happens to everyone. The 13lgame login screen has a clearly labelled 'Forgot Password' link directly under the password field. Click it, enter the mobile number on file, and an OTP will reach your handset within seconds. Type that OTP into the verification box, choose a new password — ideally one with at least 10 characters mixing upper case, lower case, numbers and a symbol — and tap save. The next 13lgame login attempt with the new password will succeed instantly, and the platform will invalidate any older sessions for security. The whole recovery flow takes under a minute and never requires you to email support or open a ticket.
            </p>
            <h2 className="text-2xl font-bold">Fixing Common 13lgame Login Errors</h2>
            <p className="text-muted-foreground leading-relaxed">
              The most common 13lgame login error is "incorrect password," which usually traces back to caps lock being on or autofill inserting an old saved value. Clear the password field manually and retype. The next most common issue is "user not found" — this almost always means the mobile number was entered with an extra digit, missing digit, or wrong country code. Re-check the number against your SIM. Less commonly, browser cookies can corrupt and create a "session expired" loop; clearing site data for 13l.video resolves it. If none of those fix the 13lgame login, the official Telegram support team responds within minutes and can manually unlock the account if needed.
            </p>
            <h2 className="text-2xl font-bold">Staying Safe During 13lgame Login</h2>
            <p className="text-muted-foreground leading-relaxed">
              Security around 13lgame login is a shared responsibility. The platform protects the transport with HTTPS and the password store with bcrypt, but the player has to protect the credential itself. Never share your 13lgame login password with anyone, including people who claim to be platform staff — real staff will never ask for it. Avoid signing in over public Wi-Fi without a VPN. Use a password manager so you can pick a long random password without having to remember it. Finally, log out from any device you do not own. Following these practices keeps your 13lgame login bullet-proof.
            </p>
            <h2 className="text-2xl font-bold">After You Login — What to Do Next</h2>
            <p className="text-muted-foreground leading-relaxed">
              Once your 13lgame login succeeds you arrive at the personal dashboard. The first thing most players do is check the gift code box for an active <Link to="/13lgame-giftcode" className="text-primary hover:underline">13lgame free giftcode</Link>. The second is to top up the wallet through the deposit panel — UPI is instant. The third is to open the games library and pick a title. WinGo 30s is the most popular starting point because rounds are short and the rules are obvious. Aviator is the favourite of high-energy players who love watching the multiplier climb. Mines rewards strategic thinkers. There is also a robust referral panel that turns your dashboard into an income source if you invite friends. None of these features are accessible without the 13lgame login step, which is exactly why getting it right matters.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If this is your very first visit, you may not yet have credentials to log in with. In that case, head over to the <Link to="/13lgame-register" className="text-primary hover:underline">13lgame register</Link> page first, complete the 30-second signup, and then come back here. New accounts often qualify for an automatic welcome bonus that is added to the wallet the moment the first 13lgame login completes — a small but motivating start.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <FAQSection title="13lgame Login FAQs" faqs={loginFaqs} />
    </div>
  );
}
