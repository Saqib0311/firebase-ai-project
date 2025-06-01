import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="flex items-center mb-8">
        <FileText className="h-10 w-10 text-primary mr-4" />
        <h1 className="font-headline text-4xl font-bold">Terms of Service</h1>
      </div>
      
      <div className="prose prose-lg max-w-none text-foreground/90">
        <p className="lead">
          Welcome to VoteChain! These Terms of Service ("Terms") govern your access to and use of the VoteChain decentralized voting platform, including any content, functionality, and services offered on or through votechain.com (the "Site") or our related applications (collectively, the "Service").
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms or the Privacy Policy, you must not access or use the Service. We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old or the age of legal majority in your jurisdiction to use the Service. By using the Service, you represent and warrant that you meet all eligibility requirements.
        </p>

        <h2>3. Wallet Connection and User Responsibilities</h2>
        <p>
          To use certain features of the Service, you may need to connect a compatible digital wallet (e.g., MetaMask, WalletConnect). You are solely responsible for managing your wallet, private keys, and any associated funds or tokens. VoteChain does not have access to your private keys and cannot assist with wallet recovery or transaction disputes.
        </p>
        <p>
          You agree to provide accurate information when prompted by the Service, such as during any user registration process. You are responsible for all activities that occur under your connected wallet.
        </p>

        <h2>4. Use of the Service</h2>
        <p>
          You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
        </p>
        <ul>
          <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
          <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm VoteChain or users of the Service.</li>
          <li>To attempt to interfere with the proper working of the Service, including by introducing viruses, trojan horses, or other malicious code.</li>
        </ul>

        <h2>5. Intellectual Property Rights</h2>
        <p>
          The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by VoteChain, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>

        <h2>6. Disclaimers</h2>
        <p>
          THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. VOTECHAIN HEREBY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
        </p>
        <p>
          VoteChain makes no warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the Service. We do not guarantee that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL VOTECHAIN, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          All matters relating to the Service and these Terms, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of [Your Jurisdiction] without giving effect to any choice or conflict of law provision or rule.
        </p>

        <h2>9. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at legal@votechain.com.
        </p>
        
        <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
      </div>
    </div>
  );
}
