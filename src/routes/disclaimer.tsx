import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "../components/AnimatedSection";
import { FAQSection } from "../components/FAQSection";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — 13L Game | Important Information" },
      { name: "description", content: "Read the 13L Game disclaimer. Important information about the platform, responsible gaming, and user responsibilities." },
      { property: "og:title", content: "Disclaimer — 13L Game" },
      { property: "og:description", content: "Important disclaimer and responsible gaming information for 13L Game." },
      { name: "keywords", content: "13l game disclaimer, 13l game responsible gaming" },
    ],
  }),
  component: DisclaimerPage,
});

const sections = [
  { title: "General Disclaimer", content: "This website is an informational and promotional resource for 13L Game, the online gaming platform accessible at 13l.video. The content provided on this website is for general information purposes only and is designed to help users learn about the 13L Game platform, its features, available games, and how to register, login, and play. While we strive to keep all information accurate, complete, and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. The information on this site may be updated or changed without prior notice. We recommend always checking the official 13L Game platform at 13l.video for the most current information regarding games, promotions, gift codes, and platform features." },
  { title: "Gaming Risk Acknowledgment", content: "Online gaming on 13L Game involves financial risk, and it is essential that all players understand and accept this risk before participating. While many players enjoy consistent winnings on 13L Game, outcomes are determined by certified Random Number Generators and cannot be guaranteed or predicted with certainty. Players should only play with money they can afford to lose without affecting their financial well-being, daily living expenses, or essential obligations. Past performance in any game — whether WinGo, Aviator, Mines, Limbo, K3, or any other title — does not guarantee or indicate future results. Each game round is an independent event with its own odds. 13L Game strongly encourages all players to approach gaming as a form of entertainment, not as a financial strategy or investment vehicle." },
  { title: "Responsible Gaming Commitment", content: "13L Game is deeply committed to promoting responsible gaming practices across our entire community. We believe that gaming should enhance your leisure time, not detract from other aspects of your life. We encourage all 13L Game players to adhere to the following responsible gaming guidelines: Set clear personal limits on both deposits and playing time before each gaming session. Never deposit more than you can comfortably afford to lose. Take regular breaks from gaming — continuous play over extended periods can impair judgment and reduce enjoyment. Never chase losses by increasing bets or making impulsive decisions after a losing streak. Recognize the signs of problem gaming, such as spending more time or money than intended, neglecting responsibilities, or feeling anxious about gaming outcomes. If gaming stops being fun or begins negatively affecting your life, finances, or relationships, seek help immediately. Gaming is entertainment — approach it with that mindset always." },
  { title: "Age Restriction", content: "13L Game is strictly for adults aged 18 years and above. It is absolutely prohibited for minors to access, register on, or use the 13L Game platform in any capacity. By accessing this website and the 13L Game platform, you confirm that you are at least 18 years old or have reached the legal age of majority in your jurisdiction. It is the sole responsibility of users to ensure they comply with age restrictions and all local regulations regarding online gaming in their area. Parents and guardians are encouraged to use parental control software and monitor their children's internet activity to prevent access to age-restricted platforms like 13L Game. Accounts found to belong to underage individuals will be immediately terminated." },
  { title: "Third-Party Links and Content", content: "This website and the 13L Game platform may contain links to third-party websites, services, or content, including but not limited to our official Telegram community groups (t.me/officiall13lgames and t.me/veeranjan_solutions), payment processor websites, and game provider websites. These links are provided for convenience and informational purposes only. 13L Game is not responsible for the content, privacy practices, security measures, or actions of any third-party websites or services. The inclusion of any link does not imply endorsement, approval, or control by 13L Game of the linked site. We encourage users to read the privacy policies and terms of service of any third-party sites they visit. Interactions with third-party services are solely between you and the third party." },
  { title: "Prediction Group Disclaimer", content: "The 13L Game prediction Telegram group (t.me/officiall13lgames) is a community-driven forum where members share game tips, strategies, predictions, and 13L Game free gift codes. It is critically important to understand that all predictions, tips, and strategies shared in this group are generated by community members based on their personal experiences and analysis. They are NOT guaranteed outcomes, NOT financial advice, and NOT official recommendations from 13L Game. Users who follow predictions do so entirely at their own risk and discretion. No community member, group admin, or any other person can guarantee winning outcomes on any game. The prediction group is intended for entertainment, community building, and information sharing purposes only." },
  { title: "Accuracy of Gift Code Information", content: "While we make every effort to ensure the accuracy and timeliness of information about 13L Game gift codes, bonuses, and promotional offers published on this website and in our Telegram communities, these details may change without prior notice at the sole discretion of 13L Game management. Gift code values, availability, expiration dates, and terms may vary. Always verify current offers, 13lgame gift codes, and promotion details on the official 13L Game platform at 13l.video before making any decisions based on information found elsewhere. Expired, invalid, or fully redeemed codes cannot be honored regardless of where they were originally published." },
  { title: "No Financial or Investment Advice", content: "Nothing on this website, in our Telegram communities, or on the 13L Game platform constitutes financial, investment, or gambling advice. All content is provided for informational and entertainment purposes only. Players should make their own informed, independent decisions about gaming on 13L Game. We strongly recommend consulting with qualified financial professionals if you have concerns about the financial aspects of online gaming. 13L Game and its operators, including Veeranjan Solution, accept no responsibility for financial decisions made based on information published on this website or in our community channels. Each player is solely responsible for managing their gaming activity, budget, and financial well-being." },
  { title: "Service Availability", content: "13L Game strives to maintain continuous platform availability, but we do not guarantee uninterrupted access. The platform may experience temporary downtime due to scheduled maintenance and updates, technical issues or server problems, internet connectivity issues beyond our control, force majeure events, or third-party service provider outages. 13L Game is not liable for any losses or inconvenience resulting from platform unavailability. We recommend players do not rely on platform availability for time-sensitive financial decisions." },
  { title: "Limitation of Liability", content: "To the maximum extent permitted by applicable law, 13L Game, its operators (Veeranjan Solution), affiliates, directors, employees, and agents shall not be held liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from or related to your use of this website, the 13L Game platform, or the information provided herein. This includes, without limitation, damages for loss of profits, data, goodwill, or other intangible losses, even if we have been advised of the possibility of such damages. By using 13L Game, you agree that your sole remedy for dissatisfaction with the platform or its services is to discontinue use." },
];

