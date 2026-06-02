import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '@bettraction/ui';

export function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Challenge Anyone. Stake Anything. Win Everything.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          BetTraction is the most secure and transparent Web3 betting platform built on Base.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Create a Bet
          </Button>
          <Button size="lg" variant="outline">
            Explore Bets
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Secure Vault</CardTitle>
            <CardDescription>All funds are held in a secure, audited vault</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transparent</CardTitle>
            <CardDescription>Every deposit and payout is verifiable on Base</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Decentralized</CardTitle>
            <CardDescription>Built on Base for low fees and fast transactions</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
