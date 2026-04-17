import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedSection, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { FAQSection } from "../components/FAQSection";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { buildMeta, jsonLdScript, faqJsonLd, breadcrumbJsonLd, PLAY_URL } from "../lib/seo";

const downloadFaqs = [
  { question: "Is there an official 13l game download?", answer: "The official 13L Game platform runs entirely in the browser at 13l.video, so a traditional 13l game download is not required. The web app loads in under two seconds, supports every major Android, iOS, and desktop browser, and behaves exactly like a native app once added to your home screen." },
  { question: "How do I 'install' 13L Game on my phone without an app store?", answer: "Open 13l.video in Chrome (Android) or Safari (iOS), tap the browser menu, and choose 'Add to Home Screen'. A 13L Game icon will appear on your home screen and tapping it opens the platform full-screen — visually identical to a native app installation." },
  { question: "Why is there no 13l game APK on Google Play?", answer: "Online gaming apps face strict app-store policies in many regions. By delivering 13L Game as a fast progressive web app at 13l.video, players get the full feature set without the regional restrictions, forced updates, or storage cost of an APK download." },
  { question: "Are 13l game APK files from third-party sites safe?", answer: "No. Any 13l game download offered by a third-party website or unofficial Telegram channel should be treated as untrusted. Sideloaded APKs are a common vector for credential theft and phishing. Always use the official browser-based platform at 13l.video — that is the only safe way to access the platform." },
  { question: "Does the 13l game web app work offline?", answer: "Some interface elements cache for fast subsequent loads, but live games and the wallet require an active internet connection. As long as you have any 4G, 5G or Wi-Fi signal, the platform performs identically to a native app." },
  { question: "How much storage does 13l game download use on my phone?", answer: "Practically zero. Because 13L Game is a progressive web app rather than an APK, the only storage footprint is the small browser cache (a few megabytes). Compare that to 100+ MB for typical native gaming apps." },
];

export const Route = createFileRoute("/13lgame-download")({
  head: () => {
    const seo = buildMeta({
      title: "13l Game Download — Install 13L Game on Android, iOS & Desktop (No APK)",
      description:
        "Official 13l game download guide. Install 13L Game as a progressive web app on Android, iOS or desktop in seconds — no APK, no Play Store, full features.",
      path: "/13lgame-download",
      keywords:
        "13l game download, 13lgame download, 13l game apk, 13lgame app, install 13l game",
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript(faqJsonLd(downloadFaqs)),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "13l Game Download", path: "/13lgame-download" },
          ]),
        ),
      ],
    };
  },
  component: DownloadPage,
});

const platforms = [
  { icon: "🤖", title: "Android (Chrome)", steps: ["Open 13l.video in Chrome.", "Tap the three-dot menu in the top-right.", "Choose 'Add to Home Screen' or 'Install App'.", "Confirm the prompt — a 13L Game icon appears on your home screen.", "Launch from the icon for a full-screen, app-like experience."] },
  { icon: "🍎", title: "iPhone & iPad (Safari)", steps: ["Open 13l.video in Safari.", "Tap the Share button at the bottom.", "Scroll and tap 'Add to Home Screen'.", "Edit the name if you wish, then tap 'Add'.", "Tap the new home-screen icon to launch full-screen."] },
  { icon: "💻", title: "Desktop (Chrome, Edge, Brave)", steps: ["Open 13l.video in your browser.", "Look for the install icon in the address bar (a small monitor with a download arrow).", "Click it and confirm 'Install 13L Game'.", "The platform opens as a standalone desktop window.", "Pin it to your taskbar or dock for one-click access."] },
];

