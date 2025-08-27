import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Defense Squad AI",
    "one_liner": "An AI-powered detective for smart contracts that flags potential vulnerabilities as if they were crimes.",
    "why_now": "With increasing hacks in the DeFi space, a proactive rather than reactive security approach is essential.",
    "novel_mechanism": "Utilizes natural language processing to understand and analyze the intent behind contract code.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Agents"
    ],
    "edge_use_cases": [
      "Auditing grant applications in blockchain projects",
      "Detecting insider threats from contract code comments"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "AI contract analysis",
        "Vulnerability reporting",
        "User-friendly dashboard"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Twilio"
      ],
      "data_bootstrap": [
        "use testnet smart contracts",
        "public GitHub repositories",
        "synthetic data via LLM"
      ],
      "risk": [
        "interpretation errors",
        "user misalignment"
      ],
      "mitigation": [
        "user feedback loop",
        "iterative release with user testing"
      ]
    },
    "go_to_market": {
      "hooks": [
        "data breach examples",
        "live demo showing auto-fixing capabilities"
      ],
      "channels": [
        "ProductHunt",
        "X",
        "Reddit"
      ],
      "pricing": {
        "free": "Basic performance reports",
        "pro": "$29/month for detailed audits",
        "business": "$99/month with team access"
      }
    },
    "moat": [
      "community contribution for issue reporting",
      "increasing accuracy through user data",
      "subscription model for continuous updates"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "This idea combines multiple layers of user engagement with AI-driven audits, creating a compelling product that elevates traditional auditing by focusing on user interface and proactivity."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}