const disclaimerFaqs = [
  { question: "Is 13L Game responsible for my gaming losses?", answer: "No. All gaming on 13L Game involves inherent financial risk, and players participate at their own discretion. 13L Game provides fair, certified games but cannot guarantee winning outcomes. Players are solely responsible for their gaming decisions and financial management." },
  { question: "Are the predictions in the Telegram group guaranteed?", answer: "No. Predictions shared in the 13L Game Telegram group are community-generated tips, not guaranteed outcomes. They are based on personal analysis and experience. Always make your own informed decisions and never stake more than you can afford to lose." },
  { question: "Is information on this website always current?", answer: "We strive to keep all information accurate and up-to-date, but gift codes, promotions, and platform features may change without notice. Always verify current details on the official 13L Game platform at 13l.video." },
  { question: "Who operates 13L Game?", answer: "This website and the 13L Game promotional content are produced by Veeranjan Solution. For any inquiries, you can reach the team via Telegram at t.me/veeranjan_solutions." },
];

function DisclaimerPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <section className="py-16 px-4" style={{ background: "var(--gradient-hero)" }}>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Disclaimer</h1>
          <p className="mt-3 text-muted-foreground">Last updated: April 2026</p>
          <div className="section-divider mt-4" />
        </AnimatedSection>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 0.05}>
              <div className="gaming-card">
                <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <FAQSection title="Disclaimer — FAQ" subtitle="Common questions about the 13L Game disclaimer and responsible gaming." faqs={disclaimerFaqs} />
    </div>
  );
}