function DownloadPage() {
  return (
    <div className="overflow-hidden">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "13l Game Download", path: "/13lgame-download" }]} />

      <section className="py-12 px-4" style={{ background: "var(--gradient-hero)" }}>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            <span className="text-gradient-crimson">13l Game Download</span> — Install in Seconds, No APK Needed
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The official 13L Game platform runs as a progressive web app at 13l.video — no Play Store, no APK file, no app review delays. Add it to your home screen on Android, iPhone or desktop and play full-screen with zero storage footprint.
          </p>
          <div className="section-divider mt-6" />
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">📲 Open 13L Game Now</a>
            <Link to="/13lgame-register" className="btn-outline-light text-sm">New? 13lgame Register First</Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold">Why There Is No Traditional 13l Game APK</h2>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Many players arrive looking for a 13l game download in the form of an APK file or a Play Store listing. The honest answer is that 13L Game does not ship a standalone Android APK or iOS IPA file — and that is intentional. Major app stores, particularly Google Play, place strict restrictions on online gaming apps in many regions, which historically meant unstable availability, surprise app removals, and forced sign-out events for players. To avoid all of that, 13L Game is delivered as a modern progressive web app (PWA) hosted at 13l.video. The PWA model gives you the full app experience — full-screen launch, home-screen icon, push-style notifications inside the platform, instant updates — without any of the app-store fragility.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              The practical impact for you is overwhelmingly positive. There is no 13l game download to install, no permission dialog to accept, no APK signature to verify, and no risk of installing a fake app from a sideload site. Anyone telling you to download a 13l game APK from a random link is either misinformed or actively trying to phish your credentials. The one and only safe way to access 13L Game on any device is through 13l.video.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <SlideInLeft>
              <h2 className="text-2xl font-bold mb-3">Benefits of the Browser-Based Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                The progressive web app approach gives 13L Game several advantages a traditional 13l game download could never match. Updates are instant — every time you open the platform you are running the latest version with no manual update step. Storage footprint is effectively zero, freeing up space on phones with limited internal storage. Installation is universal across Android, iOS and desktop without separate engineering for each platform. And because there is nothing to install, there is nothing to uninstall — clearing the home-screen icon takes one tap and leaves no trace.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Performance is on par with native apps. The web app lazy-loads game assets on demand, caches the interface for fast repeat launches, and uses hardware acceleration for animations. Players who switch from heavyweight native gaming apps to the 13L Game web app routinely report faster load times, longer battery life and a smoother overall experience.
              </p>
            </SlideInLeft>
            <SlideInRight>
              <h2 className="text-2xl font-bold mb-3">When You Definitely Need an Internet Connection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Although the 13L Game interface caches for instant subsequent launches, every live game round, deposit, withdrawal and gift code redemption requires an active internet connection. This is by design — game outcomes are computed on certified random servers, not on your device, which is what makes the platform provably fair. As long as you have a stable 4G, 5G or Wi-Fi connection, the experience is identical to a native app.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                On unstable connections you may occasionally see a "reconnecting" badge during a round. The platform automatically resumes from the server's authoritative state once the connection recovers, so you never lose a bet to a network drop.
              </p>
            </SlideInRight>
          </div>

          <AnimatedSection className="mt-12">
            <h2 className="text-2xl font-bold mb-6">How to "Download" 13L Game on Every Platform</h2>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {platforms.map((p) => (
                <StaggerItem key={p.title}>
                  <div className="gaming-card h-full">
                    <span className="text-3xl block mb-2">{p.icon}</span>
                    <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-4">
                      {p.steps.map((step, i) => (
                        <li key={i} className="leading-relaxed">{step}</li>
                      ))}
                    </ol>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          <AnimatedSection className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold">Spotting Fake 13l Game Download Sites</h2>
            <p className="text-muted-foreground leading-relaxed">
              Because the official platform is browser-based, any website offering a "13l game APK download" or "13L Game .exe installer" is by definition unofficial and almost certainly malicious. Common tells include misspelled domain names ("13l-games.live", "13lgame-download.app"), aggressive ads pushing you to install something, requests for permission to install from unknown sources on Android, and prompts to enter your 13lgame login credentials inside the third-party app. Avoid all of them. The only official URL is 13l.video — type it into the address bar yourself rather than following a link, and you are safe.
            </p>
            <h2 className="text-2xl font-bold">Performance Tips for the Best 13L Game Experience</h2>
            <p className="text-muted-foreground leading-relaxed">
              Three small habits maximise the smoothness of the web app. First, keep your browser updated — Chrome, Safari, Firefox and Edge all release performance improvements regularly. Second, after the first launch, add the platform to your home screen so future launches are full-screen and skip the browser chrome. Third, clear the browser cache once a month if you ever notice slowdown — the platform will reload fresh assets and continue at peak speed. With those three habits in place, the 13l game download experience matches or exceeds any native app you have ever used.
            </p>
            <h2 className="text-2xl font-bold">Account Sync Across Devices</h2>
            <p className="text-muted-foreground leading-relaxed">
              One of the underrated advantages of the web-based model is genuine cross-device account sync. Sign in once on your phone, sign in once on your laptop, and your wallet, history, bonus balance, redeemed gift codes and VIP tier are identical on both. There is no "primary device" concept and no manual sync step — every state lives on the server and reflects everywhere instantly. Players who switch between phone and desktop throughout the day love this. Compared to APK-based gaming apps that lock progress to a single device, the 13L Game model is dramatically more convenient.
            </p>
            <h2 className="text-2xl font-bold">Next Steps After "Installing"</h2>
            <p className="text-muted-foreground leading-relaxed">
              Once 13L Game is on your home screen, the recommended onboarding is the same as any new browser session: complete <Link to="/13lgame-register" className="text-primary hover:underline">13lgame register</Link> if you do not yet have an account, or jump straight to <Link to="/13lgame-login" className="text-primary hover:underline">13lgame login</Link> if you do. From the dashboard, claim any active <Link to="/13lgame-giftcode" className="text-primary hover:underline">13lgame free giftcode</Link>, browse the full <Link to="/games" className="text-primary hover:underline">games catalogue</Link> and pick a starting title. The platform behaves identically whether you launch it from the browser address bar or from the home-screen icon — the icon is purely for convenience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <FAQSection title="13l Game Download FAQs" faqs={downloadFaqs} />
    </div>
  );
}
